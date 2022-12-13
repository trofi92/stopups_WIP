import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
import {useState} from "react";
import {SRInner1} from "./StopUpsRewardsInner/SRInner1";
import {SRInner2} from "./StopUpsRewardsInner/SRInner2";
import {SRInner3} from "./StopUpsRewardsInner/SRInner3";

export const StopUpsRewards = () => {
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
            <styled_HM.NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>한눈에 보기</styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle1}>
                    스탑업스 리워드
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open1 === true ? <SRInner1/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle2}>
                    스탑업스 카드
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open2 === true ? <SRInner2/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle3}>
                    스탑업스 e-Gift Card
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open3 === true ? <SRInner3/> : null}
        </>
    );
};
