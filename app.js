
function DarkTheme(){
    var checkCondition = document.getElementById('changebox');
    var r = document.querySelector(':root');
    var welcomeText = document.getElementsByClassName('welcome_content');
    var navBar = document.getElementsByClassName('nav_links');
    var pic = document.getElementById('logo_img');

    if(checkCondition.checked == true){
        //dark
        r.style.setProperty('--primary', '#7644EB');
        r.style.setProperty('--secondary', '#50EBBA');
        r.style.setProperty('--body-color', '#333333');
        r.style.setProperty('--text-color', '#FFFFFF');
        r.style.setProperty('--text-hover', '#333333');
        welcomeText[0].style.color ='white';
        navBar[0].style.color ='white';
        pic.src = 'logo_white.png';
    }
    else{
        //light
        r.style.setProperty('--primary', '#EBC867');
        r.style.setProperty('--secondary', '#EB8C73');
        r.style.setProperty('--body-color', '#FFFFFF');
        r.style.setProperty('--text-hover', '#FFFFFF');
        welcomeText[0].style.color ='black';
        navBar[0].style.color ='black';
        pic.src = 'logo_black.png';
    }
}

function buttonNotWorking(){
    window.alert('Nem értek még hozzá, sajnálom nem fog menni, pusszantás!')
}

jQuery(window).resize(function () {
    var r = document.querySelector(':root');
    var windowWidth = jQuery(document).width();
    if(windowWidth > 1510){
        r.style.setProperty('--nav-links', '2.5rem')
        r.style.setProperty('--h1', '3.5rem')
        r.style.setProperty('--paragraph', '1.8rem')
        r.style.setProperty('--small', '1.5rem')
    }else if(windowWidth < 1510){
        r.style.setProperty('--nav-links', '2rem')
        r.style.setProperty('--h1', '3.3rem')
        r.style.setProperty('--paragraph', '1.5rem')
        r.style.setProperty('--small', '1.2rem')
    }else if(windowWidth > 1300){
        console.log('windows width : '+ windowWidth);
        r.style.setProperty('--nav-links', '1.3rem')
        r.style.setProperty('--h1', '2rem')
        r.style.setProperty('--paragraph', '1rem')
        r.style.setProperty('--small', '1.2rem')
    }
}) 
