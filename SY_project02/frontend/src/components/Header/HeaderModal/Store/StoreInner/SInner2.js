import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const SInner2 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            티바나 바 매장
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}