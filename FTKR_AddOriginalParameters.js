//=======↓本プラグインを改変した場合でも、この欄は消さないでください↓===============
// オリジナルのパラメータを追加するプラグイン
// FTKR_AddOriginalParameters.js
// 作成者     : フトコロ
// 作成日     : 2017/02/16
// 最終更新日 : 2017/03/23
// バージョン : v1.1.1
//=======↑本プラグインを改変した場合でも、この欄は消さないでください↑===============

var Imported = Imported || {};
Imported.FTKR_AOP = true;

var FTKR = FTKR || {};
FTKR.AOP = FTKR.AOP || {};

//=============================================================================
/*:
 * @plugindesc v1.1.1 オリジナルのパラメータを追加するプラグイン
 * @author フトコロ
 *
 * @param Use Param Num
 * @desc 何個のオリジナルパラメータを使用するか
 * 最大10個まで設定できます
 * @default 4
 *
 * @param Max Level
 * @desc パラメータが上昇する最大のアクターレベルの設定
 * @default 99
 *
 * @param Max Param
 * @desc パラメータの最大値の設定
 * @default 999
 *
 * @param ---Parameter 0---
 * @default
 * 
 * @param Parameter 0 Code
 * @desc 計算式等で使用するコード名を設定
 * @default str
 *
 * @param Parameter 0 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 0 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 0 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 1---
 * @default
 * 
 * @param Parameter 1 Code
 * @desc 計算式等で使用するコード名を設定
 * @default vit
 *
 * @param Parameter 1 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 1 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 1 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 2---
 * @default
 * 
 * @param Parameter 2 Code
 * @desc 計算式等で使用するコード名を設定
 * @default int
 *
 * @param Parameter 2 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 2 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 2 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 3---
 * @default
 * 
 * @param Parameter 3 Code
 * @desc 計算式等で使用するコード名を設定
 * @default men
 *
 * @param Parameter 3 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 3 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 3 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 4---
 * @default
 * 
 * @param Parameter 4 Code
 * @desc 計算式等で使用するコード名を設定
 * @default 
 *
 * @param Parameter 4 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 4 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 4 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 5---
 * @default
 * 
 * @param Parameter 5 Code
 * @desc 計算式等で使用するコード名を設定
 * @default 
 *
 * @param Parameter 5 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 5 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 5 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 6---
 * @default
 * 
 * @param Parameter 6 Code
 * @desc 計算式等で使用するコード名を設定
 * @default 
 *
 * @param Parameter 6 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 6 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 6 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 7---
 * @default
 * 
 * @param Parameter 7 Code
 * @desc 計算式等で使用するコード名を設定
 * @default 
 *
 * @param Parameter 7 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 7 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 7 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 8---
 * @default
 * 
 * @param Parameter 8 Code
 * @desc 計算式等で使用するコード名を設定
 * @default 
 *
 * @param Parameter 8 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 8 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 8 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @param ---Parameter 9---
 * @default
 * 
 * @param Parameter 9 Code
 * @desc 計算式等で使用するコード名を設定
 * @default 
 *
 * @param Parameter 9 Current
 * @desc 計算式等で使用するコード名を設定(現在値)
 * 空欄の場合は、現在値を使用できません。
 * @default 
 *
 * @param Parameter 9 Max
 * @desc パラメータの最大値の設定
 * @default 
 *
 * @param Parameter 9 Min
 * @desc パラメータの最小値の設定
 * @default 
 *
 * @help 
 *-----------------------------------------------------------------------------
 * 概要
 *-----------------------------------------------------------------------------
 * ダメージの計算式に使用できる、オリジナルのパラメータを追加します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 設定方法
 *-----------------------------------------------------------------------------
 * 1. 本プラグインを、プラグイン管理に追加してください。
 * 
 * 
 *-----------------------------------------------------------------------------
 * オリジナルパラメータの設定
 *-----------------------------------------------------------------------------
 * 以下のプラグインパラメータを設定することで、ダメージ計算式に使用できる
 * オリジナルのパラメータを、1～10個(*1)まで追加できます。
 * 
 * (*1) プラグインパラメータ<Use Param Num>の値を変更することで
 *      使用する数を設定できます。
 * 
 * <Parameter x Code>
 *    :計算式等で使用するコード名を設定します。
 *
 * <Parameter x Current>
 *    :計算式等で使用する現在値用コード名を設定します。
 *
 * <Parameter x Max>
 *    :パラメータの最大値の設定します。
 *
 * <Parameter x Min>
 *    :パラメータの最小値の設定します。
 *    :現在値を使用する場合は、必ず1以上に設定してください。
 *
 * 
 * オリジナルのパラメータに対して、以下のタグを使用することができます。
 * 
 * [アクター、クラス]
 * <AOP Param x Level y Value: z (Rand r)>
 * <AOP 'code' Level y Value: z (Rand r)>
 *      :アクターのレベルが y の時のパラメータ x (または'code')の
 *      :増加量を z に設定する。
 *      :()内を追記した場合、z に対して ±r のランダム値を付加する。
 *      :y が 1 の場合は、初期値を意味します。
 * 
 * <AOP Param x Level y1 To y2 Value: z (Rand r)>
 * <AOP 'code' Level y1 To y2 Value: z (Rand r)>
 *      :アクターのレベルが y1 から y2 までの時のパラメータ x 
 *      :(または'code')の増加量を z に設定する。
 *      :()内を追記した場合、z に対して ±r のランダム値を付加する。
 * 
 * ランダム値を加算した場合に、増加量は 0 よりも小さな値になることはありません。
 * アクターとクラスの両方で設定した場合は、その合計値になります。
 * 
 * 例) Param 0 の code を str とした場合
 * <AOP Param 0 Level 1 Value: 10>
 * <AOP str Level 2 To 10 Value: 5 Rand 2>
 *      :パラメータ 0 (str)に対して、初期値を 10 として、Lv2 から Lv10 の間
 *      :レベルアップ毎に、3～7加算する。
 * 
 * 
 * [武器、防具、ステート]
 * <AOP Param x Plus: y>
 * <AOP 'code' Plus: y>
 *      :装備中、またはステート付加中、パラメータ x (または'code')に、
 *      :y 加算します。
 *      :y に負の数字を入れた場合、減算します。
 * 
 * <AOP Param x Rate: y>
 * <AOP 'code' Rate: y>
 *      :装備中、またはステート付加中、パラメータ x (または'code')を、
 *      :y 倍します。
 *      :y に負の数字を入れた場合、正の数と見なして積算します。
 *      :Plusで加算した後に、Rateの値で積算します。
 * 
 * <AOP Param x Grow: y>
 * <AOP 'code' Grow: y>
 *      :装備した状態でレベルが上がると、パラメータ x (または'code')を、
 *      :y 加算します。
 *      :この値は、装備を外しても有効です。
 *      :このタグは、ステートでは使用できません。
 * 
 * 
 * [エネミー]
 * <AOP Param x Value: y>
 * <AOP 'code' Value: y>
 *      :対象のエネミーのパラメータ x (または'code')を、y に設定します。
 * 
 * 
 * [アイテム、スキル]
 * <AOP Param x Get: y(%)>
 * <AOP 'code' Get: y(%)>
 *      :アイテムまたはスキルを使用すると、対象者のパラメータ x 
 *      :(または'code')の現在値に y 加算します。
 *      :y に負の数字を入れた場合、減算します。
 *      :y に'%'を付けた場合、パラメータ x (または'code')の最大値の
 *      :y% 分加算します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * オリジナルパラメータを使用してできること
 *-----------------------------------------------------------------------------
 * 1. オリジナルパラメータは、ダメージ計算式に使用できます。
 *    使用する場合、ダメージ計算式には、プラグインパラメータで設定した'code'を
 *    記載してください。
 * 
 *    例) パラメータ0 の code を str とした場合、以下のように書きます。
 * 
 *               4 * (a.atk + a.str) - 2 * b.def
 * 
 * 
 * 2. オリジナルパラメータは、装備条件に使用できます。
 *    以下のタグを使用することで、装備するために必要な条件に、オリジナルパラメータを
 *    使用できます。
 * 
 * [武器、防具]
 * <AOP Param x Require: y>
 *      :パラメータ x が、y 以上ないと、装備することができなくなります。
 * 
 * 
 * 3. ゲーム内で、オリジナルパラメータの値を取得できます。
 *    以下のスクリプトを使用すると、取得できます。
 * 
 *    $gameActors._data[x].aopParam(y)
 *    $gameActors._data[x].code
 *      :アクター x の パラメータ y (または'code')の値を取得します。
 *      :'code'は、プラグインパラメータで設定したコード名です。
 * 
 *    取得した値は、$gameVariables.setValue()等を使って利用してください。
 * 
 * 
 * 4. ゲーム内で、オリジナルパラメータの現在値を操作できます。
 *    以下のスクリプトを使用できます。
 * 
 *    $gameActors._data[x].setCAop(y, value)
 *      :アクター x の パラメータ y の現在値を value に変更します。
 * 
 *    $gameActors._data[x].gainCAop(y, value)
 *      :アクター x の パラメータ y の現在値を value分加算します。
 *      :value が負の値ならば、減算します。
 * 
 * 
 *-----------------------------------------------------------------------------
 * その他の設定
 *-----------------------------------------------------------------------------
 * 1. オリジナルパラメータの最大値は、プラグインパラメータ<Max Param>または、
 *    各パラメータの<Parameter x Max>の値の内、大きいほうを適用します。
 * 
 * 
 * 2. ランダム値は、ゲーム開始時にすべてのレベル帯の上昇量を決定する仕組みです。
 *    そのため、レベルアップをセーブ/ロードしたとしても、値は変わりません。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 本プラグインを使用するに当たって    ☆重要☆
 *-----------------------------------------------------------------------------
 * 1.本プラグインは改変可です。
 *   ただし、一番始めに記載した作成者等の欄は残してください。
 * 
 * 2.本プラグインを使用するに当たって、ゲーム中にライセンス表示することは
 *   必須ではありません。ただ、どこかゲーム外のReadme等にでも記載して頂けると
 *   うれしいです。
 * 
 * 3.本プラグインを使用する、または改変するに当たって、私フトコロに許可を取る
 *   ことや、連絡することは必要ありません。
 * 
 * 4.本プラグインは、有料ゲームに使用することは構いません。
 *   ただし、改変した場合でも、プラグイン単体で販売することは止めてください。
 *   
 * 5.本プラグインは、年齢制限のあるゲームに使用することは構いません。
 * 
 * 
 *-----------------------------------------------------------------------------
 * 変更来歴
 *-----------------------------------------------------------------------------
 * 
 * v1.1.1 - 2017/03/23 : 不具合修正
 *    1. <Parameter 6>以降のコードが使用できない不具合を修正。
 * 
 * v1.1.0 - 2017/03/17 : 機能追加、仕様変更
 *    1. HPやMPのように現在値と最大値を設定できる機能を追加。
 *    2. ステータス画面に表示する機能を削除。
 *    3. ノートタグにパラメータのコードを記述できるように変更。
 *    4. オリジナルパラメータを10個まで作れるように変更。
 * 
 * v1.0.1 - 2017/02/18 : プラグインパラメータ追加、不具合修正
 *    1. パラメータの最大値を、プラグインパラメータで変更できるようにした。
 *    2. definePropertiesの記述を見直し、パラメータのコードを計算式に
 *       使用した時に他の計算式を変更するプラグインと競合する不具合を修正した。
 * 
 * v1.0.0 - 2017/02/16 : 初版作成
 * 
 *-----------------------------------------------------------------------------
*/
//=============================================================================



