const images = document.querySelectorAll("img");

for (const image of images) {
    let imgSrc = image.getAttribute("src");
    let dataType = image.getAttribute("data-type");

    imgSrc = imgSrc.slice(0,-8);

    console.log(imgSrc);
    console.log(dataType);
}
