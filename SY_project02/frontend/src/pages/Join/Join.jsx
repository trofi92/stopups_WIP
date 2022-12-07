import { useNavigate } from "react-router-dom";
import {
  checkEmail,
  checkName,
  checkNickname,
  checkPassword,
  checkPasswordConfirm,
  checkPhone,
} from "../../components/join/JoinRegex";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import { AllBox } from "../../styled/AllBox";
import {
  AgreeInput,
  AgreeLabel,
  AgreeSpan,
  RB,
  RFormP,
  RFSDFigure,
  RFSDInput,
  RFSDivP,
  RFSection,
  RFSectionDiv,
  RFSectionImg,
  RFSectionP,
  RFSectionSpan,
  RFSectionStrong,
  RFStrong,
} from "../../styled/Join/Join";
import { LFB, LFFFieldset, LFInner } from "../../styled/Login/Login";
import { Footer } from "../../components/Footer/Footer";
import { LJButton } from "../../styled/Button";
import { NickAgree } from "./NickAgree";
import { encrypt } from "../../util/chiper"; // DB에 저장 시 암호화, 조회시 복호화

const Join = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [telephone, setTelephone] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    checkEmail(e);
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    checkName(e);
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    checkNickname(e);
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    checkPassword(e);
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    checkPasswordConfirm(e);
    setPasswordConfirm(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    checkPhone(e);
    setTelephone(e.target.value);
  };

  const eEmail = encrypt(email);
  const eName = encrypt(name);
  const eNickname = encrypt(nickname);
  const ePassword = encrypt(password);
  const eTelephone = encrypt(telephone);

  const submitIdPassword = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
    } else if (name === "") {
      alert("이름을 입력해주세요");
    } else if (nickname === "") {
      alert("닉네임을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    } else if (passwordConfirm === "") {
      alert("비밀번호 확인을 입력해주세요");
    } else if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
    } else if (telephone === "") {
      alert("전화번호를 입력해주세요");
    } else {
      const post = {
        eEmail,
        eName,
        eNickname,
        ePassword,
        eTelephone,
      };
      axios
        .post("http://localhost:8000/auth/join", {
          data: post,
        })
        .then((res) => {
          console.log("회원가입 성공=>", res);
          navigate("/joinSuccess", { replace: true });
        })
        .catch((error) => {
          console.error("회원가입 실패", error);
        });
    }
  };

  const onJoinSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <AllBox>
      <Header />

      <RB>
        <LFB>
          <LFInner>
            {/*회원가입 폼*/}
            <form method={"post"} onSubmit={onJoinSubmit}>
              <LFFFieldset>
                <RFStrong>회원가입</RFStrong>
                <RFSection>
                  <RFSectionImg></RFSectionImg>
                  <RFSectionP>회원정보를 입력해 주세요.</RFSectionP>
                  <RFSectionDiv>
                    <RFSectionStrong>
                      이메일
                      <RFSectionSpan>(필수)</RFSectionSpan>
                    </RFSectionStrong>
                    <RFSDInput
                      type={"email"}
                      id={"registerEmail"}
                      name={"email"}
                      placeholder={"이메일"}
                      onChange={handleEmailChange}
                      required
                    />
                  </RFSectionDiv>
                  <RFSectionDiv>
                    <RFSectionStrong>
                      비밀번호
                      <RFSectionSpan>(필수)</RFSectionSpan>
                    </RFSectionStrong>
                    <RFSDInput
                      type={"password"}
                      id={"registerPassword"}
                      name={"password"}
                      placeholder={
                        "영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력하세요."
                      }
                      onChange={handlePasswordChange}
                      required
                    />
                  </RFSectionDiv>
                  <RFSectionDiv>
                    <RFSectionStrong>
                      비밀번호 확인
                      <RFSectionSpan>(필수)</RFSectionSpan>
                    </RFSectionStrong>
                    <RFSDInput
                      type={"password"}
                      id={"registerPasswordConfirm"}
                      name={"passwordConfirm"}
                      placeholder={
                        "비밀번호를 다시 한번 입력해 주세요."
                      }
                      onChange={handlePasswordConfirmChange}
                      required
                    />
                  </RFSectionDiv>
                  <RFSectionDiv>
                    <RFSectionStrong>
                      이름
                      <RFSectionSpan>(필수)</RFSectionSpan>
                    </RFSectionStrong>
                    <RFSDInput
                      type={"name"}
                      id={"registerName"}
                      name={"name"}
                      placeholder={"이름"}
                      onChange={handleNameChange}
                      required
                    />
                  </RFSectionDiv>
                  <RFSectionDiv>
                    <RFSectionStrong>
                      휴대폰
                      <RFSectionSpan>(필수)</RFSectionSpan>
                    </RFSectionStrong>
                    <RFSDInput
                      type={"text"}
                      id={"registerPhone"}
                      name={"telephone"}
                      placeholder={"휴대폰"}
                      onChange={handleTelephoneChange}
                      required
                    />
                  </RFSectionDiv>
                </RFSection>
                <RFSection>
                  <RFSDFigure />
                  <RFSDivP>
                    주문하신 제품을 찾으실 때,
                    <br />
                    파트너가 등록하신 닉네임을 불러드립니다.
                  </RFSDivP>
                  <RFSectionDiv>
                    <RFSectionStrong>
                      닉네임
                      <RFSectionSpan>(필수)</RFSectionSpan>
                    </RFSectionStrong>
                    <RFSDInput
                      type={"nickname"}
                      id={"registerNickname"}
                      name={"nickname"}
                      placeholder={"닉네임"}
                      onChange={handleNicknameChange}
                      required
                    />
                    <AgreeSpan>
                      {/*체크 토글 버튼 만들기*/}
                      <AgreeInput type={"checkbox"} />
                      <AgreeLabel />
                    </AgreeSpan>
                    {/*닉네임 이용약관 동의*/}
                    <NickAgree />
                  </RFSectionDiv>
                </RFSection>
              </LFFFieldset>
              <RFormP>
                <b>
                  * 필수항목을 모두 입력해야 회원 가입이 가능합니다.
                </b>
              </RFormP>
              <LJButton onClick={submitIdPassword}>가입하기</LJButton>
            </form>
          </LFInner>
        </LFB>
      </RB>

      <Footer />
    </AllBox>
  );
};

export default Join;