//=============================================================================
// プラグイン パラメータ
//=============================================================================
FTKR.AOP.parameters = PluginManager.parameters('FTKR_AddOriginalParameters');

FTKR.AOP.useParamNum = Number(FTKR.AOP.parameters['Use Param Num'] || 0);
FTKR.AOP.maxLevel = Number(FTKR.AOP.parameters['Max Level'] || 0);
FTKR.AOP.maxParam = Number(FTKR.AOP.parameters['Max Param'] || 0);

FTKR.AOP.params = [
    { code:String(FTKR.AOP.parameters['Parameter 0 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 0 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 0 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 0 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 1 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 1 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 1 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 1 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 2 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 2 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 2 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 2 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 3 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 3 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 3 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 3 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 4 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 4 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 4 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 4 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 5 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 5 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 5 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 5 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 6 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 6 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 6 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 6 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 7 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 7 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 7 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 7 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 8 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 8 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 8 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 8 Min'] || 0),},
    { code:String(FTKR.AOP.parameters['Parameter 9 Code'] || ''),
      current:String(FTKR.AOP.parameters['Parameter 9 Current'] || ''),
      max:Number(FTKR.AOP.parameters['Parameter 9 Max'] || 0),
      min:Number(FTKR.AOP.parameters['Parameter 9 Min'] || 0),},
];

