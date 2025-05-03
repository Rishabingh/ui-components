document.addEventListener('DOMContentLoaded', ()=> {
    const projectImg = document.querySelector('.project-img');

    const images = ['./images/bg2.jpg', './images/bg3.jpg', './images/bg1.jpg'];

    let index = 0;

setInterval(()=>{
    projectImg.classList.remove('scale-100');
    projectImg.classList.add('scale-90');
      
    setTimeout(()=>{
        projectImg.src = images[index];

        projectImg.classList.remove('scale-90');
        projectImg.classList.add('scale-100');

        setTimeout(() => {
            projectImg.classList.remove('scale-110');
            projectImg.classList.add('scale-100');
        }, 300);
    }, 200)
    index = (index+1) % images.length;
},1500);


});