// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 一行目の省略形
// $(function(){
//   jQueryプログラムの内容
// });

// 二行目
// $( セレクタ ).メソッド ( パラメータ );
// と記述

// セレクタ……body
// メソッド……html
// パラメータ……'<h1>Hello JQuery!!</h1>'


$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});

// $('セレクタ').css({
//   'プロパティ1': '値1',
//   'プロパティ2': '値2',

//   :
//   :

//   'プロパティn': '値n'
// });