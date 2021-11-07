const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector('.modal-auth');
const buttonUnauth = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');


const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonUnauth.style.display = 'block';
    userName.style.display = 'block';
    userName.textContent = user.login;
    modalAuth.style.display = 'none'
}

const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonUnauth.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user');
}

buttonUnauth.addEventListener('click', () => {
    logout()
})

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
        login: inputLogin.value,
        password: inputPassword.value,
        
    
    }
  
    login(user)
     
    localStorage.setItem('user', JSON.stringify(user));
}) 

if (localStorage.getItem('user')) {
    login (JSON.parse(localStorage.getItem('user')))
}

inputLogin.setAttribute('required', true);
