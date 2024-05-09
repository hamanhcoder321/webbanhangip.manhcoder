document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Gửi dữ liệu đăng ký tới server (trong trường hợp thực tế, bạn sẽ gửi thông tin này đến server để xử lý)
    // Ở đây chỉ giả định đăng ký thành công nếu cả hai trường đều không rỗng
    if (username && password) {
        document.getElementById("message").innerHTML = "Đăng Nhập thành công!";
        document.getElementById("message").style.display = "block";
        setTimeout(function() {
            window.location.href = "../main.html";
        }, 1000);
    } else {
        document.getElementById("message").innerHTML = "Vui lòng điền đầy đủ thông tin!";
        document.getElementById("message").style.display = "block";
    }
});