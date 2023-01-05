$(function() {
  // id="back"内のaタグがクリックされたときに、処理が行われるように記述
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    //$('セレクタ名').animate({
// 　　変化対象のプロパティ名:変化値
// 　}, アニメーションの動作時間);
    event.preventDefault();
    // aタグの機能を無効にするメソッド
  });
});