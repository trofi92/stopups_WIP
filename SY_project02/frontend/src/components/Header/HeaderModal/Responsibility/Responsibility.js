import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
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
            <styled_HM.NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>한눈에 보기</styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>
                        사회공헌 캠페인 소개
                    </styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle1}>
                    지역 사회 참여 활동
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open1 === true ? <RInner1/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle2}>
                    환경보호 활동
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open2 === true ? <RInner2/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle3}>
                    윤리 구매
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open3 === true ? <RInner3/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle4}>
                    글로벌 사회 공헌
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open4 === true ? <RInner4/> : null}
        </>
    );
};
