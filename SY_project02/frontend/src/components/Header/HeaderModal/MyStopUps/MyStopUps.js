import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
import {useState} from "react";
import {MSInner6} from "./MyStopUpsInner/MSInner6";
import {MSInner1} from "./MyStopUpsInner/MSInner1";
import {MSInner2} from "./MyStopUpsInner/MSInner2";
import {MSInner3} from "./MyStopUpsInner/MSInner3";
import {MSInner4} from "./MyStopUpsInner/MSInner4";
import {MSInner5} from "./MyStopUpsInner/MSInner5";
import {useSelector} from "react-redux";

export const MyStopUps = () => {
    const user = useSelector(state => state.user);

    const [open1, setOpen1] = useState(false);
    const openToggle1 = () => {
        setOpen1(!open1);
    };

    const [open2, setOpen2] = useState(false);
    const openToggle2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = useState(false);
    const openToggle3 = () => {
        setOpen3(!open3);
    };

    const [open4, setOpen4] = useState(false);
    const openToggle4 = () => {
        setOpen4(!open4);
    };

    const [open5, setOpen5] = useState(false);
    const openToggle5 = () => {
        setOpen5(!open5);
    };

    const [open6, setOpen6] = useState(false);
    const openToggle6 = () => {
        setOpen6(!open6);
    };

    // 유저가 로그인한 경우 /myStopUps
    // 로그인하지 않은 경우 /loginPlease

    return (
        user.email === "" ? (
            <>
                <styled_HM.NLi>
                    <Link to={"/loginPlease"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>한눈에 보기</styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle1}>
                        My 리워드
                        {open1 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open1 === true ? <MSInner1/> : null}
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle2}>
                        My 스탑없으 카드
                        {open2 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open2 === true ? <MSInner2/> : null}
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle3}>
                        My 스탑없으 e-Gift Card
                        {open3 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open3 === true ? <MSInner3/> : null}
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle4}>
                        My 쿠폰
                        {open4 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open4 === true ? <MSInner4/> : null}
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 캘린더
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 메뉴
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle5}>
                        My e-프리퀀시
                        {open5 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open5 === true ? <MSInner5/> : null}
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 고객의 소리
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 전자영수증
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            개인컵 리워드 설정
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My DT Pass
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            장바구니
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle6}>
                        개인정보관리
                        {open6 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open6 === true ? <MSInner6/> : null}
            </>
        ) : (
            <>
                <styled_HM.NLi>
                    <Link to={"/myStopUps"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>한눈에 보기</styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle1}>
                        My 리워드
                        {open1 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open1 === true ? <MSInner1/> : null}
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle2}>
                        My 스탑없으 카드
                        {open2 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open2 === true ? <MSInner2/> : null}
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle3}>
                        My 스탑없으 e-Gift Card
                        {open3 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open3 === true ? <MSInner3/> : null}
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle4}>
                        My 쿠폰
                        {open4 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open4 === true ? <MSInner4/> : null}
                <styled_HM.NLi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 캘린더
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/favorite"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 메뉴
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle5}>
                        My e-프리퀀시
                        {open5 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open5 === true ? <MSInner5/> : null}
                <styled_HM.NLi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 고객의 소리
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My 전자영수증
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            개인컵 리워드 설정
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            My DT Pass
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <Link to={"/cart"} style={{textDecoration: "none"}}>
                        <styled_HM.NLiP>
                            장바구니
                        </styled_HM.NLiP>
                    </Link>
                </styled_HM.NLi>
                <styled_HM.NLi>
                    <styled_HM.NLiP onClick={openToggle6}>
                        개인정보관리
                        {open6 ? (
                            <styled_BU.HMButtonClicked/>
                        ) : (
                            <styled_BU.HMButton/>
                        )}
                    </styled_HM.NLiP>
                </styled_HM.NLi>
                {open6 === true ? <MSInner6/> : null}
            </>
        )

    );
};
