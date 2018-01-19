$(document).ready(function(){
    $("#btnContainer").hide();

});


//Repopulate Organizing services page
function orgRepop(){

    let page = `
   <section id="infoContainer">
    <div class="sidePic">
        <div class="pictureBlock">        
            <img class="imageBlock" height="875px"src="../images/body.jpg">
        </div>
    </div> 
    <div class="infoSec">
        <section class="text">
            <h1 class="textTitle"><span >Title</span></h1>
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
                <h4 class="twoPTitle"> 3 rd paragraph title </h2>
                    <p class="twoPara"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
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
function cleanRepop(){

    let page = `
   <section id="infoContainer">
    <div class="sidePic">
        <div class="pictureBlock">        
            <img class="imageBlock" height="875px"src="../images/body.jpg">
        </div>
    </div> 
    <div class="infoSec">
        <section class="text">
            <h1 class="textTitle"><span >Title</span></h1>
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
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".closetOrg").hide();
    console.log("Working");
    cleanRepop();
});
$(".inOutOrg").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".inOutOrg").hide();
    console.log("Working");
    cleanRepop();
});
$(".document").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".document").hide();
    console.log("Working");
    cleanRepop();
});
$(".train").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".train").hide();
    console.log("Working");
    cleanRepop();
});
$(".garage").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".garage").hide();
    console.log("Working");
    cleanRepop();
});
$(".kitchenOrg").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".kitchenOrg").hide();
    console.log("Working");
    cleanRepop();
});
// Cleaning Images button clicks
$(".specClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".specClean").hide();
    console.log("Working");
    cleanRepop();
});
$(".regClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".regClean").hide();
    console.log("Working");
    cleanRepop();
});
$(".occServ").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".occServ").hide();
    console.log("Working");
    cleanRepop();
});
$(".consClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".consClean").hide();
    console.log("Working");
    cleanRepop();
});
$(".inOutClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".inOutClean").hide();
    console.log("Working");
    cleanRepop();
});
$(".deepClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".deepClean").hide();
    console.log("Working");
    cleanRepop();
});
$(".vacClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".vacClean").hide();
    console.log("Working");
    cleanRepop();
});
$(".greenClean").on("click", function () {
    $("#cleanCont").empty();
    $("#btnContainer").show();
    $(".greenClean").hide();
    console.log("Working");
    cleanRepop();
});