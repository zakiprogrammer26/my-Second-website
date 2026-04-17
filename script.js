// 1. Waxaan soo qabanaynaa badhanka
const btn = document.getElementById("badhankayga");

// 2. Marka la riixo, midabka beddel
btn.addEventListener("click", function() {
    // Haddii uu caddaan yahay ka dhig madow, haddii kale caddaan ku soo celi
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "#1078d2";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});