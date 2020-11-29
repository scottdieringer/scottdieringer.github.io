

/** 
*@param {string} projectId the id of the project to show
*@param {string} projectTitle the title of the project to show
* @param {string} projectDescription the project description
*/

let shownProject = null;
let shownProjectTitle = null;
let shownProjectDescription = null;

function showProject(projectId, projectTitle, projectDescription) {
    // Remove hidden class from project-overlay div
    // and from projectId given.
    var background = document.getElementById("project_overlay");
      
    projectId.style.height = 0 + "px";
    projectId.style.width = 0 + "px";
    projectTitle.style.fontSize = 0 + "px";
    projectDescription.style.fontSize = 0 + "px";
    var height = 0;
    var width = 0;
    var titleFont = 0;
    var descriptionFont = 0;
    var id = setInterval(frame, 0.001);
    projectId.classList.remove("hidden");

    function frame() {
        if (height === 500) {
            clearInterval(id);
        } else {
            height += 5;
            width += 5;
            titleFont += 0.25;
            descriptionFont += 0.16;
            projectId.style.height = height + "px";
            projectId.style.width = width + "px";
            projectTitle.style.fontSize = titleFont + "px";
            projectDescription.style.fontSize = descriptionFont + "px";
        }
    }

    document.getElementById("project_overlay").classList.remove("hidden");
    shownProject = projectId;
    shownProjectTitle = projectTitle;
    shownProjectDescription = projectDescription;
    return;
}

function showProjectDatabaseLocking() {
    let database_locking = document.getElementById("database_locking");
    let database_locking_title = document.getElementById("database_locking_title");
    let database_locking_description = document.getElementById("database_locking_description");
    showProject(database_locking, database_locking_title, database_locking_description);
    return;
}
document.getElementById("database_locking_name").onclick = showProjectDatabaseLocking;

function showProjectTravelingSalesman() {
    let traveling_salesman = document.getElementById("traveling_salesman");
    let traveling_salesman_title = document.getElementById("traveling_salesman_title");
    let traveling_salesman_description = document.getElementById("traveling_salesman_description");
    showProject(traveling_salesman, traveling_salesman_title, traveling_salesman_description);
    return;
}
document.getElementById("traveling_salesman_name").onclick = showProjectTravelingSalesman;

function showProjectMandelbrotSet() {
    let Mandelbrot_set = document.getElementById("Mandelbrot_set");
    let Mandelbrot_set_title = document.getElementById("Mandelbrot_set_title");
    let Mandelbrot_set_description = document.getElementById("Mandelbrot_set_description");
    showProject(Mandelbrot_set, Mandelbrot_set_title, Mandelbrot_set_description);
    return;
}
document.getElementById("Mandelbrot_set_name").onclick = showProjectMandelbrotSet;

function showProjectFindClosestPoint() {
    let find_closest_point = document.getElementById("find_closest_point");
    let find_closest_point_title = document.getElementById("find_closest_point_title");
    let find_closest_point_description = document.getElementById("find_closest_point_description");
    showProject(find_closest_point, find_closest_point_title, find_closest_point_description);
    return;
}
document.getElementById("find_closest_point_name").onclick = showProjectFindClosestPoint;


function closeProject(projectId) {
    document.getElementById("project_overlay").classList.add("hidden");
    let project = document.getElementById(projectId);
    project.classList.add("hidden");
    return;
}


function  closeProjectOverLay() {
    
    if (shownProject === null) {
        return;
    }

    var id = setInterval(frame, 0.01);
    var height = 500;
    var width = 500;
    var projectTitle = 25;
    var projectDescription = 16;
    
    function frame() {
        if (height === 0) {
            clearInterval(id);
            shownProject.classList.add("hidden");
            document.getElementById("project_overlay").classList.add("hidden");
            shownProject = null;
            shownProjectTitle = null;
            shownProjectDescription = null;
            
        } else {
            height -= 5;
            width -= 5;
            projectTitle -= 0.25;
            projectDescription -= 0.16;
            shownProject.style.height = height + "px";
            shownProject.style.width = width + "px";
            shownProjectTitle.style.fontSize = projectTitle + "px";
            shownProjectDescription.style.fontSize = projectDescription + "px";
        }
    }
    return;
}

document.getElementById("project_overlay").onclick = closeProjectOverLay;