Game_BattlerBase.MAX_AOP_PARAMS = 10;
Game_BattlerBase.TRAIT_AOPPARAM = 99;
Game_Action.EFFECT_GET_AOP = 990;

if (FTKR.AOP.useParamNum > Game_BattlerBase.MAX_AOP_PARAMS) {
    FTKR.AOP.useParamNum = Game_BattlerBase.MAX_AOP_PARAMS;
}

//=============================================================================
// DataManager
//=============================================================================

FTKR.AOP.DatabaseLoaded = false;
FTKR.AOP.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!FTKR.AOP.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!FTKR.AOP.DatabaseLoaded) {
        DataManager.aopParamNotetags($dataActors);
        DataManager.aopParamNotetags($dataClasses);
        DataManager.aopParamPlusNotetags($dataWeapons);
        DataManager.aopParamPlusNotetags($dataArmors);
        DataManager.aopParamPlusNotetags($dataStates);
        DataManager.aopParamEquipNotetags($dataWeapons);
        DataManager.aopParamEquipNotetags($dataArmors);
        DataManager.aopParamEnemyNotetags($dataEnemies);
        DataManager.aopGetNotetags($dataItems);
        DataManager.aopGetNotetags($dataSkills);
        FTKR.AOP.DatabaseLoaded = true;
    }
    return true;
};

