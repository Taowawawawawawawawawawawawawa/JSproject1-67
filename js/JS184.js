const image = document.getElementById('image');
const originalImageSrc = '../images/Q8_Resize.jpg';
const newImageSrc = '../images/received_753912153360969.jpeg';

image.addEventListener('mouseover', () => {
    image.classList.add('hidden');
    setTimeout(() => {
        image.src = newImageSrc;
        image.classList.remove('hidden');
    }, 1000);
});

image.addEventListener('mouseout', () => {
    image.classList.add('hidden');
    setTimeout(() => {
        image.src = originalImageSrc;
        image.classList.remove('hidden');
    }, 1000);
});