$(function (){
    var oDiv = $('div');
    var oStrong = $('strong');
    // 获取元素宽度
    // alert($('div').width());

    // 设置元素的宽度
    // $('div').width('500px');

    /*
    $('div').width(function (index, width) {
        return width - 200 + 'px';
    });
    */

    // 内边距，外边距，边框
    /*
                                    // null | padding:100px | border:100px solid darkred | margin: 100px;
    alert(oDiv.width());            // 200    200             200                          200
    alert(oDiv.innerWidth());       // 200    400             400                          400
    alert(oDiv.outerWidth());       // 200    400             600                          600
    alert(oDiv.outerWidth(true));   // 200    400             600                          800
    */

    // 位置
    // offset() 始终获取元素相对浏览器窗体的距离
    /*
    alert(oDiv.offset().left);
    alert(oStrong.offset().left);
    alert(oDiv.offset().top);
    alert(oStrong.offset().top);
    */

    // position() 获取元素相对于父元素的距离
    /*
    alert(oDiv.position().left);
    alert(oStrong.position().left);
    alert(oDiv.position().top);
    alert(oStrong.position().top);
    */
    
    // scrollTop() 获取滚动条距离
    // alert($(window).scrollTop());

    var st = $('.set-top');
    st.click(function () {
        $(window).scrollTop('0');
    });

    $(window).scroll(function () {
       var sh = $(this).scrollTop();
       if (sh >= 100) {
           st.fadeIn(300);
       } else {
           st.fadeOut(300);
       }
    });
});
