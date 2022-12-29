// 회원가입 페이지 정규식
// e-mail 확인
export const checkEmail = (e) => {
  return e.toLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);
};

// Login용 e-mail 확인
export const checkEmailLogin = (e) => {
  // eslint-disable-next-line
  const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  const currentEmail = e.target.value;

  if (!emailRegex.test(currentEmail)) {
    return false;
  } else {
    return emailRegex.test(e);
  }
};

// 비밀번호 확인
export const checkPassword = (e) => {
  return e.toLowerCase().match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?])(?=.*[0-9]).{8,16}$/);
};

// Lgoin용 비밀번호 확인
export const checkPasswordLogin = (e) => {
  const passwordRegx =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?])(?=.*[0-9]).{8,16}$/;
  const currentPassword = e.target.value;

  if (
      !passwordRegx.test(currentPassword) &&
      (passwordRegx.test(currentPassword) < 8 ||
          passwordRegx.test(currentPassword) > 16)
  ) {
    return false;
  } else {
    return passwordRegx.test(e);
  }
};

// 비밀번호 일치 확인
export const checkPasswordConfirm = (e) => {
  const currentPasswordConfirm = e.target.value;
  const password = document.getElementById("registerPassword").value;

  if (currentPasswordConfirm !== password) {
    console.log("비밀번호가 같지 않습니다.");
    return false;
  } else {
    console.log("비밀번호가 같습니다.");
  }
};

// 이름 확인
export const checkName = (e) => {
  return e.toLowerCase().match(/^[ㄱ-ㅎ가-힣a-zA-Z].{1,50}$/g);
};

// 닉네임 확인
export const checkNickname = (e) => {
  return e.toLowerCase().match(/^[ㄱ-ㅎ가-힣a-zA-Z].{1,15}$/g);
};

// 휴대폰 번호 확인
export const checkPhone = (e) => {
  return e.toLowerCase().match(/^\d{2,3}\d{3,4}\d{4}$/);
};

// 주소 확인(한글, 숫자, 공백만 사용 가능)
export const checkAddress = (e) => {
  const addressRegx = /^[ㄱ-ㅎ가-힣]|[0-9]|\s.{10,}$/g;
  const currentAddress = e.target.value;

  if (!addressRegx.test(currentAddress)) {
    console.log("특수문자를 사용할 수 없습니다.");
    return false;
  } else {
    console.log("올바른 주소 입니다.");
    return addressRegx.test(e);
  }
};
