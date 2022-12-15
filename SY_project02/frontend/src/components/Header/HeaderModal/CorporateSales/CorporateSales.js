import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
import {useState} from "react";
import {CSInner1} from "./CorporateSalesInner/CSInner1";

export const CorporateSales = () => {
  const [open1, setOpen1] = useState(false);
  const openToggle1 = () => {
    setOpen1(!open1);
  };

    return (
        <>
            <styled_HM.NLi>
                <styled_HM.NLiP>단체 및 기업 구매 안내</styled_HM.NLiP>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP onClick={openToggle1}>
                        단체 주문 배달 안내
                        <styled_BU.HMButton/>
                    </styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            {open1 === true ? <CSInner1/> : null}
        </>
    );
};
