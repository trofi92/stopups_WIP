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
  maxAge: 1000 * 60 * 60 * 24 * 1,
  httpOnly: true,
  overwrite: true,
  expires: new Date(Date.now() - 1),
  secure: true,
  sameSite: "strict",
};
const refreshJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 30,
  httpOnly: true,
  overwrite: true,
  secure: true,
  sameSite: "strict",
};

module.exports = {
  checkNickname,
  checkPhone,
  checkEmail,
  accessJwtTokenOption,
  refreshJwtTokenOption,
};
