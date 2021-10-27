$(document).ready(function(){
    $(".navOpen").on("click", function(){
        $("nav").animate({
            "left": 0
        });
    });
    $(".navClose").on("click", function(){
        $("nav").animate({
            "left": "-100%"
        });
    });

    function gnbClick(){
        var windowWidth = $(window).width();
        if(windowWidth < 1200){
            $(".sub").css("display","block");
            $(".sub").hide();
            $(".gnb > li").off("click");
            $(".gnb > li").on("click", function(){
                console.log("aa")
                $(this).find(".sub").slideToggle();
                $(this).siblings().find(".sub").slideUp();
            });
            $(".gnb > li").off("mouseover");
            $(".gnb > li").off("mouseout");
        } else { //pc
            $(".sub").css("display","flex");
            $(".sub").hide();
            $(".gnb > li").off("click");
            $(".gnb > li").on("mouseover", function(){
                // $(this).find(".sub").css("backgroundColor","red");
                $(this).find(".sub").show();
                $(this).siblings().find(".sub").hide();
            });
            $(".gnb > li").on("mouseout",function(){
                $(this).find(".sub").hide();
            });
        }
    }
    
    $(".f_banner").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false
    });
    function bannerSlide(){
        var windowWidth = $(window).width();
        if(windowWidth < 1200){
            $(".f_banner").slick("unslick");
            $(".f_banner").slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows : false
            });
        } else{
            $(".f_banner").slick("unslick");
            $(".f_banner").slick({
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows : false
            });
        }
    };

    bannerSlide();
    gnbClick();

    $(window).on("resize", function() {
        gnbClick();
        bannerSlide();
    });

    $(".reservationBox .tapName li").on("click",function(){
        var index = $(this).index();
        console.log(index);
        $(this).addClass("select").siblings().removeClass("select");
        // $(".contentBox div").eq(index).addClass("select").siblings().removeClass("select");
        $(".contentBox > div").eq(index).show().siblings().hide();
    });
    $(".reservationBox .contentBox .way li").on("click",function(){
        var index = $(this).index();
        console.log(index);
        $(this).addClass("select").siblings().removeClass("select");
        $(".wayContent > div").eq(index).addClass("select").siblings().removeClass("select");
    });

    $(".quickMenu li").on("mouseover", function(){
        $(this).addClass("select").siblings().removeClass("select");
    });
    $(".sale ul li").on("mouseover", function(){
        $(this).addClass("select").siblings().removeClass("select");
    });





    $(".navBanner").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false
    });
});