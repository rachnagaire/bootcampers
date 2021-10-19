

        $(function () {

            var link = $('.list-session-tags .list-link');
            
            var headerHeight = $('#mainHeader').outerHeight();
            var bannerHeight = $('.hero-section').outerHeight()
            var aboutUsHeight = $('.section-aboutUs').outerHeight()
            
            // Move to specific section when click on menu link
            link.on('click', function (e) {
                debugger

                var target = $($(this).attr('href'));
                $(target).parents('.list-group-item').addClass('active');
                let scrollHeight = headerHeight;

                if ($(this).parents('li').is(':first-child')) {

                    scrollHeight += (bannerHeight + aboutUsHeight)
                }
                $('html, body').animate({

                    scrollTop:$(target).offset().top - scrollHeight
                }, 600);
                $(this).parents('.list-group-item').addClass('active');
                e.preventDefault();
            });

            // Run the scrNav when scroll
            $(window).on('scroll', function () {
                scrNav();
            });

            // scrNav function
            // Change active dot according to the active section in the window
            function scrNav() {
                var headerHeight = $('#mainHeader').outerHeight();
                //var bannerHeight = $('[data-template-name="hero-banner-search"]').outerHeight();

                var sTop = $(window).scrollTop();
                $('.session-item').each(function () {
                    var id = $(this).attr('id'),

                        offset = $(this).offset().top - headerHeight,
                        height = $(this).height();
                    if (sTop >= offset && sTop < offset + height) {
                        link.parents('li').removeClass('active');
                        $('.list-session-tags ').find('[data-scroll="' + id + '"]').parents('li').addClass('active');
                    }
                });
            }
            //scrNav();
        });
        $(window).scroll(function(){
            if($(window).scrollTop()>=100){
                $('#mainHeader').addClass('is-sticky');
            }
            else{
                $('#mainHeader').removeClass('is-sticky');

            }
        })
   