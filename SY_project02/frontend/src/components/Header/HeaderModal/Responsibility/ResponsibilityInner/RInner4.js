import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const RInner4 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            윤리경영 보고서
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            스탑업스 재단
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            지구촌 봉사의 달
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}