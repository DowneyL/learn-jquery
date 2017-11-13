$(function (){
    // 获取元素的 css
    /*
    var color = $('div').css('color');
    alert(color); // 我们有两个元素，但是为啥只获取了一个？
    */

    // 获取元素的多个 css 属性
    //var box = $('div').css(['color', 'width', 'height']);
    // alert(box); // 获取到一个对象，需要遍历才能打印

    /* 普通的 js 方法
    for (var i in box) {
        alert(i + ':' + box[i]);
    }
    */

    /* 利用 jquery 的工具集来进行遍历循环
    $.each(box, function (attr, value) {
       alert(attr + ':' + value);
    });
    */

    // 改变元素的 css 属性
    // $('div').css('color', 'red');
    // $('div').addClass('red bg');
    // $('div').removeClass('bg');

    // 改变元素的多个 css 属性
    // $('div').css({'color' : 'red' , 'width' : '200px', 'background-color' : '#eee'});
    // $('div').addClass('red bg size');

    // 切换 class
    /*
    $('div').click(function () {
        $(this).toggleClass('red');
    });
    */

    // 设置切换 class 的频率
    /*
    var count = 0;
    $('div').click(function () {
        $(this).toggleClass('red', count ++ % 3 == 0);
    });
    */
});
