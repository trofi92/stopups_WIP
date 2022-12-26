import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
import {MInner1} from "./MenuInner/MInner1";
import {useState} from "react";
import {MInner2} from "./MenuInner/MInner2";

export const Menu = () => {
  const [open1, setOpen1] = useState(false);
  const openToggle1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = useState(false);
  const openToggle2 = () => {
    setOpen2(!open2);
  };

    return (
        <>
            <styled_HM.NLi>
                <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>한눈에 보기</styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle1}>
                    음료
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open1 === true ? <MInner1/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle2}>
                    푸드
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open2 === true ? <MInner2/> : null}
        </>
    );
};
