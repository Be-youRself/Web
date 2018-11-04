// 学生可选课程 不可以选化学
var course_available = new Array("Math", "Physics", "Sports", "Chinese", "English");

function student(name){
	this.name = name;
	this.course = new Array();
}

student.prototype.show = function(){
	alert("Student " + this.name + " chooses " + this.course.sort() + " successfully !");
};

student.prototype.curricula = function(courseID){
	this.course.push(courseID);
};

function check_course(){
     alert("Course(s) you can choose: " + course_available.sort())
}

function choose_course(){
	var name = document.form_1.username.value
	var user = new student(name);
	var obj = document.getElementsByName("class");
	
    for(var i = 0; i < obj.length; i++){
        if(obj[i].checked)
            if(course_available.indexOf(obj[i].value) > -1)
                user.curricula(obj[i].value);
            else
                alert("You couldn't choose " + obj[i].value + " !")
    }
    if(user.course == false)
        alert("No courses has been choosed successfully !")
    else
        user.show();
}
