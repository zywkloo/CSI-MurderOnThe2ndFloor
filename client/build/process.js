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

/**
 *
 * @param json object
 */
function fulldataParser(json){
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


/**
 *
 * @param dataSet object
 */
const collect = async (dataSet) => {
  const events = fulldataParser(dataSet)

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
  const noname = getEventWith(events,'guest-id','n/a' )


  return result = {
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
    "noname": noname,
  }
}

module.exports = {
  collect
}