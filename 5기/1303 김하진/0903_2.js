let user = "김하진";
let score = 100;
console.log(user + "의 점수는 " + score + "점입니다.")
console.log(`${user}의 점수는 ${score}점입니다.`)
// alert("경고창입니다.");
// let result = confirm("당신은 학생입니까?");     //확인(true), 최소(false)
// console.log(result);

// let age = prompt("나이를 입력하세요");
// if (age >= 20) {
//     console.log("성인입니다.");
// }
// else if(age>=13){
//     console.log("청소년입니다.");
// }
// else{
//     console.log("어린이입니다.");
// }

let fm = confirm("여자(확인) 남자(취소)");
if (fm == true) {
    alert("그녀가 왔다.");
}
else {
    alert("그가 왔다.");
}