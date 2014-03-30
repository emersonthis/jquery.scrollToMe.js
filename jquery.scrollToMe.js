(function( $ ) {
 
    $.fn.scrollToMe = function(onCallback, offCallback, options) {
 
        // These are the defaults.
        var settings = $.extend({
            offsetTop : 0,
            offsetBottom : 0
        }, options );

        var offset = $(this).offset();
        var height = $(this).height();
        var bottom = height + offset.top;

        $(window).scroll ( function(event) {

            var docTop = $(document).scrollTop();
            /* don't allow docTop to be negative (from "bounce") */
            docTop = ( docTop >= 0 ) ? docTop : 0; 
            var belowTop = ( (offset.top - settings.offsetTop) <= docTop );
            var aboveBottom = ( (offset.top - settings.offsetBottom + height ) >= docTop );

            if ( belowTop && aboveBottom ) {
                return onCallback();
            } else {
                return offCallback();
            }

        });

        $(window).trigger('scroll');


    };
 
}( jQuery ));