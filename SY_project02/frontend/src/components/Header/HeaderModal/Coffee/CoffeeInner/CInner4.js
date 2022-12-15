import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const CInner4 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            도피오
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            에스프레소 마키아또
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            아메리카노
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            마키아또
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            카푸치노
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            라떼
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            모카
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
};