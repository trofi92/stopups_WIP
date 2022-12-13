import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const RInner1 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            희망배달 캠페인
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            재능기부 카페 소식
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            커뮤니티 스토어
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            청년 지원 프로그램
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            우리 농산물 사랑 캠페인
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            우리 문화 지키기
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
}