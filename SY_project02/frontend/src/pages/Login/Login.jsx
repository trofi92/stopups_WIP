import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {
  checkEmail,
  checkPassword,
} from "../../components/join/JoinRegex";
import * as styled_AB from "../../styled/AllBox";
import * as styled_BU from "../../styled/Button";
import * as styled_LOG from "../../styled/Login/Login";
import axios from "axios";

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const onClickCheckedEmail = () => {
    setCheck(!check);
  };

  // 아이디 저장 체크 시 아이디 및 체크 state 저장

  useEffect(() => {
    if (check === true) {
      localStorage.setItem("email", JSON.stringify(email));

      const saved = localStorage.getItem("email");
      if (saved !== null) {
        setEmail(saved);
      }
    }
  }, [email]);

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
      try {
        axios
          .post("http://localhost:8000/auth/login", {
            data: post,
          })
          .then((res) => {
            console.log("로그인 성공=>", res);
            navigate("/", { replace: true });
            return res;
          });
      } catch (err) {
        console.error(err);
        alert(
          "로그인이 실패했습니다. 정보가 올바른지 다시 확인해주세요"
        );
      }
    }
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
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
            <form onSubmit={onLoginSubmit}>
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
                        check={check}
                      />
                      <styled_LOG.LFICLabel
                        onClick={onClickCheckedEmail}
                        check={check}
                      />
                      <styled_LOG.LFICSpan>
                        아이디 저장
                      </styled_LOG.LFICSpan>
                    </styled_LOG.LFIdCheck>
                    <styled_BU.LJButton onClick={submitIdPassword}>
                      로그인
                    </styled_BU.LJButton>
                    <styled_LOG.LFText>
                      * 타 사이트와 비밀번호를 동일하게 사용할 경우
                      도용의 위험이 있으므로, 정기적인 비밀번호 변경을
                      해주시길 바랍니다.
                      <br />* 스타벅스 코리아의 공식 홈페이지는
                      Internet Explorer 9.0 이상, Chrome, Firefox,
                      Safari 브라우저에 최적화 되어있습니다.
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
                          <styled_LOG.LFBListP>
                            회원가입
                          </styled_LOG.LFBListP>
                        </Link>
                      </styled_LOG.LFBLi>
                      <styled_LOG.LFBLi>
                        <Link
                          to={"/findIdAgree"}
                          style={{ textDecoration: "none" }}
                        >
                          <styled_LOG.LFBListP>
                            아이디 찾기
                          </styled_LOG.LFBListP>
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
