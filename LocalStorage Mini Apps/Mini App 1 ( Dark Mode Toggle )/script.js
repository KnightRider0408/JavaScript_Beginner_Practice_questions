function toggleTheme() {

    let currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        localStorage.setItem("theme", "light");
    } 
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        localStorage.setItem("theme", "dark");
    }
}

// Load saved theme
window.onload = function () {

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}