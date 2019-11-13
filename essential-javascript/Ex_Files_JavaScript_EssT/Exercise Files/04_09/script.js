var course = new Object();

// not using curly braces
// course.title = "JavaScript Essential Training";
// course.instructor = "Instructor Name";
// course.level = 1;
// course.published = true;
// course.views = 0;

var course = {
    title: "JavaScript Essential Training",
    instructor: "Instructor Name",
    level: 1,
    published: true,
    views: 0,
    updateViews: function(){
        return ++course.views;
    }
}

console.log(course.views);
course.updateViews();
console.log(course.views);

var currentDate = new Date();

var course02 = new course();
