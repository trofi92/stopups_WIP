import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const WInner2 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            전체
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            상품 출시
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스와 문화
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스 사회공헌
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑업스 카드출시
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
}