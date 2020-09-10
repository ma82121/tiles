import Board from './Board'

export default class MakingBoard extends Board {
  constructor() {
    super()
    this.answer = []
    this.isFormed = false
    this.step = 1
  }

  /**
   * タイルをクリックした時(MakingBoard用)
   * @param {Number} tileIndex
   * @param {Boolean} reverse - 表面タップ時に裏面タップ時の結果を返す。問題生成などで使用
   */
  clickTile(tileIndex, reverse = false) {
    if (this.step === 1) {
      this.changeTile(this.tiles, tileIndex)
      return
    }
    // 不要なログの削除
    this.logs.length = this.count
    // 不要なanswerの削除
    this.answer.length = this.count
    // カウント
    this.count++
    // タイル裏返す
    this.tileOverTurn(tileIndex, reverse)
    // log追加
    this.logs.push(JSON.parse(JSON.stringify(this.tiles)))
    // answer追加
    this.answer.push(tileIndex)
    // クリアチェック
    this.isClear = this.clearCheck()
    // 問題成立チェック
    this.isFormed = this.formedCheck()
  }

  /**
   * changeStep
   * stepを配置モードから、反転モードに変更
   * @return {boolean}
   */
  changeStep() {
    if (this.step === 1) {
      this.step++
      this.fillTiles({
        tiles: this.tiles,
        isOpen: true
      })
    }
  }

  /**
   * formedCheck
   * 問題が成立しているか
   * @return {boolean}
   */
  formedCheck() {
    // tileが必要数敷き詰められていること
    if (this.tiles.length !== this.SIZE) {
      return false
    }
    // クリアしていないこと
    if (this.isClear) {
      return false
    }
    // 白/緑、白/赤、白/黄タイルは裏面であること
    return !this.tiles.some(tile => {
      return (
        (tile.type === '2' || tile.type === '3' || tile.type === '4') &&
        tile.isOpen
      )
    })
  }
}
