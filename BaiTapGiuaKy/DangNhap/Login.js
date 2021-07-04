

function submit(){
    var keyUsers = "Vs1801";
    var keyPasswords = "nvs";
	var input_text = document.querySelector("#username");
	var input_password = document.querySelector("#passWord");
	var error_msg = document.querySelector(".error_msg");
    var message = document.querySelector(".error_suss");
    var message1 = document.querySelector(".error_msg1");

	if(input_text.value.length <= 2 || input_password.value.length <= 2 ){
		error_msg.style.display = "inline-block";
		error_msg.innerHTML = "⚠️ NHẬP ĐẦY ĐỦ USER VÀ PASSWORD";
        message.style.display = "none"
        message1.style.display = "none"
		input_text.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else if(input_text.value == keyUsers && input_password.value == keyPasswords){
        message.style.display = "inline-block";
        message.innerHTML = "✔️ ĐĂNG NHẬP THÀNH CÔNG";
        error_msg.style.display = "none";
        message1.style.display = "none";
        input_text.style.border = "1px solid green";
		input_password.style.border = "1px solid green";
        return true;
        
	}else if(input_text.value != keyUsers || input_password.value != keyPasswords){
        message1.style.display = "inline-block";
        message1.innerHTML = "❌ TÀI KHOẢN KHÔNG TỒN TẠI"
        message.style.display = "none";
        error_msg.style.display = "none";
        input_text.style.border = "1px solid red";
		input_password.style.border = "1px solid red";
        return false;
           
	}      	
}
var input_fields = document.querySelectorAll(".form-control");
var login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length >= 2){
			login_btn.disabled = false;
			login_btn.className = "btn btn-primary"
		}
	})
});
function bam() {
    var show = document.getElementById("passWord");
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
  }

  function signup() {
    window.location.replace('http://127.0.0.1:5500/DangKy/SignUp.html')
  }