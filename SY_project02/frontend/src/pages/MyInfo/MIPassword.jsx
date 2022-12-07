import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {MIPBox, MIPDiv, RFSDInputMIP} from "../../styled/MyInfo/MIPassword";
import {
    RFSDInput,
    RFSection,
    RFSectionDiv,
    RFSectionImg,
    RFSectionP,
    RFSectionStrong,
    RFStrong
} from "../../styled/Join/Join";
import {LFB, LFFFieldset, LFInner} from "../../styled/Login/Login";
import {MIEmailInput} from "../../styled/MyInfo/MyInfo";
import {checkPassword, checkPasswordConfirm} from "../../components/join/JoinRegex";
import {useState} from "react";
import {LJButton} from "../../styled/Button";
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
        <AllBox>
            <Header/>

            <MIPBox>
                <LFB>
                    <LFInner>
                        <form>
                            <LFFFieldset>
                                <RFStrong>비밀번호 변경</RFStrong>
                                <RFSection>
                                    <RFSectionImg/>
                                    <RFSectionP>새로운 비밀번호로 변경 하실 수 있습니다.</RFSectionP>
                                    <MIPDiv>
                                        <RFSectionStrong>
                                            이메일
                                        </RFSectionStrong>
                                        <MIEmailInput>유저 이메일</MIEmailInput>
                                    </MIPDiv>
                                    <MIPDiv>
                                        <RFSectionStrong>
                                            현재 비밀번호
                                        </RFSectionStrong>
                                        {/*비밀번호를 입력하지 않은 경우 표시*/}
                                        {/*현재 비밀번호와 같지 않을 경우 표시*/}
                                        <RFSDInput
                                            type={"text"}
                                            placeholder={"비밀번호를 입력 해주세요."}
                                            required
                                        />
                                    </MIPDiv>
                                    <MIPDiv>
                                        <RFSectionStrong>
                                            새 비밀번호
                                        </RFSectionStrong>
                                        <RFSDInput
                                            type={"password"}
                                            id={"registerPassword"}
                                            name={"password"}
                                            placeholder={"영문자, 숫자, 특수문자를 포함하여 8자리 이상 16자리 이하로 입력하세요"}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <RFSDInputMIP
                                            type={"password"}
                                            id={"registerPasswordConfirm"}
                                            name={"passwordConfirm"}
                                            placeholder={"비밀번호를 다시 한번 입력 해주세요."}
                                            onChange={handlePasswordConfirmChange}
                                            required
                                        />
                                        {/*일치할 경우 "비밀번호가 일치합니다" 여기에 뜨게 만들기*/}
                                    </MIPDiv>
                                </RFSection>
                            </LFFFieldset>
                            <LJButton onSubmit={submitPassword}>확인</LJButton>
                        </form>
                    </LFInner>
                </LFB>
            </MIPBox>

            <Footer/>
        </AllBox>
    );
};

export default MIPassword;