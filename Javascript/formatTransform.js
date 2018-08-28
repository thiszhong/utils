/**
 * 一些数据格式转换的工具函数
 */

 /**
* 将url的所有参数输出为一个对象
* @param {String} url decode之后的url
*/
 export const urlToObj = function (url) {
  let obj = {};
  let arr;
  let paramPart;
  if (!url || typeof url !== 'string') return obj;
  paramPart = url.indexOf('?') > -1 ? url.substring(url.indexOf('?') + 1) : url;
  arr = paramPart.split('&');
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].indexOf('=') > -1) {
      // let a = arr[i].split('=');
      // obj[a[0]] = a[1];
      arr[arr[i]] = arr[i].split('=');
      obj[arr[arr[i]][0]] = arr[arr[i]][1]
    }
  }
  return obj
 }