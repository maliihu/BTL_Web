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
    alert("Xác nhận thông tin thành công! Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Chúc bạn một ngày mới tốt lành <3.");
    window.location.reload();
}
