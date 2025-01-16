document.getElementById("generateBtn").addEventListener("click", function () {
  const nameValue = document.getElementById("name").value.trim();
  const codeValue = document.getElementById("codeInput").value.trim();

  // Bảng quy đổi giá trị chữ cái thành số
  const letterValues = {
    A: 10,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 16,
    G: 17,
    H: 18,
    I: 19,
    J: 20,
    K: 21,
    L: 23,
    M: 24,
    N: 25,
    O: 26,
    P: 27,
    Q: 28,
    R: 29,
    S: 30,
    T: 31,
    U: 32,
    V: 34,
    W: 35,
    X: 36,
    Y: 37,
    Z: 38,
  };

  console.log("Tên nhập vào:", nameValue);
  console.log("Độ dài:", nameValue.length);
  console.log("Regex kiểm tra:", /^[A-Z]+$/.test(nameValue));

  // Kiểm tra độ dài và chữ in hoa
  if (nameValue.length !== 4 || !/^[A-Z]+$/.test(nameValue)) {
    alert("Name phải có đúng 4 ký tự và là chữ in hoa!");
    return;
  }
  console.log("Code nhập vào:", codeValue);
  if (codeValue.length !== 6) {
    alert("Code phải có đúng 6 ký tự!");
    return;
  }
  // check every character in nameValue has value in the letterValues
  for (let i = 0; i < 4; i++) {
    if (!letterValues[nameValue[i]]) {
      alert(`Ký tự ${nameValue[i]} không hợp lệ!`);
      return;
    }
  }

  let sum = 0;
  let arrayName = [];
  let arrayCode = [];
  //add to name array
  for (let i = 0; i < 4; i++) {
    let value = letterValues[nameValue[i]];
    arrayName.push(value); // Lưu vào mảng
  }
  //add to code array
  for (let i = 0; i < 6; i++) {
    let value = codeValue[i];
    arrayCode.push(value); // Lưu vào mảng
  }

  //step2
  sum =
    arrayName[0] * 1 +
    arrayName[1] * 2 +
    arrayName[2] * 4 +
    arrayName[3] * 8 +
    arrayCode[0] * 16 +
    arrayCode[1] * 32 +
    arrayCode[2] * 64 +
    arrayCode[3] * 128 +
    arrayCode[4] * 256 +
    arrayCode[5] * 512;
  let step2 = sum;
  console.log("step2: " + step2);

  //step3+4
  let step4 = Math.floor(step2 / 11);
  console.log("step 4 " + step4);
  //step5
  let step5 = step4 * 11;
  console.log("step5: " + step5);
  //step6
  let step6 = step2 - step5;
  console.log(step6);

  // step7 check if step is less than 10 or greater than 10
  if (step6 < 10) {
    // If step6 < 10, take the value as it is
    alert("Success Generated Code");
    document.getElementById("codeName").value = nameValue;
    document.getElementById("codeNumber").value = codeValue;
    document.getElementById("codeGenerated").value = step6;
  } else if (step6 === 10) {
    // If step6 == 10, set the value to 0
    alert("Success Generated Code");
    document.getElementById("codeName").value = nameValue;
    document.getElementById("codeNumber").value = codeValue ;
    document.getElementById("codeGenerated").value = 0;
  } else {
    // If step6 > 10, check the tens digit
    const tensDigit = Math.floor(step6 / 10) % 10; // Get the tens digit of step6
    const lastDigitOfCode = parseInt(arrayCode[5]); // Get the last digit from arrayCode[5]

    if (tensDigit === lastDigitOfCode) {
      alert("Success Generated Code");
      document.getElementById("codeName").value = nameValue;
      document.getElementById("codeNumber").value = codeValue ;
      document.getElementById("codeGenerated").value = 0;
    } else {
      alert("Code is invalid!");
    }
  }
});
