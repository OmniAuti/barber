
function appointmentTransition() {
      
      if ($(".appointment").hasClass('active-sect')) {
        // THIS IS FOR STYLISTIC REMOVAL OF SECTION
         $('.appointment').addClass('active-bye')
         setTimeout(() => {
            $('.appointment').removeClass('active-sect')
            $('.appointment').removeClass('active-bye')
    
         }, 500)
       } 
    }

function aboutTransition() {

        if ($('.about').hasClass('active-sect')) {
            // THIS IS FOR STYLISTIC REMOVAL OF SECTION
            $('.about').addClass('active-bye')
            setTimeout(() => {
                $('.about').removeClass('active-sect')
                $('.about').removeClass('active-bye')
            }, 500)
        }
    }

function galleryTransition() {

        if ($('.gallery').hasClass('active-sect')) {
            // THIS IS FOR STYLISTIC REMOVAL OF SECTION
            setTimeout(() => {
                $('.gallery').removeClass('active-sect')
            }, 500)
        }
    }

function heroCheck() {

    if ($('.appointment').hasClass('active-sect')) {
        $('.hero').addClass('active-hero')
    } else {
        setTimeout(() => {
            $('.hero').removeClass('active-hero')
        }, 750)
    }

    if ($('.about').hasClass('active-sect')) {
        $('.hero').addClass('active-hero')
    } else {
        setTimeout(() => {
            $('.hero').removeClass('active-hero')
        }, 750)
    }

    if ($('.gallery').hasClass('active-sect')) {
        $('.hero').addClass('active-hero')
    } else {
        setTimeout(() => {
            $('.hero').removeClass('active-hero')
        }, 750)
    }
}

$('#appointment').click(function() {
    $(this).toggleClass('active-link')
// TRANSITIONS
appointmentTransition()
aboutTransition()
galleryTransition()
// BRINGS UP CURRENT SECTION
    $('.appointment').addClass('active-sect');
// MAKES HERO VISIBLE OR NOT 
heroCheck()
// REMOVES OTHER SECTION ACTIVES
    $('#gallery').removeClass('active-link');
    $('#about').removeClass('active-link');

});

$('#gallery').click(function() {
    $(this).toggleClass('active-link')
// TRANSITIONS
appointmentTransition()
aboutTransition() 
galleryTransition()
// BRINGS UP CURRENT SECTION
    $('.gallery').addClass('active-sect');
// MAKES HERO VISIBLE OR NOT 
heroCheck()
// REMOVES OTHER SECTION ACTIVES
    $('#appointment').removeClass('active-link');
    $('#about').removeClass('active-link');   
});

$('#about').click(function() {
    $(this).toggleClass('active-link')
// TRANSITIONS
appointmentTransition()
aboutTransition() 
galleryTransition()
// BRINGS UP CURRENT SECTION
    $('.about').addClass('active-sect');
// MAKES HERO VISIBLE OR NOT 
heroCheck()
// REMOVES OTHER SECTION ACTIVES
    $('#appointment').removeClass('active-link');
    $('#gallery').removeClass('active-link');
});

// MODAL FUNCTIONS

$('#service').click(function() {
    $('.modal-service-cont').addClass('active-service-modal active-modal');
})

$('.service-radio').each(function() {
   
    $(this).click(function() {
        $('.modal-service-cont').removeClass('active-service-modal active-modal');
        $('#service p').html('Service Selected: ' + this.value)
    })
    
})

// CONVERT DATE AND TIME TO STRING FOR FORM ----------------------------
function convertDate() {
   
    var month = $('#month').val();
    var time = $('#time').val();
    var date = $('.active-date-reserve').text();

    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // ADJUST DATE FOR DISPLAY
    if (date == 1 || date == 21 || date == 31)
    {
        date = date + 'st'
    }
    else if (date == 2 || date == 22)
    {
        date = date + 'nd'
    }
    else if (date == 3 || date == 23)
    {
        date = date + 'rd'
    }
    else 
    {
        date = date + 'th'
    }
    // ADJUST TIME FOR DISPLAY
    const sliceTime = time.slice(0,2);
    let sliceTimeEnd = time.slice(3,5)
    let timeSub = parseInt(sliceTime);

    if (timeSub > 12)
    {
        timeSub = `${timeSub - 12}`;
        sliceTimeEnd = `${sliceTimeEnd} PM`
    }
    else if (timeSub == 12)
    {
        sliceTimeEnd = `${sliceTimeEnd} PM`
    }
    else
    {
        timeSub = `${timeSub}`
        sliceTimeEnd = `${sliceTimeEnd} AM`
    }

    var finalTime = `${timeSub}:${sliceTimeEnd}`

    $('.calendar').text(`Appointment: ${monthArr[month]} ${date} at ${finalTime}`)
    
}
// CLOSE CALENDAR ---------------------------------
$('.close-cal').click(function() {
    $('.modal-date-cont').removeClass('active-date-modal active-modal');
})


