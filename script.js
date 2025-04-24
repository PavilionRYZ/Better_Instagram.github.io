const images = document.getElementsByClassName("image");
const parent = document.getElementById("parent");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("id", images[i].id);
    });
}

parent.addEventListener("dragover", (e) => {
    e.preventDefault();
});

parent.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const element = document.getElementById(id);
    parent.appendChild(element);
});
