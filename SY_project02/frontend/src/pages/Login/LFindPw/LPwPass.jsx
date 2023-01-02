import axios from "axios";
import { useState, useRef } from "react"; // 상태 값 저장
import { useNavigate } from "react-router-dom"; // 페이지 리렌더링 용도
import * as styled_AB from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import * as styled_Pass from "../../../styled/Pass";
import * as styled_LOG from "../../../styled/Login/Login";
import * as styled_Join from "../../../styled/Join/Join";
import { SERVER_URL } from "../../../util/urls";
import {
  usePhoneSubmit,
  useSmsSubmit,
} from "../../../hooks/use-submit";
import { checkEmail } from "../../../components/join/JoinRegex";

const LIdPass = () => {
  const [telephone, setTelephone] = useState("");
  const [authForm, setAuthForm] = useState(false); // 인증 상태 값 저장
  const [responseEmail, setResponseEmail] = useState("");
  const [rndNum, setRndNum] = useState(""); // 임의의 비밀번호 4자리 값 저장

  const emailRef = useRef();
  const reqEmailRef = emailRef?.current?.value;
  console.log("request email==>", reqEmailRef);

  const { phoneSubmit, rnd } = usePhoneSubmit();
  const { smsSubmit } = useSmsSubmit(rnd, telephone, null);

  const navigate = useNavigate();

  //서버 요청
  const requestCheckPhoneNumber = async () => {
    if (reqEmailRef === "" || !checkEmail(reqEmailRef)) {
      return alert("이메일을 확인해주세요.");
    }
    const request = await axios
      .post(
        `${SERVER_URL}/myInfo/updatePwWithEmail`,
        { email: reqEmailRef, phoneNumber: telephone }
        // { withCredentials: true }
      )
      .catch((error) => {
        console.error(error);
        alert(
          "알 수 없는 에러가 발생했습니다. 메인 화면으로 이동합니다"
        );
        return navigate(-1, { replace: true, state: null });
      });

    const resData = await request.data;
    if (
      request.data.email === undefined ||
      request.data.email === null
    ) {
      alert("존재하지 않는 사용자 입니다");
      return navigate("/", { replace: true, state: null });
    }
    setResponseEmail(resData);
    console.log("responseEmail==>", responseEmail);
    return navigate("/findPw", {
      state: {
        email: resData.email,
        password: resData.password,
        auth: authForm,
      },
    });
  };

  const handlePhoneSubmit = async (e) => {
    // SMS 인증요청
    e.preventDefault();
    if (telephone === "") {
      return alert("휴대전화 번호를 입력해 주세요.");
    }
    phoneSubmit(e, telephone);
  };
  console.log("state number =>", telephone);
  console.log("rnd ref =>", rndNum);

  //인증번호 확인
  const handleSmsSubmit = (e) => {
    e.preventDefault();
    smsSubmit(e, rndNum);
    setAuthForm(true);
    sessionStorage.setItem("AuthForm", "success");
    requestCheckPhoneNumber();
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
                    <styled_Pass.PInputEmail
                      placeholder="이메일을 입력하세요"
                      ref={emailRef}
                      name="email"
                    />
                  </styled_Pass.PInputBox>

                  {/*번호 입력란*/}
                  <styled_Join.RFSectionStrong>
                    휴대폰번호
                  </styled_Join.RFSectionStrong>
                  <styled_Pass.PInputBox>
                    <styled_Pass.PInputPhone
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="숫자만 입력해 주세요."
                      name="phone_number"
                    />
                    <styled_Pass.PPhoneButton
                      onClick={handlePhoneSubmit}
                    >
                      확인
                    </styled_Pass.PPhoneButton>
                  </styled_Pass.PInputBox>

                  {/*인증번호 입력란*/}
                  <styled_Join.RFSectionStrong>
                    인증번호
                  </styled_Join.RFSectionStrong>
                  <styled_Pass.PInputBox>
                    <styled_Pass.PInputPhone
                      onChange={(e) => setRndNum(e.target.value)}
                      placeholder="인증번호 4자리를 입력해 주세요."
                      name="auth_number"
                    />
                    <styled_Pass.PPhoneButton
                      onClick={handleSmsSubmit}
                    >
                      확인
                    </styled_Pass.PPhoneButton>
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