DataManager.aopParamNotetags = function(group) {
    var note1 = /<(?:AOP)[ ](.+)[ ](?:LEVEL)[ ](\d+)[ ](?:VALUE):[ ]*(\d+)>/i;
    var note2 = /<(?:AOP)[ ](.+)[ ](?:LEVEL)[ ](\d+)[ ](?:TO)[ ](\d+)[ ](?:VALUE):[ ]*(\d+)>/i;
    var note3 = /<(?:AOP)[ ](.+)[ ](?:LEVEL)[ ](\d+)[ ](?:VALUE):[ ]*(\d+)[ ](?:RAND)[ ](\d+)>/i;
    var note4 = /<(?:AOP)[ ](.+)[ ](?:LEVEL)[ ](\d+)[ ](?:TO)[ ](\d+)[ ](?:VALUE):[ ]*(\d+)[ ](?:RAND)[ ](\d+)>/i;

    for (var n = 1; n < group.length; n++) {
        var obj = group[n];
        var notedata = obj.note.split(/[\r\n]+/);

        obj.aopParams = [];
        obj.aopParamValues = [];

        for (var id = 0; id < FTKR.AOP.useParamNum + 1; id++) {
            obj.aopParamValues[id] = [];
            for (var lv = 0; lv < FTKR.AOP.maxLevel + 1; lv++) {
                obj.aopParams[id] = 0;
                obj.aopParamValues[id][lv] = 0;
            }
        }
        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1)) {
                var level  = Number(RegExp.$2);
                var value = Number(RegExp.$3);
                var paramId =this.getParamId(RegExp.$1);
                obj.aopParamValues[paramId][level] = value;
            } else if (line.match(note2)) {
                var minlevel  = Number(RegExp.$2);
                var maxlevel  = Number(RegExp.$3);
                var value = Number(RegExp.$4);
                var paramId =this.getParamId(RegExp.$1);
                for (var t = minlevel; t < maxlevel + 1; t++) {
                    obj.aopParamValues[paramId][t] = value;
                }
            } else if (line.match(note3)) {
                var level  = Number(RegExp.$2);
                var value = Number(RegExp.$3);
                var rand = Number(RegExp.$4);
                var paramId =this.getParamId(RegExp.$1);
                var radvalue = value + Math.floor(Math.random()* rand * 2) - rand;
                obj.aopParamValues[paramId][level] = radvalue > 0 ? radvalue : 0;
            } else if (line.match(note4)) {
                var minlevel  = Number(RegExp.$2);
                var maxlevel  = Number(RegExp.$3);
                var value = Number(RegExp.$4);
                var rand = Number(RegExp.$5);
                var paramId =this.getParamId(RegExp.$1);
                for (var t = minlevel; t < maxlevel + 1; t++) {
                    var radvalue = value + Math.floor(Math.random()* rand * 2) - rand;
                    obj.aopParamValues[paramId][t] = radvalue > 0 ? radvalue : 0;
                }
            }
        }
    }
};

