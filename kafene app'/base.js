$(document).ready(function(){
    var logOut = document.getElementById('logout');
    logOut.onclick = function(){
        alert("logout Successfully")
        localStorage.setItem('isLogedIn',false);
        localStorage.removeItem('userInfo');
        localStorage.setItem('userInfo',JSON.stringify(obj));
            location.assign('/orderpage.html');
    }
})