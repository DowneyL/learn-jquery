$(function (){
    var oDiv = $('div');
    var oP = $('p');
    var oIpt = $(':text');
    // 基础事件

    // 事件绑定 bind()

    // 绑定单个事件,调用匿名函数
    /*
    oDiv.bind('click', function () {
        oP.append(function (index, value) {
            return value + ' click';
        });
    });
    */

    // 绑定单个事件，调用函数
    /*
    function myClick () {
        alert('this is a click');
    }
    oDiv.bind('click', myClick);
    */

    // 单个匿名函数，绑定多个事件
    /*
    oDiv.bind('mouseover mouseout', function () {
        oP.html(function (index, value) {
            return value + '1';
        })
    })
     */

    // 多个函数 绑定多个事件
    /*
    oDiv.bind({
        click : function () {
            alert('This is a click');
        },
        mouseout : function () {
            alert('Mouse out');
        }
    });
    */

    // 删除绑定函数
    /*
    oDiv.bind('click mouseout', function () {
        alert('HAHAHA');
    });
    // oDiv.unbind(); // 删除所有绑定事件
    // oDiv.unbind('click'); // 删除指定事件
    */

    /* 删除指定事件的指定函数
    function fn1 () {
        alert('fn1');
    }
    function fn2 () {
        alert('fn2');
    }
    oDiv.bind('click', fn1);
    oDiv.bind('click', fn2);

    oDiv.unbind('click', fn1);
    */

    // jquery 提供了对应事件的函数
    /*
    oDiv.click(function () {
        alert('click');
    });
    */

    // select() 文本选中事件
    /*
    oIpt.select(function () {
        alert(oIpt.val());
    })
    */

    // change() 文本改变事件
    /*
    oIpt.change(function () {
        alert(oIpt.val());
    })
    */

    // submit() 表单提交事件
    $('form').submit(function () {
        alert(oIpt.val());
    })

});
