function submit() {
  var user = document.getElementById("username").value;
  var Phone = document.getElementById("Phone").value;
  var Email = document.getElementById("Email").value;
  var passWord = document.getElementById("passWord").value;
  var passWordR = document.getElementById("passWordR").value;

  //Khai Báo cho từng chuỗi đệ quy

  var User = document.getElementById("username");
  var email = document.getElementById("Email");
  var phone = document.getElementById("Phone");
  var password = document.getElementById("passWord");
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
    if (!UserName.test(User.value)) {
      alert("⚠️ Tên Phải Viết Liền Không Dấu ⚠️\n Ví dụ: J97");
      return;
    }
    // Check PhoneNumber Theo Chỗi Đệ Quy
    else {
      var phoneNumber =
        /^(09|03|07|08|05)\(?([0-9]{1})\)?[-.]?([0-9]{4})[-. ]?([0-9]{3})$/;
      if (!phoneNumber.test(phone.value)) {
        alert("⚠️ Số Điện Thoại Không Đúng ⚠️");
        return;
      }

      // Check Email Theo Chỗi Đệ Quy
      else {
        var checkemail =
          /^[A-Za-z][\w$.]+@(gmail|hotmail|live|donga.edu|edu.com|icloud|yahoo|outlook|msn|Yandex)+\.(com|vn|gov|info|net|org|mail)$/;
        if (!checkemail.test(email.value)) {
          alert(
            "⚠️ Địa Chỉ Email Không Hợp Lệ ⚠️\n Ví dụ: vanson123@gmail.com"
          );
          return false;
        }

        // Check Password1 Theo Chuỗi Đệ Quy
        else {
          var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số
          if (!pass.test(password.value)) {
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

hienFun = document.getElementById("hienUser");
hienPhone = document.getElementById("hienPhone");
hienEmail = document.getElementById("hienEmail");
hienPass1 = document.getElementById("hienPass1");
// Check User Trong InPut

function checkUsername() {
  var yourUser = document.getElementById("username").value;
  var thisyourUser = /^[a-zA-Z0-9_-]{2,16}$/; // Đủ 3 Kí Tự Và Dưới 16 Kí Tự , Không Dùng Tên Riêng VD: Văn Sơn / Đúng VD : Van_Son

  if (yourUser.match(thisyourUser)) {
    username.style.borderColor = "#05ad23";
    hienFun.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienFun.style.color = "#1cb811";
  } else {
    username.style.borderColor = "#ff0505";
    hienFun.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienFun.style.color = "#ff0505";
  }
  return;
}

// Check Phone Trong Input

function CheckPhone() {
  var PhoneFcn = document.getElementById("Phone").value;
  var yourPhoneNumber =
    /^(09|03|07|08|05)\(?([0-9]{1})\)?[-.]?([0-9]{4})[-. ]?([0-9]{3})$/; // Đủ 10 Số

  if (PhoneFcn.match(yourPhoneNumber)) {
    Phone.style.borderColor = "#05ad23";
    hienPhone.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienPhone.style.color = "#1cb811";
  } else {
    Phone.style.borderColor = "#ff0505";
    hienPhone.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienPhone.style.color = "#ff0505";
  }
  return;
}
// Check Email Trong Input

function checkEmail() {
  var email = document.getElementById("Email").value;
  var yourEmail =
    /^[A-Za-z][\w$.]+@(gmail|hotmail|live|donga.edu|edu.com|icloud|yahoo|outlook|msn|Yandex)+\.(com|vn|gov|info|net|org|mail)$/; // Đúng Tên Miền @gmail.c** , Không Được Có Dấu "." Ở Đầu

  if (email.match(yourEmail)) {
    Email.style.borderColor = "#05ad23";
    hienEmail.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienEmail.style.color = "#1cb811";
  } else {
    Email.style.borderColor = "#ff0505";
    hienEmail.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienEmail.style.color = "#ff0505";
  }
  return;
}
// Check PassWord 1 Trong Input

function password() {
  var password = document.getElementById("passWord").value;
  var yourPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số

  if (password.match(yourPassword)) {
    passWord.style.borderColor = "#05ad23";
    hienPass1.innerHTML = "✔️ Thông Tin Hợp Lệ";
    hienPass1.style.color = "#1cb811";
  } else {
    passWord.style.borderColor = "#ff0505";
    hienPass1.innerHTML = "❌ Thông Tin Không Hợp Lệ";
    hienPass1.style.color = "#ff0505";
  }
  return;
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