DataManager.aopParamPlusNotetags = function(group) {
    var note1 = /<(?:AOP)[ ](.+)[ ](?:PLUS):[ ]*(\d+)>/i;
    var note2 = /<(?:AOP)[ ](.+)[ ](?:RATE):[ ]*(\d+)>/i;

    for (var n = 1; n < group.length; n++) {
        var obj = group[n];
        var notedata = obj.note.split(/[\r\n]+/);

        obj.aopParams = [];
        obj.aopParamRates = [];
        for (var id = 0; id < Game_BattlerBase.MAX_AOP_PARAMS + 1; id++) {
            obj.aopParams[id] = 0;
            obj.aopParamRates[id] = 100;
        }

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1)) {
                var value = Number(RegExp.$2);
                var paramId =this.getParamId(RegExp.$1);
                obj.aopParams[paramId] = value;
            } else if (line.match(note2)) {
                var value = Number(RegExp.$2);
                var paramId =this.getParamId(RegExp.$1);
                obj.aopParamRates[paramId] = value;
            }
        }
    }
};

DataManager.aopParamEquipNotetags = function(group) {
    var note1 = /<(?:AOP)[ ](.+)[ ](?:REQUIRE):[ ]*(\d+)>/i;
    var note2 = /<(?:AOP)[ ](.+)[ ](?:GROW):[ ]*(\d+)>/i;

    for (var n = 1; n < group.length; n++) {
        var obj = group[n];
        var notedata = obj.note.split(/[\r\n]+/);

        obj.aopParamReqs = [];
        obj.aopParamGrows = [];
        for (var id = 0; id < Game_BattlerBase.MAX_AOP_PARAMS + 1; id++) {
            obj.aopParamReqs[id] = 0;
            obj.aopParamGrows[id] = 0;
        }

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1)) {
                var value = Number(RegExp.$2);
                var paramId =this.getParamId(RegExp.$1);
                obj.aopParamReqs[paramId] = value;
            } else if (line.match(note2)) {
                var value = Number(RegExp.$2);
                var paramId =this.getParamId(RegExp.$1);
                obj.aopParamGrows[paramId] = value;
            }
        }
    }
};

