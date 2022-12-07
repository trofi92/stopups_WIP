import {NLUl, NLULi, NLULiP} from "../../../../../styled/HeaderModal";
import {Link} from "react-router-dom";

export const MSInner6 = () => {
    return (
        <>
            <NLUl>
                <NLULi>
                    <Link to={"/myInfoAgree"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            개인정보확인 및 수정
                        </NLULiP>
                    </Link>
                </NLULi>
                <NLULi>
                    <Link to={"/myInfoPassword"} style={{textDecoration: "none"}}>
                        <NLULiP>
                            비밀번호 변경
                        </NLULiP>
                    </Link>
                </NLULi>
            </NLUl>
        </>
    )
}