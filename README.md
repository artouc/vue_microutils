# vue_microutils

Vue.js（Nuxt3での利用を想定しています）で動作する、プロジェクトのコア機能に影響しない、小さな便利ツールを複数提供しています。

## useToolTip

### 利用方法
1. `composables`配下に`useToolTip.js`を設置します。
2. 利用したいプロジェクトに以下のコードを追記します。

```js
const { toolTipDisplayFlg, toolTipXPos, toolTipYPos, toolTipText } = useToolTip()
```
```pug
.p-tooltip(v-if="toolTipDisplayFlg" :style="{'top': toolTipYPos, 'left': toolTipXPos}") {{ toolTipText }}
```
```sass
.p-tooltip
    position: fixed
    pointer-events: none
    background-color: #fff
    padding: 8px
    border-radius: 5px
    z-index: 999
```

