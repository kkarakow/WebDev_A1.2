$(document).ready(function() {
    // console.log("in doc ready");

    myname = localStorage.getItem("myName");
    myid = localStorage.getItem("myID");
    mylogin = localStorage.getItem("myLogin");
    mycampus = localStorage.getItem("myCampus");
    myprogram = localStorage.getItem("myProgram");


    $(".myData").append(
        `
        <h1>My name is ${myname}</h1>
        <h2>My student number is ${myid}</h2>
        <h3>My login is ${mylogin}</h3>
        <h4>My campus is ${mycampus}</h4>
        <h5>My program is ${myprogram}</h5>
        `
    );

    $("h1:first").css(
        {"color": "#EF476F", 
        "font-family": "Arial",
        "font-size": "30px",
        "text-decoration-line": "underline",
        "text-decoration-style": "wavy"}
    );
    $("h2:first").css(
        {"color": "#FFD166", 
        "font-family": "Courier New",
        "font-style": "italic",
        "font-size": "25px"}
    );
    $("h3:first").css(
        {"color": "#06D6A0", 
        "font-family": "Helvetica",
        "font-size": "20px",
        "font-variant": "small-caps"}
    );
    $("h4:first").css(
        {"color": "#118AB2", 
        "font-family": "Times New Roman",
        "font-size": "15px",
        "text-decoration": "underline"}
    );
    $("h5:first").css(
        {"color": "#073B4C", 
        "font-family": "Lucida Console",
        "font-size": "10px"}
    );

}); // end of doc ready

function goToIndex() {
	location.assign("./index.html");
}