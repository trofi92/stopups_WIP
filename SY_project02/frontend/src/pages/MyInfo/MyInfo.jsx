import * as styled_AB from "../../styled/AllBox";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import * as styled_BU from "../../styled/Button";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MIPhoneAuth } from "./MIPhoneAuth";
import { NickAgree } from "../Join/NickAgree";
import { useState, useEffect } from "react";
import axios from "axios";
import { decrypt } from "../../util/crypto-front";
import { SERVER_URL } from "../../util/urls";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { usePhoneSubmit } from "../../hooks/use-submit";

const MyInfo = () => {
  // 인증 성공하면 여기에 true 값 넣어주기
  const [checkedNick, setCheckedNick] = useState(false);

  //유저 데이터
  const [data, setData] = useState();

  // 로그인 되어있는 유저의 정보를 통해 폼 안에 데이터 세팅
  const user = useSelector((state) => state.user);

  // setNickname에 유저 닉네임 디폴트로 넣어주기
  const [nickname, setNickname] = useState("");

  const location = useLocation();

  const onClickCheckedNick = () => {
    setCheckedNick(!checkedNick);
    console.log("home=>", !checkedNick);
  };

  const onChangeNickname = (e) => {
    if (checkedNick === true) {
      setNickname(e.target.value);
    }
  };

  // 페이지 최조 진입시 회원정보를 가져옴(from RTK)
  const fetchUserData = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(
      `${SERVER_URL}/myInfo`,
      decrypt(user.telephone)
    );
    const resData = await response.data;
    setData(resData);
  };

  useEffect(() => {
    fetchUserData();
  }, [user.email]);

  const uEmail = data && decrypt(data?.email);
  const uName = data && decrypt(data?.name);

  // const onSumbitMyInfo = (e) => {

  //   e.preventDefault();
  //   if (telephone === "") {
  //     alert("전화번호를 입력해주세요");
  //   } else if (checkedNick !== true) {
  //     alert("선택적 개인정보 수집동의 및 이용약관에 동의해주세요");
  //   } else if (nickname === "") {
  //     alert("닉네임을 입력해주세요");
  //   } else if (certification !== true) {
  //     alert("휴대폰 인증을 해주세요");
  //   } else {
  //     axios
  //       // 라우트 해주시면 주소 적기...
  //       .post("", { data: post })
  //       .then((res) => {
  //         alert("회원정보를 수정했습니다.");
  //         //정보 수정됐는지 확인하기 위해 그 페이지 그대로...
  //         navigate("/myInfo", { replace: true });
  //       })
  //       .catch((error) => {
  //         console.error("회원정보 수정 실패=>", error);
  //         alert("회원정보 수정에 실패했습니다");
  //       });
  //   }
  // };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_MI.MIBox>
        <styled_LOG.LFB>
          <styled_LOG.LFInner>
            <form onSubmit={(e) => e.preventDefault()}>
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
                      {uEmail || ""}
                    </styled_MI.MIEmailInput>
                  </styled_MI.MIDiv>
                </styled_Join.RFSection>

                <styled_Join.RFSection>
                  <styled_Join.RFSectionDiv>
                    <styled_Join.RFSectionStrong>
                      이름(필수)
                    </styled_Join.RFSectionStrong>
                    <styled_MI.MIEmailInput>
                      {uName || ""}
                    </styled_MI.MIEmailInput>
                  </styled_Join.RFSectionDiv>
                </styled_Join.RFSection>
                {/* 문자인증분리 */}
                <styled_Join.RFSection>
                  <MIPhoneAuth />
                </styled_Join.RFSection>
                {/*닉네임*/}
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
                        {/*체크 토글 버튼 만들기*/}
                        <styled_MI.MINSAgreeInput
                          type={"checkbox"}
                          onClick={onClickCheckedNick}
                          checkedNick={checkedNick}
                        />
                      </styled_MI.MINSAgree>
                      {/*닉네임 이용약관 동의*/}
                      <NickAgree />
                    </styled_MI.MINIckSection>
                    {/*체크박스 선택 시 입력 가능*/}
                    <styled_MI.NINInput
                      onChange={onChangeNickname}
                      placeholder={
                        "닉네임 입력을 위해 약관에 동의해 주세요."
                      }
                    />
                  </styled_Join.RFSectionDiv>
                </styled_Join.RFSection>
                <styled_Join.RFormP>
                  <b>
                    * 필수항목을 모두 입력해야 스탑업스 서비스를
                    이용하실 수 있습니다.
                  </b>
                </styled_Join.RFormP>
                <styled_BU.LJButton
                  onClick={() =>
                    console.log(location?.state?.telephone)
                  }
                >
                  정보수정
                </styled_BU.LJButton>
                <styled_MI.MIUnsubscribe>
                  스탑업스 리워드 서비스 이용내역 일괄삭제
                </styled_MI.MIUnsubscribe>
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
