import * as styled_AB from "../../styled/AllBox";
import * as styled_MIP from "../../styled/MyInfo/MIPassword";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import * as styled_BU from "../../styled/Button";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import {
  checkPasswordConfirm,
  checkPasswordLogin,
} from "../../components/Join/JoinRegex";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decrypt } from "../../utils/crypto-front";
import { SERVER_URL } from "../../utils/urls";
import { useLogout } from "../../hooks/use-authService";

const MIPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { logout } = useLogout();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const encryptedEmail = user.email;
  const uEmail = decrypt(user.email);
  const post = {
    encryptedEmail,
    currentPassword,
    newPassword,
  };

  const handleCurrentPassword = (e) => {
    checkPasswordLogin(e);
    setCurrentPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    checkPasswordLogin(e);
    setNewPassword(e.target.value);
  };

  const handlePasswordChangeConfirm = (e) => {
    checkPasswordConfirm(e);
    setPasswordConfirm(e.target.value);
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    if (currentPassword === "") {
      alert("비밀번호를 입력해 주세요.");
    } else if (newPassword === "") {
      alert("새 비밀번호를 입력해 주세요.");
    } else if (currentPassword === newPassword) {
      alert("현재 비밀번호와 같습니다. 다른 비밀번호를 입력해주세요");
    } else if (passwordConfirm === "") {
      alert("새 비밀번호 확인을 입력해 주세요.");
    } else if (newPassword !== passwordConfirm) {
      alert("비밀번호가 같지 않습니다. 다시 입력해 주세요.");
    } else {
      await axios
        .post(
          `${SERVER_URL}/myInfo/updatePw`,
          { data: post },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 401) {
            alert(res.data.message);
            return;
          }
          logout(e);
          alert(res.data.message);
          navigate("/", { replace: true });
        })
        .catch((error) => {
          alert("비밀번호 변경이 실패했습니다. 다시 시도해 주세요.");
        });
    }
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_MIP.MIPBox>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <form>
              <styled_LOG.LFFFieldset>
                <styled_Join.RFStrong>
                  비밀번호 변경
                </styled_Join.RFStrong>
                <styled_Join.RFSection>
                  <styled_Join.RFSectionImg />
                  <styled_Join.RFSectionP>
                    새로운 비밀번호로 변경 하실 수 있습니다.
                  </styled_Join.RFSectionP>
                  <styled_MIP.MIPDiv>
                    <styled_Join.RFSectionStrong>
                      이메일
                    </styled_Join.RFSectionStrong>
                    <styled_MI.MIEmailInput>
                      {uEmail}
                    </styled_MI.MIEmailInput>
                  </styled_MIP.MIPDiv>
                  <styled_MIP.MIPDiv>
                    <styled_Join.RFSectionStrong>
                      현재 비밀번호
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      type={"password"}
                      id={"currentPassword"}
                      name={"password"}
                      onChange={handleCurrentPassword}
                      placeholder={"비밀번호를 입력 해주세요."}
                      required
                    />
                  </styled_MIP.MIPDiv>
                  <styled_MIP.MIPDiv>
                    <styled_Join.RFSectionStrong>
                      새 비밀번호
                    </styled_Join.RFSectionStrong>
                    <styled_Join.RFSDInput
                      type={"password"}
                      id={"registerPassword"}
                      name={"password"}
                      placeholder={
                        "영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력하세요"
                      }
                      onChange={handlePasswordChange}
                      required
                    />
                    <styled_MIP.RFSDInputMIP
                      type={"password"}
                      id={"newPasswordConfirm"}
                      name={"passwordConfirm"}
                      placeholder={
                        "비밀번호를 다시 한번 입력 해주세요."
                      }
                      onChange={handlePasswordChangeConfirm}
                      required
                    />
                  </styled_MIP.MIPDiv>
                </styled_Join.RFSection>
              </styled_LOG.LFFFieldset>
              <styled_BU.LJButton onClick={submitPassword}>
                확인
              </styled_BU.LJButton>
            </form>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_MIP.MIPBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default MIPassword;
