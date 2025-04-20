function enlargeImage(img, text) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    modal.style.display = "flex";
    modalImg.src = img.src;
    modalText.innerText = text;
}

function closeModal() {
    document.getElementById('image-modal').style.display = "none";
}
