import * as styled_HM from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const MInner1 = () => {
    return (
        <>
            <styled_HM.NLUl>
                <styled_HM.NLULi>
                    <Link to={"/menu/전체 상품 보기"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            전체보기
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/콜드 브루"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            콜드 브루
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/브루드 커피"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            브루드 커피
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/에스프레소"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            에스프레소
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/프라푸치노"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            프라푸치노
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/블렌디드"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            블렌디드
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/스타벅스 리프레셔"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑없으 리프레셔
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/스타벅스 피지오"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑없으 피지오
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/menu/티(티바나)"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            티(티바나)
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            기타 제조 음료
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
                <styled_HM.NLULi>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_HM.NLULiP>
                            스탑없으 주스(병음료)
                        </styled_HM.NLULiP>
                    </Link>
                </styled_HM.NLULi>
            </styled_HM.NLUl>
        </>
    )
};