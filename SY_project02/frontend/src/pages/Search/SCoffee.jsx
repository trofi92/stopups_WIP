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

export const SCoffee = () => {
    return (
        <SSection>
            {/*원두 헤더*/}
            <SSHeader>
                <SSHH2>원두</SSHH2>
                <Link to={"/event"}>
                    <SSHP>원두 더보기</SSHP>
                </Link>
            </SSHeader>
            {/*원두 내용*/}
            <SSUl>
                <SSLi>
                    <SSLP>검색 결과가 없습니다.</SSLP>
                </SSLi>
            </SSUl>
        </SSection>
    );
};