DataManager.aopParamEnemyNotetags = function(group) {
    var note1 = /<(?:AOP)[ ](.+)[ ](?:VALUE):[ ]*(\d+)>/i;

    for (var n = 1; n < group.length; n++) {
        var obj = group[n];
        var notedata = obj.note.split(/[\r\n]+/);

        var paramflag = false;
        obj.aopParams = [];

        for (var id = 0; id < FTKR.AOP.useParamNum + 1; id++) {
            obj.aopParams[id] = 0;
        }

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1)) {
                var value = Number(RegExp.$2);
                var paramId =this.getParamId(RegExp.$1);
                obj.aopParams[paramId] = value;
            }
        }
    }
};

DataManager.aopGetNotetags = function(group) {
    var note1 = /<(?:AOP)[ ](.+)[ ](?:GET):[ ]*(\d+)(?:%)>/i;
    var note2 = /<(?:AOP)[ ](.+)[ ](?:GET):[ ]*(\d+)>/i;

    for (var n = 1; n < group.length; n++) {
        var obj = group[n];
        var notedata = obj.note.split(/[\r\n]+/);

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (line.match(note1)) {
                var value = Number(RegExp.$2) * 0.01;
                var paramId =this.getParamId(RegExp.$1);
                obj.effects.push(this.setGetAopEffect(paramId, value, 0));
            } else if (line.match(note2)) {
                var value = Number(RegExp.$2);
                var paramId =this.getParamId(RegExp.$1);
                obj.effects.push(this.setGetAopEffect(paramId, 0, value));
            }
        }
    }
};

DataManager.getParamId = function(text) {
    var paramId = -1;
    FTKR.AOP.params.forEach( function(param, i) {
        if (param.current === text || param.code === text) {
            paramId = i;
        } else if (text.match(/(?:param)[ ](\d+)/i)) {
            paramId = Number(RegExp.$1);
        } 
    });
    return paramId;
};

DataManager.setGetAopEffect = function(paramId, value1, value2) {
    return this.setEffect(Game_Action.EFFECT_GET_AOP, value1, value2, paramId);
};

DataManager.setEffect = function(code, value1, value2, dataId) {
    return {code:code, value1:value1, value2:value2, dataId:dataId};
};

//=============================================================================
// Game_Actor
//=============================================================================

FTKR.AOP.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
    FTKR.AOP.Game_Actor_setup.call(this, actorId);
    this.clearAopParamPlus();
    this.setupAopParams(actorId);
};

Game_Actor.prototype.setupAopParams = function(actorId) {
    var actor = $dataActors[actorId];
    for (var id = 0; id < FTKR.AOP.useParamNum + 1; id++) {
        actor.aopParams[id] = actor.aopParamValues[id][1];
        for (var lv = 2; lv < this._level + 1; lv++) {
            actor.aopParams[id] += actor.aopParamValues[id][lv];
        }
    }
};

FTKR.AOP.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function() {
    FTKR.AOP.Game_Actor_levelUp.call(this);
    this.aopParamGrows();
};

FTKR.AOP.Game_Actor_levelDown = Game_Actor.prototype.levelDown;
Game_Actor.prototype.levelDown = function() {
    this.aopParamDowns();
    FTKR.AOP.Game_Actor_levelDown.call(this);
};

Game_Actor.prototype.aopParamGrows = function() {
    for (var i = 0; i < FTKR.AOP.useParamNum; i++) {
        this.actor().aopParams[i] += this.aopParamGrow(i);
    }
};

Game_Actor.prototype.aopParamDowns = function() {
    for (var i = 0; i < FTKR.AOP.useParamNum; i++) {
        this.actor().aopParams[i] -= this.aopParamGrow(i);
    }
};

Game_Actor.prototype.aopParamGrow = function(paramId) {
    var value = this.actor().aopParamValues[paramId][this._level];
    value += this.currentClass().aopParamValues[paramId][this._level];
    value += this.aopParamItemGrow(paramId);
    return value;
};

