// ページ全体ではなく、DOMツリーの構築が完了したら実行
document.addEventListener('DOMContentLoaded', function() {
  let dummyTitle = document.getElementById('dummyTitle'); // セレクトボックス
  let create = document.getElementById('create'); // 生成ボタン
  let reset = document.getElementById('reset'); // リセットボタン
  let select = document.getElementById('select'); // 選択ボタン
  let dummyText = document.getElementById('dummyText'); // テキストエリア
  let num = document.getElementById('num'); // 文字数
  // keyをセレクトボックスdummyTitleの各optionのvalueに合わせて、ダミーコンテンツを配列を作成。
  let defaultValue = document.getElementById('num').defaultValue; // num のデフォルト値を取得（リセット用）
  const dummyContents = {
    これはダミーです: 'これはダミーです。',
    タイトルが入ります: 'タイトルが入ります。',
    山路を登りながら: '山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。',
    あのイーハトーヴォのすきとおった風: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
    'lorem ipsum': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  create.addEventListener('click', function(){
    // 入力値で文字数を上書き
    num.value = document.getElementById('num').value;
    // 選択されたダミーテキストで上書き
    let dummyContent = dummyContents[dummyTitle.value];
    // repeatでdummyTextを繰り返す回数を設定。
    // sliceで0文字目から文字数をdummyTextで割ったあまり数までの文字を取り出す。
    let result =
    dummyContent.repeat(num.value / dummyContent.length) + dummyContent.slice(0, num.value % dummyContent.length);
    console.log(num.value);
    console.log(result);
    // テキストエリアに出力
    dummyText.value = result;
  });
  reset.addEventListener('click', function(){
    num.value = defaultValue;
    dummyText.value = null;
  });
  select.addEventListener('click', function(){
    dummyText.focus();
    dummyText.setSelectionRange(0, dummyText.value.length);
  });
});
