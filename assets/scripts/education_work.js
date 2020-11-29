/**  
*@param {string} collegeWorkId the id of the college/work to show
*/

let shownCollegeWorkId = null;

function showCollegeWork(collegeWorkId) {
    // Remove hidden class from project-overlay div
    // and from projectId given.
    var background = document.getElementById("edu_work_overlay");
      
    collegeWorkId.style.height = 0 + "px";
    collegeWorkId.style.width = 0 + "px";
    collegeWorkId.style.fontSize = 0 + "px";
    var height = 0;
    var width = 0;
    var Font = 0;
    var id = setInterval(frame, 0.001);
    collegeWorkId.classList.remove("hidden");

    function frame() {
        if (height === 500 && width === 500) {
            clearInterval(id);
        } else if  (height < 500) {
            height += 5;
            shownCollegeWorkId.style.height = height + "px";
        } else {    
            width += 5;
            Font += 0.16;
            shownCollegeWorkId.style.width = width + "px";
            shownCollegeWorkId.style.fontSize = Font + "px";
        }
    }

    document.getElementById("edu_work_overlay").classList.remove("hidden");
    shownCollegeWorkId = collegeWorkId;
    return;
}

function showElCaminoCollege() {
    let elCaminoCollege = document.getElementById("El_Camino_College");
    showCollegeWork(elCaminoCollege);
    return;
}
document.getElementById("El_Camino_College_name").onclick = showElCaminoCollege;

function showUCBerkeley() {
    let UCBerkeley = document.getElementById("UC_Berkeley");
    showCollegeWork(UCBerkeley);
    return;
}
document.getElementById("UC_Berkeley_name").onclick = showUCBerkeley;

function showQualityDriverSolutions() {
    let QualityDriverSolutions = document.getElementById("Quality_Driver_Solutions");
    showCollegeWork(QualityDriverSolutions);
    return;
}
document.getElementById("Quality_Driver_Solutions_name").onclick = showQualityDriverSolutions;

function showQualityDistributingServices() {
    let QualityDistributingServices = document.getElementById("Quality_Distributing_Services");
    showCollegeWork(QualityDistributingServices);
    return;
}
document.getElementById("Quality_Distributing_Services_name").onclick = showQualityDistributingServices;

function  closeOverLay() {
    
    if (shownCollegeWorkId === null) {
        return;
    }

    var id = setInterval(frame, 0.01);
    var height = 500;
    var width = 500;
    var Font = 16;
        
    function frame() {
        if (height === 0 && width === 0) {
            clearInterval(id);
            shownCollegeWorkId.classList.add("hidden");
            document.getElementById("edu_work_overlay").classList.add("hidden");
            shownCollegeWorkId = null;
        } else if (height > 0){
            height -= 5;
            Font -= 0.16;
            shownCollegeWorkId.style.height = height + "px";
            shownCollegeWorkId.style.fontSize = Font + "px";
        } else {
            width -= 5;
            shownCollegeWorkId.style.width = width + "px";
        }
    }
    return;
}

document.getElementById("edu_work_overlay").onclick = closeOverLay;
