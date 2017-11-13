$(function (){
    // DOM 节点操作
    var box = $('<div>box</div>'); // 创建节点
    /*
    $('div').append(box); // 插入节点
    */

    // 在元素内部的尾部插入节点
    // $('div').append(box); // 插入节点

    /*
    $('div').append(function (index , html) {
       return box.html() + index + html;
    });
    */

    // 在元素内部的头部插入节点
    // $('div').prepend(box);

    // 将某元素移到指定元素内部的尾部
    // box.appendTo($('div'));

    // 将某元素移到指定元素内部的头部
    // box.prependTo($('div'));

    // 在元素外部的尾部插入节点
    // $('div').after(box);

    // 在元素外部的头部插入节点
    // $('div').before(box);

    // 将某元素移到指定元素的外部的头部
    // box.insertBefore($('div'));

    // 将某元素移到指定元素的外部的头部
    // box.insertAfter($('div'));

});
