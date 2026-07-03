function handleLogin(event){
    event.preventDefault();
    let u=document.getElementById('user').value.trim();
    let p=document.getElementById('pass').value;
    let msgEl=document.getElementById('msg');
    
    if(u==='admin'&&p==='1234'){
        msgEl.textContent='✅ Iniciando sesión...';
        msgEl.className='bg-green-100 text-green-800 border border-green-300 hidden p-3 rounded-lg text-sm font-medium';
        msgEl.classList.remove('hidden');
        
        localStorage.setItem('sesion','ok');
        setTimeout(()=>{
            location.href='dashboard.html';
        },500);
    }else{
        msgEl.textContent='❌ Usuario o contraseña incorrectos';
        msgEl.className='bg-red-100 text-red-800 border border-red-300 p-3 rounded-lg text-sm font-medium';
        msgEl.classList.remove('hidden');
        document.getElementById('pass').value='';
    }
}

// Verificar sesión
window.addEventListener('load',()=>{
    if(window.location.pathname.includes('index.html')||window.location.pathname.endsWith('/')){
        if(localStorage.getItem('sesion')){
            location.href='dashboard.html';
        }
    }else if(!localStorage.getItem('sesion')){
        location.href='index.html';
    }
});