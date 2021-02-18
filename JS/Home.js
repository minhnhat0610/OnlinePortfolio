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


//Change Icone when form input is focused
let inputFontSize = $('.contactMeForm input').css('font-size');
$('.contactMeForm input').focus(function(e){
    $('.contactMeForm input').prev().addClass('far');
    $('.contactMeForm input').prev().removeClass('fas');
    $(e.currentTarget).prev().addClass('fas');
    $(e.currentTarget).prev().removeClass('far');
    
    if($(e.currentTarget).css('border-style').toString() != 'none'){
        $(e.currentTarget).css({
            border: 'none',
            fontSize: inputFontSize.toString(),
            color: '#1d3557',
        })

        $(e.currentTarget).val("");
    }
})

$('.contactMeForm input').blur(function(){
    $('.contactMeForm input').prev().addClass('far');
    $('.contactMeForm input').prev().removeClass('fas');

})

$('.message textarea').focus(function(){
    $('.contactMeForm input').prev().addClass('far');
    $('.contactMeForm input').prev().removeClass('fas');
    $(this).prev().addClass('fas');
    $(this).prev().removeClass('far');

    if($('.message textarea').css('border-style').toString() != 'none'){
        $('.message textarea').css({
            border: 'none',
            fontSize: inputFontSize.toString(),
            color: '#1d3557',
        })

        $('.message textarea').val("");
    }

})

$('.message textarea').blur(function(){
    $('.contactMeForm input').prev().addClass('far');
    $('.contactMeForm input').prev().removeClass('fas');
    $(this).prev().addClass('far');
    $(this).prev().removeClass('fas');

})

// Click event for submit button on form

$('#submitButton').on('click',function(){
    console.log(CheckNameValidity());
    console.log(CheckEmailValidity());
    console.log(CheckMessageValidity());
})

let CheckNameValidity = ()=>{
    let text = $('#name').val();
    let letterOnly = /[a-zA-z]+$/;
    let Invalid = /Invalid/;
    if(!(letterOnly.test(text)) || Invalid.test(text)){
        $('#name').css({
            border: '0.5px solid red',
            fontSize: '1em',
            color: 'red'
        })
        $('#name').val('Invalid name');

        return false;
    }

    else return true;
}

let CheckEmailValidity = () =>{
    let email = $('#email').val();
    let validEmail = /\S+@\S+.\S+/;
    let Invalid = /Invalid/;
    if(!(validEmail.test(email)) || Invalid.test(email)){
        $('#email').css({
            border: '0.5px solid red',
            fontSize: '1em',
            color: 'red'
        })

        $('#email').val('Invalid email');

        return false
    }

    else return true
}

let CheckMessageValidity = () =>{
    let message = $('#message').val();
    let validMessage = /\S+/;
    let Invalid = /Invalid/;
    if(!(validMessage.test(message)) || Invalid.test(message)){
        $('#message').css({
            border: '0.5px solid red',
            fontSize: '1em',
            color: 'red'
        })

        $('#message').val('Invalid message');

        return false
    }

    else return true
}