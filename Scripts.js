const validCredentials = {
'virajgite32@gmail.com': 'viraj@234632'
};
const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');
const successPage = document.getElementById('successPage');
const messageEl = document.getElementById('message');
loginForm.addEventListener('submit', function (e) {
e.preventDefault();
const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value;
if (validCredentials[username] === password) {
loginContainer.style.display = 'none';
successPage.style.display = 'flex';
} else {
messageEl.textContent = 'Invalid credentials';
messageEl.style.display = 'block';
}
});
