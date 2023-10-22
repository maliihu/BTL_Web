function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var email = arr[1].value;
    var phone = arr[2].value;
    var check = /^\w+@\w+\.com$/;
    if(name == "" || email == "" || phone == ""){
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    if(check.test(email) == false){
        alert("Email không đúng định dạng");
        return;
    }
    confirm("Thông tin của bạn là:\n"+""+name+"\n"+email+"\n"+phone);
}