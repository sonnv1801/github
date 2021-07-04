function submit() {
  var user = document.getElementById("username").value;
  var Phone = document.getElementById("Phone").value;
  var Email = document.getElementById("Email").value;
  var passWord = document.getElementById("passWord").value;
  var passWordR = document.getElementById("passWordR").value;
  var box = document.getElementById("action");

  // Check Tất Cả
  if (
    user == "" ||
    passWord == "" ||
    passWordR == "" ||
    Phone == "" ||
    Email == ""
  ) {
    alert("⚠️ Vui Lòng Nhập Đầy Đủ Thông Tin ⚠️");
    return;
  }
  // Nếu Tên Nó Bé Hơn 1 Kí Tự Thì Sẽ alert()
  else {
    var UserName = /^[a-zA-Z0-9_-]{2,16}$/;
    if (!user.match(UserName)) {
      alert(
        "⚠️ Tên Phải Viết Liền Không Dấu Và Tối Tối Thiểu 2 Kí Tự  ⚠️\n Ví dụ: J97"
      );
      return;
    }
    // Check PhoneNumber Theo Chỗi Đệ Quy
    else {
      var phoneNumber =
        /^(09|03|07|08|05)\(?([0-9]{1})\)?[-.]?([0-9]{4})[-. ]?([0-9]{3})$/;
      if (!Phone.match(phoneNumber)) {
        alert("⚠️ Số Điện Thoại Không Đúng ⚠️");
        return;
      }

      // Check Email Theo Chỗi Đệ Quy
      else {
        var checkemail =
          /^[A-Za-z][\w$.]+@(gmail|hotmail|live|donga.edu|edu.com|icloud|yahoo|outlook|msn|Yandex)+\.(com|vn|gov|info|net|org|mail)$/;
        if (!Email.match(checkemail)) {
          alert(
            "⚠️ Địa Chỉ Email Không Hợp Lệ ⚠️\n Ví dụ: vanson123@domail.com"
          );
          return ;
        }

        // Check Password1 Theo Chuỗi Đệ Quy
        else {
          var thisPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số
          if (!passWord.match(thisPassword)) {
            alert(
              "⚠️ Mật Khẩu Không Hợp Lệ ⚠️\n❗ Tối thiểu tám ký tự, ít nhất một chữ cái và một số ❗"
            );
            return;
          }

          // Check 2 Password  Có Trùng Khớp Không?
          else {
            if (passWord != passWordR) {
              alert("⚠️ Mật Khẩu Nhập Lại Không Đúng ⚠️");
              return;
            }
            // Check CheckBox
            else {
              if (box.checked) {
                var submit = confirm(
                  "XÁC NHẬN THÔNG TIN CỦA BẠN\n" +
                    "👤Tên👉 " +
                    user +
                    "\n" +
                    "📞Số Điện Thoại👉 " +
                    Phone +
                    "\n" +
                    "📧Email👉 " +
                    Email +
                    "\n" +
                    "🔐Mật Khẩu👉 " +
                    passWord +
                    "\n" +
                    "🔐Xác nhận Mật Khẩu👉 " +
                    passWordR
                );

                if (submit == 1) {
                  alert("✔️ ĐĂNG KÍ THÀNH CÔNG ✔️");
                  location.reload(); // Tải Lại Trang
                } else {
                  alert("❌ Nhập Lại Thông Tin ❌");
                }
              } else {
                alert("⚠️ Vui Lòng Đồng Ý Điều Khoản Của Chúng Tôi ⚠️");

                return;
              }
            }
          }
        }
      }
    }
  }
}

// Check User Trong InPut

function checkUsername() {
  var checkUsername = document.getElementById("username").value;
  var thisyourUser = /^[a-zA-Z0-9_-]{2,16}$/; // Đủ 3 Kí Tự Và Dưới 16 Kí Tự , Không Dùng Tên Riêng VD: Văn Sơn / Đúng VD : Van_Son

  if (checkUsername.match(thisyourUser)) {
    username.style.borderColor = "#05ad23";
    hienUser.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienUser.style.color = "#1cb811";
  } else {
    username.style.borderColor = "#ff0505";
    hienUser.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienUser.style.color = "#ff0505";
  }
  if (checkUsername == "") {
    username.style.borderColor = "#ff0505";
    hienUser.innerHTML = "❌ Vui Lòng Nhập Trường Này";
    hienUser.style.color = "#ff0505";
  }
  return;
}

