$(function (){
    // 子元素过滤选择器

    // 子元素过滤选择器一 :first-child
    // $('li:first-child').css('background', '#ccc');

    // 子元素过滤选择器二 :last-child
    // $('li:last-child').css('background', '#ccc');

    // 子元素过滤选择器三 :only-child
    // $('li:only-child').css('background', 'red');

    // 子元素过滤选择器四
    // $('li:nth-child(even)').css('background', '#ccc');
    // $('li:nth-child(odd)').css('background', '#e6e6e6');
    // $('li:nth-child(3)').css('background', '#66ccff');
    // $('li:nth-child(3n)').css('background', '#66ccff');
    // $('li:nth-child(3n + 1)').css('background', '#66ccff');

    // 其他方法

    // 其他方法一 is()
    // alert($('.red').is('li')); //true
    // alert($('.red').is($('li'))); //true
    // alert($('.red').is($('li').get(0))); //false
    // alert($('.red').is($('li').get(2))); //true
    // alert($('.red').is(function (){
    //     return $(this).attr('class') == 'red';
    // }));

    // 其他方法二 hasClass()
    // alert($('li').eq(2).hasClass('red'));

    // 其他方法三 slice()
    // $('li').slice(0, 2).css('background', '#ccc');
    // $('li').slice(2, 3).css('background', '#ccc');
    // $('li').slice(0, -2).css('background', '#ccc');
    // $('li').slice(2, -2).css('background', '#ccc');

    // 其他方法四 contents()
    // alert($('div').children().length);
    // alert($('div').contents().length);

    // 其他方法五 filter()
    // $('li').filter('.red, :first-child, :last-child').css('background', '#ccc');
    $('li').filter(function () {
       return $(this).hasClass('red') && ($(this).attr('title') == 3);
    }).css('background', '#ccc');
});
