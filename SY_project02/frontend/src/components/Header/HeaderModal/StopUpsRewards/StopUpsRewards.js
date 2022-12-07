import {NLi, NLiP} from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {HMButton} from "../../../../styled/Button";
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
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>한눈에 보기</NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle1}>
                    스탑업스 리워드
                    <HMButton/>
                </NLiP>
            </NLi>
            {open1 === true ? <SRInner1/> : null}
            <NLi>
                <NLiP onClick={openToggle2}>
                    스탑업스 카드
                    <HMButton/>
                </NLiP>
            </NLi>
            {open2 === true ? <SRInner2/> : null}
            <NLi>
                <NLiP onClick={openToggle3}>
                    스탑업스 e-Gift Card
                    <HMButton/>
                </NLiP>
            </NLi>
            {open3 === true ? <SRInner3/> : null}
        </>
    );
};
