var absenceRate = Number(prompt("Nhập điểm chuyên cần")); // casting
var average = Number(prompt("Nhập điểm trung bình"));
var specialCert = prompt("Có giấy phép đặc biệt? (yes/no)") === "yes";
// prompt() -> always return as a string

// SOLID: each function do only one things
function isEligible(attendance, avg, cert) {
  return (attendance > 80 && avg >= 5) || cert;
}

var result = isEligible(absenceRate, average, specialCert);

if (result) {
  alert("Bạn đủ quyền dự thi");
} else {
  alert("Bạn chưa đủ quyền dự thi");
}

printData();

function printData() {
  console.log("Chuyên cần:", absenceRate);
  console.log("Điểm TB:", average);
  console.log("Giấy phép:", specialCert);
}
