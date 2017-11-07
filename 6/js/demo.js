$(function (){
    // 设置元素的内容

    // 获取元素的 HTML 内容
    //alert($('#box').html());

    // 修改元素的 HTML 内容
    //$('#box').html('<em>lh5.mouldzj.com</em>');

    // 获取元素的文本内容
    // alert($('#box').text());

    // 修改元素的文本内容
    //$('#box').text('lh5.mouldzj.com'); // 直接把标签也替换掉了

    // 获取表单的值
    // alert($('input[type=text]').val());

    // 修改表单的值
    // $('input[type=text]').val('这是一个被修改过的默认值');

    // 修改表单的选中状态
    // $('input[type=radio], input[type=checkbox]').val(['boy', 'girl', 'program']);

    // 设置元素的属性

    // 获取元素属性值
    // alert($('#box').attr('title'));

    // 设置元素属性值
    // $('#box').attr('title','我的新域名');

    //设置多个属性
    /*
    $('#box').attr({
        'title' : '我的第一个域名',
        'class' : 'myClass',    // 并不建议使用 attr() 来设置 'id' 以及 'class'。
        'data' : 'lalla'
    })
    */
    
    // 设置属性并执行回调函数
    /*
    回调函数参数
    index : 获取当前元素所在元素集合的索引值， 从 0 开始计算
    value : 获取当前元素的对应原属性值
     */

    /*
    $('div').attr('title', function (index, value) {
        return '我原来的 title 是"' + value + '", 现在的 title 是"我的第' + (index + 1) + '号域名"，哈哈哈';
    });
    */

    // 很多方法都可以利用这个回调函数 例如 html()
    /*
    $('div').html(function (index, value) {
        return value + '<em>www.baidu.com</em> ' + index;
    });
    */

    // 删除属性
    //$('div').removeAttr('title');

    // 删除指定属性试试看
    // $('div').removeAttr('title', '我的域名'); //没什么卵用， 所有 title 都消失了
});
