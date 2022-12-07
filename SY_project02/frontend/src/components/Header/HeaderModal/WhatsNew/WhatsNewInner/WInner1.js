import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const WInner1 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/event"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            전체
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            스탑업스 카드
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            스탑업스 리워드
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            온라인
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            e-프리퀀시 증정품
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}