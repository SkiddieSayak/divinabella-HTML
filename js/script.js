$(document).ready(function(){
// Equal height
    $(function () {
        $(".revitalize-eye").matchHeight();
        $(".price-cart").matchHeight();
        $(".hs9-slider .item").matchHeight();
        $(".home-sec6 .cart-box").matchHeight();
    });
// ----------------------------------------------------------/

// home-sec9 slider
    $('.hs9-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 1,
        responsive : {
            768 : {
                items: 2,
            }
        }
    })
// ----------------------------------------------------------/

// faq
    $(".accordian li h5").click(function(){
        $(this).parent().siblings().removeClass("active").find(".content").slideUp();
        $(this).parent().toggleClass("active").find(".content").slideToggle();
    });
// ----------------------------------------------------------/

// sticky-item remove
    $(".sticy-x").click(function(){
        $(".sticky-item").addClass("sticky-item-removed");
    });
// ----------------------------------------------------------/

// price cart chenges 
    $(".price-green-text").click(function(){
        $(".home-sec10 .price-cart").addClass("some-changes");
    });

    $(".price-red-text").click(function(){
        $(".home-sec10 .price-cart").removeClass("some-changes");
    });
// ----------------------------------------------------------/

// before_after 
    $(window).load(function() {
        $("#before_after").twentytwenty();
    });
// ----------------------------------------------------------/

  });