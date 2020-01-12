import * as dataSet from './old-data.json'

const json = {
    "1578151801": {
        "device": "access point",
        "device-id": "ap1-1",
        "event": "new client",
        "guest-id": "Veronica"
    },
    "1578151802": {
        "device": "access point",
        "device-id": "ap1-1",
        "event": "new client",
        "guest-id": "Jason"
    }
  }

function jsonParser(json){
  var val = [];
  const p = JSON.parse(JSON.stringify(json))
  val = Object.values(json)
  /*
  for (let [key, value] of Object.entries(p)) {
    val.push(value)
  }
  */
  return val
}

function fulldataParser(json){
  console.log(typeof json)
  var val = [];
  const p = JSON.parse(JSON.stringify(json))
  for (let [key, value] of Object.entries(p)) {
    value.time = key
    val.push(value)
  }

  return val
}

function getEventWith (events, key, value){
   var eventsToReturn = []
   for (const e of events){
     if (e[key] === value){
       eventsToReturn.push(e)
     }
   }
   return eventsToReturn
 }
 const events = fulldataParser(dataSet)
 const eventslength = events.length

 const Alok = getEventWith(events,'guest-id','Alok')
 const Dave = getEventWith(events,'guest-id','Dave')
 const Eugene = getEventWith(events,'guest-id','Eugene')
 const Harrison = getEventWith(events,'guest-id','Harrison')
 const James = getEventWith(events,'guest-id','James')
 const Jason = getEventWith(events,'guest-id','Jason')
 const Kristina = getEventWith(events,'guest-id','Kristina')
 const MarcAndre = getEventWith(events,'guest-id','Marc-Andre')
 const Rob = getEventWith(events,'guest-id','Rob')
 const Salina = getEventWith(events,'guest-id','Salina')
 const Thomas = getEventWith(events,'guest-id','Thomas')
 const Veronica = getEventWith(events,'guest-id','Veronica' )
 const unknown = getEventWith(events,'guest-id','n/a' )
 const unknownLength = unknown.length
 const everyoneTimeLine = {
     "Alok": Alok,
     "Dave": Dave,
     "Eugene": Eugene,
     "Harrison": Harrison,
     "James": James,
     "Jason": Jason,
     "Kristina": Kristina,
     "MarcAndre": MarcAndre,
     "Rob": Rob,
     "Salina": Salina,
     "Thomas": Thomas,
     "Veronica": Veronica,
   }
const length = everyoneTimeLine.length
 function isFloorChange(event1, event2){
    var obj = []
    if((event1['device-id'].slice(0,3)==="ap1" &&event2['device-id'].slice(0,3)==="ap2")
       ||(event1['device-id'].slice(0,3)==="ap1" &&event2['device-id'].slice(0,1)==="2")
       ||(event1['device-id'].slice(0,3)==="ap2" &&event2['device-id'].slice(0,3)==="ap1")
       ||(event1['device-id'].slice(0,3)==="ap2" &&event2['device-id'].slice(0,1)==="1")
       ||(event1['device-id'].slice(0,1)==="1" &&event2['device-id'].slice(0,1)==="2")
       ||(event1['device-id'].slice(0,1)==="1" &&event2['device-id'].slice(0,3)==="ap2")
       ||(event1['device-id'].slice(0,1)==="2" &&event2['device-id'].slice(0,3)==="ap1")
       ||(event1['device-id'].slice(0,1)==="2" &&event2['device-id'].slice(0,1)==="1")){
         obj["guest-id"]=event1["guest-id"]
         if(event1['device-id'] < event2['device-id']){
           obj["time-start"] = event1["time"]
           obj["time-end"] = event2["time"]
         }else{
           obj["time-start"] = event2["time"]
           obj["time-end"] = event1["time"]
         }
         return obj
       }
    return false
  }

function getFloorChange(personalTimeLine){
  var floorChanges = []
  for(let i = 0; i < personalTimeLine.length-1; i++){
    const a = isFloorChange(personalTimeLine[i],personalTimeLine[i+1])
    // ?????????????????
    if (a === false){}
    else {floorChanges.push(a)}
  }
  return floorChanges
}

function getEveryoneFloorChanged(everyone){
  var everyFloorchanged = []
  for (let key in everyone) {
    const a = getFloorChange(everyone[key])
    everyFloorchanged = everyFloorchanged.concat(a)
  }
  return everyFloorchanged
}
//console.log(getFloorChange(personTimeline))
// console.log(personTimeline)
const noname = getEventWith(events,'guest-id','n/a' )

