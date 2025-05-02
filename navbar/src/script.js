document.addEventListener('DOMContentLoaded', ()=>{
    const menuBtn = document.querySelector('.mobile-right');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn')

    menuBtn.addEventListener('click', ()=> {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.toggle('hidden');
    });


});