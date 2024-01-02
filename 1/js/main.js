let mobileMenuActive = false;
let mobileMenuAnim = false;
let $mobileMenu = $('.mobile-menu');

function toggleMobileMenu(bool){
    $('.mobile__fade').stop(true);
    $('.mobile__menu-block').stop(true,true);

    if (bool == true){
        $mobileMenu.show();

        $('.mobile__fade').animate({opacity: 0.5},300);
        $('.mobile__menu-block').animate({right: '0'}),300;
        $('.extra__content>*').css('zIndex',-1);

        mobileMenuActive = true;
    }
    else {
        $('.mobile__fade').animate({opacity: 0},400);
        $('.mobile__menu-block').animate({right: '-100%'},400); 
        $('.extra__content>*').css('zIndex',0);

        mobileMenuActive = false;
    }
}

$(document).ready(function(){
    $('#burger').click(function(){
        if (mobileMenuAnim == true) return;
        mobileMenuAnim = true;
        
        if (mobileMenuActive) {
            toggleMobileMenu(false);
            setTimeout(function(){
                mobileMenuAnim = false;
                $mobileMenu.hide();
            },400)
        }
        else {
            toggleMobileMenu(true);
            setTimeout(function(){
                mobileMenuAnim = false;
            },400)
        }
    })
})

$(window).on('resize',function(){
    if ($(window).width() > 600) {
        toggleMobileMenu(false);
        mobileMenuAnim = false;
    }
})