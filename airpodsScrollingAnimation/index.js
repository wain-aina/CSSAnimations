const html = document.documentElement;
const canvas = document.querySelector('.airpods-scrolling');
const context = canvas.getContext('2d');

const currentFrame = index => (
`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, "0")}.jpg` 
);

const frameCount = 148;

// This function is for image preloading using
//  hardware acceleration to ensure smoother image frame transition
const preloadImages = () => {
    for (let i=1; i<frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

preloadImages();

canvas.height = 770;
canvas.width = 1158;

const img = new Image()
img.src = currentFrame(1);

img.onload = function() {
    context.drawImage(img, 0, 0);
}

const updateImg = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

// This function enables scroll animations

window.addEventListener("scroll", () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop; 
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));

    requestAnimationFrame(() => updateImg(frameIndex + 1));
});