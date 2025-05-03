document.addEventListener('DOMContentLoaded', ()=>{
    const menuBtn = document.querySelector('.mobile-right');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn')
    const touchBlock = document.querySelector('.touch-block');

    menuBtn.addEventListener('click', ()=> {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
        //sidebar.classList.toggle('hidden');
        touchBlock.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('hidden');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        //sidebar.classList.toggle('hidden');
        touchBlock.classList.toggle('hidden');
    });

    touchBlock.addEventListener('click', ()=> {
        //menuBtn.classList.toggle('hidden');
        //sidebar.classList.toggle('hidden');
        menuBtn.classList.toggle('hidden');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        touchBlock.classList.toggle('hidden');
    }); 
});