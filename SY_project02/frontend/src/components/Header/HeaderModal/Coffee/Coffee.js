import {NLi, NLiP} from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {HMButton} from "../../../../styled/Button";
import {useState} from "react";
import {CInner1} from "./CoffeeInner/CInner1";
import {CInner2} from "./CoffeeInner/CInner2";
import {CInner3} from "./CoffeeInner/CInner3";
import {CInner4} from "./CoffeeInner/CInner4";
import {CInner5} from "./CoffeeInner/CInner5";

export const Coffee = () => {
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

    return (
        <>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP>한눈에 보기</NLiP>
                </Link>
            </NLi>
            <NLi>
                <NLiP onClick={openToggle1}>
                    커피
                    <HMButton/>
                </NLiP>
            </NLi>
            {open1 === true ? <CInner1/> : null}
            <NLi>
                <NLiP onClick={openToggle2}>
                    커피 이야기
                    <HMButton/>
                </NLiP>
            </NLi>
            {open2 === true ? <CInner2/> : null}
            <NLi>
                <NLiP onClick={openToggle3}>
                    스탑업스 리저브
                    <HMButton/>
                </NLiP>
            </NLi>
            {open3 === true ? <CInner3/> : null}
            <NLi>
                <NLiP onClick={openToggle4}>
                    에스프레소 음료
                    <HMButton/>
                </NLiP>
            </NLi>
            {open4 === true ? <CInner4/> : null}
            <NLi>
                <NLiP onClick={openToggle5}>
                    최상의 커피를 즐기는 법
                    <HMButton/>
                </NLiP>
            </NLi>
            {open5 === true ? <CInner5/> : null}
        </>
    );
};
