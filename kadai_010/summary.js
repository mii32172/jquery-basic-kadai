$(function () {
  // 1.ボタンがクリックされたら
  $('#change-color').on('click', function () {
    //文字色が変わる
    $('#target').css('color', 'red');
  });

  // 2.ボタンがクリックされたら
  $('#change-text').on('click', function () {
    //文字内容が変わる
    $('#target').text('Hello!');
  });

  // 3.id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function () {
    // フェードアウトする
    $('#target').fadeOut();
  });

  // 4.id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function () {
    // フェードインする
    $('#target').fadeIn();
  });
});
