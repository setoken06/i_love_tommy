# react-boilerplate

## Available Scripts

```
# install module
$ yarn install

# build app
$ yarn build

# start development server
$ yarn dev

# run format by prettier
$ yarn format

# run linter
$ yarn lint
```

## overview

### Role

```
global state: context api,
style: styled-components,
routing: react-router,
type check: typescript,
```

### directory

```
src/
  index.html
  index.tsx
  components/
    common/ 抽象化されており汎用性が高いもの // eg. Button, Margin
    layout/ レイアウトに用いられるもの // eg. Header, MainContainer
    pages/ ページ単位でのコンポーネント // eg. Login, Home
    parts/ 部品となるコンポーネント // eg. HogeForm, FugaList
    provider/ contextを流すプロバイダを定義 // eg. AccountProvider, ModalProvider
  lib/
    api/ 外部APIを叩く処理 // eg. login, getArticles
    contexts/ createContextで作ったContext // eg. AccountContext
    constants/ 汎用的に用いられる値群を定義
    hooks/ custom hooksを定義
    utils/ 汎用処理
    styles/ スタイル // eg. GlobalStyle, StyleVariable

public/
  images/ 画像

```
