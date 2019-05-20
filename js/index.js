$(document).ready(

    /******************* Menu sliding effect ********************/

    $(".menu-box:nth-child(1)").click(function() {
        $(this).find(".menu-box-arrow").toggleClass('rotated');
        $(this).find(".menu-sub").slideToggle();
    }))


$(window).on("load", function() {

    /******************* Reviews auto rotation ********************/

    var InfiniteRotator = {
        init: function() {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;

            //interval between items (in milliseconds)
            var itemInterval = 5000;

            //cross-fade time (in milliseconds)
            var fadeTime = 1000;

            //count number of items
            var numberOfItems = $('.helpCenterReview').length;

            //set current item
            var currentItem = 0;

            //show first item
            $('.helpCenterReview').eq(currentItem).fadeIn(initialFadeIn);

            //loop through the items		
            var infiniteLoop = setInterval(function() {
                $('.helpCenterReview').eq(currentItem).fadeOut(fadeTime);

                if (currentItem == numberOfItems - 1) {
                    currentItem = 0;
                } else {
                    currentItem++;
                }
                $('.helpCenterReview').eq(currentItem).fadeIn(fadeTime);

            }, itemInterval);
        }
    }

    InfiniteRotator.init();

    /******************* Popup ********************/

    if (localStorage.visit != '1' && localStorage.visit != '2') {
        localStorage.setItem('visit', '1');
    } else if (localStorage.visit == '1') {
        $('.modal').fadeIn();
        $('.fa-times-circle').click(function() {
            $('.modal').fadeOut();
            localStorage.setItem('visit', '2');
        })
        $(document).click(function(event) {
            //if you click on anything except the modal itself, close the modal
            if (!$(event.target).closest(".modal-container").length) {
                $("body").find(".modal").fadeOut();
                localStorage.setItem('visit', '2');
            }
        })
    }
})