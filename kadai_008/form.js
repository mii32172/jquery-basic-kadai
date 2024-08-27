$(function () {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
  //class属性がtext-box内に文字を出力する
    $('.text-box').val("クリックしました！");
  });
});