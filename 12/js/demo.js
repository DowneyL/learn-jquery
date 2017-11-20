$(function () {
    var oDiv = $('div');
    var oStrong = $('strong');
    var oInput = $('input');
    var oSec = $('section');
    /*
    // 鼠标移入移出改变元素的颜色
    oDiv.mouseover(function (){
        $(this).css('background-color', 'darkred');
    }).mouseout(function (){
        $(this).css('background-color', 'darkseagreen');
    })
    */

    /*
    // 同样是鼠标移入移出改变元素的颜色
    oDiv.mouseenter(function (){
        $(this).css('background-color', 'darkred');
    }).mouseleave(function (){
        $(this).css('background-color', 'darkseagreen');
    })
    */

    /**
     *  那么这两个移入移出有什么区别呢？ 
     *  只有一个元素的情况下，他们相同，但如果有子元素，则会产生区别。
     */

    /*
    // 这个方法包含子节点
    oDiv.mouseover(function () {
        oStrong.html(function (index, value) {
            return value + '1';
        });
    });
    */

    /*
    // 这个方法不包含子节点
    oDiv.mouseenter(function () {
        oStrong.html(function (index, value) {
            return value + '1';
        });
    });
    */

    // 同理可知 mouseout mouseleave

    /**
     * keyup() keydown() 返回的是键码
     * keypress() 功能同 keydown() 他返回的是字符编码
     */

    /*
    oInput.keydown(function (e) {
        alert(e.keyCode);  // 按下 1 返回 49，按下 2 返回 50 按下 a 返回 65
    });
    */

    /*
    oInput.keypress(function (e) {
        alert(e.charCode); // 按下 1 返回 49，按下 2 返回 50 按下 a 返回 97
    });
    */


    /**
     * 第一组：focus 获得焦点  blur 失去焦点
     * 第二组：focusin 获得焦点 focusout 失去焦点
     * 两组的区别在于前者只能用于当前元素，后者可以用于父元素。
     */

    /*
    // 这样写，section 下的 input框获得焦点或者失去焦点，日志框里面都没有反应。
    // 因为 focus 和 blur 只能在当前元素上生效
    oSec.focus(function (){
        console.log('获得焦点');
    }).blur(function (){
        console.log('失去焦点');
    });
    */

    /*
    // 日志记录焦点的获得和失去
    // 因为 focusin 和 focusout 定义在父元素上面也可生效
    oSec.focusin(function (){
        console.log('获得焦点');
    }).focusout(function (){
        console.log('失去焦点');
    });
    */

    /**
     * 复合事件
     * hover() toggle()
     */

    /*
    // 要注意 hover 事件整合的是 mouseenter 和 mouseleave 事件。
    oDiv.hover(
        function () {
            $(this).css('background-color', 'darkred');
        },
        function () {
            $(this).css('background-color', 'darkseagreen');
        }
    );
    */

    // oDiv.toggle('slow');
    // 模拟 toggle 点击事件
    var flag = 1;
    oDiv.click(function () {
       if (flag == 1) {
          $(this).css('background-color', 'darkred');
          flag = 2;
       } else if (flag == 2) {
           $(this).css('background-color', 'pink');
           flag = 3;
       } else if (flag == 3) {
           $(this).css('background-color', 'darkseagreen');
           flag = 1;
       }
    });

});