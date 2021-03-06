[トップページに戻る](README.ja.md)

# [FTKR_CSS_BattleStatus](FTKR_CSS_BattleStatus.js) プラグイン

アクターのバトル画面のステータス表示を変更するプラグインです。<br>
本プラグインは、[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.ja.md)の拡張プラグインです。

ダウンロード: [FTKR_CSS_BattleStatus.js](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_BattleStatus.js)

## 目次

以下の項目の順でプラグインの使い方を説明します。
1. [概要](#概要)
2. [プラグインの登録](#プラグインの登録)
3. [レイアウト設定](#レイアウト設定)
4. [ウィンドウの設定](#詳細ステータス画面の設定)
    1. [プラグインパラメータの設定](#プラグインパラメータの設定)
    2. [ウィンドウ設定における補足](#ウィンドウ設定における補足)
* [プラグインの更新履歴](#プラグインの更新履歴)
* [ライセンス](#ライセンス)

## 概要

本プラグインを実装することで、バトル画面で表示するアクターのステータス表示のレイアウトを変更できます。

![画像](image/FTKR_CSS_BattleStatus/n01_001.png)

[目次に戻る](#目次)

## プラグインの登録

本プラグインを使用するためには、[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js)の事前登録が必要です。
プラグイン管理画面で、以下の順の配置になるように登録してください。
```
FTKR_CustomSimpleActorStatus.js
FTKR_CSS_BattleStatus.js
```
![画像](image/FTKR_CSS_BattleStatus/n02_001.png)

[目次に戻る](#目次)

## レイアウト設定

本プラグインのステータス画面のレイアウト設定方法は、[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js)と同じです。
プラグインパラメータ名も同じものを使用しています。

設定方法については、FTKR_CustomSimpleActorStatusの[マニュアル](#FTKR_CustomSimpleActorStatus.ja.md)を参照してください。

[目次に戻る](#目次)

## ウィンドウの設定
## プラグインパラメータの設定
以下のプラグインパラメータで設定できます。

### 縦の行数
`Number Visible Rows`

ステータスウィンドウの縦の行数を変更します。
デフォルトは4行です。
この値を変えても、コマンドウィンドウのサイズは変わりません。

### アクターを横に並べる数
`Number Max Cols`

ウィンドウ内でアクターを横に並べる数を変更します。
デフォルトは 1 です。

### カーソル高さの行数
`Cursol Line Number`

カーソルの高さを何行分にするか設定します。
デフォルトは 1 です。

### フォントサイズ
`Font Size`

ウィンドウ内のフォントサイズを変更します。
デフォルトは 28 です。(単位はpixel)

### 余白サイズ
`Window Padding`

ウィンドウの周囲の余白を変更します。
デフォルトは 18 です。(単位はpixel)

### 行の高さ
`Window Line Height`

ウィンドウ内の1行の高さを変更します。
デフォルトは 36 です。(単位はpixel)

### 背景の透明度
`Window Opacity`

ウィンドウ内の背景の透明度を変更します。
デフォルトは 192 です。
0 - 透明、255 - 不透明

### ウィンドウ枠の非表示化
`Hide Window Frame`

ウィンドウ枠を非表示にするか指定します。
1 - 非表示にする、0 - 表示する
デフォルトは表示します。

## ウィンドウ設定における補足

### ウィンドウの高さ
ウィンドウの高さは以下の計算で自動的に設定します。
```
[ウィンドウ高さ] ＝ [縦の行数] × [1行の高さ] + [余白のサイズ] × 2
```

### フォントサイズと行の高さ
基本的に、下の大小関係になるように設定しましょう。
```
フォントサイズ ＜ 1行の高さ
```

### ウィンドウを消す方法
以下の設定にすると、ウィンドウ枠とウィンドウの背景が消えて、アクターのステータスだけを表示します。

`Window Opacity`     : 0 <br>
`Hide Window Frame`  : 1

[目次に戻る](#目次)

## プラグインの更新履歴

| バージョン | 公開日 | 更新内容 |
| --- | --- | --- |
| [ver1.0.1](FTKR_CSS_BattleStatus.js) | 2017/04/12 | ウィンドウの余白と1行の高さ、透明度、枠の表示を変更する機能を追加 |
| ver1.0.0 | 2017/04/11 | 初版作成 |

## ライセンス

本プラグインはMITライセンスのもとで公開しています。

[The MIT License (MIT)](https://opensource.org/licenses/mit-license.php)

#
[目次に戻る](#目次)

[トップページに戻る](README.ja.md)