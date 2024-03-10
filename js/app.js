import {} from "./modules/main.js"

const myView = document.querySelector('main');

const profileHTML = 'virtualWallet/views/profile.html'
const balanceHTML = 'virtualWallet/views/balance.html'
const homeHTML = 'virtualWallet/views/home.html'

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

    let temp;

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

            temp = document.getElementsByClassName('profile');
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
            
            temp = document.getElementsByClassName('balance--container');
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
            
            temp = document.getElementsByClassName('home');
        }

       
        temp.innerHTML = html;
    
        myView.innerHTML = temp.innerHTML;
    })
    .catch( error => {
        console.error('Error getting the html file: ', error)
    });
};