Game_Actor.prototype.aopParamItemGrow = function(paramId) {
    var value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
            value += item.aopParamGrows[paramId];
        }
    }
    return value;
};

Game_Actor.prototype.aopParamBase = function(paramId) {
    return this.aopActorParamBase(paramId) + this.aopClassParamBase(paramId);
};

Game_Actor.prototype.aopActorParamBase = function(paramId) {
    return this.actor().aopParams[paramId];
};

Game_Actor.prototype.aopClassParamBase = function(paramId) {
    return this.currentClass().aopParams[paramId];
};

Game_Actor.prototype.aopParamPlus = function(paramId) {
    var value = Game_Battler.prototype.aopParamPlus.call(this, paramId);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
            value += item.aopParams[paramId];
        }
    }
    return value;
};

Game_Actor.prototype.aopParamRate = function(paramId) {
    var value = Game_Battler.prototype.aopParamRate.call(this, paramId);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item) {
            value *= Math.abs(item.aopParamRates[paramId]) / 100;
        }
    }
    return value;
};

//=============================================================================
// Game_Action
//=============================================================================

FTKR.AOP.Game_Action_applyItemEffect = Game_Action.prototype.applyItemEffect;
Game_Action.prototype.applyItemEffect = function(target, effect) {
    switch (effect.code) {
        case Game_Action.EFFECT_GET_AOP:
            this.itemEffectGetAop(target, effect);
            break;
    }
    FTKR.AOP.Game_Action_applyItemEffect.call(this, target, effect);
};

Game_Action.prototype.itemEffectGetAop = function(target, effect) {
    var value = (target.aopParam(effect.dataId) * effect.value1 + effect.value2) * target.rec;
    if (this.isItem()) {
        value *= this.subject().pha;
    }
    value = Math.floor(value);
    if (value !== 0) {
        target.gainCAop(effect.dataId, value);
        this.makeSuccess(target);
    }
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.aopParamBase = function(paramId) {
    return this.enemy().aopParams[paramId];
};

Game_Enemy.prototype.aopParamPlus = function(paramId) {
    return Game_Battler.prototype.aopParamPlus.call(this, paramId);
};

Game_Enemy.prototype.aopParamRate = function(paramId) {
    return Game_Battler.prototype.aopParamRate.call(this, paramId);
};

//=============================================================================
// Game_BattlerBase
//=============================================================================
var prop = {};
prop[FTKR.AOP.params[0].code] = { get: function() { return this.aopParam(0); }, configurable: true };
prop[FTKR.AOP.params[1].code] = { get: function() { return this.aopParam(1); }, configurable: true };
prop[FTKR.AOP.params[2].code] = { get: function() { return this.aopParam(2); }, configurable: true };
prop[FTKR.AOP.params[3].code] = { get: function() { return this.aopParam(3); }, configurable: true };
prop[FTKR.AOP.params[4].code] = { get: function() { return this.aopParam(4); }, configurable: true };
prop[FTKR.AOP.params[5].code] = { get: function() { return this.aopParam(5); }, configurable: true };
prop[FTKR.AOP.params[6].code] = { get: function() { return this.aopParam(6); }, configurable: true };
prop[FTKR.AOP.params[7].code] = { get: function() { return this.aopParam(7); }, configurable: true };
prop[FTKR.AOP.params[8].code] = { get: function() { return this.aopParam(8); }, configurable: true };
prop[FTKR.AOP.params[9].code] = { get: function() { return this.aopParam(9); }, configurable: true };

prop[FTKR.AOP.params[0].current] = { get: function() { return this._aop[0]; }, configurable: true };
prop[FTKR.AOP.params[1].current] = { get: function() { return this._aop[1]; }, configurable: true };
prop[FTKR.AOP.params[2].current] = { get: function() { return this._aop[2]; }, configurable: true };
prop[FTKR.AOP.params[3].current] = { get: function() { return this._aop[3]; }, configurable: true };
prop[FTKR.AOP.params[4].current] = { get: function() { return this._aop[4]; }, configurable: true };
prop[FTKR.AOP.params[5].current] = { get: function() { return this._aop[5]; }, configurable: true };
prop[FTKR.AOP.params[6].current] = { get: function() { return this._aop[6]; }, configurable: true };
prop[FTKR.AOP.params[7].current] = { get: function() { return this._aop[7]; }, configurable: true };
prop[FTKR.AOP.params[8].current] = { get: function() { return this._aop[8]; }, configurable: true };
prop[FTKR.AOP.params[9].current] = { get: function() { return this._aop[9]; }, configurable: true };

Object.defineProperties(Game_BattlerBase.prototype, prop);

FTKR.AOP.Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
    FTKR.AOP.Game_BattlerBase_initMembers.call(this);
    this.initCurrentAopParams();
    this.clearAopParamPlus();
    this.clearAopBuffs();
};

