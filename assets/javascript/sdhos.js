$(document).ready(function(){
    $("#btnContainer").hide();

});
//Hamburger jquery toggle action
$('#nav-toggle').on('click', function () {
    this.classList.toggle('active');
});
//toggle nav ul
$('#nav-toggle').click(function () {
    $('nav ul').toggle();
    $("nav ul li a").css({"background": "black"})
});

//Nav animation from window scroll and resize
$(document).on("scroll", function () {

    if ($(document).scrollTop() >= 75) {
        $("header").removeClass("large").addClass("small");
        // $("nav").addClass("navPad");
        $("navLink").css({"margin-top": "2px","line-height": "45px"});
        $(".logo").css({"height": "60px"});
        $(".brand").css({"margin-top": "5px"});
        $(".nav-mobile").css({"margin": "0px 30px 0px 15px"});
        $(".mobileList").css({"margin": "0px 15px 0px 0px"});
        // $("nav").css({"padding": "65px 0px 15px"});



        
    } else {
        $("header").removeClass("small").addClass("large");
        // $("nav").removeClass("navPad")
        $("navLink").css({"margin": "15px","line-height": "70px"});
        $(".logo").css({"height": "120px"});
        $(".brand").css({"margin-top": "30px"});
        $(".nav-mobile").css({"margin": "15px 30px 15px 15px"});
        $(".mobileList").css({"margin": "0px 15px 0px 0px"});
        // $("nav").css({"padding": "120px 0px 15px"});


    }

});
// function navResize(){
//     if($(document).width() < 900){

