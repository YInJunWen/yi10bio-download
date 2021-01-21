const direction = window.matchMedia('(orientation: portrait)')
const parcel = document.getElementById('parcel')
const tips = document.getElementById('tips')
function onMatchMeidaChange(direction) {
  if (direction.matches) {
    // 竖屏
    parcel.style.display = 'block'
    tips.style.display = 'none'
  } else {
    // 横屏
    parcel.style.display = 'none'
    tips.style.display = 'block'
  }
}
direction.addListener(onMatchMeidaChange)

// 初始化执行一次 否则第一次如果是横屏就有问题
onMatchMeidaChange(direction)
