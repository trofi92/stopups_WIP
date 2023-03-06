export const checkEmail = (e) => {
  return e
    .toLowerCase()
    .match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    );
};

export const checkEmailLogin = (e) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  const currentEmail = e.target.value;

  if (!emailRegex.test(currentEmail)) {
    return false;
  } else {
    return emailRegex.test(e);
  }
};

export const checkPassword = (e) => {
  return e
    .toLowerCase()
    .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?])(?=.*[0-9]).{8,16}$/);
};

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

export const checkPasswordConfirm = (e) => {
  const currentPasswordConfirm = e.target.value;
  const password = document.getElementById("registerPassword").value;

  if (currentPasswordConfirm !== password) {
    return false;
  }
};

export const checkName = (e) => {
  return e.toLowerCase().match(/^[ㄱ-ㅎ가-힣a-zA-Z].{1,50}$/g);
};

export const checkNickname = (e) => {
  return e.toLowerCase().match(/^[ㄱ-ㅎ가-힣a-zA-Z].{1,15}$/g);
};

export const checkPhone = (e) => {
  return e.toLowerCase().match(/^\d{2,3}\d{3,4}\d{4}$/);
};

export const checkAddress = (e) => {
  const addressRegx = /^[ㄱ-ㅎ가-힣]|[0-9]|\s.{10,}$/g;
  const currentAddress = e.target.value;

  if (!addressRegx.test(currentAddress)) {
    return false;
  }
};
