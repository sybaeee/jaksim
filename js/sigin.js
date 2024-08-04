// 변수 , 오류 메시지를 담고 있는 변수
// 어떤 input 태그가 현재 오류인지를 한번에 저장한 객체
let inputs = {
  email: {isErr : true , errMsg : "필수입력 값입니다."},
  userName : {isErr : true , errMsg : "필수입력 값입니다."},
  password : {isErr : true , errMsg : "필수입력 값입니다."},
  passwordCheck : {isErr : true , errMsg : "필수입력 값입니다."},
  answer : {isErr : true , errMsg : "필수입력 값입니다."}
}





let emailInput = document.querySelector('#email');
emailInput.oninput = (e)=>{
  // console.log(e.target.value);
  // e.target.value에는 사용자가 입력한 값이 들어있다
  let emailMsg = document.querySelector('#email-msg');
  let emailRex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if(e.target.value == ''){
    emailMsg.classList.add('active');
    inputs.email.isErr = true;
    inputs.email.errMsg = '필수 입력 값입니다.';
    emailMsg.innerText = '필수 입력 값입니다.';
  }else if(!emailRex.test(e.target.value)){
    emailMsg.classList.add('active');
    inputs.email.isErr = true;
    emailMsg.innerText = 'email 형식을 지켜주세요.';
    inputs.email.errMsg = 'email 형식을 지켜주세요.';
  }else{
    emailMsg.classList.remove('active');
    inputs.email.isErr = false;
  }

}


let userNameInput = document.querySelector('#user-name');
userNameInput.oninput = (e)=>{
  // console.log(e.target.value);
  // e.target.value에는 사용자가 입력한 값이 들어있다
  let userNameMsg = document.querySelector('#user-name-msg');

  if(e.target.value == ''){
    userNameMsg.classList.add('active');
    userNameMsg.innerText = '필수 입력 값입니다.';
    inputs.userName.isErr = true;
    inputs.userName.errMsg = '필수 입력 값입니다.';
  }else if(e.target.value == '운영자'){
    userNameMsg.classList.add('active');
    userNameMsg.innerText = '사용할 수 없는 닉네임 입니다.';
    inputs.userName.isErr = true;
    inputs.userName.errMsg = '사용할 수 없는 닉네임 입니다.';
  }else{
    userNameMsg.classList.remove('active');
    inputs.userName.isErr = false;
  }

}


let passwordInput = document.querySelector('#password');
passwordInput.oninput = (e)=>{
  // console.log(e.target.value);
  // e.target.value에는 사용자가 입력한 값이 들어있다
  let passwordMsg = document.querySelector('#password-msg');

  if(e.target.value == ''){
    passwordMsg.classList.add('active');
    passwordMsg.innerText = '필수 입력 값입니다.';
    inputs.password.isErr = true;
    inputs.password.errMsg = '필수 입력 값입니다.';
  }else if(e.target.value.length < 8){
    passwordMsg.classList.add('active');
    passwordMsg.innerText = '8글자 이상으로 설정해주세요.';
    inputs.password.isErr = true;
    inputs.password.errMsg = '8글자 이상으로 설정해주세요.';
  }else{
    passwordMsg.classList.remove('active');
    inputs.password.isErr = false;
  }

}

let passwordCheckInput = document.querySelector('#password-check');
passwordCheckInput.oninput = (e)=>{
  // console.log(e.target.value);
  // e.target.value에는 사용자가 입력한 값이 들어있다
  let passwordCheckMsg = document.querySelector('#password-check-msg');
  let password = document.querySelector('#password');

  if(e.target.value == ''){
    passwordCheckMsg.classList.add('active');
    passwordCheckMsg.innerText = '필수 입력 값입니다.';
    inputs.passwordCheck.isErr = true;
    inputs.passwordCheck.errMsg = '필수 입력 값입니다.';
  }else if(e.target.value != password.value){
    passwordCheckMsg.classList.add('active');
    passwordCheckMsg.innerText = '비밀번호가 서로 다릅니다.';
    inputs.passwordCheck.isErr = true;
    inputs.passwordCheck.errMsg = '비밀번호가 서로 다릅니다.';
  }else{
    passwordCheckMsg.classList.remove('active');
    inputs.passwordCheck.isErr = false;
  }

}


let findAnswerInput = document.querySelector('#find-answer');
findAnswerInput.oninput = (e)=>{
  // console.log(e.target.value);
  // e.target.value에는 사용자가 입력한 값이 들어있다
  let findAnswerMsg = document.querySelector('#find-answer-msg');

  if(e.target.value == ''){
    findAnswerMsg.classList.add('active');
    findAnswerMsg.innerText = '필수 입력 값입니다.';
    inputs.answer.isErr = true;
    inputs.answer.errMsg = '필수 입력 값입니다.';

  }else{
    findAnswerMsg.classList.remove('active');
    inputs.answer.isErr = false;
  }

}

// submit event 발생할 때
let authForm = document.querySelector('.auth-container');
authForm.onsubmit = (e)=>{
  e.preventDefault();
  let emailMsg = document.querySelector('#email-msg');
  let userNameMsg = document.querySelector('#user-name-msg');
  let passwordMsg = document.querySelector('#password-msg');
  let passwordCheckMsg = document.querySelector('#password-check-msg');
  let answerMsg = document.querySelector('#find-answer-msg');

  if(inputs.email.isErr){
    // email 오류메시지 보여주기
    emailMsg.classList.add('active');
    emailMsg.innerText = inputs.email.errMsg;
  }else{
    emailMsg.classList.remove('active');
  }

  if(inputs.password.isErr){
    // password 오류 메시지 보여주기
    passwordMsg.classList.add('active');
    passwordMsg.innerText = inputs.password.errMsg;
  }else{
    passwordMsg.classList.remove('active');
  }

  if(inputs.userName.isErr){
    // userName 오류 메시지 보여주기
    userNameMsg.classList.add('active');
    userNameMsg.innerText = inputs.userName.errMsg;
  }else{
    userNameMsg.classList.remove('active');
  }

  if(inputs.passwordCheck.isErr){
    // passwordCheck 오류 메시지 보여주기
    passwordCheckMsg.classList.add('active');
    passwordCheckMsg.innerText = inputs.passwordCheck.errMsg;
  }else{
    passwordCheckMsg.classList.remove('active');
  }

  if(inputs.answer.isErr){
    answerMsg.classList.add('active');
    answerMsg.innerText = inputs.answer.errMsg;
  }else{
    answerMsg.classList.remove('active');
  }



  // 만약 모든 값들이 정상적으로 입력 되었다면
  // 회원가입 성공!
  if(
    inputs.email.isErr == false &&
    inputs.userName.isErr == false &&
    inputs.password.isErr == false &&
    inputs.passwordCheck.isErr == false &&
    inputs.answer.isErr == false 
  ){
    // alert('성공');
    // 사용자가 입력한 값을 서버로 전달 --> 서버에서는 그 값을 db에 저장 
    // 팝업창 띄우기
    let modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.classList.add('active');
    
    document.body.style.overflow = 'hidden';

  }
}