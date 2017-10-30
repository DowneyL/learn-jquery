$(function (){
    // 基本过滤选择器

    // 基本过滤选择器一 :first
    // $('li:first').css('background', '#ccc');

    // 基本过滤选择器二 :last
    // $('li:last').css('background', '#66ccff');

    // 基本过滤选择器三 :gt
    // $('li:gt(9)').css('background', '#00f');

    // 基本过滤选择器四 :lt
    // $('li:lt(2)').css('background', '#f0f');

    // 基本过滤选择器五 :even (从 0 开始算)
    // $('li:even').css('background', '#ccc');

    // 基本过滤选择器六 :odd
    // $('li:odd').css('background', '#66ccff');

    // 基本过滤选择器七 :eq
    // $('li:eq(2)').css('background', '#f00');

    // 基本过滤选择器八 :not
    // $('li:not(:eq(1))').css('background', '#f00');

    // 基本过滤选择器九 :header
    // $(':header').css('background', '#ccc');

    // 对应 jquery 方法
    // $('li').first().css('background','#ccc');

    // $('li').last().css('background','#ccc');

    // $('li').eq(2).css('background','#ccc');

    // $('li').not(':eq(1)').css('background', '#ccc');

    // 内容过滤选择器

    // 内容过滤选择器一 :contains
    // $('li:contains("列表1")').css('background', '#ccc');

    // 内容过滤选择器二 :has
    // $('ul:has(.red)').css('background', 'red');

    // 内容过滤选择器三 :empty
    // $('div:empty').css({'background' : 'red', 'height' : '20px'})

    // 内容过滤选择器四 :parent （注意这个过滤其实选择有子元素的父元素）
    // $('div:parent').css('background','orange');

    // 对应 jquery 提供的方法
    // 内容过滤选择器方法一： has()
    // $('ul').has('.red').css('background', 'red');

    /***************** 虽然是 parent ，但这里提供的方法是用来找目标元素的父元素的 ********************/
    // $('li').parent().css('background', '#ccc');  // 只找父元素
    // $('li').parents().css('background', '#3d3d3d');  // 找父元素和祖先元素
    // $('li').parentsUntil('body').css('background', '#66ccff');   // 找到哪个父元素为止

    // 可见性过滤选择器

    // 可见性过滤选择器一 :hidden
    // $('div:hidden').css('background', 'red').show(1000);

    //可见性过滤选择器二 :visible
    $('div:visible').css('background', 'red');
    
});
