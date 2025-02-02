function showPopup(title, content, imgsrc) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerText = content;
    document.getElementById('popup-img').src = imgsrc;
    document.getElementById('overlay').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
}

function changeImage() {
    const img = document.getElementById("dressimage");       
    const indicator = document.getElementById("imageindicator");

    if (img.src.includes("raindressrec1.jpg")) {
        img.src = "./assets/raindressrec2.jpg";
        indicator.textContent = "O 0 O";
    } else if (img.src.includes("raindressrec2.jpg")) {
        img.src = "./assets/raindressrec3.jpg";
        indicator.textContent = "O O 0";
    } else {
        img.src = "./assets/raindressrec1.jpg";
        indicator.textContent = "0 O O";
    }
}