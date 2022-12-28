import axios from "axios";
import { useState } from "react"; // 상태 값 저장
import { useNavigate } from "react-router-dom"; // 페이지 리렌더링 용도
import * as styled_AB from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import * as styled_Pass from "../../../styled/Pass";
import * as styled_LOG from "../../../styled/Login/Login";
import * as styled_Join from "../../../styled/Join/Join";
import { sms } from "../../../util/urls";

const LIdPass = () => {
  const [show, setShow] = useState(false); // 휴대전화 입력 여부 상태 저장
  const [rnd, setRnd] = useState(""); // 임의의 비밀번호 4자리 값 저장
  const [authForm, setAuthForm] = useState(false); // 인증 상태 값 저장
  const navigate = useNavigate(); // 페이지 리렌더링 용도
  const handlePhoneSubmit = async (e) => {
    // SMS 인증
    e.preventDefault();
    const phone_number = e.target.phone_number.value; // 휴대전화 번호
    const rnd_number = Math.floor(Math.random() * 8999) + 1000; // 임의의 인증 번호 생성
    setRnd(rnd_number.toString()); // 인증 번호 문자열로 저장
    if (phone_number !== "") {
      // 값이 존재하면 SMS 인증을 위해 POST로 전달
      await axios.post(
        sms,
        {
          phone_number,
          rnd_number,
        },
        { withCredentials: false }
      );
    }
    setShow(!show); // 휴대전화 인증 토글 변경
  };

  // 모바일 인증
  const handleSmsSubmit = (e) => {
    e.preventDefault();
    const userAuth = e.target.phone_number.value; // 인증 번호 값 저장
    e.target.phone_number.value = ""; // 인증 번호 입력 값 초기화
    if (userAuth === rnd) {
      // 사용자에게 보낸 임의의 4자리와 사용자가 입력한 4자리가 맞으면 작동
      setAuthForm(true); // 인증 값 설정
      sessionStorage.setItem("AuthForm", "success"); // 세션 스토리지에 인증 여부 저장
      navigate("/findPw"); // 페이지 리렌더링 하기 위한 페이지 이동
    }
    setShow(!show); // 인증 폼 상태값 변경
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Pass.LPWBox>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <styled_LOG.LFFFieldset>
              <styled_Join.RFStrong>
                문자(SMS) 인증
              </styled_Join.RFStrong>
              <styled_Pass.PSection>
                <styled_Join.RFSectionP>
                  휴대폰 문자(SMS) 인증단계입니다.
                </styled_Join.RFSectionP>
                <styled_Pass.PSectionDiv>
                  {/*이메일 입력란*/}
                  <styled_Join.RFSectionStrong>
                    이메일
                  </styled_Join.RFSectionStrong>
                  <styled_Pass.PInputBox>
                    <form>
                      <styled_Pass.PInputEmail
                        placeholder="이메일"
                        name="email"
                      />
                    </form>
                  </styled_Pass.PInputBox>

                  {/*번호 입력란*/}
                  <styled_Join.RFSectionStrong>
                    휴대폰번호
                  </styled_Join.RFSectionStrong>
                  <styled_Pass.PInputBox>
                    <form onSubmit={handlePhoneSubmit}>
                      <styled_Pass.PInputPhone
                        placeholder="숫자만 입력"
                        name="phone_number"
                      />
                      <styled_Pass.PPhoneButton>
                        확인
                      </styled_Pass.PPhoneButton>
                    </form>
                  </styled_Pass.PInputBox>

                  {/*인증번호 입력란*/}
                  <styled_Join.RFSectionStrong>
                    인증번호
                  </styled_Join.RFSectionStrong>
                  <styled_Pass.PInputBox>
                    <form onSubmit={handleSmsSubmit}>
                      <styled_Pass.PInputPhone
                        placeholder="숫자 4자리 입력"
                        name="phone_number"
                      />
                      <styled_Pass.PPhoneButton>
                        확인
                      </styled_Pass.PPhoneButton>
                    </form>
                  </styled_Pass.PInputBox>
                </styled_Pass.PSectionDiv>
              </styled_Pass.PSection>
            </styled_LOG.LFFFieldset>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_Pass.LPWBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default LIdPass;
