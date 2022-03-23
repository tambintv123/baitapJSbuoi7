const result = document.getElementById("result");
var numberList = [];
document.getElementById("btnCreate").addEventListener("click", function () {
  let number = +document.getElementById("number").value;
  numberList.push(number);
  result.innerHTML = `<p>${numberList}</p>`;
});

const sumPositiveNumber = (numberList) => {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) sum += numberList[i];
  }
  return sum;
};

const countPositiveNumber = (numberList) => {
  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) count++;
  }
  return count;
};

const findSmallestNumber = (numberList) => {
  let min = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] < min) min = numberList[i];
  }
  return min;
};

const findLastEvenNumber = (evenNumber) => {
  let even_number = -1; //khong co so chan
  for (let i = 0; i < evenNumber.length; i++) {
    if (evenNumber[i] % 2 == 0) even_number = evenNumber[i];
  }
  return even_number;
};

const arrange = (numberList) => {
  let afterArrange = numberList.sort();
  return afterArrange;
};

const isPrime = (n) => {
  let flag = 1;
  //flag = 0: khong phai so nguyen to;
  //flag = 1: la so nguyen to;

  if (n < 2) flag = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = 0;
      break;
    }
  }
  return flag;
};

const countIntegerNumber = (numberList) => {
  let count = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 1 == 0) count++;
  }
  return count;
};
//cau 1
document.getElementById("btnCalculateSum").onclick = () => {
  result.innerHTML = ` ${
    result.innerHTML
  } <p>Sum of all positive number is ${sumPositiveNumber(numberList)}</p>`;
};

//cau 2
document.getElementById("btnCount").onclick = () => {
  result.innerHTML = `${result.innerHTML} <p>Have ${countPositiveNumber(
    numberList
  )} positive numbers</p>`;
};

//cau 3
document.getElementById("btnFindSmallestNumber").onclick = () => {
  result.innerHTML = `${
    result.innerHTML
  } <p>The smallest number is ${findSmallestNumber(numberList)}</p>`;
};

//cau 4
var positiveNumberList = [];
document
  .getElementById("btnFindSmallestPositiveNumber")
  .addEventListener("click", function () {
    for (let i = 0; i < numberList.length; i++) {
      if (numberList[i] > 0) positiveNumberList.push(numberList[i]);
    }
    result.innerHTML = `${
      result.innerHTML
    } <p>The smallest positive number is ${findSmallestNumber(
      positiveNumberList
    )}</p>`;
  });

//cau 5
var evenNumber = [];
document.getElementById("btnFindLastEvenNumber").onclick = () => {
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0) evenNumber.push(numberList[i]);
  }
  result.innerHTML = `${
    result.innerHTML
  } <p>The last even number is ${findLastEvenNumber(evenNumber)}</p>`;
};

//cau 6
//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.getElementById("btnChange").onclick = () => {
  let index1 = +document.getElementById("index1").value;
  let index2 = +document.getElementById("index2").value;
  let temp = numberList[index1];
  numberList[index1] = numberList[index2];
  numberList[index2] = temp;
  result.innerHTML = `${result.innerHTML} <p>The array after changing is ${numberList}</p>`;
};
//cau 7
document.getElementById("btnArrange").onclick = () => {
  result.innerHTML = `${
    result.innerHTML
  } <p>The array after arranging is ${arrange(numberList)}</p>`;
};

//cau 8
document.getElementById("btnFindPrime").onclick = () => {
  let firstPrime = -1;
  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) {
      firstPrime = numberList[i];
      break;
    }
  }
  result.innerHTML = `${result.innerHTML} <p>The first prime is ${firstPrime}</p>`;
};

//cau 9
//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

document.getElementById("btnFindCountIntegerNumber").onclick = () => {
  result.innerHTML = `${result.innerHTML} <p>Have ${countIntegerNumber(
    numberList
  )} integer numbers</p>`;
};

//cau 10
// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
document.getElementById("btnCompare").onclick = () => {
  let positiveNumber = 0;
  let negativeNumber = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) positiveNumber++;
    else negativeNumber++;
  }
  if (positiveNumber > negativeNumber)
    result.innerHTML = `${result.innerHTML} <p>The positive number is more than negative number</p>`;
  else if (positiveNumber < negativeNumber)
    result.innerHTML = `${result.innerHTML} <p>The negative number is more than positive number</p>`;
  else
    result.innerHTML = `${result.innerHTML} <p>The positive number is equal to negative number</p>`;
};
