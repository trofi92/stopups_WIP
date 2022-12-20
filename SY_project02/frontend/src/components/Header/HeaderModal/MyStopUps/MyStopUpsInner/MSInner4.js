import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const MSInner4 = () => {
    const user = useSelector(state => state.user);
    
    return (
        user.email === "" ? (
            <>
                <styled_HM.NLUl>
                    <styled_HM.NLULi>
                        <Link to={"/login"} style={{textDecoration: "none"}}>
                            <styled_HM.NLULiP>
                                등록하기
                            </styled_HM.NLULiP>
                        </Link>
                    </styled_HM.NLULi>
                    <styled_HM.NLULi>
                        <Link to={"/login"} style={{textDecoration: "none"}}>
                            <styled_HM.NLULiP>
                                선물하기
                            </styled_HM.NLULiP>
                        </Link>
                    </styled_HM.NLULi>
                    <styled_HM.NLULi>
                        <Link to={"/login"} style={{textDecoration: "none"}}>
                            <styled_HM.NLULiP>
                                사용하기
                            </styled_HM.NLULiP>
                        </Link>
                    </styled_HM.NLULi>
                </styled_HM.NLUl>
            </>
        ) : (
            <>
                <styled_HM.NLUl>
                    <styled_HM.NLULi>
                        <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                            <styled_HM.NLULiP>
                                등록하기
                            </styled_HM.NLULiP>
                        </Link>
                    </styled_HM.NLULi>
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
                                사용하기
                            </styled_HM.NLULiP>
                        </Link>
                    </styled_HM.NLULi>
                </styled_HM.NLUl>
            </>
            )
    )
};