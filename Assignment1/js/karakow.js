// variables
var myname;
var myid;
var mylogin;
var mycampus;
var myprogram;
var newRec;
var aboutMe;

/*  JSON        Class
    myName      myname
    myID        myid
    myLogin     mylogin
    myCampus    mycampus
    myProgram   myprogram
*/
// classes

// Class for Program/Term 
class Term {
    constructor (termNumber, termName) {
        this.termNumber=termNumber;
        this.termName=termName;
    }
} // end of class Term

// Class for Course
class Course {
    constructor (tNumber, courseType, courseCode,  courseImage){
        this.tNumber=tNumber;
        this.courseType=courseType;
        this.courseCode=courseCode;
        this.courseImage=courseImage;
    }
} // end of Course Class

$(document).ready(function() {
    // console.log("in doc ready");

    //JSON
    $.getJSON("data/A1-JSON.json", function(data) {

        // console.log(data);

        // declae variables and populate from LS
        myname = data.AboutMe.myName;
        myid = data.AboutMe.myID;
        mylogin = data.AboutMe.myLogin;
        mycampus = data.AboutMe.myCampus;
        myprogram = data.AboutMe.myProgram;

        // save to LS
        localStorage.setItem("myName", JSON.stringify(myname));
        localStorage.setItem("myID", JSON.stringify(myid));
        localStorage.setItem("myLogin", JSON.stringify(mylogin));
        localStorage.setItem("myCampus", JSON.stringify(mycampus));
        localStorage.setItem("myProgram", JSON.stringify(myprogram));
        
        // HEADER
        headerData(data);
        // FOOTER
        footerData(data);
        
    }); // end of .getJSON



    // Populate an array with 4 term entries based on Term Class
    var myTerm = new Array();
    myTerm.push(new Term(1, "CP for Term One"));
    myTerm.push(new Term(2, "CP for Term Two"));
    myTerm.push(new Term(3, "CP for Term Three"));
    myTerm.push(new Term(4, "CP for Term Four"));

    // Populate an array with courses
    var myCourses = new Array();
    myCourses.push(new Course(1, "PROG", "10082", '<img src="images/java1.png" height="35" width="35" />'));
    myCourses.push(new Course(1, "SYST", "10049", '<img src="images/web1.png" height="35" width="35" />'));
    myCourses.push(new Course(1, "MATH", "18584", '<img src="images/math1.png" height="35" width="35" />'));
    myCourses.push(new Course(1, "TELE", "13167", '<img src="images/data1.png" height="35" width="35" />'));

    myCourses.push(new Course(2, "PROG", "24178", '<img src="images/java2.png" height="35" width="35" />'));
    myCourses.push(new Course(2, "SYST", "10199", '<img src="images/web2.png" height="35" width="35" />'));
    myCourses.push(new Course(2, "SYST", "13416", '<img src="images/linux2.png" height="35" width="35" />'));
    myCourses.push(new Course(2, "TELE", "33324", '<img src="images/data2.png" height="35" width="35" />'));

    myCourses.push(new Course(3, "PROG", "32758", '<img src="images/java3.png" height="35" width="35" />'));
    myCourses.push(new Course(3, "SYST", "28296", '<img src="images/linux3.png" height="35" width="35" />'));
    myCourses.push(new Course(3, "INFO", "24178", '<img src="images/security3.png" height="35" width="35" />'));
    myCourses.push(new Course(3, "DBAS", "27198", '<img src="images/database3.png" height="35" width="35" />'));

    myCourses.push(new Course(4, "SYST", "24444", '<img src="images/mobile4.png" height="35" width="35" />'));
    myCourses.push(new Course(4, "PROG", "32356", '<img src="images/net4.png" height="35" width="35" />'));
    myCourses.push(new Course(4, "PROG", "20799", '<img src="images/data4.png" height="35" width="35" />'));
    myCourses.push(new Course(4, "DBAS", "32100", '<img src="images/rdbms4.png" height="35" width="35" />'));

    // console.log(myCourses);
    // console.log(myTerm);

    termData(myTerm, 1);
    courseData(myCourses, 1);

    // buttons
    $("#btn1").click(function() {
        termData(myTerm, 1);
        courseData(myCourses, 1);
    });
    $("#btn2").click(function() {
        termData(myTerm, 2);
        courseData(myCourses, 2);
    });
    $("#btn3").click(function() {
        termData(myTerm, 3);
        courseData(myCourses, 3);
    });
    $("#btn4").click(function() {
        termData(myTerm, 4);
        courseData(myCourses, 4);
    });

    // toggleClass Button
    $("#btnToggle").click(function () {
        $(".gLeft").toggleClass('on');
    });

    // highlight item that includes 'PROG'
    $("#btnHighlight").click(function () {
        $("p:contains('PROG')").toggleClass('pStyle');
    });


}); // end of doc ready

function saveToLS(){
    localStorage.setItem("myName", myname);
    localStorage.setItem("myID", myid);
    localStorage.setItem("myLogin", mylogin);
    localStorage.setItem("myCampus", mycampus);
    localStorage.setItem("myProgram", myprogram);
}

function headerData(aboutMe){
    $("h1:first").html(
        `
        SYST24444 Assignment 1 for ${aboutMe.AboutMe.myName} / ${aboutMe.AboutMe.myID}
        `
    );
} // end of headerData

function footerData(aboutMe){
    $("h3:first").html(
        `
        Login: ${aboutMe.AboutMe.myLogin} / Campus: ${aboutMe.AboutMe.myCampus} / Program: ${aboutMe.AboutMe.myProgram}
        `
    ) 
} // end of footerData

function courseData(arrList, tNum) {

    $("#courseData").html("");

    if (tNum == 1) {
        for (let x=0; x<4; x++){
            $("#courseData").append(
                `
                <p>Course: ${arrList[x].courseType}${arrList[x].courseCode} ${arrList[x].courseImage}</p>
                `
            );
        }
    }
    if (tNum == 2) {
        for (let x=4; x<8; x++){
            $("#courseData").append(
                `
                <p>Course: ${arrList[x].courseType}${arrList[x].courseCode} ${arrList[x].courseImage}</p>
                `
            );
        }    
    }
    if (tNum == 3) {
        for (let x=8; x<12; x++){
            $("#courseData").append(
                `
                <p>Course: ${arrList[x].courseType}${arrList[x].courseCode} ${arrList[x].courseImage}</p>
                `
            );
        } 
    }
    if (tNum == 4) {
        for (let x=12; x<16; x++){
            $("#courseData").append(
                `
                <p>Course: ${arrList[x].courseType}${arrList[x].courseCode} ${arrList[x].courseImage}</p>
                `
            );
        } 
    }         
} // end of courseData

function termData(arrTerm, tNum) {
    for (let x=0; x<1; x++){
        $("h2:first").html(arrTerm[x].termName);
    }
    if (tNum == 1) {
        for (let x=0; x<1; x++){
            $("h2:first").html(arrTerm[x].termName);
        }
    }
    if (tNum == 2) {
        for (let x=0; x<2; x++){
            $("h2:first").html(arrTerm[x].termName);
        }
    }
    if (tNum == 3) {
        for (let x=0; x<3; x++){
            $("h2:first").html(arrTerm[x].termName);
        }
    }
    if (tNum == 4) {
        for (let x=0; x<4; x++){
            $("h2:first").html(arrTerm[x].termName);
        }
    }
} // end of termData

function goToPage2() {
    saveToLS();
	location.assign("./karakow_p2.html");
}