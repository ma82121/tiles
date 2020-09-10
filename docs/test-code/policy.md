# 方針

## 対象ファイル

全てのパターンを網羅すること

- components

snapshotのみ

- pages

## props

propsに値を渡した時にレンダリングする
該当のコンポーネントのみ

```
test('renders props.message when passed', () => {
  const message = 'こんにちは'
  const wrapper = mount(Alert, {
    propsData: {
      message
    }
  })
  const div = wrapper.find('.alert-content')
  expect(div.text()).toBe(message)
})
```

## snapshot

JestのSnapshotを使う
全てのコンポーネント

[INDEX](../index.md)
