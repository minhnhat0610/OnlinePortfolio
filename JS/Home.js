$(document).ready(function(){

//Animation for sliders of profile photo
$('.slider1').css({
    transform: 'translateX(0%)'
})

$('.slider2').css({
    transform: 'translateX(0%)',
})

$('.innerContainer').css({
    transform: 'translateX(0%)',
    opacity: 1
})

// Animmation for Biography
$('.biography article').css({
    opacity: 1,
})
$('.decbar1').css({
    transform: 'translateY(0%)',
    opacity: 1,
})

$('.decbar2').css({
    transform: 'translateY(0%)',
    opacity: 1,
})


// Menu icon Click event for mobile devices
    let menuClose = true;

    //Reveal the mobile navigation panel
    $('.menuIcon').on('click',function(){
        if(menuClose){
            $('.mobileNavPanel').css({
                transform: 'translateX(0%)',
            })
    
            $('.menuIcon').removeClass('fa-bars');
            $('.menuIcon').addClass('fa-times');
            menuClose = false;

            // Reveal the links
            let delayTime = 0
            $('.mobileNavPanel .navLinks').each(function(){
                $(this).css({
                    opacity: 1,
                    transform: 'translateX(0em)',
                    transition: 'all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000)',
                    transitionDelay: delayTime.toString() + 'ms'
                });

                delayTime += 100;
            })
        }

        else{
            $('.mobileNavPanel').css({
                transform: 'translateX(100%)',
            })
    
            $('.menuIcon').removeClass('fa-times');
            $('.menuIcon').addClass('fa-bars');
            menuClose = true;
            // Hide the links
            $('.mobileNavPanel .navLinks').each(function(){
                $(this).css({
                    opacity: 0,
                    transform: 'translateX(5em)',
                    transition: 'all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000) 500ms',
                });

            })
        }

        
        
    })

    
})

//Hover event for Education content
$('.content').on('mouseenter', function(e){
    let contentDivHeight = $(e.currentTarget).height();
    let backgroundHeight = parseInt(contentDivHeight) ;
    let background = $(e.currentTarget).find('.background');
    background.css({
        height: backgroundHeight.toString() + 'px',
        transform:'translateX(0.5em)'
    })
})

$('.content').on('mouseleave', function(e){
    let background = $(e.currentTarget).find('.background');
    background.css({
        height: '0.5em',
        transform:'translateX(0%)'
    })
})