import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const MSInner5 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            이용안내
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            이용현황
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}