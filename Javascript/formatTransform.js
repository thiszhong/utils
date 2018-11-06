/**
 * 一些数据格式转换的工具函数
 */

 /**
* 将url的所有参数输出为一个对象
* @param {String} url decode之后的url
*/
export const urlToObj = function (url) {
  let obj = {}
  let arr
  let paramPart
  if (!url || typeof url !== 'string') return obj
  paramPart = url.indexOf('?') > -1 ? url.substring(url.indexOf('?') + 1) : url
  arr = paramPart.split('&')
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].indexOf('=') > -1) {
      // let a = arr[i].split('=')
      // obj[a[0]] = a[1]
      arr[arr[i]] = arr[i].split('=')
      obj[arr[arr[i]][0]] = arr[arr[i]][1]
    }
  }
  return obj
 }

 /**
  * 格式：Date => 2018-10-08 11:32:00
  * @param {Date} date 需要格式化的时间
  */
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime,
  urlToObj
}