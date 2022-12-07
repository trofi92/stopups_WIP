// 회원가입 페이지 정규식
// e-mail 확인
export const checkEmail = (e) => {
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    const currentEmail = e.target.value;

    if (!emailRegex.test(currentEmail)) {
        console.log("유효하지 않은 이메일 형식 입니다.");
        e.target.focus();
        return false;
    } else {
        console.log("올바른 아이디 입니다.")
        return emailRegex.test(e);
    }
};

// 비밀번호 확인
export const checkPassword = (e) => {
    const passwordRegx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?])(?=.*[0-9]).{8,16}$/;
    const currentPassword = e.target.value

    if (!passwordRegx.test(currentPassword) && (passwordRegx.test(currentPassword) < 8 || passwordRegx.test(currentPassword) > 16)) {
        console.log("영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력해야 합니다.");
        return false;
    } else {
        console.log("안전한 비밀번호 입니다.");
        return passwordRegx.test(e);
    }
};

// 비밀번호 일치 확인
export const checkPasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    const password = document.getElementById("registerPassword").value;

    if (currentPasswordConfirm !== password) {
        console.log("비밀번호가 같지 않습니다.")
        return false
    } else {
        console.log("비밀번호가 같습니다.")
    }
};

// 이름 확인
export const checkName = (e) => {
    const nameRegx = /^[ㄱ-ㅎ가-힣a-zA-Z].{1,50}$/g;
    const currentName = e.target.value;

    if (!nameRegx.test(currentName) && nameRegx.test(currentName) < 2) {
        console.log("2자리 이상의 영문자와 한글만 입력할 수 있습니다.");
        return false;
    } else {
        console.log("올바른 닉네임 입니다.")
        return nameRegx.test(e);
    }
};

// 닉네임 확인
export const checkNickname = (e) => {
    const nicknameRegx = /^[ㄱ-ㅎ가-힣a-zA-Z].{1,15}$/g;
    const currentNickame = e.value;

    if (!nicknameRegx.test(currentNickame) && nicknameRegx.test(currentNickame) < 2) {
        console.log("2자리 이상의 영문자와 한글만 입력할 수 있습니다.");
        return false;
    } else {
        console.log("올바른 이름 입니다.")
        return nicknameRegx.test(e);
    }
};

// 휴대폰 번호 확인
export const checkPhone = (e) => {
    const phoneRegx = /^\d{2,3}-\d{3,4}-\d{4}$/;
    const currentPhone = e.target.value;

    if (!phoneRegx.test(currentPhone) && (phoneRegx.test(currentPhone) < 13 || phoneRegx.test(currentPhone) > 13)) {
        console.log("하이픈(-)을 포함한 13자리 숫자여야 합니다.");
        return false;
    } else {
        console.log("올바른 번호 입니다.")
        return phoneRegx.test(e);
    }
};

// 주소 확인(한글, 숫자, 공백만 사용 가능)
export const checkAddress = (e) => {
    const addressRegx = /^[ㄱ-ㅎ가-힣]|[0-9]|\s.{10,}$/g;
    const currentAddress = e.target.value;

    if (!addressRegx.test(currentAddress)) {
        console.log("특수문자를 사용할 수 없습니다.");
        return false;
    } else {
        console.log("올바른 주소 입니다.")
        return addressRegx.test(e);
    }
};