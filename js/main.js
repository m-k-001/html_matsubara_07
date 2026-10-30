// jsを記述する際はここに記載していく

$(function () {
    $("#news__btn").on("click", function () {
        
        // 今カードが表示されている（開いている）かを判定
        if ($('.news-on').is(':visible')) {
            $('.news-on').slideToggle(600);
            $(this).text('More');

            // 閉じると同時に、目的地のIDへ移動
        window.scrollTo({
            top: $('#news-i').offset().top, 
        });

        } else {
            $('.news-on').slideToggle(300);
            $(this).text('Close');
        }
        
    });
});