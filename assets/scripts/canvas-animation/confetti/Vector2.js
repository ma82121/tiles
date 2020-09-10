export default class Vector2 {
  constructor(_x, _y) {
    this.x = _x
    this.y = _y
  }

  Length() {
    return Math.sqrt(this.SqrLength())
  }

  SqrLength() {
    return this.x * this.x + this.y * this.y
  }

  Add(_vec) {
    this.x += _vec.x
    this.y += _vec.y
  }

  Sub(_vec) {
    this.x -= _vec.x
    this.y -= _vec.y
  }

  Div(_f) {
    this.x /= _f
    this.y /= _f
  }

  Mul(_f) {
    this.x *= _f
    this.y *= _f
  }

  Normalize() {
    const sqrLen = this.SqrLength()
    if (sqrLen !== 0) {
      const factor = 1.0 / Math.sqrt(sqrLen)
      this.x *= factor
      this.y *= factor
    }
  }

  Normalized() {
    const sqrLen = this.SqrLength()
    if (sqrLen !== 0) {
      const factor = 1.0 / Math.sqrt(sqrLen)
      return new Vector2(this.x * factor, this.y * factor)
    }
    return new Vector2(0, 0)
  }
}
