document.body.addEventListener(
  'touchmove',
  (e) => {
    e.preventDefault() //阻止默认的处理方式(阻止下拉滑动的效果)
  },
  { passive: false }
)
