import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const CInner3 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            ABOUT
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            RESERVE MAGAZINE
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
}