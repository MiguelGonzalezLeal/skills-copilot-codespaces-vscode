function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    if (member.style.display === "none") {
        member.style.display = "block";
        skills.style.display = "none";
        memberList.style.display = "block";
        skillsList.style.display = "none";
        memberButton.style.backgroundColor = "#f2f2f2";
        skillsButton.style.backgroundColor = "#e6e6e6";
    }
}