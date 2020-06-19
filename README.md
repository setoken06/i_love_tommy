# react-boilerplate

## Available Scripts

```
# install module // 最初だけやるやつ、package.jsonを元にnode_modulesを作る
$ yarn install

# build app // デプロイする時用のやつをビルドする、多分やる事ない
$ yarn build

# start development server // ローカルサーバーがたつ
$ yarn dev

# run format by prettier // フォーマットが走る
$ yarn format

# run linter // linterが走る
$ yarn lint
```

## overview

### Role

```
global state: Context API // 多分無理だからReduxとか使えばいいと思うけど多分そもそも必要ない,
style: styled-components // css-loaderとか使えばいいと思うけど 「css-module vs css-in-js」とかで調べると良さそう,
routing: react-router // これはこれがいい,
type check: typescript // 初学者には酷なので殺した、jsxを書いて,
```

### directory

```
src/
  index.html
  index.tsx
  components/ // コンポーネント分割やってもいいけどやらなくてもいい。 /pages以外使わなくていい。
    common/ 抽象化されており汎用性が高いもの // eg. Button, Margin
    layout/ レイアウトに用いられるもの // eg. Header, MainContainer
    pages/ ページ単位でのコンポーネント // eg. Login, Home
    parts/ 部品となるコンポーネント // eg. HogeForm, FugaList
    provider/ contextを流すプロバイダを定義 // eg. AccountProvider, ModalProvider
  lib/ // これはとりあえず使わないでいいと思う
    api/ 外部APIを叩く処理 // eg. login, getArticles
    contexts/ createContextで作ったContext // eg. AccountContext
    constants/ 汎用的に用いられる値群を定義
    hooks/ custom hooksを定義
    utils/ 汎用処理
    styles/ スタイル // eg. GlobalStyle, StyleVariable

public/
  images/ 画像

```
