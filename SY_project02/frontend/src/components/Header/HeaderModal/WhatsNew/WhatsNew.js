import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
import {useState} from "react";
import {WInner1} from "./WhatsNewInner/WInner1";
import {WInner2} from "./WhatsNewInner/WInner2";
import {WInner3} from "./WhatsNewInner/WInner3";

export const WhatsNew = () => {
  const [open1, setOpen1] = useState(false);
  const openToggle1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = useState(false);
  const openToggle2 = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = useState(false);
  const openToggle3 = () => {
    setOpen3(!open3);
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
                    이벤트
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open1 === true ? <WInner1/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle2}>
                    뉴스
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open2 === true ? <WInner2/> : null}
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle3}>
                    매장별 이벤트
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open3 === true ? <WInner3/> : null}
            <styled_HM.NLi>
                <Link to={"/notice"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>공지사항</styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>월페이퍼</styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
        </>
    );
};
