let currentAngle = 0;
const box = document.querySelector('.box');

document.getElementById('next').addEventListener('click', () => {
    currentAngle -= 90;
    box.style.transform = `perspective(1000px)  rotateY(${currentAngle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    currentAngle += 90;
    box.style.transform = ` perspective(1000px) rotateY(${currentAngle}deg)`;
});
