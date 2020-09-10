export default class Board {
  constructor() {
    this.SIZE = 25
    this.count = 0
    this.defaultTiles = []
    this.logs = []
    this.tiles = []
    this.isClear = false
  }

  /**
   * reset
   * プロパティを全てリセット
   */
  reset() {
    this.count = 0
    this.defaultTiles = []
    this.logs = []
    this.tiles = []
    this.isClear = false
  }

  /**
   * getProperties
   * プロパティを値渡しでゲット
   * @return {object}
   */
  getProperties() {
    return {
      SIZE: this.SIZE,
      count: this.count,
      defaultTiles: JSON.parse(JSON.stringify(this.defaultTiles)),
      logs: this.logs,
      tiles: this.tiles,
      isClear: this.isClear
    }
  }

  /**
   * fillTiles
   * タイルを指定した形式で埋める
   * @param params {object}
   * @param params.tiles {array} 対象のタイルがあり、表/裏のみ指定したい場合
   * @param params.type {string} タイルの種類を指定
   * @param params.isOpen {boolean} タイルの表/裏を指定
   * @return {array[0-24]}
   */
  fillTiles(
    params = {
      tiles: [],
      type: '1',
      isOpen: true
    }
  ) {
    // 対象のタイルがあり、表/裏のみ指定したい場合
    if (params.tiles) {
      this.tiles.forEach(item => {
        item.isOpen = params.isOpen
      })
      this.defaultTiles = JSON.parse(JSON.stringify(this.tiles))
      return
    }
    // それ以外
    this.tiles = new Array(this.SIZE).fill().map((_, index) => ({
      id: String(index + 1),
      index: index,
      type: params.type,
      isOpen: params.isOpen,
      lastTurnDirection: 0
    }))
    this.defaultTiles = JSON.parse(JSON.stringify(this.tiles))
  }

  /**
   * updateTiles
   * @param tiles {array} 0-24
   */
  updateTiles(tiles) {
    this.tiles = JSON.parse(JSON.stringify(tiles))
  }

  /**
   * setTiles
   * @param tiles {array} 0-24
   */
  setTiles(tiles) {
    this.tiles = JSON.parse(JSON.stringify(tiles))
    this.defaultTiles = JSON.parse(JSON.stringify(tiles))
  }

  /**
   * resetTiles
   * tilesを初期状態に戻す
   */
  resetTiles() {
    this.tiles = JSON.parse(JSON.stringify(this.defaultTiles))
  }

  /**
   * clearCheck
   * クリア確認（tileが全て表である）
   * @param {Boolean}
   */
  clearCheck() {
    return !this.tiles.some(item => {
      return !item.isOpen
    })
  }

  /**
   * 選択したタイルのtypeとisOpenを変更する
   * @param {Array} tiles
   * @param {Number} tileIndex
   * @param {Boolean} reverse - 表面タップ時に裏面タップ時の結果を返す。問題生成などで使用
   */
  changeTile(tiles, tileIndex) {
    const index = tileIndex
    if (tiles[index].type === '4') {
      tiles[index].type = '1'
      tiles[index].isOpen = true
    } else if (tiles[index].type === '1' && tiles[index].isOpen) {
      tiles[index].isOpen = false
    } else {
      tiles[index].type = String(Number(tiles[index].type) + 1)
      tiles[index].isOpen = false
    }
    return tiles
  }

  /**
   * タイルをクリックした時(Board用)
   * @param {Number} tileIndex
   * @param {Boolean} reverse - 表面タップ時に裏面タップ時の結果を返す。問題生成などで使用
   */
  clickTile(tileIndex, reverse = false) {
    // 不要なログの削除
    this.logs.length = this.count
    // カウント
    this.count++
    // タイル裏返す
    this.tileOverTurn(tileIndex, reverse)
    // log追加
    this.logs.push(JSON.parse(JSON.stringify(this.tiles)))
    // クリアチェック
    this.isClear = this.clearCheck()
  }

  /**
   * タイルを裏返す
   * @param {Number} tileIndex
   * @param {Boolean} reverse - 表面タップ時に裏面タップ時の結果を返す。問題生成などで使用
   */
  tileOverTurn(tileIndex, reverse) {
    const tile = this.tiles[tileIndex]
    if (!reverse && (tile.type === '1' || tile.isOpen)) {
      this.tileOverTurnNormal(tile)
    } else if (!reverse && tile.type === '2' && !tile.isOpen) {
      this.tileOverTurnGreen(tile)
    } else if (!reverse && tile.type === '3' && !tile.isOpen) {
      this.tileOverTurnRed(tile)
    } else if (!reverse && tile.type === '4' && !tile.isOpen) {
      this.tileOverTurnYellow(tile)
    } else if (reverse && (tile.type === '1' || !tile.isOpen)) {
      this.tileOverTurnNormal(tile)
    } else if (reverse && tile.type === '2' && tile.isOpen) {
      this.tileOverTurnGreen(tile)
    } else if (reverse && tile.type === '3' && tile.isOpen) {
      this.tileOverTurnRed(tile)
    } else if (reverse && tile.type === '4' && tile.isOpen) {
      this.tileOverTurnYellow(tile)
    }
  }

  // 白、黒をタップした時
  tileOverTurnNormal(tile) {
    const tiles = this.tiles
    const index = tile.index

    tiles[index].isOpen = !tiles[index].isOpen
    const target = [index - 5, index - 1, index + 1, index + 5]

    for (let i = 0; i < target.length; ++i) {
      if (target[i] >= 0 && target[i] <= 24) {
        if ((index % 5 === 0 && i === 1) || (index % 5 === 4 && i === 2)) {
          continue
        }
        tiles[target[i]].isOpen = !tiles[target[i]].isOpen
      }
    }
  }

  // 緑をタップした時
  tileOverTurnGreen(tile) {
    const tiles = this.tiles
    const index = tile.index
    const target = [index - 6, index - 4, index + 4, index + 6]

    for (let i = 0; i < target.length; ++i) {
      if (target[i] >= 0 && target[i] <= 24) {
        if (
          (index % 5 === 0 && (i === 0 || i === 2)) ||
          (index % 5 === 4 && (i === 1 || i === 3))
        ) {
          continue
        }
        tiles[target[i]].isOpen = !tiles[target[i]].isOpen
      }
    }
  }

  // 赤をタップした時
  tileOverTurnRed(tile) {
    const tiles = this.tiles
    const index = tile.index

    tiles[index].isOpen = !tiles[index].isOpen
    const target = [
      index - 5,
      index - 10,
      index - 15,
      index - 20,
      index - 1,
      index - 2,
      index - 3,
      index - 4,
      index + 1,
      index + 2,
      index + 3,
      index + 4,
      index + 5,
      index + 10,
      index + 15,
      index + 20
    ]

    for (let i = 0; i < target.length; ++i) {
      if (target[i] >= 0 && target[i] <= 24) {
        if (
          (index % 5 === 0 && (i >= 4 && i <= 7)) ||
          (index % 5 === 1 && ((i >= 5 && i <= 7) || i === 11)) ||
          (index % 5 === 2 && ((i >= 6 && i <= 7) || (i >= 10 && i <= 11))) ||
          (index % 5 === 3 && (i === 7 || (i >= 9 && i <= 11))) ||
          (index % 5 === 4 && (i >= 8 && i <= 11))
        ) {
          continue
        }
        tiles[target[i]].isOpen = !tiles[target[i]].isOpen
      }
    }
  }

  // 黄をタップした時
  tileOverTurnYellow(tile) {
    const tiles = this.tiles
    for (let i = 0; i < 25; ++i) {
      tiles[i].isOpen = !tiles[i].isOpen
    }
  }

  /**
   * hasPrev
   * 一手前に戻れるか
   * @param {boolean}
   */
  hasPrev() {
    if (this.count === 0) {
      return false
    }
    return true
  }

  /**
   * hasPrev
   * 一手前に進めるか
   * @param {boolean}
   */
  hasNext() {
    if (this.count === this.logs.length) {
      return false
    }
    return true
  }

  /**
   * prev
   * 一手前に戻る
   */
  prev() {
    if (!this.hasPrev()) {
      return
    }
    this.count--
    if (this.count === 0) {
      this.resetTiles()
    } else {
      this.updateTiles(JSON.parse(JSON.stringify(this.logs[this.count - 1])))
    }
  }

  /**
   * retry
   * 最初からやり直し
   */
  retry() {
    this.count = 0
    this.logs = []
    this.resetTiles()
  }

  /**
   * next
   * 一手前に進める
   */
  next() {
    if (!this.hasNext()) {
      return
    }
    this.count++
    this.updateTiles(JSON.parse(JSON.stringify(this.logs[this.count - 1])))
  }
}
