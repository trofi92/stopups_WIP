const checkNickname = (data) => {
  return data?.toLowerCase().match(/^[ㄱ-ㅎ가-힣a-zA-Z].{1,15}$/g);
};

const checkPhone = (data) => {
  return data?.toLowerCase().match(/^\d{2,3}\d{3,4}\d{4}$/);
};

const checkEmail = (data) => {
  return data
    ?.toLowerCase()
    .match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    );
};

const accessJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, //쿠키 수명 1주일
  httpOnly: true,
  overwrite: true,
  expires: new Date(Date.now() - 1), //브라우저 종료시 즉시 삭제
};
const refreshJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, //쿠키 수명 1주일
  httpOnly: true,
  overwrite: true,
};

module.exports = {
  checkNickname,
  checkPhone,
  checkEmail,
  accessJwtTokenOption,
  refreshJwtTokenOption,
};
