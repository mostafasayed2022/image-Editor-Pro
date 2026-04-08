const saturate = document.getElementById("saturate");
const contrast = document.getElementById("contrast");
const brightness = document.getElementById("brightness");
const sepia = document.getElementById("sepia");
const grayscale = document.getElementById("grayscale");
const blur = document.getElementById("blur");
const huerotate = document.getElementById("huerotate");
const upload = document.getElementById("upload");
const download = document.getElementById("download");
const img = document.getElementById("img");
const reset = document.getElementById("reset");
const imgBox = document.getElementById("img-container");
const placeholder = document.getElementById("placeholder-text");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const filters = document.querySelectorAll("input[type='range']");

// Helper to update value displays
function updateValueDisplays() {
    filters.forEach(filter => {
        const display = filter.parentElement.querySelector('.val-display');
        if (display) {
            let unit = "";
            if (filter.id === "blur") unit = "px";
            else if (filter.id === "huerotate") unit = "°";
            else if (["saturate", "contrast", "brightness", "sepia"].includes(filter.id)) unit = "%";
            display.textContent = `${filter.value}${unit}`;
        }
    });
}

function resetValue() {
    ctx.filter = "none";
    saturate.value = 100;
    contrast.value = 100;
    brightness.value = 100;
    sepia.value = 0;
    grayscale.value = 0;
    blur.value = 0;
    huerotate.value = 0;
    
    updateValueDisplays();
    if (img.src) drawImage();
}

function drawImage() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
    `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

window.onload = function () {
    download.style.visibility = 'hidden';
    reset.style.visibility = 'hidden';
    canvas.style.display = 'none';
    img.style.display = 'none';
    updateValueDisplays();
};

upload.onchange = function () {
    if (upload.files && upload.files[0]) {
        resetValue();
        
        download.style.visibility = 'visible';
        reset.style.visibility = 'visible';
        placeholder.style.display = 'none';
        canvas.style.display = 'block';

        const reader = new FileReader();
        reader.readAsDataURL(upload.files[0]);

        reader.onload = function () {
            img.src = reader.result;
        };

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            drawImage();
        };
    }
};

filters.forEach(filter => {
    filter.addEventListener('input', () => {
        drawImage();
        updateValueDisplays();
    });
});

reset.onclick = resetValue;

download.onclick = function () {
    download.href = canvas.toDataURL("image/png");
    download.download = "pixel-flow-edit.png";
};