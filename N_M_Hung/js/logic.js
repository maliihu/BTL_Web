// function send(){
//     var arr = document.getElementsByTagName('input');
//     var name = arr[0].value;
//     var email = arr[1].value;
//     var phone = arr[2].value;
//     var check = /^\w+@\w+\.com$/;
//     if(name == "" || email == "" || phone == ""){
//         alert("Vui lòng nhập đủ thông tin");
//         return;
//     }
//     if(check.test(email) == false){
//         alert("Email không đúng định dạng");
//         return;
//     }
//     confirm("Thông tin của bạn là:\n"+""+name+"\n"+email+"\n"+phone);
// }


var check_phone = /^d{10}$/;
var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;

function checknull(txt) {
    if (txt.value.length == 0)
        return true;
    else
        return false;
}

function notCheck(radio) {
    var flag = true;
    for (i = 0; i < radio.length; i++)
        if (radio[i].checked)
            flag = false;
    return flag;
}

function StringMatch(txt, reg) {
    return reg.test(txt.value);
}

function validform(f) {
    if (checknull(f.fullname)) {
        alert("Bạn chưa nhập họ tên");
        f.fullname.focus();
        return;
    }
    if (checknull(f.email)) {
        alert("Bạn chưa nhập email");
        f.email.focus();
        return;
    }
    if (checknull(f.phone)) {
        alert("Bạn chưa nhập số điện thoại");
        f.email.focus();
        return;
    }
    if (notCheck(f.gender)) {
        alert("Giới tính chưa được chọn");
        return;
    }
    if (!StringMatch(f.email, check_email)) {
        alert("Email không đúng");
        f.email.value = "";
        f.email.focus();
        return;
    }
    // if (!StringMacth(f.phone, check_phone)) {
    //     alert("Số điện thoại không đúng");
    //     f.phone.value = "";
    //     f.phone.focus();
    //     return;
    // }
    alert("Xác nhận thông tin thành công!");
}