//     }
// }
//scroll to top function on button click
var scrollTop = function(){
    $(function () {
      //  $('html').scrollTop(0);
      $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
}




//Object for data to be inputted into organizing and cleaning page
input ={
    closet : {  title: "Closet" , 
                p1Title:"Do you need more closet space for you clothes?", 
                p1:"You can spend precious time looking for things or you can find a place for everything.  You will always know exactly where to look. ", 
                p2Title:"Typical projects include : ", 
                p2:"We help you decide what to remove and what to keep, free up space, make everything visible and accessible. Making closets and storage areas functional, creating a warm welcoming space that's a sanctuary.", 
                p3Title:"", 
                p3:"Contact us for a consultation. We have the perfect project for you."},
    moveOrg: { title: "Moving",
                p1Title: "Like any big project, an organized move begins with a plan.",
                p1: "Make it an easier task by hiring a professional organizer who can help solve problems before they arise and make your moving process less stressful.",
                p2Title: "Typical projects include :",
                p2: "Creating a personalized moving checklist and timeline, purchase packing supplies, rent a moving truck and making arrangements to connect utilities.",
                p3Title: "Need Help?",
                p3: "Call a professional organizer. When everything is done, go enjoy your new home and neighborhood.",
    },
    doc: {      title: "Document",
                p1Title: "Do you feel overwhelmed by paperwork and documents?",
                p1: "Many people who work in their homes are so busy serving their clients and customers, they can't find the extra time to review and organize their paperwork. Hiring a professional organizer will save your precious time to focus on what really matter for your job and life.",
                p2Title: "Typical projects include : ",
                p2: "Getting control of your paperwork, the desk top, files, bookshelves, photo storage, crafting a personal creative space and improving the work flow of your office.",
                p3Title: "",
                p3: "If you need help with paperwork organizing and home document management, please contact us to a consultation.",
    },
    train: {    title: "Train Housekeepers",
                p1Title: "",
                p1: "",
                p2Title: "",
                p2: "",
                p3Title: "",
                p3: "",
    },
    garage: {   title: "Garage",
                p1Title: "You plan to organize your garage on the weekend.",
                p1: "On a sunny Saturday morning, you grab a cup of coffee, open the door with gusto and determined to organize by the end of the day. But you do not know where to begin. You start getting things off and realize that you should be wasting your time with moments of pleasure. A disorganized and cluttered garage not only takes up a lot of physical space but mental space too. Enjoy your life and leave the hard work with us.",
                p2Title: "Typical projects include : ",
                p2: " Store and protect your car, help you find and put away your things easier and faster. Free up space, improve the efficiency of home repair/maintenance projects. Sorting through items, gifting and discarding. Developing a storage system that fits your space, storage organizing and marking containers.",
                p3Title: "",
                p3: "For more information, please contact us for a consultation.",
    },
    kitchen: {  title: "Kitchen",
                p1Title: "",
                p1: "",
                p2Title: "",
                p2: "",
                p3Title: "",
                p3: "",
    },
    //Objects for cleaning page
    special: { title: "Special Clean",
        p1Title: "Have you had to clean up after your special event before?",
        p1: "For those who have done this before, they know how exhausting it can be. Special events tend to produce a very special kind of mess. Dont worry just hire our cleaning company to clean up after your next party and we will take care of the mess.",
        p2Title: "Want to make a great impression?",
        p2: "If you're hosting people who you'd like to make a great impression on such as coworkers or in laws. In that case, San Diego Housekeeping and Organzing Solutions can be your cleaning crew to simply clean and maintain your party.",
        p3Title: "We have the perfect plan for you.",
        p3: "We can transform your party mess into the beautiful residence it was before the party. Our services include cleaning of the tables and food prep areas, garbage removal, vacuum and mop floors, wash dishes and more ",
    },
    regular: { title: "Regular ",
        p1Title: "We are perfect for your needs.",
        p1: "When you live in San Diego, you live in a vacation town. Don't waste your time at home cleaning up. Go out and enjoy life. Leave your house in good hands. We will make it sparkle.",
        p2Title: "Professional Cleaning",
        p2: " We offer a trusted and equipped team near you. We will clean based on your needs.",
        p3Title: "Customized cleaning",
        p3: "W work with custom checklists, where you tell us what needs to be cleaned. We will carefully detail-clean your kitchen, bathrooms, living areas, and sleeping areas.",
    },
    occasional: { title: "Occasional",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    moveCle: { title: "Moving",
        p1Title: "Are you excited for your move?",
        p1: "Let us take care of the exhausting part of this job. We're the experts who will remove the burden of pre and post move cleaning from your to-do list. Our team is trained and equipped for that. ",
        p2Title: "Do you want a fresh start?",
        p2: " Let us make sure that everything is sparkling clean. Cleaning includes: Dust(everything), kitchen appliances, clean cabinets, sinks and countertops. Scrub toilets, shower and bathtubs. Wipe down baseboards, vacuum and sweep all floors. ",
        p3Title: "Move Out doesn't have to be a pain.",
        p3: "Cleaning includes: Dust(everything), kitchen appliances, clean cabinets, sinks and countertops. Scrub toilets, shower and bathtubs. Wipe down baseboards, vacuum and sweep all floors.",
    },
    deep: { title: "Deep Clean",
        p1Title: "The gnitty gritty.",
        p1: "The deep clean service option is a comprehensive top-to-bottom cleaning of your home. A deep clean includes all the services of a regular clean but with more attention to detailed areas. You may have forgotten to clean up over time. ",
        p2Title: "We are the best choice for this job.",
        p2: "Deep Cleaning includes: dusting and washing of all reachable surfaces, wiping the outside of kitchen appliances & cabinets. Basic cleaning of the bathrooms, and vacuuming and mopping of all the floors. We also tailor cleanings to what you want to get cleaned.",
        p3Title: "",
        p3: "",
    },
    vaca: { title: "Vacation Clean",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    green: { title: "Green Clean",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
}


//Repopulate Organizing services page
function orgRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree) {

    let page = `
   <section id="infoContainer">
    <div class="sidePic">
        <div class="pictureBlock">        
            <img class="imageBlock" height="875px"src="../images/body.jpg">
        </div>
    </div> 
    <div class="infoSec">
        <section class="text">
            <h1 class="textTitle"><span>${title}</span></h1>
            <div class="oneSec">
                <h4 class="onePTitle">${p1Tit} </h2>
                    <p class="onePara"> ${pOne} </p>
            </div>
            <div class="twoSec">
                <h4 class="twoPTitle">${p2Tit} </h2>
                    <p class="twoPara"> ${pTwo}</p>
            </div>
            <div class="threeSec">
                <h4 class="threePTitle">${p3Tit} </h2>
                    <p class="threePara">${pThree} </p>
            </div>
              <button class="btn contactBtn" href="contact.html"> Contact Me </button>

        </section>
    </div>
</section>
        `
    $("#orgCont").html (page);

}



//Repopulate Cleaning services page
function cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree){

    let page = `
   <section id="infoContainer">
    <div class="sidePic">
        <div class="pictureBlock">        
            <img class="imageBlock" height="875px"src="../images/body.jpg">
        </div>
    </div> 
    <div class="infoSec">
        <section class="text">
            <h1 class="textTitle"><span >${title}</span></h1>
            <div class="oneSec">
                <h4 class="onePTitle">${p1Tit} </h2>
                    <p class="onePara">${pOne}</p>
            </div>
            <div class="twoSec">
                <h4 class="twoPTitle"> ${p2Tit} </h2>
                    <p class="twoPara"> ${pTwo}</p>
            </div>
            <div class="threeSec">
                <h4 class="threePTitle">${p3Tit}</h2>
                    <p class="threePara">${pThree} </p>
            </div>
              <button class="btn contactBtn" onclick="window.location.href='contact.html'"> Contact Me </button>

        </section>
    </div>
</section>
        `
    $("#cleanCont").html(page);

}
//Front page cleaning and organizing buttons

//Organizing Images button clicks
$(".closetOrg").on("click", function () {
    var title = input.closet.title;
    var p1Tit = input.closet.p1Title;
    var pOne = input.closet.p1;
    var p2Tit = input.closet.p2Title;
    var pTwo = input.closet.p2;
    var p3Tit = input.closet.p3Title;
    var pThree = input.closet.p3;
    console.log(title);
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".closetOrg").hide();
    scrollTop();
    orgRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".inOutOrg").on("click", function () {
    var title = input.moveOrg.title;
    var p1Tit = input.moveOrg.p1Title;
    var pOne = input.moveOrg.p1;
    var p2Tit = input.moveOrg.p2Title;
    var pTwo = input.moveOrg.p2;
    var p3Tit = input.moveOrg.p3Title;
    var pThree = input.moveOrg.p3;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".inOutOrg").hide();
    scrollTop();
    orgRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".document").on("click", function () {
    var title = input.doc.title;
    var p1Tit = input.doc.p1Title;
    var pOne = input.doc.p1;
    var p2Tit = input.doc.p2Title;
    var pTwo = input.doc.p2;
    var p3Tit = input.doc.p3Title;
    var pThree = input.doc.p3;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".document").hide();
    scrollTop();
    orgRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".train").on("click", function () {
    var title = input.train.title;
    var p1Tit = input.train.p1Title;
    var pOne = input.train.p1;
    var p2Tit = input.train.p2Title;
    var pTwo = input.train.p2;
    var p3Tit = input.train.p3Title;
    var pThree = input.train.p3;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".train").hide();
    scrollTop();
    orgRepop(tititle, p1Tit, pOne, p2Tit, pTwo, p3Tit,pThreetle);
});
$(".garage").on("click", function () {
    var title = input.garage.title;
    var p1Tit = input.garage.p1Title;
    var pOne = input.garage.p1;
    var p2Tit = input.garage.p2Title;
    var pTwo = input.garage.p2;
    var p3Tit = input.garage.p3Title;
    var pThree = input.garage.p3;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".garage").hide();
    scrollTop();
    orgRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".kitchenOrg").on("click", function () {
    var title = input.kitchen.title;
    var p1Tit = input.kitchen.p1Title;
    var pOne = input.kitchen.p1;
    var p2Tit = input.kitchen.p2Title;
    var pTwo = input.kitchen.p2;
    var p3Tit = input.kitchen.p3Title;
    var pThree = input.kitchen.p3;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".kitchenOrg").hide();
    scrollTop();
    orgRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
// Cleaning Images button clicks
$(".specClean").on("click", function () {
    var title = input.special.title;
    var p1Tit = input.special.p1Title;
    var pOne = input.special.p1;
    var p2Tit = input.special.p2Title;
    var pTwo = input.special.p2;
    var p3Tit = input.special.p3Title;
    var pThree = input.special.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".specClean").hide();
    scrollTop();    
    cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".regClean").on("click", function () {
    var title = input.regular.title;
    var p1Tit = input.regular.p1Title;
    var pOne =  input.regular.p1;
    var p2Tit= input.regular.p2Title;
    var pTwo = input.regular.p2;
    var p3Tit= input.regular.p3Title;
    var pThree= input.regular.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".regClean").hide();
    scrollTop();
    cleanRepop(title,p1Tit,pOne,p2Tit,pTwo,p3Tit,pThree);
});
$(".occServ").on("click", function () {
    var title = input.occasional.title;
    var p1Tit = input.occasional.p1Title;
    var pOne = input.occasional.p1;
    var p2Tit = input.occasional.p2Title;
    var pTwo = input.occasional.p2;
    var p3Tit = input.occasional.p3Title;
    var pThree = input.occasional.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".occServ").hide();
    scrollTop();
    cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});

$(".inOutClean").on("click", function () {
    var title = input.moveCle.title;
    var p1Tit = input.moveCle.p1Title;
    var pOne = input.moveCle.p1;
    var p2Tit = input.moveCle.p2Title;
    var pTwo = input.moveCle.p2;
    var p3Tit = input.moveCle.p3Title;
    var pThree = input.moveCle.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".inOutClean").hide();
    scrollTop();
    cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".deepClean").on("click", function () {
    var title = input.deep.title;
    var p1Tit = input.deep.p1Title;
    var pOne = input.deep.p1;
    var p2Tit = input.deep.p2Title;
    var pTwo = input.deep.p2;
    var p3Tit = input.deep.p3Title;
    var pThree = input.deep.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".deepClean").hide();
    scrollTop();
    cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".vacClean").on("click", function () {
    var title = input.vaca.title;
    var p1Tit = input.vaca.p1Title;
    var pOne = input.vaca.p1;
    var p2Tit = input.vaca.p2Title;
    var pTwo = input.vaca.p2;
    var p3Tit = input.vaca.p3Title;
    var pThree = input.vaca.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".vacClean").hide();
    scrollTop();
    cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});
$(".greenClean").on("click", function () {
    var title = input.green.title;
    var p1Tit = input.green.p1Title;
    var pOne = input.green.p1;
    var p2Tit = input.green.p2Title;
    var pTwo = input.green.p2;
    var p3Tit = input.green.p3Title;
    var pThree = input.green.p3;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".greenClean").hide();
    scrollTop();
    cleanRepop(title, p1Tit, pOne, p2Tit, pTwo, p3Tit, pThree);
});