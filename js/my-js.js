function checkPassWord() {
    const pw = document.getElementById("password").value;
    const repw = document.getElementById("repassword").value;
    if(pw != repw){
        document.getElementById("tip").style.color="#dc3545";
        document.getElementById("tip").innerText="密码不一致！";
    }else {
        document.getElementById("tip").style.color="#28a745";
        document.getElementById("tip").innerText="密码一致！";
    }
}