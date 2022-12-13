import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const CInner2 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            농장에서 우리의 손으로
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            최상의 아라비카 원두
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스 로스트 스펙트럼
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스 디카페인
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
}