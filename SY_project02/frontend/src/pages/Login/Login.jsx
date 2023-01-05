import * as styled_AB from "../../styled/AllBox";
import * as styled_BU from "../../styled/Button";
import * as styled_LOG from "../../styled/Login/Login";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {
  checkEmailLogin,
  checkPasswordLogin,
} from "../../components/join/JoinRegex";
import { useLoginService, useFormCheck } from "../../hooks/use-authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const { loginService } = useLoginService();
  const { formCheck } = useFormCheck();

  // 체크박스
  const onClickCheckedEmail = () => {
    setCheck(!check);
    console.log("check=>", check);
  };

  // 아이디 저장 체크 시 아이디 및 체크 state 저장
  useEffect(() => {
    if (email !== "") {
      if (check === true) {
        localStorage.setItem("email", email);
        const saved = localStorage.getItem("email");
        if (saved !== null) {
          setEmail(saved);
        }
      } else if (check === false) {
        localStorage.removeItem("email");
      }
    }
  }, [email]);

  const handleEmailChange = (e) => {
    formCheck(e, checkEmailLogin, "아이디를 입력해 주세요.", setEmail);
  };

  const handlePasswordChange = (e) => {
    formCheck(e, checkPasswordLogin, "비밀번호를 입력해 주세요.", setPassword);
  };

  const submitIdPassword = (e) => {
    loginService(e, email, password);
  };

  return (
    <styled_AB.AllBox>
      <Header />

      {/*로그인 전체 박스*/}
      <styled_LOG.LB>
        {/*로그인 정렬*/}
        <styled_LOG.LFB>
          {/*로그인 안쪽 정렬*/}
          <styled_LOG.LFInner>
            {/*전체 폼*/}
            <form onSubmit={(e) => e.preventDefault()}>
              <styled_LOG.LFFFieldset>
                <styled_LOG.LFFFStrong>로그인</styled_LOG.LFFFStrong>
                {/*로그인 폼*/}
                <styled_LOG.LFFFSection>
                  <styled_LOG.LFP>
                    <styled_LOG.LEPSpan>Welcome!</styled_LOG.LEPSpan>
                    <styled_LOG.LEPBr />
                    &nbsp; 스타벅스 코리아에 오신 것을 환영합니다.
                  </styled_LOG.LFP>
                  {/*input 박스*/}
                  <styled_LOG.LFInputBox>
                    <styled_LOG.LFInput
                      type={"email"}
                      id={"loginEmail"}
                      placeholder={"아이디를 입력해 주세요."}
                      onChange={handleEmailChange}
                      required
                    />
                    <styled_LOG.LFInput
                      type={"password"}
                      id={"loginPassword"}
                      placeholder={"비밀번호를 입력해 주세요."}
                      onChange={handlePasswordChange}
                      required
                    />
                    <styled_LOG.LFIdCheck>
                      {/*아이디 저장 체크박스 클릭시 background 이미지 토글 + 토글 이벤트 재사용*/}
                      <styled_LOG.LFICInput
                        type={"checkbox"}
                        onClick={onClickCheckedEmail}
                        check={check}
                      />
                      <styled_LOG.LFICSpan>아이디 저장</styled_LOG.LFICSpan>
                    </styled_LOG.LFIdCheck>
                    <styled_BU.LJButton onClick={submitIdPassword}>
                      로그인
                    </styled_BU.LJButton>
                    <styled_LOG.LFText>
                      * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의
                      위험이 있으므로, 정기적인 비밀번호 변경을 해주시길
                      바랍니다.
                      <br />* 스타벅스 코리아의 공식 홈페이지는 Internet
                      Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에
                      최적화 되어있습니다.
                    </styled_LOG.LFText>
                  </styled_LOG.LFInputBox>
                  {/* 버튼 */}
                  <styled_LOG.LFButtonBox>
                    <styled_LOG.LFBUl>
                      <styled_LOG.LFBLi>
                        <Link
                          to={"/joinAgree"}
                          style={{ textDecoration: "none" }}
                        >
                          <styled_LOG.LFBListP>회원가입</styled_LOG.LFBListP>
                        </Link>
                      </styled_LOG.LFBLi>
                      <styled_LOG.LFBLi>
                        <Link
                          to={"/findIdAgree"}
                          style={{ textDecoration: "none" }}
                        >
                          <styled_LOG.LFBListP>아이디 찾기</styled_LOG.LFBListP>
                        </Link>
                      </styled_LOG.LFBLi>
                      <styled_LOG.LFBLi>
                        <Link
                          to={"/findPwAgree"}
                          style={{ textDecoration: "none" }}
                        >
                          <styled_LOG.LFBListP>
                            비밀번호 찾기
                          </styled_LOG.LFBListP>
                        </Link>
                      </styled_LOG.LFBLi>
                    </styled_LOG.LFBUl>
                  </styled_LOG.LFButtonBox>
                </styled_LOG.LFFFSection>
              </styled_LOG.LFFFieldset>
            </form>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_LOG.LB>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default Login;
