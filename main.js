const toggleBtn = document.querySelector('.Header_toggleBtn');
const menu = document.querySelector('.Header_Menu');
const icons = document.querySelector('.Header_icons');

toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
