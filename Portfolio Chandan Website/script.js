$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Java backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Java backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });
});



var btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {

    e.preventDefault()
    // console.log("hi");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('mess').value;
    var subject = document.getElementById('subject').value;

    var body = "name: " + name + "<br/> email: " + email + "<br/> subject: " + subject + 
    "<br/> message: " + message;
    // console.log(body);
    Email.send({
        // d99b24ac-1392-4c02-9778-b87953649482
        // 2101f199-84aa-443b-9b91-99e6d37ce060
       secureToken :"d99b24ac-1392-4c02-9778-b87953649482",
        Host : "smtp.elasticemail.com",
        Username : "chandan0521@gmail.com",
        Password : "843E33BA173DC9F0C6FC3D117F8996E173ED",
        // "knbsxhynqdjzupwx",843E33BA173DC9F0C6FC3D117F8996E173ED
        To : 'chandan0521@gmail.com',
        From : 'chandan0521@gmail.com',
        Subject : subject,
        Body : body
    }).then(
      message => alert("message sent")
    );
})