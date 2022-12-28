import * as styled_AB from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import {Footer} from "../../../components/Footer/Footer";
import * as styled_LOG from "../../../styled/Login/Login";
import * as styled_Join from "../../../styled/Join/Join";
import * as styled_Pass from "../../../styled/Pass";
import {useState} from "react";
import {checkPassword} from "../../../components/join/JoinRegex";
import {useNavigate} from "react-router-dom";

const MIPassPassword = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        checkPassword(e)
        setPassword(e.target.value);
        console.log("비밀번호", password);
    };

    // 유저 비밀번호 끌고오기!
    const submitPassword = (e) => {
        e.preventDefault();
        if (password !== "") {
            alert("비밀번호를 입력해 주세요.")
        } else {
            // 입력한 비밀번호와 유저의 비밀번호가 맞는지 확인 후 navigate("/myInfo")
            // 입력한 비밀번호와 유저의 비밀번호가 틀리면 alert("비밀번호가 같지 않습니다.")
        }

    }


    return (
      <styled_AB.AllBox>
          <Header/>

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
                                              type="text"
                                              placeholder="비밀번호를 입력해 주세요."
                                              name="password"
                                              onChange={handlePasswordChange}
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

          <Footer/>
      </styled_AB.AllBox>
    );
};

export default MIPassPassword;