import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const WInner1 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/event"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            전체
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스 카드
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스 리워드
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            온라인
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            e-프리퀀시 증정품
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
}