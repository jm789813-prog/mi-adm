function login(){
let u=document.getElementById('user').value;
let p=document.getElementById('pass').value;
if(u==='admin'&&p==='1234'){
localStorage.setItem('sesion','ok');
location.href='dashboard.html';
}else{
document.getElementById('msg').innerText='Error';
}
}
