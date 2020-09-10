# 環境変数

開発用と本番用の環境変数を用意する

## 環境設定ファイルの作成

ルートディレクトリ直下に下記2ファイルを作成する

- /env.development.js 開発用
- /env.production.js 本番用

## Firebase

```
module.exports = {
  FIREBASE_CONFIG: {
    apiKey: 'xx',
    authDomain: 'xx',
    databaseURL: 'xx',
    projectId: 'xx',
    storageBucket: 'xx',
    messagingSenderId: 'xx',
    appId: 'xx'
  }
}
```

[INDEX](../index.md)
