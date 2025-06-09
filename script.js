let title = document.getElementById("searchInput");
let display = document.getElementById("searchResults");
display.classList.add("display");
let spinner = document.getElementById("spinner");

function getvalue(each) {
    let title = each.title;
    let imagelink = each.imageLink;
    let author = each.author;

    let one = document.createElement("div");
    one.classList.add("d-flex", "flex-row");
    display.appendChild(one);

    let div = document.createElement("div");
    one.appendChild(div);

    let img = document.createElement("img");
    img.src = imagelink;
    div.appendChild(img);

    let authorr = document.createElement("p");
    authorr.textContent = author;
    div.appendChild(authorr);
}

function govalue(each) {
    spinner.classList.toggle("d-none");
    console.log(each);
    if (each.length === 0) {
        let head = document.createElement("h1");
        head.textContent = "No results";
        head.classList.add("color");
        display.textContent = head.textContent;
    } else {
        let head = document.createElement("h1");
        head.textContent = "Popular Books";
        head.classList.add("color");
        display.textContent = head.textContent;
    }
    for (let value of each) {
        getvalue(value);
    }
}
title.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");

        let option = {
            method: "GET",
        };

        fetch("https://apis.ccbp.in/book-store?title=" + title.value, option)
            .then(function(each) {
                return each.json();
            })
            .then(function(eachvalue) {
                govalue(eachvalue.search_results);
            });
    }
});
