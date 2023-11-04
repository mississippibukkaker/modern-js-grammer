/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";

// console.log(val1);

// // var変数は上書き可能
// val1 = "uwagaki";
// console.log(val1);

// // 再宣言
// var val1 = "saisengen";
// console.log(val1);

// let val2 ="lethensuu";
// console.log(val2);

// val2 ="uwagaki";
// console.log(val2);

// let val2 = "sss";
// console.log(val2);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "じゃけえ",
//   age : 24,
// };
// val4.name = "jakee";
// val4.address = "hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);


/**
 * テンプレート文字列
 */
// const name = "jakee";
// const age = 24;
// my name is jakee age is 24.

// 従来の方法
// const message1 = "私の名前は" + name + "です.age is " + age;
// console.log(message1); 

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`
// console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("aa"));

//アロー関数
// const func2 = str=> str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(1,2));

/**
 *  分割代入
 * オブジェクトや配列から一部分を取り出して使う
 */

//  const myProfile = {
//    name: "jakee",
//    age:28,
//  };

//  const message3 = `my name is ${myProfile.name}, age is ${myProfile.age}`;
// console.log(message3);

// const {name, age} = myProfile;
// const message = `my name is ${name}, age is ${age}`;
// console.log(message);

// const myProfile = ['jakee', 28];
// const message = `mynameis ${myProfile[0]}. age is ${myProfile[1]}`;
// // console.log(message);

// const [name, age] = myProfile;
// const message2 = `mynameis ${name}. age is ${age}`;
// console.log(message2);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "guest") => console.log(`こんにちは、${name}さん`);
sayHello("aa");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const array = [1, 2];
// // console.log(array);
// // console.log(...array);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array[0],array[1]);
// sumFunc(...array);

// まとめる
// const array = [1,2,3,4,5];
// const [num1,num2, ...arr] = array;
// console.log(num1);
// console.log(num2);
// console.log(arr);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30,40];
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6)
console.log(arr4)

// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

const nameArr = ["tanaka", "yamada", "jakee"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`)
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jakee") {
//     return name;
//   } else {
//     return "Mr." + name;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// ||は左側がfalseなら右側を返す
const num = "";
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const numTwo = null;
const feeTwo = numTwo && "金額が設定されています";
console.log(feeTwo);