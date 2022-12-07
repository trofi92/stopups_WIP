import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import {
  checkEmail,
  checkPassword,
} from "../../components/join/JoinRegex";
import { AllBox } from "../../styled/AllBox";
import {
  LB,
  LEPBr,
  LEPSpan,
  LFB,
  LFBLi,
  LFBListP,
  LFBUl,
  LFButtonBox,
  LFFFieldset,
  LFFFSection,
  LFFFStrong,
  LFICInput,
  LFICLabel,
  LFIdCheck,
  LFInner,
  LFInput,
  LFInputBox,
  LFP,
  LFText,
} from "../../styled/Login/Login";
import { Footer } from "../../components/Footer/Footer";
import { LJButton } from "../../styled/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const sendLoginRequest = async () => {
  //     await axios
  //         .post("http://localhost:8000/auth/login")
  //         .then((res) => console.log("login=> ", res));
  // };

  const handleEmailChange = (e) => {
    checkEmail(e);
    if (e.target.value === "" || e.target.value === undefined) {
      console.log("아이디를 입력해주세요");
      return false;
    } else {
      setEmail(e.target.value);
    }
  };

  const handlePasswordChange = (e) => {
    checkPassword(e);
    if (e.target.value === "" || e.target.value === undefined) {
      console.log("비밀번호를 입력해주세요");
      return false;
    } else {
      setPassword(e.target.value);
    }
  };

  // useEffect(() => {
  //     sendLoginRequest();
  // }, []);

  const submitIdPassword = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      const post = {
        email,
        password,
      };
      axios
        .post("http://localhost:8000/auth/login", {
          data: post,
        })
        .then((res) => {
          console.log("로그인 성공", res);
          // localStorage.setItem("email", email);
          navigate("/", { replace: true });
        })
        .catch((error) => {
          console.log("로그인 실패", error);
          alert(error.response.data);
        });
    }
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AllBox>
      <Header />

      {/*로그인 전체 박스*/}
      <LB>
        {/*로그인 정렬*/}
        <LFB>
          {/*로그인 안쪽 정렬*/}
          <LFInner>
            {/*전체 폼*/}
            <form onSubmit={onLoginSubmit}>
              <LFFFieldset>
                <LFFFStrong>로그인</LFFFStrong>
                {/*로그인 폼*/}
                <LFFFSection>
                  <LFP>
                    <LEPSpan>Welcome!</LEPSpan>
                    <LEPBr />
                    &nbsp; 스타벅스 코리아에 오신 것을 환영합니다.
                  </LFP>
                  {/*input 박스*/}
                  <LFInputBox>
                    <LFInput
                      type={"email"}
                      id={"loginEmail"}
                      placeholder={"아이디를 입력해 주세요."}
                      onChange={handleEmailChange}
                      required
                    />
                    <LFInput
                      type={"password"}
                      id={"loginPassword"}
                      placeholder={"비밀번호를 입력해 주세요."}
                      onChange={handlePasswordChange}
                      required
                    />
                    <LFIdCheck>
                      {/*아이디 저장 체크박스 클릭시 background 이미지 토글 + 토글 이벤트 재사용*/}
                      <LFICInput type={"checkbox"} />
                      <LFICLabel>아이디 저장</LFICLabel>
                    </LFIdCheck>
                    <LJButton onClick={submitIdPassword}>
                      로그인
                    </LJButton>
                    <LFText>
                      * 타 사이트와 비밀번호를 동일하게 사용할 경우
                      도용의 위험이 있으므로, 정기적인 비밀번호 변경을
                      해주시길 바랍니다.
                      <br />* 스타벅스 코리아의 공식 홈페이지는
                      Internet Explorer 9.0 이상, Chrome, Firefox,
                      Safari 브라우저에 최적화 되어있습니다.
                    </LFText>
                  </LFInputBox>
                  {/* 버튼 */}
                  <LFButtonBox>
                    <LFBUl>
                      <LFBLi>
                        <Link
                          to={"/joinAgree"}
                          style={{ textDecoration: "none" }}
                        >
                          <LFBListP>회원가입</LFBListP>
                        </Link>
                      </LFBLi>
                      <LFBLi>
                        <Link style={{ textDecoration: "none" }}>
                          <LFBListP>아이디 찾기</LFBListP>
                        </Link>
                      </LFBLi>
                      <LFBLi>
                        <Link style={{ textDecoration: "none" }}>
                          <LFBListP>비밀번호 찾기</LFBListP>
                        </Link>
                      </LFBLi>
                    </LFBUl>
                  </LFButtonBox>
                </LFFFSection>
              </LFFFieldset>
            </form>
          </LFInner>
        </LFB>
      </LB>

      <Footer />
    </AllBox>
  );
};

export default Login;
