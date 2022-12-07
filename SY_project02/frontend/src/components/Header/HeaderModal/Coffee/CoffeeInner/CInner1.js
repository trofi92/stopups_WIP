import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const CInner1 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            스탑업스 원두
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            스탑업스 비아
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            스탑업스앳홈 by 캡슐
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            나와 어울리는 커피
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}