/**
 * 一些检验有效值的工具函数
 */

/**
 * 检验是否为有效输入值
 * @param {String} val 要检验的值
 * @param {Boolean|String} showToast 是否throw检验结果 && throw title
 */
export function hasValue (val, showToast) {
  if (!val) {
    // if (showToast) { toast(`${showToast}不能为空`) }
    return false
  }
  const reg = /\S/g;
  const result = reg.test(val);
  // if (showToast) { toast(`${showToast}不能为空`) }
  return result
}
/**
 * 检验手机号是否合法（以1开头，11位。如需深层次校验，留给服务端，避免新格式需要发版解决）
 * @param {String} val 手机号
 * @param {Boolean} showToast 是否throw结果
 */
export function isTel (val, showToast) {
  const reg = /^1[0-9]{10}$/;
  const result = reg.test(val);
  if (!result && showToast) {
    // toast(`手机号码不合法`)
  }
  return result
}
/*校验邮件地址是否合法 */
export function IsEmail(str) {
   var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
   return reg.test(str);
}

export default {
  hasValue,
  isTel,
  IsEmail,
}