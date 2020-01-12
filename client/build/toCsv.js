const CONST = require('./point.json')
const _ = require('lodash')

const toCsv = (dataSet) => {
  let result = ''
  for (let key in dataSet) {
    // console.log(key)
    // console.log(dataSet[key])
    const device = dataSet[key].device

    const deviceid = dataSet[key]['device-id']
    const guestid = dataSet[key]['guest-id']

    result += device + ","
    result += key + ","

    result += _.get(CONST,`${device}.${deviceid}.z`) + ","
    result += guestid + ","

    result += _.get(CONST,`${device}.${deviceid}.x`) + ","
    result += _.get(CONST,`${device}.${deviceid}.y`)
    result += "\n"
  }
  return result;
}

module.exports = {toCsv}