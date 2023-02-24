import * as styled_AB from "../../styled/AllBox";
import * as styled_BU from "../../styled/Button";
import * as styled_LOG from "../../styled/Login/Login";

import { useState } from "react";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { checkPasswordLogin } from "../../components/Join/JoinRegex";
import { useFormCheck, useDelete } from "../../hooks/use-authService";
import { useSelector } from "react-redux";
import { NotFound } from "../NotFound";

const UserDelete = () => {
  const user = useSelector((state) => state.user);
  const { Delete } = useDelete();

  const [password, setPassword] = useState("");

  const { formCheck } = useFormCheck();

  // 체크박스

  const handlePasswordChange = (e) => {
    formCheck(
      e,
      checkPasswordLogin,
      "비밀번호를 입력해 주세요.",
      setPassword
    );
  };

  const submitIdPassword = (e) => {
    Delete(e, user.email, password);
    console.log(user.email);
  };

  return (
    <>
      {user.email !== "" ? (
        <styled_AB.AllBox>
          <Header />

          {/*로그인 전체 박스*/}
          <styled_LOG.LB>
            {/*로그인 정렬*/}
            <styled_LOG.LFB>
              {/*로그인 안쪽 정렬*/}
              <styled_LOG.LFInner>
                {/*전체 폼*/}
                <form onSubmit={(e) => e.preventDefault()}>
                  <styled_LOG.LFFFieldset>
                    <styled_LOG.LFFFStrong>
                      회원 탈퇴
                    </styled_LOG.LFFFStrong>
                    {/*로그인 폼*/}
                    <styled_LOG.LFFFSection>
                      <styled_LOG.LFP>
                        <styled_LOG.LEPBr />
                        <styled_LOG.LEPSpan>
                          회원 탈퇴를 하시려면 비밀번호를 한번 더 입력
                          해주세요!
                        </styled_LOG.LEPSpan>
                      </styled_LOG.LFP>
                      {/*input 박스*/}
                      <styled_LOG.LFInputBox>
                        <styled_LOG.LFInput
                          type={"password"}
                          id={"loginPassword"}
                          placeholder={"비밀번호를 입력해 주세요."}
                          onChange={handlePasswordChange}
                          required
                        />

                        <styled_BU.LJButton
                          onClick={submitIdPassword}
                        >
                          회원 탈퇴
                        </styled_BU.LJButton>
                        <styled_LOG.LFText>
                          * 회원 탈퇴를 하시게 되면 개인 정보는 즉시
                          삭제 됩니다.
                          <br />
                        </styled_LOG.LFText>
                      </styled_LOG.LFInputBox>
                      {/* 버튼 */}
                    </styled_LOG.LFFFSection>
                  </styled_LOG.LFFFieldset>
                </form>
              </styled_LOG.LFInner>
            </styled_LOG.LFB>
          </styled_LOG.LB>

          <Footer />
        </styled_AB.AllBox>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default UserDelete;
