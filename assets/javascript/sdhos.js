$(document).ready(function(){
    $("#btnContainer").hide();

});
//Object for data to be inputted into organizing and cleaning page
input ={
    closet : { title: "Closet" , 
               p1Title:"", p1:"", p2Title:"", p2:"", p3Title:"", p3:""},
    moveOrg: { title: "Move-In Move-Out",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    doc: { title: "Document",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    train: { title: "Train Housekeepers",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    garage: { title: "Garage",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    kitchen: { title: "Kitchen",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    //Objects for cleaning page
    special: { title: "Special Clean",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    regular: { title: "Regular ",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    occasional: { title: "Occasional",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    moveCle: { title: "Move-In Move-Out",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },
    deep: { title: "Deep Clean",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
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
    constr: { title: "Construction Clean",
        p1Title: "",
        p1: "",
        p2Title: "",
        p2: "",
        p3Title: "",
        p3: "",
    },

}


//Repopulate Organizing services page
function orgRepop(title){

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
                <h4 class="onePTitle"> 1 st Paragraph title </h2>
                    <p class="onePara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. </p>
            </div>
            <div class="twoSec">
                <h4 class="twoPTitle"> 2 nd paragraph title </h2>
                    <p class="twoPara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.</p>
            </div>
            <div class="threeSec">
                <h4 class="threePTitle"> 3 rd paragraph title </h2>
                    <p class="threePara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. </p>
            </div>
              <button class="btn contactBtn" href="contact.html"> Contact Me </button>

        </section>
    </div>
</section>
        `
    $("#orgCont").html (page);

}



//Repopulate Cleaning services page
function cleanRepop(title){

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
                <h4 class="onePTitle"> 1 st Paragraph title </h2>
                    <p class="onePara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. </p>
            </div>
            <div class="twoSec">
                <h4 class="twoPTitle"> 2 nd paragraph title </h2>
                    <p class="twoPara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.</p>
            </div>
            <div class="threeSec">
                <h4 class="threePTitle"> 3 rd paragraph title </h2>
                    <p class="threePara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. </p>
            </div>
              <button class="btn contactBtn" href="contact.html"> Contact Me </button>

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
    console.log(title);
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".closetOrg").hide();
    console.log("Working");
    orgRepop(title);
});
$(".inOutOrg").on("click", function () {
    var title = input.moveOrg.title;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".inOutOrg").hide();
    console.log("Working");
    orgRepop(title);
});
$(".document").on("click", function () {
    var title = input.doc.title;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".document").hide();
    console.log("Working");
    orgRepop(title);
});
$(".train").on("click", function () {
    var title = input.train.title;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".train").hide();
    console.log("Working");
    orgRepop(title);
});
$(".garage").on("click", function () {
    var title = input.garage.title;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".garage").hide();
    console.log("Working");
    orgRepop(title);
});
$(".kitchenOrg").on("click", function () {
    var title = input.kitchen.title;

    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".kitchenOrg").hide();
    console.log("Working");
    orgRepop(title);
});
// Cleaning Images button clicks
$(".specClean").on("click", function () {
    var title = input.special.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".specClean").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".regClean").on("click", function () {
    var title = input.regular.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".regClean").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".occServ").on("click", function () {
    var title = input.occasional.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".occServ").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".consClean").on("click", function () {
    var title = input.moveCle.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".consClean").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".inOutClean").on("click", function () {
    var title = input.deep.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".inOutClean").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".deepClean").on("click", function () {
    var title = input.vaca.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".deepClean").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".vacClean").on("click", function () {
    var title = input.green.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".vacClean").hide();
    console.log("Working");
    cleanRepop(title);
});
$(".greenClean").on("click", function () {
    var title = input.constr.title;
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".greenClean").hide();
    console.log("Working");
    cleanRepop(title);
});