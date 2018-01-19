$(document).ready(function(){
    $("#btnContainer").hide();

});


//Repopulate Organizing services page
function orgRepop(){

    let page = `
   <div id = "infoContainer">
       <div class = "sidePic">
            <img id = "picture" src = "http://via.placeholder.com/300x500">
       </div> 
       <div class = "infoSec">
            <section>
                <h1> Title that changes depending on which button is clicked </h1>
            <div>
            <h4> 1 st Paragraph title </h2> 
            <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
   ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia
   voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
   Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia </p> 
            </div> 
            <div>
                <h4> 2 nd paragraph title </h2> 
                <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
   ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia
   voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
   Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia </p> 
   </div> 
   <div>
       <h4> 3 rd paragraph title </h2> 
       <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
   ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia
   voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
   Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia </p>
    </div> 
    </section> 
    <button class = "btn btn-class" href = "contact.html"> Contact Me </button> 
    </div> 
    </div>  
        `
    $("#orgCont").html (page);

}



//Repopulate Cleaning services page
function cleanRepop(){

}
//Front page cleaning and organizing buttons

//Organizing Images button clicks
$(".closetOrg").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".closetOrg").hide();
    console.log("Working");
    orgRepop();
});
$(".inOutOrg").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".inOutOrg").hide();
    console.log("Working");
    orgRepop();
});
$(".document").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".document").hide();
    console.log("Working");
    orgRepop();
});
$(".train").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".train").hide();
    console.log("Working");
    orgRepop();
});
$(".garage").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".garage").hide();
    console.log("Working");
    orgRepop();
});
$(".kitchenOrg").on("click", function () {
    $("#orgCont").empty();
    $("#btnContainer").show();
    $(".kitchenOrg").hide();
    console.log("Working");
    orgRepop();
});