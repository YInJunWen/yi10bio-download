;(function (doc, win) {
  let docEl = win.document.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let refreshRem = function () {
    let clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    // docEl.style.fontSize = clientWidth >= 375 ? '50px' : 100 * (clientWidth / 750) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, refreshRem, false)
  doc.addEventListener('DOMContentLoaded', refreshRem, false)
  refreshRem()
})(document, window)
