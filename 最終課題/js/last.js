/*クリックしたらスムーズスクロールで移動*/
$(function(){
$('a[href^=#]').click(function(){
    var href = $(this).attr("href");
    var target = $(href);
    var posTop = target.offset().top;
    
    $('body,html').animate({scrollTop : posTop }, 300, 'swing');
    return false;
});
});

/*トップ画像スライドショー*/
$(function() {
    $(".top").bgswitcher({
        images:["../images/sea.jpg", "../images/suberidai.jpg", "../images/tree.jpg","../images/school.jpg","../images/coffee.jpg"],
        interval: 2000
    });
    
});
