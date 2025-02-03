document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumePreview = document.getElementById("resumePreview");
    var editResumeButton = document.getElementById("editResumeButton");
    // Function to populate the form with resume data
    var populateForm = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var name = ((_a = document.getElementById("resumeName")) === null || _a === void 0 ? void 0 : _a.textContent) || "";
        var jobTitle = ((_b = document.getElementById("resumeJobTitle")) === null || _b === void 0 ? void 0 : _b.textContent) || "";
        var phone = ((_c = document.getElementById("resumePhone")) === null || _c === void 0 ? void 0 : _c.textContent) || "";
        var email = ((_d = document.getElementById("resumeEmail")) === null || _d === void 0 ? void 0 : _d.textContent) || "";
        var address = ((_e = document.getElementById("resumeAddress")) === null || _e === void 0 ? void 0 : _e.textContent) || "";
        var education = ((_f = document.getElementById("resumeEducation")) === null || _f === void 0 ? void 0 : _f.innerHTML.replace(/<br>/g, "\n")) || "";
        var skills = ((_g = document.getElementById("resumeSkills")) === null || _g === void 0 ? void 0 : _g.innerText) || "";
        var summary = ((_h = document.getElementById("resumeSummary")) === null || _h === void 0 ? void 0 : _h.textContent) || "";
        var experience = ((_j = document.getElementById("resumeExperience")) === null || _j === void 0 ? void 0 : _j.innerHTML.replace(/<br>/g, "\n")) || "";
        document.getElementById("name").value = name;
        document.getElementById("jobTitle").value = jobTitle;
        document.getElementById("phone").value = phone;
        document.getElementById("email").value = email;
        document.getElementById("address").value = address;
        document.getElementById("education").value = education;
        document.getElementById("skills").value = skills;
        document.getElementById("summary").value = summary;
        document.getElementById("experience").value = experience;
    };
    // Function to update the resume preview
    var updateResumePreview = function () {
        var name = document.getElementById("name").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var summary = document.getElementById("summary").value;
        var experience = document.getElementById("experience").value;
        document.getElementById("resumeName").textContent = name;
        document.getElementById("resumeJobTitle").textContent = jobTitle;
        document.getElementById("resumePhone").textContent = phone;
        document.getElementById("resumeEmail").textContent = email;
        document.getElementById("resumeAddress").textContent = address;
        document.getElementById("resumeEducation").innerHTML = education.replace(/\n/g, "<br>");
        document.getElementById("resumeSummary").textContent = summary;
        document.getElementById("resumeExperience").innerHTML = experience.replace(/\n/g, "<br>");
        var skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = skills
            .split(",")
            .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
            .join("");
    };
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        updateResumePreview();
        resumePreview.style.display = "block";
        form.style.display = "none";
    });
    // Handle edit button click
    editResumeButton.addEventListener("click", function () {
        populateForm();
        resumePreview.style.display = "none";
        form.style.display = "block";
    });
});
