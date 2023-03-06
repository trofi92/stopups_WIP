import { useState } from "react";
import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import * as styled_Pass from "../../styled/Pass";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_Join from "../../styled/Join/Join";
import { usePhoneSubmit, useSmsSubmit } from "../../hooks/use-submit";

const JPass = () => {
  const [number, setNumber] = useState();
  const { phoneSubmit, rnd } = usePhoneSubmit();
  const { smsSubmit } = useSmsSubmit(rnd, number, "/join");

  const handlePhoneSubmit = (e) => {
    setNumber(e.target.phone_number.value);
    phoneSubmit(e, e.target.phone_number.value);
  };

  const handleSmsSubmit = (e) => {
    smsSubmit(e, e.target.auth_number.value);
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Pass.PBox>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <>
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
                      <form onSubmit={handlePhoneSubmit}>
                        <styled_Pass.PInputPhone
                          placeholder="숫자만 입력해 주세요."
                          name="phone_number"
                        />
                        <styled_Pass.PPhoneButton>
                          확인
                        </styled_Pass.PPhoneButton>
                      </form>
                    </styled_Pass.PInputBox>

                    <styled_Join.RFSectionStrong>
                      인증번호
                    </styled_Join.RFSectionStrong>
                    <styled_Pass.PInputBox>
                      <form onSubmit={handleSmsSubmit}>
                        <styled_Pass.PInputPhone
                          placeholder="숫자 4자리를 입력해 주세요."
                          name="auth_number"
                        />
                        <styled_Pass.PPhoneButton>
                          확인
                        </styled_Pass.PPhoneButton>
                      </form>
                    </styled_Pass.PInputBox>
                  </styled_Pass.PSectionDiv>
                </styled_Pass.PSection>
              </styled_LOG.LFFFieldset>
            </>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_Pass.PBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default JPass;
