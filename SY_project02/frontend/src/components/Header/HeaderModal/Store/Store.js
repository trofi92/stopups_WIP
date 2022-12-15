import * as styled_HM from "../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import * as styled_BU from "../../../../styled/Button";
import {useState} from "react";
import {SInner1} from "./StoreInner/SInner1";
import {SInner2} from "./StoreInner/SInner2";

export const Store = () => {
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
                    매장 찾기
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open1 === true ? <SInner1/> : null}
            <styled_HM.NLi>
                <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>
                        드라이브 스루 매장
                    </styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>
                        스타벅스 리저브 매장
                    </styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                    <styled_HM.NLiP>
                        커뮤니티 스토어 매장
                    </styled_HM.NLiP>
                </Link>
            </styled_HM.NLi>
            <styled_HM.NLi>
                <styled_HM.NLiP onClick={openToggle2}>
                    매장 이야기
                    <styled_BU.HMButton/>
                </styled_HM.NLiP>
            </styled_HM.NLi>
            {open2 === true ? <SInner2/> : null}
        </>
    );
};
