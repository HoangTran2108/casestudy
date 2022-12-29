function addlogin() {
    let inputUsername = document.getElementById("loginusername").value;
    let inputPassword = document.getElementById("loginpassword").value;

    if (inputUsername === "" || inputPassword === "") {
        alert("Vui lòng không để trống");
    } else {
        if (inputUsername === "123456" && inputPassword === "123456") {
            alert("Đăng Nhập Thành Công");
            window.location.href = "casestudy.html";
        } else {
            alert("Tên tài khoản / Mật khẩu không chính xác");
        }
    }
}