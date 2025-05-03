document.addEventListener('DOMContentLoaded', ()=>{
    const menuBtn = document.querySelector('.mobile-right');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn')
    const touchBlock = document.querySelector('.touch-block');

    menuBtn.addEventListener('click', ()=> {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
        touchBlock.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
        touchBlock.classList.toggle('hidden');
    });

    touchBlock.addEventListener('click', ()=> {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
        touchBlock.classList.toggle('hidden');
    }); 


});