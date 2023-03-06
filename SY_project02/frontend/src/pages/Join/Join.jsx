import { useNavigate } from "react-router-dom";
import {
  checkEmail,
  checkName,
  checkNickname,
  checkPassword,
  checkPhone,
} from "../../components/Join/JoinRegex";
import { useState, useRef } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import * as styled_AB from "../../styled/AllBox";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_LOG from "../../styled/Login/Login";
import { Footer } from "../../components/Footer/Footer";
import * as styled_BU from "../../styled/Button";
import { NickAgree } from "./NickAgree";
import { encrypt } from "../../utils/crypto-front";
import { SERVER_URL } from "../../utils/urls";

const Join = () => {
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const nicknameRef = useRef();

  const requestEmail = emailRef?.current?.value;
  const requestPhoneNumber = phoneNumberRef?.current?.value;
  const requestNickname = nicknameRef?.current?.value;
  const handleCheckRequest = async (data, reqData) => {
    const reqName = data;
    await axios
      .post(
        `${SERVER_URL}/auth/check`,
        { [reqName]: reqData },
        { withCredentials: true }
      )
      .then((res) => alert(res.data.message));
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [nickname, setNickname] = useState("");
  const [checkedNick, setCheckedNick] = useState(false);

  const eEmail = encrypt(email);
  const eName = encrypt(name);
  const eNickname = encrypt(nickname);
  const ePassword = encrypt(password);
  const eTelephone = encrypt(telephone);

  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [telephoneMsg, setTelephoneMsg] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");

  const emailValid = checkEmail(email);
  const passwordValid = checkPassword(password);
  const passwordConfirmValid = password === passwordConfirm;
  const nameValid = checkName(name);
  const telephoneValid = checkPhone(telephone);
  const nicknameValid = checkNickname(nickname);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!checkEmail(e.target.value)) {
      setEmailMsg("유효하지 않은 이메일 형식 입니다.");
    } else {
      setEmailMsg("올바른 이메일 형식입니다.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (!checkPassword(e.target.value)) {
      setPasswordMsg(
        "영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력해야 합니다."
      );
    } else {
      setPasswordMsg("안전한 비밀번호 입니다.");
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);

    if (currentPasswordConfirm !== password) {
      setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordConfirmMsg("비밀번호가 일치합니다.");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (!checkName(e.target.value)) {
      setNameMsg("2자리 이상의 영문자와 한글만 입력할 수 있습니다.");
    } else {
      setNameMsg("올바른 이름 입니다.");
    }
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);

    if (!checkPhone(e.target.value)) {
      setTelephoneMsg(
        "하이픈(-)을 제외한 13자리 숫자로 입력해야 합니다."
      );
    } else {
      setTelephoneMsg("올바른 번호 입니다.");
    }
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);

    if (!checkNickname(e.target.value)) {
      setNicknameMsg(
        "2자리 이상의 영문자와 한글만 입력할 수 있습니다."
      );
    } else {
      setNicknameMsg("올바른 닉네임 입니다.");
    }
  };

  const onClickCheckedNick = () => {
    setCheckedNick(!checkedNick);
  };

  const submitIdPassword = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해 주세요.");
    } else if (password === "") {
      alert("비밀번호를 입력해 주세요.");
    } else if (passwordConfirm === "") {
      alert("비밀번호 확인을 입력해 주세요.");
    } else if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (name === "") {
      alert("이름을 입력해 주세요.");
    } else if (telephone === "") {
      alert("전화번호를 입력해 주세요.");
    } else if (checkedNick !== true) {
      alert("닉네임 이용약관에 동의하셔야 합니다.");
    } else if (nickname === "") {
      alert("닉네임을 입력해 주세요.");
    } else {
      const post = {
        eEmail,
        eName,
        eNickname,
        ePassword,
        eTelephone,
      };
      axios
        .post(
          `${SERVER_URL}/auth/join`,
          {
            data: post,
          },
          { withCredentials: true }
        )
        .then((res) => {
          navigate("/joinSuccess", {
            replace: true,
            state: email,
          });
        })
        .catch((error) => {
          alert("문제가 발생했습니다. 다시 시도해주세요.");
        });
    }
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Join.RB>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <form
              method={"post"}
              onSubmit={(e) => e.preventDefault()}
            >
              <styled_LOG.LFFFieldset>
                <styled_Join.RFStrong>회원가입</styled_Join.RFStrong>
                <styled_Join.RFSection>
                  <styled_Join.RFSectionImg></styled_Join.RFSectionImg>
                  <styled_Join.RFSectionP>
                    회원정보를 입력해 주세요.
                  </styled_Join.RFSectionP>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      이메일
                      <styled_Join.RFSectionSpan>
                        (필수)
                      </styled_Join.RFSectionSpan>
                      <styled_Join.RFSectionSpanRight
                        onClick={() =>
                          handleCheckRequest("email", requestEmail)
                        }
                      >
                        중복 확인
                      </styled_Join.RFSectionSpanRight>
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      ref={emailRef}
                      type={"email"}
                      id={"registerEmail"}
                      name={"email"}
                      placeholder={"이메일"}
                      onChange={handleEmailChange}
                      required
                    />
                    <styled_Join.RFSDDiv
                      className={emailValid ? "success" : "error"}
                    >
                      {emailMsg}
                    </styled_Join.RFSDDiv>
                  </styled_Join.RFSectionDiv>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      비밀번호
                      <styled_Join.RFSectionSpan>
                        (필수)
                      </styled_Join.RFSectionSpan>
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      type={"password"}
                      id={"registerPassword"}
                      name={"password"}
                      placeholder={
                        "영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력해 주세요."
                      }
                      onChange={handlePasswordChange}
                      required
                    />
                    <styled_Join.RFSDDiv
                      className={passwordValid ? "success" : "error"}
                    >
                      {passwordMsg}
                    </styled_Join.RFSDDiv>
                  </styled_Join.RFSectionDiv>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      비밀번호 확인
                      <styled_Join.RFSectionSpan>
                        (필수)
                      </styled_Join.RFSectionSpan>
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      type={"password"}
                      id={"registerPasswordConfirm"}
                      name={"passwordConfirm"}
                      placeholder={
                        "비밀번호를 다시 한번 입력해 주세요."
                      }
                      onChange={handlePasswordConfirmChange}
                      required
                    />
                    <styled_Join.RFSDDiv
                      className={
                        passwordConfirmValid ? "success" : "error"
                      }
                    >
                      {passwordConfirmMsg}
                    </styled_Join.RFSDDiv>
                  </styled_Join.RFSectionDiv>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      이름
                      <styled_Join.RFSectionSpan>
                        (필수)
                      </styled_Join.RFSectionSpan>
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      type={"name"}
                      id={"registerName"}
                      name={"name"}
                      placeholder={"이름"}
                      onChange={handleNameChange}
                      required
                    />
                    <styled_Join.RFSDDiv
                      className={nameValid ? "success" : "error"}
                    >
                      {nameMsg}
                    </styled_Join.RFSDDiv>
                  </styled_Join.RFSectionDiv>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      휴대폰
                      <styled_Join.RFSectionSpan>
                        (필수)
                      </styled_Join.RFSectionSpan>
                      <styled_Join.RFSectionSpanRight
                        onClick={() =>
                          handleCheckRequest(
                            "phoneNumber",
                            requestPhoneNumber
                          )
                        }
                      >
                        중복 확인
                      </styled_Join.RFSectionSpanRight>
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      ref={phoneNumberRef}
                      type={"text"}
                      id={"registerPhone"}
                      name={"telephone"}
                      placeholder={"휴대폰 번호를 입력해 주세요."}
                      onChange={handleTelephoneChange}
                      required
                    />
                    <styled_Join.RFSDDiv
                      className={telephoneValid ? "success" : "error"}
                    >
                      {telephoneMsg}
                    </styled_Join.RFSDDiv>
                  </styled_Join.RFSectionDiv>
                </styled_Join.RFSection>
                <styled_Join.RFSection>
                  <styled_Join.RFSDFigure />
                  <styled_Join.RFSDivP>
                    주문하신 제품을 찾으실 때,
                    <br />
                    파트너가 등록하신 닉네임을 불러드립니다.
                  </styled_Join.RFSDivP>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      닉네임
                      <styled_Join.RFSectionSpan>
                        (필수)
                      </styled_Join.RFSectionSpan>
                      <styled_Join.RFSectionSpanRight
                        onClick={() =>
                          handleCheckRequest(
                            "nickname",
                            requestNickname
                          )
                        }
                      >
                        중복 확인
                      </styled_Join.RFSectionSpanRight>
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      ref={nicknameRef}
                      type={"nickname"}
                      id={"registerNickname"}
                      name={"nickname"}
                      placeholder={"닉네임"}
                      onChange={handleNicknameChange}
                      required
                    />
                    <styled_Join.RFSDDiv
                      className={nicknameValid ? "success" : "error"}
                    >
                      {nicknameMsg}
                    </styled_Join.RFSDDiv>
                    <styled_Join.AgreeSpan>
                      <styled_Join.AIN
                        type={"checkbox"}
                        checkedNick={checkedNick}
                      />
                      <styled_Join.ALN
                        onClick={onClickCheckedNick}
                        checkedNick={checkedNick}
                      />
                    </styled_Join.AgreeSpan>
                    <NickAgree />
                  </styled_Join.RFSectionDiv>
                </styled_Join.RFSection>
              </styled_LOG.LFFFieldset>
              <styled_Join.RFormP>
                <b>
                  * 필수항목을 모두 입력해야 회원 가입이 가능합니다.
                </b>
              </styled_Join.RFormP>
              <styled_BU.LJButton onClick={submitIdPassword}>
                가입하기
              </styled_BU.LJButton>
            </form>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_Join.RB>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default Join;
