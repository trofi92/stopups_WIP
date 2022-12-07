import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const RInner3 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            윤리적 원두 구매
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            공정무역 인증
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            커피 농가 지원 활동
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}