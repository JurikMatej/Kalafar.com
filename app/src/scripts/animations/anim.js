///////////////////////////////////
/* JavaScript Handled Animations */
///////////////////////////////////

/*  Setup  */
$.animations = {
    // Animated props / elements
    props: {
        app_window: window,
        mw3_menu: $('.mw3-app .mw3-menu'),
        mw3_options: $('.mw3-app .mw3-options'),
        mw3_mobile_menu_toggler: $('.mw3-mobile-nav #mw3-menu-toggler')
    },

    // Helpers
    fn: {
        log(str) {
            console.log(str);
        }
    },

    // Open/Close menu
    menuSlider() {
        if (props.mw3_menu.css('display') === 'none') {
            // Show Menu + Hide Options
            props.mw3_menu.fadeIn(300);
            props.mw3_options.fadeOut(300);
        }
        else {
            // Hide Menu + Show Options
            props.mw3_menu.fadeOut(300);
            props.mw3_options.fadeIn(300);
        }
    },
    // Make sure menu is open when going from mobile view to desktop view
    showMenuWhenOnDesktop() {
        let isMenuOpen = (props.mw3_menu.css('display') !== 'none');
        if ( !isMenuOpen && props.app_window.innerWidth >= 990) {
            menuSlider();
        }
    }
};

/* Load from global jQuery Namespace */
const { fn } = $.animations; // Helper functions used in animation functions
const { props } = $.animations; // Elements animations are working with
const { menuSlider, showMenuWhenOnDesktop } = $.animations; // Animations themselves (functions)

/*  Event Listeners (Specific animations)  */
props.mw3_mobile_menu_toggler.on('click', menuSlider);
props.app_window.addEventListener('resize', showMenuWhenOnDesktop);