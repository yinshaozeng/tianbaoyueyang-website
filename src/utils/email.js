/**
 * 邮件发送工具
 * 使用 EmailJS 服务发送邮件
 */

import emailjs from '@emailjs/browser'

/**
 * 初始化 EmailJS
 * 在应用启动时调用一次
 */
export function initEmailJS() {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (publicKey) {
    emailjs.init(publicKey)
    console.log('EmailJS 初始化成功')
  } else {
    console.warn('EmailJS Public Key 未配置')
  }
}

/**
 * 发送邮件
 * @param {Object} formData - 表单数据
 * @param {string} formData.firstName - 名字
 * @param {string} formData.lastName - 姓氏
 * @param {string} formData.company - 公司名称
 * @param {string} formData.email - 发送者邮箱
 * @param {string} formData.countryCode - 国家代码
 * @param {string} formData.phone - 电话号码
 * @param {string} formData.subject - 邮件主题
 * @param {string} formData.message - 邮件内容
 * @returns {Promise} 返回Promise对象
 */
export async function sendEmail(formData) {
  // 获取环境变量配置
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  // 检查配置是否完整
  if (!serviceId || !templateId) {
    throw new Error('EmailJS 配置不完整，请检查环境变量')
  }

  try {
    // 发送邮件
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        first_name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        from_email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        subject: formData.subject,
        message: formData.message,
        to_name: '管理员'
      }
    )

    console.log('邮件发送成功:', response)
    return {
      success: true,
      message: '邮件发送成功'
    }
  } catch (error) {
    console.error('邮件发送失败:', error)
    return {
      success: false,
      message: '邮件发送失败，请稍后重试',
      error
    }
  }
}

/**
 * 验证邮箱格式
 * @param {string} email - 邮箱地址
 * @returns {boolean} 是否有效
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 验证表单数据
 * @param {Object} formData - 表单数据
 * @returns {Object} 验证结果
 */
export function validateForm(formData) {
  const errors = {}

  // 验证名字
  if (!formData.firstName || formData.firstName.trim().length === 0) {
    errors.firstName = '请输入名字'
  }

  // 验证姓氏
  if (!formData.lastName || formData.lastName.trim().length === 0) {
    errors.lastName = '请输入姓氏'
  }

  // 验证公司名称 - 必填
  if (!formData.company || formData.company.trim().length === 0) {
    errors.company = '请输入公司名称'
  }

  // 验证邮箱
  if (!formData.email || formData.email.trim().length === 0) {
    errors.email = '请输入邮箱'
  } else if (!isValidEmail(formData.email)) {
    errors.email = '请输入有效的邮箱地址'
  }

  // 验证电话
  if (!formData.phone || formData.phone.trim().length === 0) {
    errors.phone = '请输入电话号码'
  }

  // 主题 - 非必填，不验证

  // 留言 - 非必填，不验证

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
