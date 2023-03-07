import * as styled_AB from "../../styled/AllBox";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import * as styled_BU from "../../styled/Button";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MIPhoneAuth } from "./MIPhoneAuth";
import { NickAgree } from "../Join/NickAgree";
import axios from "axios";
import { useState } from "react";
import { decrypt } from "../../utils/crypto-front";
import { SERVER_URL } from "../../utils/urls";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/use-authService";
import { checkNickname } from "../../components/Join/JoinRegex";

const MyInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

  const requestChangeUserInfo = async (e) => {
    try {
      axios.defaults.withCredentials = true;
      const request = await axios.post(
        `${SERVER_URL}/myinfo/updatePhoneAndNickname`,
        {
          data: post,
        },
        { withCredentials: true }
      );
      const reqData = await request.data;
      alert(reqData.message);
      logout(e);
      return navigate("/login", { replace: true });
    } catch (error) {
      alert("회원정보 수정에 실패했습니다.");
    }
  };

  const [nickname, setNickname] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const nicknameValid = checkNickname(nickname);

  const [checkedNick, setCheckedNick] = useState(false);

  const user = useSelector((state) => state.user);

  const certification = location?.state?.certification;
  const telephone = location?.state?.telephone;

  const onClickCheckedNick = () => {
    setCheckedNick(!checkedNick);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);

    if (!checkNickname(e.target.value)) {
      setNicknameMsg(
        "2자리 이상의 영문자와 한글만 입력할 수 있습니다."
      );
    } else {
      setNicknameMsg("올바른 닉네임 입니다.");
    }
  };

  const post = {
    email: user.email,
    telephone: telephone,
    nickname: nickname,
  };

  const onSumbitMyInfo = (e) => {
    e.preventDefault();
    if (telephone === "") {
      alert("전화번호를 입력해 주세요.");
    } else if (checkedNick !== true) {
      alert("선택적 개인정보 수집동의 및 이용약관에 동의해 주세요.");
    } else if (nickname === "") {
      alert("닉네임을 입력해 주세요.");
    } else if (certification !== true) {
      alert("휴대폰 인증을 해주세요.");
    } else {
      requestChangeUserInfo(e);
    }
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_MI.MIBox>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <form onSubmit={onSumbitMyInfo}>
              <styled_LOG.LFFFieldset>
                <styled_Join.RFStrong>
                  개인정보 확인 및 수정
                </styled_Join.RFStrong>
                <styled_Join.RFSection>
                  <styled_MI.MIDiv>
                    <styled_Join.RFSectionStrong>
                      이메일
                    </styled_Join.RFSectionStrong>
                    <styled_MI.MIEmailInput>
                      {decrypt(user?.email) || ""}
                    </styled_MI.MIEmailInput>
                  </styled_MI.MIDiv>
                </styled_Join.RFSection>

                <styled_Join.RFSection>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      이름(필수)
                    </styled_Join.RFSectionStrong>
                    <styled_MI.MIEmailInput>
                      {decrypt(user?.name) || ""}
                    </styled_MI.MIEmailInput>
                  </styled_Join.RFSectionDiv>
                </styled_Join.RFSection>
                <styled_Join.RFSection>
                  <MIPhoneAuth />
                </styled_Join.RFSection>
                <styled_Join.RFSection>
                  <styled_Join.RFSDFigure />
                  <styled_Join.RFSDivP>
                    주문하신 제품을 찾으실 때,
                    <br />
                    파트너가 등록하신 닉네임을 불러드립니다.
                  </styled_Join.RFSDivP>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      닉네임(필수) &nbsp;
                    </styled_Join.RFSectionStrong>
                    <styled_MI.MINIckSection>
                      <styled_MI.MINSH5>
                        선택적 개인정보 수집동의 및 이용약관
                      </styled_MI.MINSH5>
                      <styled_MI.MINSAgree>
                        <styled_MI.MINSAgreeInput
                          type={"checkbox"}
                          onClick={onClickCheckedNick}
                          checkedNick={checkedNick}
                        />
                      </styled_MI.MINSAgree>
                      <NickAgree />
                    </styled_MI.MINIckSection>
                    <styled_MI.NINInput
                      onChange={onChangeNickname}
                      placeholder={
                        "닉네임 입력을 위해 약관에 동의해 주세요."
                      }
                      disabled={!checkedNick}
                    />
                    <styled_Join.RFSDDiv
                      className={nicknameValid ? "success" : "error"}
                    >
                      {nicknameMsg}
                    </styled_Join.RFSDDiv>
                  </styled_Join.RFSectionDiv>
                </styled_Join.RFSection>
                <styled_Join.RFormP>
                  <b>
                    * 필수항목을 모두 입력해야 스탑없으 서비스를
                    이용하실 수 있습니다.
                  </b>
                </styled_Join.RFormP>
                <styled_BU.LJButton>정보수정</styled_BU.LJButton>
                <Link to={"/userDelete"}>
                  {" "}
                  <styled_MI.MIUnsubscribe>
                    스탑없으 회원탈퇴
                  </styled_MI.MIUnsubscribe>
                </Link>
              </styled_LOG.LFFFieldset>
            </form>
          </styled_LOG.LFInner>
        </styled_LOG.LFB>
      </styled_MI.MIBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default MyInfo;
