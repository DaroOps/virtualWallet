import {} from "./modules/main.js"

const myView = document.querySelector('main');

const profileHTML = '/views/profile.html'
const balanceHTML = '/views/balance.html'
const homeHTML = '/views/home.html'

const balancePerformed = document.getElementById('balance');

balancePerformed.addEventListener('click' , function(event){
    event.preventDefault();
    
    callView(balanceHTML)
});

const homePerformed = document.getElementById('home');

homePerformed.addEventListener('click' , function(event){
    event.preventDefault();
    
    callView(homeHTML)
});

const profilePerformed = document.getElementById('profile');

profilePerformed.addEventListener('click' , function(event){
    event.preventDefault();
    
    callView(profileHTML)
});


function callView(link){
    fetch(link)
    .then(response => response.text())
    .then(html=>{
        
        if (link === profileHTML) {    
            const header = document.getElementsByClassName('header')[0];

            const logo = header.getElementsByClassName('logo')[0];
            const logoIco = logo.getElementsByClassName('logo--ico')[0];
            
            const iconGroup = logoIco.getElementsByTagName('i')[0];
            
            const logoTitle = logo.getElementsByTagName('h1')[0];

            const burger = header.getElementsByClassName('burger')[0];
            const burgerIco = burger.getElementsByTagName('i')[0];

            header.style.backgroundColor =  'transparent';
    
            iconGroup.style.color = '#fff';
            logoTitle.style.color = '#fff';
            burgerIco.style.color = '#fff';
        }
        else if(link === balanceHTML){
            const header = document.getElementsByClassName('header')[0];

            const logo = header.getElementsByClassName('logo')[0];
            const logoIco = logo.getElementsByClassName('logo--ico')[0];
            
            const iconGroup = logoIco.getElementsByTagName('i')[0];
            
            const logoTitle = logo.getElementsByTagName('h1')[0];

            const burger = header.getElementsByClassName('burger')[0];
            const burgerIco = burger.getElementsByTagName('i')[0];

            header.style.backgroundColor =  'transparent';
    
            iconGroup.style.color = '#fff';
            logoTitle.style.color = '#fff';
            burgerIco.style.color = '#fff';
            
        }
        else{

            const header = document.getElementsByClassName('header')[0];

            const logo = header.getElementsByClassName('logo')[0];
            const logoIco = logo.getElementsByClassName('logo--ico')[0];
            
            const iconGroup = logoIco.getElementsByTagName('i')[0];
            
            const logoTitle = logo.getElementsByTagName('h1')[0];

            const burger = header.getElementsByClassName('burger')[0];
            const burgerIco = burger.getElementsByTagName('i')[0];

            header.style.backgroundColor =  'transparent';
    
            iconGroup.style.color = '#33404F';
            logoTitle.style.color = '#33404F';
            burgerIco.style.color = '#33404F';
           
        }

        const temp = document.getElementsByClassName('profile');
        temp.innerHTML = html;
        

        console.log('Response ' + temp)
    
        myView.innerHTML = temp.innerHTML;
    })
    .catch( error => {
        console.error('Error getting the html file: ', error)
    });
};