function getEvelatorAndStair (events){
  var values = []
  for (const e of events){
    if (e['device-id'] === 'elevator' || e['device-id'] === 'stairwell'){
      values.push(e)
    }
  }
  return values
}
console.log(getEveryoneFloorChanged(everyoneTimeLine))
const everyoneTimeData = getEveryoneFloorChanged(everyoneTimeLine) //everyone's timeline, object list

// sorting by time-start
function compare (a,b){
  if(a["time-start"] < b["time-start"]){return -1}
  if(a["time-start"] > b["time-start"]){return 1}
  return 0
}
const sortedEveryoneTimeData=everyoneTimeData.sort(compare)
console.log("!".repeat(50))
// console.log(sortedEveryoneTimeData)
console.log("-".repeat(50))
// console.log(unknown)

console.log(sortedEveryoneTimeData[0])
console.log(unknown[0])

function assignUnknown(sortedEveryoneTimeData,unknown){
  let nameChanged = []
  for (let ele of sortedEveryoneTimeData) {
    const start = ele['time-start']
    const end = ele['time-end']
    let counter = 0
    let tmpUnknown

    for (let e of unknown) {
      if (counter > 1) {
        break
      }
      const unknownTime = e.time
      if (unknownTime > start && unknownTime  < end) {
        counter++;
        if (counter === 1) {
          tmpUnknown = e
        }
      }
    }

    if (counter === 1) {
      tmpUnknown['guest-id'] = ele['guest-id']
      if(tmpUnknown.hasOwnProperty('nameLinkedCounter')){
          tmpUnknown['nameLinkedCounter'] = tmpUnknown['nameLinkedCounter']+ 1
      }else {
        tmpUnknown['nameLinkedCounter'] =1
      }
    }
  }
  nameChanged = unknown
  return nameChanged
}
function signedData(editedUnknown){
  const newData = []
  for (let e of editedUnknown){
    const name = e['guest-id']
    const counter = e['nameLinkedCounter']
    if(name !== "n/a" && e['nameLinkedCounter'] ===1){
      newData.push(e)
    }
  }
  return newData

}
console.log("?".repeat(50))
const unKnownAssigned = assignUnknown(sortedEveryoneTimeData,unknown)
console.log(unKnownAssigned)
console.log("@".repeat(50))
//console.log(everyoneTimeLine);
console.log(length);

console.log("total data length "+ eventslength)
console.log("total known length before"+(eventslength-unknownLength));
console.log("total unknown length before "+unknownLength);

const newData = signedData(unKnownAssigned)
const newDataLength = newData.length
console.log("new assigned data length"+newDataLength);
console.log("total known length after"+(eventslength-unknownLength+newDataLength));
console.log("total unknown length after "+(unknownLength-newDataLength));

console.log(newData);
function get210Act(events){
    var activities = getEventWith(events, 'device-id', '210')
    return(activities)
}
function analysisActInRoom(events){
    var peopleInroom = []
    var peopleRecord = []
    for (const e of events){
        const name = e['guest-id']
        const time = e['time']
        if (e['event'] === 'door closed'){
            if (peopleInroom.includes(name)){ // go out of room
                peopleInroom = peopleInroom.filter(item => item !== name)
                peopleRecord.push({'guest-id': name, time: time, action: 'out'})
            }else{// go in
                peopleInroom.push(name)
                peopleRecord.push({'guest-id': name, time: time, action: 'in'})
            }
        }
    }
    return peopleRecord
}
function calculateTime(record, lastTime){
    var recordOfEach = []
    const numberOfPeople = calculateNumberOfPeople(record)
    var totals = []
    for (const name of numberOfPeople){
        var person = []
        for (const e of record){
            if (e['guest-id'] === name){
                person.push(e)
            }
        }
        recordOfEach.push(person)
    }
    for (const person of recordOfEach){
        var time = 0
        var total = 0
        for (const e of person){
            if (e.action === 'in'){
                time = e.time
            }else{
                total += e.time - time
                time = 0
            }
        }
        if (time !== 0){
            total += (lastTime - time)
        }
        totals.push(total)
    }
    var result = []
    for (const number in totals){
        result.push({name : numberOfPeople[number], totalTimeInRoom: totals[number]})
    }
    return result
}
function calculateNumberOfPeople(record){
    var people = []
    for (const person of record){
        if (people.includes(person['guest-id'])){
        }else {
            people.push(person['guest-id'])
        }
    }
    return people
}
const record = analysisActInRoom(get210Act(events))
console.log(calculateTime(record, 1578236760))