// DATE FUNCTIONALITY 

$('#date').click(function() {
    $('.modal-date-cont').addClass('active-date-modal active-modal');
})
// CONFIRM DATE CHECKS ----------------------------------------------
$('#confirm-date').on('click', function() {
    convertDate();
// CHECKS THAT ENTERED DATE IS VALID AND NO PAST
    const currentDate = new Date;
    var slicedTime = $('#time').val().slice(0,2);
    var numTime = parseInt(slicedTime)
// CHECK FOR CURRENT MONTH OR GREATER
    if (month < currentDate.getMonth())
    {
        alert('Time Travel is dangerous. Please select a date or time in the future.');
        return convertDate;
    }
// CHECK LESS THAN CURRENT DATE
    if (month == currentDate.getMonth() && $('.active-date-reserve').text() < currentDate.getDate())
    {
        alert('Time Travel is dangerous. Please select a date or time in the future.');
        return convertDate;
    }
// CHECK FOR SAME DAY TIME
    if (month <= currentDate.getMonth() && $('.active-date-reserve').text() == currentDate.getDate() && (numTime <= currentDate.getHours() + 1))
    {
        alert('Please select an appointment time that is at least an hour ahead of the current time.');
        return convertDate;
    }
 
        $('.modal-date-cont').removeClass('active-date-modal active-modal');
    })

// OTHER MODALS

    $('.drink-choices').click(function() {
        $('.modal-drinks-cont').addClass('active-drinks-modal active-modal');
    })

    $('.drink-radio').each(function() {
        $(this).click(function() {
            $('.modal-drinks-cont').removeClass('active-drinks-modal active-modal');
            $('#drink-choices p').html('Hops: ' + this.value)
        })
})

// FORM SUBMISSION ------------------------

$('#submit').click(function(e) {
    e.preventDefault()
})

// THIS WILL FIX MOBILE INPUT FOCUS KEYBOARD ISSUE

$('.focused-mobile').each(function() {
    $(this).blur(function() {
        $(window).scrollTop(0);
    })
})

$('select').each(function() {
    $(this).on('change', function() {
        $(window).scrollTop(0)
    })
})

// ADJUSTS THE GALLERY FROM USE DEPENDING ON SCREEN SIZE -----------------------

let i = 0;

$('#move-gallery-right').on('click', function() {


    var moveGallery = $('.gallery').width()

    i++

if ($(window).width() > 700) 
    {
        switch (i) {
            case 1:
                $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                $('#move-gallery-right').css('display', 'none') 
                $('#move-gallery-left').css('display', 'flex') 
                break;
        }
    } 
    else 
    {
        switch (i) {
                case 1:
                    $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                    $('#move-gallery-left').css('display', 'flex') 
                    break;
                case 2:
                    $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                    break;
                case 3:
                    $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                    break;
                case 4:
                    $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                    break;
                case 5:
                    $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                    $('#move-gallery-right').css('display', 'none')
                    break;
        }
    }

})



$('#move-gallery-left').on('click', function() {

    var moveGallery = $('.gallery').width()

    i--

    if ($(window).width() > 700) 
    {
     switch (i) {
         case 0:
            $('#move-gallery-left').css('display', 'none')
            $('#move-gallery-right').css('display', 'flex') 
            $('.gallery-holder').css('transform', 'translateX(0)')
             break;
        }
    }
    else 
    {
        switch (i) {
            case 0:
                $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                $('#move-gallery-left').css('display', 'none')
                break;
            case 1: 
                $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                break;
            case 2:
                $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                break;
            case 3:
                $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                break;
            case 4:
                $('.gallery-holder').css('transform', `translateX(-${i * moveGallery}px)`)
                $('#move-gallery-right').css('display', 'flex')
                break;
        }
           
    }
})

// KEEPS GALLERY IN CHECK FOR RESIZE 
$(window).resize(function() {
    $('.gallery-holder').css('transform', 'translateX(0%)')
    $('#move-gallery-left').css('display', 'none')
    $('#move-gallery-right').css('display', 'flex')

    i = 0;
})

// MOBILE BEFORE AFTER TOGGLE --------------------------

if ($(window).width() > 850) {
$('.img-holder').each(function() {
    $(this).mouseenter(function() {
        $(this).addClass('active-gallery-after')
    }).mouseleave(function() {
        $(this).removeClass('active-gallery-after')
    })
})
} 
else
{
    $('.img-holder').each(function() {
        $(this).click(function() {
            $(this).toggleClass('active-gallery-after')
        })
    })
}