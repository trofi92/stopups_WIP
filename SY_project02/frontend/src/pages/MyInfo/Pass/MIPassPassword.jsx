import * as styled_AB from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import * as styled_LOG from "../../../styled/Login/Login";
import * as styled_Join from "../../../styled/Join/Join";
import * as styled_Pass from "../../../styled/Pass";
import { useRef } from "react";
import { checkPasswordLogin } from "../../../components/join/JoinRegex";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../utils/urls";
import { useSelector } from "react-redux";

const MIPassPassword = () => {
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const request = async () => {
    const response = await axios
      .post(
        `${SERVER_URL}/myInfo/passwordAuth`,
        { email: user.email, password: passwordRef?.current?.value },
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        if (err.response?.data?.status === 401) {
          return alert(err.response?.data?.message);
        }
      });

    if (response.data.userInfo === true) {
      alert(response.data.message);
      return navigate("/myInfo", { replace: true });
    }
  };

  // 유저 비밀번호 끌고오기!
  const submitPassword = (e) => {
    e.preventDefault();
    if (passwordRef?.current?.value === "") {
      alert("입력한 비밀번호를 다시 확인해주세요");
    }
    request();
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Pass.PPBox>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <styled_LOG.LFFFieldset>
              <styled_Join.RFStrong>
                비밀번호 인증
              </styled_Join.RFStrong>
              <styled_Pass.PSection>
                <styled_Join.RFSectionP>
                  비밀번호 인증단계입니다.
                </styled_Join.RFSectionP>
                <styled_Pass.PSectionDiv>
                  {/*번호 입력란*/}
                  <styled_Join.RFSectionStrong>
                    비밀번호
                  </styled_Join.RFSectionStrong>
                  <form onSubmit={submitPassword}>
                    <styled_Pass.PInputBox>
                      <styled_Pass.PInputPhone
                        type="password"
                        placeholder="비밀번호를 입력해 주세요."
                        name="password"
                        ref={passwordRef}
                        onChange={(e) => checkPasswordLogin(e)}
                      />
                      <styled_Pass.PPhoneButton>
                        확인
                      </styled_Pass.PPhoneButton>
                    </styled_Pass.PInputBox>
                  </form>
                </styled_Pass.PSectionDiv>
              </styled_Pass.PSection>
            </styled_LOG.LFFFieldset>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_Pass.PPBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default MIPassPassword;
