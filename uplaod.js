document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let imageFile = document.getElementById("imageInput").files[0];
    let title = document.getElementById("titleInput").value;
    let desc = document.getElementById("descInput").value;
    let pdfFile = document.getElementById("pdfInput").files[0];

    if (!imageFile || !pdfFile) {
        alert("Please select files!");
        return;
    }

    let imageURL = URL.createObjectURL(imageFile);
    let pdfURL = URL.createObjectURL(pdfFile);

    let cardContainer = document.getElementById("cardContainer");

    let newCard = document.createElement("div");
    newCard.classList.add("card");

    newCard.innerHTML = `
        <img src="${imageURL}" alt="">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="btn-group">
            <a href="${pdfURL}" target="_blank">Open</a>
            <a href="${pdfURL}" download>Download</a>
        </div>
    `;

    cardContainer.appendChild(newCard);

    document.getElementById("uploadForm").reset();
});
