$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
// .children()は、HTML要素直下のすべての子要素を取得
// ここでのchildrenは「ul要素の子要素」、つまり、li要素が対象