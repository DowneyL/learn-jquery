$(function (){
 
    /*****************************************************
     part 1
     DOM 结构
     <div id="box">
     <p>p</p> <p>p</p> <p>p</p>
     <div>
     <p>p</p> <p>p</p> <p>p</p>
     </div>
     </div>
     
     //后代选择器 ---选择所有的后代元素，包括儿子和孙子。

    // 后代选择器一： 高级选择器
    $('#box p').css({'color' : 'red'});

    // 后代选择器二：jquery提供方法
    $('#box').find('p').css({'color' : 'green'});

    //-----------------------------------------------

    //子选择器 ---选择元素的所有儿子元素

    // 子选择器一：高级选择器
    $('#box > p').css({'color' : 'brown'});

    // 子选择器二：jquery提供的方法
    $('#box').children('p').css({'color' : 'pink', 'background' : '#333'});
    
    *********************************************************/




    /**************************************************************
      part 2
     DOM 结构
     <p>p</p>
     <p>p</p>
     <p>p1</p>
     <div id="box">div</div>
     <p>p2</p>
     <p>p</p>
     <p>p</p>
     <div>a
     <p>divp</p>
     <p>divp</p>
     <p>divp
     <span>span</span>
     </p>
     <span>a</span>
     </div>
     
    // next 选择器，选择元素的下一个同级元素 （与之相反的是 prev 选择器）

    // next 选择器一：高级选择器
    $('#box + p').css({'color' : 'red'});

    // next 选择器二：jquery提供方法
    $('#box').next('p').css({'color' : 'pink'}); // 传参则为限制，选中元素的同级下一个元素必须是 p 标签才会修改其样式。
    // $('#box').next().css({'color' : 'green'}); // 不传参则为 * 匹配所有同级的下一个元素，无论标签是什么。

    //-------------------------------------------------------------------

    // nextAll 选择器，选择与元素同级的所有被指定标签元素（与之相反的是 prevAll 选择器）

    // nextAll 选择器一：高级选择器
    $('#box ~ p').css({'color' : 'blue'});

    // nextAll 选择器二：jquery提供的方法
    // $('#box').nextAll('p').css({'color' : 'maroon'}); //同 next
    $('#box').nextAll().css({'background' : 'pink'});  //同 next

     //-----------------------------------------------------------------

     // siblings 选择器，选定上下所有的同级元素
     $('#box').siblings('p').css({'color' : 'red'});

    ********************************************************************/

    
    // prevUntil 方法: 元素之上的同级元素，非指定元素选定，直到遇到指定元素，选定停止
    $('.box').prevUntil('p').css({'color' : 'red'});

    // nextUntil 方法: 元素之下的同级元素，非指定元素选定，直到遇到指定元素，选定停止
    $('.box').nextUntil('p').css({'color' : 'green'});


});