function displayList() {
    let text = "<ul>";
    const list = document.querySelectorAll("p");
    for (let i = 0; i < list.length; i++) {
        text += "<li>" + list[i].textContent + "</li>";
    }
    text += "</ul>";
    (document.getElementById("fruits")).innerHTML = text;
}
