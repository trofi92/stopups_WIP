import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const MSInner6 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/myInfoAgree"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            개인정보확인 및 수정
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/myInfoPassword"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            비밀번호 변경
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
}