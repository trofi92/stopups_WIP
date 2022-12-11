import {NLi, NLiP} from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {HMButton} from "../../../../styled/Button";
import {useState} from "react";
import {WInner1} from "./WhatsNewInner/WInner1";
import {WInner2} from "./WhatsNewInner/WInner2";
import {WInner3} from "./WhatsNewInner/WInner3";

export const WhatsNew = () => {
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

    return (
        <>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>한눈에 보기</NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle1}>
                    이벤트
                    <HMButton/>
                </NLiP>
            </NLi>
            {open1 === true ? <WInner1/> : null}
            <NLi>
                <NLiP onClick={openToggle2}>
                    뉴스
                    <HMButton/>
                </NLiP>
            </NLi>
            {open2 === true ? <WInner2/> : null}
            <NLi>
                <NLiP onClick={openToggle3}>
                    매장별 이벤트
                    <HMButton/>
                </NLiP>
            </NLi>
            {open3 === true ? <WInner3/> : null}
            <NLi>
                <Link to={"/notice"} style={{textDecoration: "none"}}>
                    <NLiP>공지사항</NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>월페이퍼</NLiP>
                </Link>
            </NLi>
        </>
    );
};