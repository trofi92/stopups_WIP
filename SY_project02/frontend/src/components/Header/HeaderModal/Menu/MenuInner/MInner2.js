import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const MInner2 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/menu/전체 푸드 보기"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            전체보기
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/브레드"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            브레드
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/케이크"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            케이크
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/샌드위치"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            샌드위치 & 샐러드
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/따뜻한 푸드"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            따뜻한 푸드
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            과일 & 요거트
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스낵 & 미니 디저트
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            아이스크림
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
};