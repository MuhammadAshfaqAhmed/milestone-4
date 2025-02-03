document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;
    const editResumeButton = document.getElementById("editResumeButton") as HTMLButtonElement;

    // Function to populate the form with resume data
    const populateForm = () => {
        const name = document.getElementById("resumeName")?.textContent || "";
        const jobTitle = document.getElementById("resumeJobTitle")?.textContent || "";
        const phone = document.getElementById("resumePhone")?.textContent || "";
        const email = document.getElementById("resumeEmail")?.textContent || "";
        const address = document.getElementById("resumeAddress")?.textContent || "";
        const education = document.getElementById("resumeEducation")?.innerHTML.replace(/<br>/g, "\n") || "";
        const skills = document.getElementById("resumeSkills")?.innerText || "";
        const summary = document.getElementById("resumeSummary")?.textContent || "";
        const experience = document.getElementById("resumeExperience")?.innerHTML.replace(/<br>/g, "\n") || "";

        (document.getElementById("name") as HTMLInputElement).value = name;
        (document.getElementById("jobTitle") as HTMLInputElement).value = jobTitle;
        (document.getElementById("phone") as HTMLInputElement).value = phone;
        (document.getElementById("email") as HTMLInputElement).value = email;
        (document.getElementById("address") as HTMLInputElement).value = address;
        (document.getElementById("education") as HTMLTextAreaElement).value = education;
        (document.getElementById("skills") as HTMLTextAreaElement).value = skills;
        (document.getElementById("summary") as HTMLTextAreaElement).value = summary;
        (document.getElementById("experience") as HTMLTextAreaElement).value = experience;
    };

    // Function to update the resume preview
    const updateResumePreview = () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

        document.getElementById("resumeName")!.textContent = name;
        document.getElementById("resumeJobTitle")!.textContent = jobTitle;
        document.getElementById("resumePhone")!.textContent = phone;
        document.getElementById("resumeEmail")!.textContent = email;
        document.getElementById("resumeAddress")!.textContent = address;
        document.getElementById("resumeEducation")!.innerHTML = education.replace(/\n/g, "<br>");
        document.getElementById("resumeSummary")!.textContent = summary;
        document.getElementById("resumeExperience")!.innerHTML = experience.replace(/\n/g, "<br>");

        const skillsList = document.getElementById("resumeSkills")!;
        skillsList.innerHTML = skills
            .split(",")
            .map(skill => `<li>${skill.trim()}</li>`)
            .join("");
    };

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateResumePreview();
        resumePreview.style.display = "block";
        form.style.display = "none";
    });

    // Handle edit button click
    editResumeButton.addEventListener("click", () => {
        populateForm();
        resumePreview.style.display = "none";
        form.style.display = "block";
    });
});