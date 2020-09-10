import Vector2 from '@/assets/scripts/canvas-animation/confetti/Vector2'
import ConfettiPaper from '@/assets/scripts/canvas-animation/confetti/ConfettiPaper'

const speed = 50
const duration = 1.0 / speed
const confettiPaperCount = 95

export default class Confetti {
  constructor() {
    this.canvas = null
    this.ctx = null
    this.papers = []
  }

  init(canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    ConfettiPaper.bounds = new Vector2(this.canvas.width, this.canvas.height)
    for (let i = 0; i < confettiPaperCount; i++) {
      this.papers[i] = new ConfettiPaper(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height
      )
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < confettiPaperCount; i++) {
      this.papers[i].Update(duration)
      this.papers[i].Draw(this.ctx)
    }
  }
}
