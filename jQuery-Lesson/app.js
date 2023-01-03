// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// addClass( )は、対象のHTML要素にclass属性を追加。
// removeClass( )は、要素に設定されているclass属性が解除。

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

// マウスクリックイベント
// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });