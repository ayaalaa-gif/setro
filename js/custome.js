$(function() {
    $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    }); 
    
    $(".btn-close, .screen-overlay").click(function(e){
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 

    $('#gallery').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $('#products').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
    $('#article-items').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('#fields').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $( "#datepicker" ).datepicker();
    $('.order-sib').hide().first().show();
    $(".order-container").click(function() {
        $('.order-item').removeClass('order-active');
        $(this).children('.order-item').addClass('order-active');
        $('.order-sib').hide();
        $(this).siblings('.order-sib').show();
    })
    $('.prices-item').click(function() {
        $('#myModal').show();
    })
    $("span.close").click(function() {
        $('#myModal').hide();
    })
    $('a.order-pro').click(function(e) {
        e.preventDefault();
        $('#myModal').show();
    })
    $("span.close").click(function() {
        $('#myModal').hide();
    })
})
var modal = document.getElementById("myModal");

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }