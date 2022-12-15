import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const RInner3 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            윤리적 원두 구매
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            공정무역 인증
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            커피 농가 지원 활동
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
};