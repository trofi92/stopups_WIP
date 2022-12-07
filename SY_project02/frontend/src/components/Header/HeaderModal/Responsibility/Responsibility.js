import {NLi, NLiP} from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {HMButton} from "../../../../styled/Button";
import {useState} from "react";
import {RInner1} from "./ResponsibilityInner/RInner1";
import {RInner2} from "./ResponsibilityInner/RInner2";
import {RInner3} from "./ResponsibilityInner/RInner3";
import {RInner4} from "./ResponsibilityInner/RInner4";

export const Responsibility = () => {
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

    return (
        <>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>한눈에 보기</NLiP>
                </Link>
            </NLi>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>
                        사회공헌 캠페인 소개
                    </NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle1}>
                    지역 사회 참여 활동
                    <HMButton/>
                </NLiP>
            </NLi>
            {open1 === true ? <RInner1/> : null}
            <NLi>
                <NLiP onClick={openToggle2}>
                    환경보호 활동
                    <HMButton/>
                </NLiP>
            </NLi>
            {open2 === true ? <RInner2/> : null}
            <NLi>
                <NLiP onClick={openToggle3}>
                    윤리 구매
                    <HMButton/>
                </NLiP>
            </NLi>
            {open3 === true ? <RInner3/> : null}
            <NLi>
                <NLiP onClick={openToggle4}>
                    글로벌 사회 공헌
                    <HMButton/>
                </NLiP>
            </NLi>
            {open4 === true ? <RInner4/> : null}
        </>
    );
};
