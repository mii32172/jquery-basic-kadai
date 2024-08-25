$(window).on('load scroll', (e) => {
  //loadされた場合
  if(e.type === 'load'){
    console.log('loadイベントが発生しました');
    }
  //scrollされた場合
  if(e.type === 'scroll'){ 
    console.log('scrollイベントが発生しました'); 
  }
});
