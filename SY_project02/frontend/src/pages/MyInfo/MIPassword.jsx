import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_MIP from "../../styled/MyInfo/MIPassword";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import {checkPassword, checkPasswordConfirm} from "../../components/join/JoinRegex";
import {useState} from "react";
import * as styled_BU from "../../styled/Button";
import {Footer} from "../../components/Footer/Footer";

const MIPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handlePasswordChange = (e) => {
        checkPassword(e);
        setPassword(e.target.value);
    };

    const handlePasswordConfirmChange = (e) => {
        checkPasswordConfirm(e);
        setPasswordConfirm(e.target.value);
    };

    const submitPassword = (e) => {
        e.preventDefault();
        if (password === "") {
            alert("새 비밀번호를 입력해주세요.")
        } else if (passwordConfirm === "") {
            alert("새 비밀번호 확인을 입력해주세요")
        } else {
            // 비밀번호 변경 보내기
            // 성공 시 "비밀번호가 변경되었습니다"
            // 실패 시 "비밀번호 변경에 실패했습니다. 다시 시도해주세요."
        }
    }

    return (
        <styled_AB.AllBox>
            <Header/>

            <styled_MIP.MIPBox>
                <styled_LOG.LFB>
                    <styled_LOG.LFInner>
                        <form>
                            <styled_LOG.LFFFieldset>
                                <styled_Join.RFStrong>비밀번호 변경</styled_Join.RFStrong>
                                <styled_Join.RFSection>
                                    <styled_Join.RFSectionImg/>
                                    <styled_Join.RFSectionP>새로운 비밀번호로 변경 하실 수 있습니다.</styled_Join.RFSectionP>
                                    <styled_MIP.MIPDiv>
                                        <styled_Join.RFSectionStrong>
                                            이메일
                                        </styled_Join.RFSectionStrong>
                                        <styled_MI.MIEmailInput>유저 이메일</styled_MI.MIEmailInput>
                                    </styled_MIP.MIPDiv>
                                    <styled_MIP.MIPDiv>
                                        <styled_Join.RFSectionStrong>
                                            현재 비밀번호
                                        </styled_Join.RFSectionStrong>
                                        {/*비밀번호를 입력하지 않은 경우 표시*/}
                                        {/*현재 비밀번호와 같지 않을 경우 표시*/}
                                        <styled_Join.RFSDInput
                                            type={"text"}
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
                                            placeholder={"영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력하세요"}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <styled_MIP.RFSDInputMIP
                                            type={"password"}
                                            id={"registerPasswordConfirm"}
                                            name={"passwordConfirm"}
                                            placeholder={"비밀번호를 다시 한번 입력 해주세요."}
                                            onChange={handlePasswordConfirmChange}
                                            required
                                        />
                                        {/*일치할 경우 "비밀번호가 일치합니다" 여기에 뜨게 만들기*/}
                                    </styled_MIP.MIPDiv>
                                </styled_Join.RFSection>
                            </styled_LOG.LFFFieldset>
                            <styled_BU.LJButton onSubmit={submitPassword}>확인</styled_BU.LJButton>
                        </form>
                    </styled_LOG.LFInner>
                </styled_LOG.LFB>
            </styled_MIP.MIPBox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default MIPassword;