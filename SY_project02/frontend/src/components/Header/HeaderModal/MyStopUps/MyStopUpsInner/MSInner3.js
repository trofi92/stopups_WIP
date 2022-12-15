import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const MSInner3 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            선물하기
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            선물 내역
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            장바구니 내역
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
};