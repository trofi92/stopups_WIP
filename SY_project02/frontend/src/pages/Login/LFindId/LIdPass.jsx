import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styled_AB from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import * as styled_Pass from "../../../styled/Pass";
import * as styled_LOG from "../../../styled/Login/Login";
import * as styled_Join from "../../../styled/Join/Join";
import { SERVER_URL } from "../../../utils/urls";
import {
  usePhoneSubmit,
  useSmsSubmit,
} from "../../../hooks/use-submit";

const LIdPass = () => {
  const [telephone, setTelephone] = useState("");
  const [authForm, setAuthForm] = useState(false);
  const [responseEmail, setResponseEmail] = useState("");
  const [rndNum, setRndNum] = useState("");

  const { phoneSubmit, rnd } = usePhoneSubmit();
  const { smsSubmit } = useSmsSubmit(rnd, telephone, null);

  const navigate = useNavigate();
  const requestCheckPhoneNumber = async () => {
    const request = await axios
      .post(
        `${SERVER_URL}/myInfo/findEmail`,
        {
          phoneNumber: telephone,
        },
        { withCredentials: true }
      )
      .catch((error) => {
        alert(
          "알 수 없는 에러가 발생했습니다. 메인 화면으로 이동합니다"
        );
        navigate("/", { replace: true });
      });

    const resData = await request.data;
    setResponseEmail(resData);
    return navigate("/findId", {
      state: { email: resData.email, auth: authForm },
    });
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (telephone === "") {
      return alert("휴대전화 번호를 입력해 주세요.");
    }
    phoneSubmit(e, telephone);
  };

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

      <styled_Pass.PBox>
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
      </styled_Pass.PBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default LIdPass;
