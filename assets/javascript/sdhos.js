//Repopulate Organizing services page
function orgRepop(){

    let page = `
    <div id="infoContainer">
        <div id="sidePic">
            <
        </div>
        <div id="infoSec">
    </div>
    <div id="btnContainer">
        <div class ="row">
            <div class="col-md-4">
                <p>insert btn image here</p>
            </div>
            <div class="col-md-4">
                <p>insert btn image here</p>
            </div>
            <div class="col-md-4">
                <p>insert btn image here</p>
            </div>
        </div>
        <div class ="row">
            <div class="col-md-2"></div>
            <div class="col-md-4">
                <p>insert btn image here</p>
            </div>
            <div class="col-md-4">
                <p>insert btn image here</p>
            </div>
            <div class="col-md-2"></div>
        </div>           
    </div>        
        `
    $("#orgCont").append(page);

}



//Repopulate Cleaning services page
function cleanRepop(){

}

//Organizing Images button clicks
$("#closetOrg").on("click", function () {
    $("#orgCont").empty();
    console.log("Working");
    orgRepop();
});