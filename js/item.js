$( function() {

    $( ".article-images" ).magnificPopup( { 
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
        },
        zoom: {
            enabled: true,
            opener: function( openerElement ) {
                return openerElement.find( "img" );
            }
        },
        preload: [1,10]
     } );

} );