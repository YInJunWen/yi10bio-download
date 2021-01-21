// import CallApp from 'callapp-lib'
import './rem'
import './disabledTouchMove'
import './disabledWeChatFontZoom'
import './onRotate'

const btnGroup = document.getElementsByClassName('btnGroup')[0]

btnGroup.addEventListener('touchend', handlerDownload)

function handlerDownload() {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 判断是否是 android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 判断是否是 iOS终端
  if (isAndroid) {
    window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.yishibio.ysproject'
  } else if (isIOS) {
    window.location.href = 'https://apps.apple.com/app/id1535429810'
  } else {
    window.alert('非移动设备')
  }
}
