$(document).ready(function() {
    $('.menu-item').click(function() 
    {
        console.log('menu clicked');
        nav=document.getElementById('start-menu');
        nav.classList.toggle('visible');
    });
})