const images = document.getElementsByClassName("image");
// console.log(images);

let imageMove;
for (let i = 0; i < images.length; i++) {
    const img = images[i];
    img.addEventListener("dragstart", (e) => {
        imageMove = img;
        console.log(imageMove);
        console.log(e.target);
    })
    img.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    img.addEventListener("drop", (e) => {
        e.preventDefault();
        console.log(e.target);
        // e.target.appendChild(imageMove);
        if(imageMove !== img){
           let storeImage = document.createElement("div");
           img.replaceWith(storeImage);
           imageMove.replaceWith(img);
           storeImage.replaceWith(imageMove);
        }
    })
}

