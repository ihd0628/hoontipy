const toggleBtn = document.querySelector('.Header_toggleBtn');
const menu = document.querySelector('.Header_Menu');
const icons = document.querySelector('.Header_icons');
const loginIcons = document.querySelector('.Header_icons #login_icons')
const userIcons = document.querySelector('.Header_icons #user_icons')

function onloginHandle(event){
    event.preventDefault();
    const greeting = prompt('What`s yout name? ', 'Please write your name');
    console.dir(greeting);
    loginIcons.classList.add("hidden");
    userIcons.classList.remove("hidden");
}

loginIcons.addEventListener("click",onloginHandle);

toggleBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
