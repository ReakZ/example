// 


$(document).ready(function (){
'use strict';
$(window).scroll(function(){
    'use strict';
    if($(window).scrollTop()<80){
        $('.navbar').css({
            'margin-top':'-100px',
            'opacity':'0'
        });

        $('.navbar-default').css({
            'color':'red',
            'background-color':'rgba(59,59,59,0)'
        })
    }
    else{
        $('.navbar').css({
            'margin-top':'0px',
            'opacity':'1'
        })

        $('.navbar-default').css({
            
            'background-color':'rgba(59,59,59,0.7)',
            'border-color':'#444'

        })

        $('.navbar-brand img').css({
            'height':'35px',
            'padding-top':'0px'
        })

        $('.navbar-nav >li >a').css({
            'padding-top':'15px'
        })
    }
})



})


// active menu

$(document).ready(function (){
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active")


    });
});

// highlight menu item on scroll

$(document).ready(function (){
    'use strict';
    $(window).scroll(function(){

    $('section').each(function(){
        'use strict';
        var bb = $(this).attr("id");
        var hei= $(this).outerHeight();
        var grttop = $(this).offset().top - 70;
        if($(window).scrollTop()>grttop && $(window).scrollTop()< grttop +hei){
            

            $(".navbar-nav li a[href='#"+bb+"']").parent().addClass("active")
            $("#start").removeClass("active")
        }
        else{
            $(".navbar-nav li a[href='#"+bb+"']").parent().removeClass("active")
            
            $("#start").parent().removeClass("active")
        }
    });
});

// Auto padding to header

// $(document).ready(function (){
//     'use strict';
//     setInterval(function (){
//         console.log('bip')
//         'use strict';
//         var windowHeight =$(window).height();
//         var containerHeight = $(".container-header").height()
//         var padTop = windowHeight -containerHeight
//         $(".container-header").css({
//             'padding-top':Math.round(padTop/2)+'px',
//             'padding-bottom':Math.round(padTop/2)+'px'
//         },5000)
//     })
// })
 });
