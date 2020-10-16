;(function (doc, win) {
  let docEl = win.document.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let refreshRem = function () {
    let clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth
    if (!clientWidth) return

    if (document.body.ontouchstart !== undefined) {
      const isPad = new RegExp(/ipad/i).test(navigator.userAgent.toLowerCase())
      // mobile
      docEl.style.fontSize = isPad ? '50px' : 100 * (clientWidth / 750) + 'px'
      // 判断是否是iPad
      if (isPad) {
        document.getElementById('app').style.cssText = `max-width: 375px;max-height: 667px;transform: scale(1.5);`
      }
    } else {
      if (clientWidth >= 375) {
        docEl.style.fontSize = '50px'
        document.getElementById('app').style.cssText = `max-width: 375px;max-height: 667px;`
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
      }
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, refreshRem, false)
  doc.addEventListener('DOMContentLoaded', refreshRem, false)
  refreshRem()
})(document, window)
