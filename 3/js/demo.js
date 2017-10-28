$(function (){
    /**
     * 属性选择器
     */

    // 属性选择器零 选择拥有某个属性的选择器
    // $('a[title]').css('color', 'pink');

    // 属性选择器一  选择某个属性的元素
    $('a[title=num1]').css('color', 'red');
    $('a[title=num5]').css('color', 'green');

    // 属性选择器二 选择以某个字符串开头的对应属性的元素
    $('a[title^=num]').css('color', 'orange');

    // 属性选择器三 选择以某个字符串结尾的对应属性的元素
    $('a[attr$=poi]').css('color', 'pink');

    // 属性选择器四 选择包含该字符串的对应属性的元素
    $('a[title*=num]').css('color', 'maroon');

    // 属性选择器五 选择属性不等于该字符串的属性 (jquery 才有这个选择器， CSS 高级选择器没有这个！)
    $('a[title!=num]').css('color', 'navy');

    // 属性选择器六 选择等于这个字符串的对应属性或者对应字符串后面加 ‘-’ 号
    $('a[title|=num]').css('color', '#66ccff');

    // 属性选择器器七 选择属性的多个值中包含这个属性的
    $('a[title~=num]').css('color', 'pink');

    // 属性选择器八 多个属性选择器同时使用
    $('a[attr=lal][title~=num]').css('color', 'orange');

});