$(function (){
    // 包裹节点
    var oDiv = $('div');
    // oDiv.wrap('<strong></strong>');
    // oDiv.wrap($('strong').get(0)); //注意这是原生的 DOM 节点

    /*
    oDiv.wrap(function (index) {
        return '<strong>' + index + '</strong>';
    })
    */

    /* 包裹了几个节点，就需要用几个 unwrap 来去掉节点。
    oDiv.wrap('<strong><em></em></strong>');
    oDiv.unwrap();
    oDiv.unwrap();
    */

    // wrap() 和 wrapAll() 的区别
    // oDiv.wrap('<strong></strong>');
    // oDiv.wrapAll('<strong></strong>')

    // oDiv.wrapInner('<strong></strong>');

    /*
    oDiv.wrapInner(function (index) {
        return '<strong>' + index + '</strong>';
    });
    */

    // 复制节点 clone()
    oDiv.click(function () {
       alert('Gakki') ;
    });

    // oDiv.clone().appendTo('body'); // clone 函数不传参数，或者参数为 false 的话，节点的复制是不保留事件的。
    // oDiv.clone(true).appendTo('body'); // 反之则保留时间

    // 删除节点 remove() detach()
    // oDiv.remove();
    // oDiv.detach();

    // 删除事件的区别
    // oDiv.remove().appendTo('body'); // remove 删除是连带事件一起删除
    // oDiv.detach().appendTo('body'); // detach 删除是保留事件删除

    // 替换节点 replaceWith() replaceAll()
    // oDiv.replaceWith('<span>DDDDDDOM</span>');
    // $('<span>DDDDDDOM</span>').replaceAll(oDiv);
    
});