// Check Phone Trong Input

function CheckPhone() {
  var checkphoneNumber = document.getElementById("Phone").value;
  var yourPhoneNumber =
    /^(09|03|07|08|05)\(?([0-9]{1})\)?[-.]?([0-9]{4})[-. ]?([0-9]{3})$/; // Đủ 10 Số

  if (checkphoneNumber.match(yourPhoneNumber)) {
    Phone.style.borderColor = "#05ad23";
    hienPhone.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienPhone.style.color = "#1cb811";
  } else {
    Phone.style.borderColor = "#ff0505";
    hienPhone.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienPhone.style.color = "#ff0505";
  }
  if (checkphoneNumber == "") {
    Phone.style.borderColor = "#ff0505";
    hienPhone.innerHTML = "❌ Vui Lòng Nhập Trường Này";
    hienPhone.style.color = "#ff0505";
  }
  return;
}
// Check Email Trong Input

function checkEmail() {
  var checkEmail = document.getElementById("Email").value;
  var yourEmail =
    /^[A-Za-z][\w$.]+@(gmail|hotmail|live|donga.edu|edu.com|icloud|yahoo|outlook|msn|Yandex)+\.(com|vn|gov|info|net|org|mail)$/; // Đúng Tên Miền @gmail.c** , Không Được Có Dấu "." Ở Đầu

  if (checkEmail.match(yourEmail)) {
    Email.style.borderColor = "#05ad23";
    hienEmail.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienEmail.style.color = "#1cb811";
  } else {
    Email.style.borderColor = "#ff0505";
    hienEmail.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienEmail.style.color = "#ff0505";
  }
  if (checkEmail == "") {
    Email.style.borderColor = "#ff0505";
    hienEmail.innerHTML = "❌ Vui Lòng Nhập Trường Này";
    hienEmail.style.color = "#ff0505";
  }
  return;
}
// Check PassWord 1 Trong Input

function password() {
  var checkPassword = document.getElementById("passWord").value;
  var yourPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số

  if (checkPassword.match(yourPassword)) {
    passWord.style.borderColor = "#05ad23";
    hienPass1.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienPass1.style.color = "#1cb811";
  } else {
    passWord.style.borderColor = "#ff0505";
    hienPass1.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienPass1.style.color = "#ff0505";
  }
  if (checkPassword == "") {
    passWord.style.borderColor = "#ff0505";
    hienPass1.innerHTML = "❌ Vui Lòng Nhập Trường Này";
    hienPass1.style.color = "#ff0505";
  }
  return;
}

function checkPassword() {
  var password1 = document.getElementById("passWord").value;
  var password2 = document.getElementById("passWordR").value;

  if (password2 != password1) {
    passWordR.style.borderColor = "#ff0505";
    hienPass2.innerHTML = "❌ Mật Khẩu Nhập Lại Không Trùng Khớp";
    hienPass2.style.color = "#ff0505";
  } else {
    passWordR.style.borderColor = "#1cb811";
    hienPass2.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienPass2.style.color = "#1cb811";
  }
  if (password2 == "") {
    passWordR.style.borderColor = "#ff0505";
    hienPass2.innerHTML = "❌ Vui Lòng Nhập Trường Này";
    hienPass2.style.color = "#ff0505";
  }
  return;
}

function login() {
  window.location.replace('http://127.0.0.1:5500/DangNhap/Login.html')
}
// hiện và ẩn password 1
function bam() {
  var show = document.getElementById("passWord");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}

// hiện và ẩn password 2
function bam1() {
  var show = document.getElementById("passWordR");
  if (show.type === "password") {
    show.type = "text";
  } else {
    show.type = "password";
  }
}

var input_fields = document.querySelectorAll(".form-control");
var login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length >= 2 ){
			login_btn.disabled = false;
			login_btn.className = "btn btn-primary"
		}
	})
});