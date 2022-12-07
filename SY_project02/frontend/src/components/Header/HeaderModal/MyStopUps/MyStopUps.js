import {NLi, NLiP} from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {HMButton} from "../../../../styled/Button";
import {useState} from "react";
import {MSInner6} from "./MyStopUpsInner/MSInner6";
import {MSInner1} from "./MyStopUpsInner/MSInner1";
import {MSInner2} from "./MyStopUpsInner/MSInner2";
import {MSInner3} from "./MyStopUpsInner/MSInner3";
import {MSInner4} from "./MyStopUpsInner/MSInner4";
import {MSInner5} from "./MyStopUpsInner/MSInner5";

export const MyStopUps = () => {
    const [open1, setOpen1] = useState(false);
    const openToggle1 = () => {
        setOpen1(!open1);
    }

    const [open2, setOpen2] = useState(false);
    const openToggle2 = () => {
        setOpen2(!open2);
    }

    const [open3, setOpen3] = useState(false);
    const openToggle3 = () => {
        setOpen3(!open3);
    }

    const [open4, setOpen4] = useState(false);
    const openToggle4 = () => {
        setOpen4(!open4);
    }

    const [open5, setOpen5] = useState(false);
    const openToggle5 = () => {
        setOpen5(!open5);
    }

    const [open6, setOpen6] = useState(false);
    const openToggle6 = () => {
        setOpen6(!open6);
    }

    return (
        <>
            <NLi>
                {/*유저가 로그인한 경우 /myStopUps*/}
                {/*로그인하지 않은 경우 /loginPlease*/}
                <Link to={"/myStopUps"} style={{textDecoration: "none"}}>
                    <NLiP>한눈에 보기</NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle1}>
                    My 리워드
                    <HMButton/>
                </NLiP>
            </NLi>
            {open1 === true ? <MSInner1/> : null}
            <NLi>
                <NLiP onClick={openToggle2}>
                    My 스탑업스 카드
                    <HMButton/>
                </NLiP>
            </NLi>
            {open2 === true ? <MSInner2/> : null}
            <NLi>
                <NLiP onClick={openToggle3}>
                    My 스탑업스 e-Gift Card
                    <HMButton/>
                </NLiP>
            </NLi>
            {open3 === true ? <MSInner3/> : null}
            <NLi>
                <NLiP onClick={openToggle4}>
                    My 쿠폰
                    <HMButton/>
                </NLiP>
            </NLi>
            {open4 === true ? <MSInner4/> : null}
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>
                        My 캘린더
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/favorite"} style={{textDecoration: "none"}}>
                    <NLiP>
                        My 메뉴
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle5}>
                    My e-프리퀀시
                    <HMButton/>
                </NLiP>
            </NLi>
            {open5 === true ? <MSInner5/> : null}
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>
                        My 고객의 소리
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>
                        My 전자영수증
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>
                        개인컵 리워드 설정
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>
                        My DT Pass
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/cart"} style={{textDecoration: "none"}}>
                    <NLiP>
                        장바구니
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle6}>
                    개인정보관리
                    <HMButton/>
                </NLiP>
            </NLi>
            {open6 === true ? <MSInner6/> : null}
        </>
    );
};
