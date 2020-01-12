export function runPlotly3D() {
  Plotly.d3.csv("datasets.csv", function(err, data) {
    // Create a lookup table to sort and regroup the columns of data,
    // first by year, then by suspect:
    function unpack(data, key, guestId) {
      let returnArr = [];
      data.forEach(element => {
        if (element.suspect === guestId) returnArr.push(key==="CoY"?element[key]%690:element[key]);
      });
      return returnArr;
    }
    var InitPos = {
      Alok: { x: 100, y: 1350, z: 1 },
      Dave: { x: 200, y: 1350, z: 1 },
      Eugene: { x: 300, y: 1350, z: 1 },
      Harrison: { x: 400, y: 1350, z: 1 },
      James: { x: 500, y: 1350, z: 1 },
      Jason: { x: 600, y: 1350, z: 1 },
      Kristina: { x: 700, y: 1350, z: 1 },
      "Marc-Andre": { x: 800, y: 1350, z: 1 },
      Rob: { x: 900, y: 1350, z: 1 },
      Salina: { x: 1000, y: 1350, z: 1 },
      Thomas: { x: 1100, y: 1350, z: 1 },
      Veronica: { x: 1200, y: 1350, z: 1 }
    };
    let InitTraces = {};
    for (let key of Object.keys(InitPos)) {
      const sizeNumber = key.indexOf("n/a") !== -1 ? 10 : 50;
      InitTraces[key] = {
        x: [InitPos[key].x],
        y: [InitPos[key].y],
        z: [InitPos[key].z],
        id: ["init"],
        text: ["Outside"],
        marker: {
          size: [sizeNumber],
          symbol: "circle"
        }
      };
    }

    let time0 = data[0].year - 1;
    var lookup = {};
    lookup[time0] = InitTraces;
    // Get the group names:
    var years = Object.keys(lookup);
    // In this case, every year includes every suspect, so we
    // can just infer the suspects from the *first* year:
    var firstYear = lookup[years[0]];
    var suspects = Object.keys(firstYear);

    // Create the main traces, one for each suspect:
    var traces = [];
    for (let i = 0; i < suspects.length; i++) {
      // var data = firstYear[suspects[i]];
      // One small note. We're creating a single trace here, to which
      // the frames will pass data for the different years. It's
      // subtle, but to avoid data reference problems, we'll slice
      // the arrays to ensure we never write any new data into our
      // lookup table:
      traces.push({
        name: suspects[i],
        x: unpack(data, "CoX", suspects[i]),
        y: unpack(data, "CoY", suspects[i]),
        z: unpack(data, "CoZ", suspects[i]),
        id: unpack(data, "device", suspects[i]),
        text: unpack(data, "year", suspects[i]),
        mode: "markers",
        //Todo: uncomment this will enable 3D mode
        type: "scatter3d",
        marker: {
          size: [1000],
          sizemode: "area",
          sizeref: 1 //sizeref: 200000,
        }
      });
    }

    // Create a frame for each year. Frames are effectively just
    // traces, except they don't need to contain the *full* trace
    // definition (for example, appearance). The frames just need
    // the parts the traces that change (here, the data).

    // Now create slider steps, one for each frame. The slider
    // executes a plotly.js API command (here, Plotly.animate).
    // In this example, we'll animate to one of the named frames
    // created in the above loop.

    var layout = {
      xaxis: {
        // title: 'X coordinate',
        range: [0, 1417]
      },
      yaxis: {
        // title: 'Y coordinate',
        range: [0, 1500]
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      },
      // images: [
      //     {
      //         "source": "Floor-Plan-pdf.png",
      //         "xref": "xaxis",
      //         "yref": "yaxis",
      //         "x": 0,
      //         "y": 0,
      //         "opacity":0.5,
      //         "sizex": 1,
      //         "sizey": 1,
      //         "xanchor": "left",
      //         "yanchor": "bottom",
      //         // "sizing": "stretch",
      //     }],
      // scene:{
      //     xaxis:{visible:true},
      //     yaxis:{visible:true},
      //     zaxis:{visible:true},
      // },
      // zaxis: {
      //     title: 'Z coordinate',
      //     type: 'log'
      // },
      hovermode: "closest",
    };

    // Create the plot:
    Plotly.plot("level3D", {
      data: traces,
      layout: layout,
      config: { showSendToCloud: true }
    });
  });
}
