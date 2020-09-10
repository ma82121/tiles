import Vector2 from '@/assets/scripts/canvas-animation/confetti/Vector2'

const DEG_TO_RAD = Math.PI / 180
const colors = [
  ['#df0049', '#660671'],
  ['#00e857', '#005291'],
  ['#2bebbc', '#05798a'],
  ['#ffd200', '#b06c00']
]
export default class ConfettiPaper {
  constructor(_x, _y) {
    this.pos = new Vector2(_x, _y)
    this.rotationSpeed = Math.random() * 600 + 800
    this.angle = DEG_TO_RAD * Math.random() * 360
    this.rotation = DEG_TO_RAD * Math.random() * 360
    this.cosA = 1.0
    this.size = 5.0
    this.oscillationSpeed = Math.random() * 1.5 + 0.5
    this.xSpeed = 40.0
    this.ySpeed = Math.random() * 60 + 50.0
    this.corners = []
    this.time = Math.random()
    const ci = Math.round(Math.random() * (colors.length - 1))
    this.frontColor = colors[ci][0]
    this.backColor = colors[ci][1]

    this.init()
  }

  init() {
    for (let i = 0; i < 4; i++) {
      const dx = Math.cos(this.angle + DEG_TO_RAD * (i * 90 + 45))
      const dy = Math.sin(this.angle + DEG_TO_RAD * (i * 90 + 45))
      this.corners[i] = new Vector2(dx, dy)
    }
  }

  Update(_dt) {
    this.time += _dt
    this.rotation += this.rotationSpeed * _dt
    this.cosA = Math.cos(DEG_TO_RAD * this.rotation)
    this.pos.x +=
      Math.cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt
    this.pos.y += this.ySpeed * _dt
    if (this.pos.y > ConfettiPaper.bounds.y) {
      this.pos.x = Math.random() * ConfettiPaper.bounds.x
      this.pos.y = 0
    }
  }

  Draw(_g) {
    if (this.cosA > 0) {
      _g.fillStyle = this.frontColor
    } else {
      _g.fillStyle = this.backColor
    }
    _g.beginPath()
    _g.moveTo(
      (this.pos.x + this.corners[0].x * this.size) * window.devicePixelRatio,
      (this.pos.y + this.corners[0].y * this.size * this.cosA) *
        window.devicePixelRatio
    )
    for (let i = 1; i < 4; i++) {
      _g.lineTo(
        (this.pos.x + this.corners[i].x * this.size) * window.devicePixelRatio,
        (this.pos.y + this.corners[i].y * this.size * this.cosA) *
          window.devicePixelRatio
      )
    }
    _g.closePath()
    _g.fill()
  }
}