Game_BattlerBase.prototype.initCurrentAopParams = function() {
    this._aop = [];
    for (var i = 0; i < FTKR.AOP.useParamNum; i++) {
        this._aop[i] = this.aopParamMax(i);
    };
};

FTKR.AOP.Game_BattlerBase_canEquip = Game_BattlerBase.prototype.canEquip;
Game_BattlerBase.prototype.canEquip = function(item){
    if (!FTKR.AOP.Game_BattlerBase_canEquip.call(this, item)) return false;
    for (var i = 0; i < FTKR.AOP.useParamNum; i++) {
        if (this.aopParam(i) < item.aopParamReqs[i]) return false;
    }
    return true;
};

Game_BattlerBase.prototype.clearAopParamPlus = function() {
    this._aopParamPlus = [0,0,0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.clearAopBuffs = function() {
    this._aopBuffs = [0,0,0,0,0,0,0,0,0,0];
    this._aopBuffTurns = [0,0,0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.aopParam = function(paramId) {
    if (paramId >= FTKR.AOP.useParamNum) return 0;
    var value = this.aopParamBase(paramId) + this.aopParamPlus(paramId);
    value *= this.aopParamRate(paramId) * this.aopParamBuffRate(paramId);
    var maxValue = this.aopParamMax(paramId);
    var minValue = this.aopParamMin(paramId); //this.paramMin(2);
    var value = Math.round(Math.floor(value).clamp(minValue, maxValue));
    return value;
};

Game_BattlerBase.prototype.getAopParamBase = function(paramId) {
    if (paramId >= FTKR.AOP.useParamNum) return 0;
    var value = this.aopParamBase(paramId);
    var maxValue = this.aopParamMax(paramId);
    var minValue = this.aopParamMin(paramId); //this.paramMin(2);
    return Math.round(value.clamp(minValue, maxValue));
}

Game_BattlerBase.prototype.aopParamMax = function(paramId) {
    return Math.max(FTKR.AOP.maxParam, FTKR.AOP.params[paramId].max);
};

Game_BattlerBase.prototype.aopParamMin = function(paramId) {
    return Math.max(0, FTKR.AOP.params[paramId].min);
};

Game_BattlerBase.prototype.aopParamPlus = function(paramId) {
    return this._aopParamPlus[paramId];
};

Game_BattlerBase.prototype.aopParamRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_AOPPARAM, paramId);
};

Game_BattlerBase.prototype.aopParamBuffRate = function(paramId) {
    return this._aopBuffs[paramId] * 0.25 + 1.0;
};

Game_BattlerBase.prototype.setCAop = function(paramId, aop) {
    this._aop[paramId] = aop;
    this.refresh();
};

Game_BattlerBase.prototype.gainCAop = function(paramId, value) {
    this.setCAop(paramId, this._aop[paramId] + value);
};

FTKR.AOP.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
    FTKR.AOP.Game_BattlerBase_refresh.call(this);
    for (var i = 0; i < FTKR.AOP.useParamNum; i++) {
        this._aop[i] = this._aop[i].clamp(0, this.aopParam(i));
    };
};

