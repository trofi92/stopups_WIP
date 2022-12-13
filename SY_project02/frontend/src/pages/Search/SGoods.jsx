import {
    SEDHeader,
    SEDHH3,
    SEDHSpan,
    SEDiv, SEDPDate, SEDPLink,
    SEFigure,
    SEFImg, SSection,
    SSHeader,
    SSHH2,
    SSHP,
    SSLi,
    SSLP,
    SSUl
} from "../../styled/Search";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESTitle.jpg";

export const SGoods = () => {
    return (
        <SSection>
            {/*상품 헤더*/}
            <SSHeader>
                <SSHH2>상품</SSHH2>
                <Link to={"/serviceReady"}>
                    <SSHP>상품 더보기</SSHP>
                </Link>
            </SSHeader>
            {/*상품 내용*/}
            <SSUl>
                <SSLi>
                    <SSLP>검색 결과가 없습니다.</SSLP>
                </SSLi>
            </SSUl>
        </SSection>
    );
};