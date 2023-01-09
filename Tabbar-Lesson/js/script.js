$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

// 1行目
// ・属性値が特定の値に等しい要素だけを取得
// $('要素[属性 = "値"]')

// 今回は、初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示
// ・属性値が特定の値に等しくない要素だけを取得
// $('要素[属性 != "値"]')

// .hide();は、特定のHTML要素を非表示にするメソッド
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になる