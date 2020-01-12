export function runPlotly() {
Plotly.d3.csv('datasets.csv', function (err, data) {
    // Create a lookup table to sort and regroup the columns of data,
    // first by year, then by suspect:

    var InitPos = {
        "Alok":{"x":100,"y":1350,"z":1},
        "Dave":{"x":200,"y":1350,"z":1},
        "Eugene":{"x":300,"y":1350,"z":1},
        "Harrison":{"x":400,"y":1350,"z":1},
        "James":{"x":500,"y":1350,"z":1},
        "Jason":{"x":600,"y":1350,"z":1},
        "Kristina":{"x":700,"y":1350,"z":1},
        "Marc-Andre":{"x":800,"y":1350,"z":1},
        "Rob":{"x":900,"y":1350,"z":1},
        "Salina":{"x":1000,"y":1350,"z":1},
        "Thomas":{"x":1100,"y":1350,"z":1},
        "Veronica":{"x":1200,"y":1350,"z":1},
        // "n/a-phone":{"x":250,"y":1450,"z":1},
        // "n/a-door":{"x":450,"y":1450,"z":1},
        // "n/a-elevator":{"x":650,"y":1450,"z":1},
        "n/a":{"x":850,"y":1450,"z":1}
    }
    let InitTraces = {}
    for (let key of Object.keys(InitPos)){
        const sizeNumber= key.indexOf("n/a")!==-1?20:50
        const symbolType= key.indexOf("n/a")!==-1?"triangle-ne":"circle"
        InitTraces[key]={
            x: [InitPos[key].x],
            y: [InitPos[key].y],
            z: [InitPos[key].z],
            id: ['init'],
            text: ['Outside'],
            marker: {
                size: [sizeNumber],
                symbol: [symbolType]
            }
        };
    }

    let time0 = data[0].year-1  //todo: -10
    var lookup = {};
    lookup[time0]=InitTraces
    // console.log(JSON.stringify(data[0])+JSON.stringify(lookup))

    function getData(year, suspect) {
        var byYear, trace;
        if (!(byYear = lookup[year])) {
            byYear = lookup[year] = {};
        }
        // If a container for this year + suspect doesn't exist yet,
        // then create one:
        // lilil
        if (!(trace = byYear[suspect])) {
            trace = byYear[suspect] = {
                x: [],
                y: [],
                z: [],
                id: [],
                text: [],
                marker: {size: []}
            };
        }
        return trace;
    }

    // Go through each row, get the right trace, and append the data:
    for (var i = 0; i < data.length; i++) {
        var datum = data[i];
        var trace = getData(datum.year, datum.suspect);
        trace.text.push(datum.device);
        trace.id.push(datum.device);
        trace.x.push(datum.CoX);
        trace.y.push(datum.CoY);
        trace.z.push(datum.CoZ*500);
        trace.marker.size.push(200);
    }

    // Get the group names:
    var years = Object.keys(lookup);
    // In this case, every year includes every suspect, so we
    // can just infer the suspects from the *first* year:
    var firstYear = lookup[years[0]];
    var suspects = Object.keys(firstYear);

    // Create the main traces, one for each suspect:
    console.log(JSON.stringify(suspects))
    var traces = [];
    for (i = 0; i < suspects.length; i++) {
        var data = firstYear[suspects[i]];
        // One small note. We're creating a single trace here, to which
        // the frames will pass data for the different years. It's
        // subtle, but to avoid data reference problems, we'll slice
        // the arrays to ensure we never write any new data into our
        // lookup table:
        traces.push({
            name: suspects[i],
            x: data.x.slice(),
            y: data.y.slice(),
            z: data.z.slice(),
            id: data.id.slice(),
            text: data.text.slice(),
            mode: 'markers',
            //Todo: uncomment this will enable 3D mode
            // type: 'scatter3d',
            marker: {
                size: data.marker.size.slice(),
                sizemode: 'area',
                sizeref: 1,//sizeref: 200000,
                // colorbar:{thicknessmode:'fraction'},
                // line:{width:2,color:'#666'}
            }
        });
    }

    // Create a frame for each year. Frames are effectively just
    // traces, except they don't need to contain the *full* trace
    // definition (for example, appearance). The frames just need
    // the parts the traces that change (here, the data).
    var frames = [];
    for (i = 0; i < years.length; i++) {
        frames.push({
            name: years[i],
            data: suspects.map(function (suspect) {
                return getData(years[i], suspect);
            })
        })
    }

    // Now create slider steps, one for each frame. The slider
    // executes a plotly.js API command (here, Plotly.animate).
    // In this example, we'll animate to one of the named frames
    // created in the above loop.
    var sliderSteps = [];
    for (i = 0; i < years.length; i++) {
        sliderSteps.push({
            method: 'animate',
            label: new Date(years[i]*1000).toLocaleTimeString(),
            args: [[years[i]], {
                mode: 'immediate',
                transition: {duration: 3},
                frame: {duration: 3, redraw: false},
            }]
        });
    }

    var layout = {
        title:'Crime Scene  - Time Recovery',
        xaxis: {
            // title: 'X coordinate',
            range: [0,1417]
        },
        yaxis: {
            // title: 'Y coordinate',
            range: [0,1500]
        },
        images: [
            {
                "source": "Floor-Plan-pdf.png",
                "xref": "xaxis",
                "yref": "yaxis",
                "x": 0,
                "y": 0,
                "opacity":0.3,
                "sizex": 1,
                "sizey": 1,
                "xanchor": "left",
                "yanchor": "bottom",
                // "sizing": "stretch",
            }],
        // scene:{
        //     xaxis:{visible:true},
        //     yaxis:{visible:true},
        //     zaxis:{visible:true},
        // },
        // zaxis: {
        //     title: 'Z coordinate',
        //     type: 'log'
        // },
        hovermode: 'closest',
        // We'll use updatemenus (whose functionality includes menus as
        // well as buttons) to create a play button and a pause button.
        // The play button works by passing `null`, which indicates that
        // Plotly should animate all frames. The pause button works by
        // passing `[null]`, which indicates we'd like to interrupt any
        // currently running animations with a new list of frames. Here
        // The new list of frames is empty, so it halts the animation.
        updatemenus: [{
            x: 0,
            y: 0,
            z: 0,
            yanchor: 'top',
            xanchor: 'left',
            zanchor: 'up',
            showactive: false,
            direction: 'left',
            type: 'buttons',
            pad: {t: 60, r: 10},
            buttons: [{
                method: 'animate',
                args: [null, {
                    mode: 'immediate',
                    fromcurrent: true,
                    transition: {duration: 300},
                    frame: {duration: 500, redraw: false}
                }],
                label: 'Play'
            }, {
                method: 'animate',
                args: [[null], {
                    mode: 'immediate',
                    transition: {duration: 0},
                    frame: {duration: 0, redraw: false}
                }],
                label: 'Pause'
            }]
        }],
        // Finally, add the slider and use `pad` to position it
        // nicely next to the buttons.
        sliders: [{
            pad: {l: 130, t: 40},
            currentvalue: {
                visible: true,
                prefix: 'Time:',
                xanchor: 'right',
                font: {size: 14, color: '#666'}
            },
            steps: sliderSteps
        }]
    };
    // layout.scene = {zaxis: {visible:true}}

    // Create the plot:
    Plotly.plot('level1', {
        data: traces,
        layout: layout,
        config: {showSendToCloud:true},
        frames: frames,
    });
});
}
