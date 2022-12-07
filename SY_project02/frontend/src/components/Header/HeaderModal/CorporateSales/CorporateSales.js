import {NLi, NLiP} from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {HMButton} from "../../../../styled/Button";
import {useState} from "react";
import {CSInner1} from "./CorporateSalesInner/CSInner1";

export const CorporateSales = () => {
    const [open1, setOpen1] = useState(false);
    const openToggle1 = () => {
        setOpen1(!open1);
    }

    return (
        <>
            <NLi>
                <NLiP>단체 및 기업 구매 안내</NLiP>
            </NLi>
            <NLi>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <NLiP onClick={openToggle1}>
                        단체 주문 배달 안내
                        <HMButton/>
                    </NLiP>
                </Link>
            </NLi>
            {open1 === true ? <CSInner1/> : null}
        </>
    );
};
