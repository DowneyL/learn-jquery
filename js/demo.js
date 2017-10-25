$(function (){
    $('div').css('color', 'orange');

   // $('.box').css({'color':'red'});   // 添加一个行为，json格式
    $('.box').css('color', 'blue');     // 另一个格式
    $('#pox').css('color', 'red');

    // $('div').css('color', 'orange');    //全部变成橘色，因为他最后加载, 按加载顺序执行

    // alert($('.box').size());    //  获得长度 size() 3.2.1 无法使用。
    alert($('.box').length);
    
});