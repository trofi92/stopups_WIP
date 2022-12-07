import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {
    LPContainer, LPIBLi1, LPIBLi2,
    LPIBox,
    LPIBoxP,
    LPIBSSpan,
    LPIBStrong,
    LPIBUl,
    LPIFigure,
    LPInner
} from "../../styled/Login/LPlease";
import {LPIButtonL, LPIButtonR} from "../../styled/Button";
import {Link} from "react-router-dom";


const LPlease = () => {
    return (
        <AllBox>
            <Header/>

            <LPContainer>
                <LPInner>
                    <LPIFigure/>
                    <LPIBox>
                        <LPIBStrong>
                            <LPIBSSpan>로그인 </LPIBSSpan>
                             시 이용 가능합니다.
                        </LPIBStrong>
                        <LPIBoxP>
                            해당 서비스를 이용하시려면
                            <strong> 스타벅스 회원으로 가입</strong>
                            하시기 바랍니다.
                        </LPIBoxP>
                        <LPIBUl>
                            <LPIBLi1>
                                <Link to={"/login"} style={{textDecoration: "none"}}>
                                    <LPIButtonL>로그인</LPIButtonL>
                                </Link>
                            </LPIBLi1>
                            <LPIBLi2>
                                <Link to={"/join"} style={{textDecoration: "none"}}>
                                    <LPIButtonR>회원가입</LPIButtonR>
                                </Link>
                            </LPIBLi2>
                        </LPIBUl>
                    </LPIBox>
                </LPInner>
            </LPContainer>

            <Footer/>
        </AllBox>
    );
};

export default LPlease;