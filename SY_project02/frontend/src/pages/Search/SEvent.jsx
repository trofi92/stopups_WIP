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

export const SEvent = () => {
    return (
        <SSection>
            {/*이벤트 헤더*/}
            <SSHeader>
                <SSHH2>이벤트</SSHH2>
                <Link to={"/event"}>
                    <SSHP>이벤트 더보기</SSHP>
                </Link>
            </SSHeader>
            {/*이벤트 내용*/}
            <SSUl>
                {/*검색 결과 없을 때*/}
                <SSLi>
                    <SSLP>검색 결과가 없습니다.</SSLP>
                </SSLi>
                {/*검색 결과 있을 때*/}
                <SSLi>
                    {/*이미지*/}
                    <SEFigure>
                        {/*나중에 src 부분에 불러온 이미지 사용*/}
                        <SEFImg src={ESTitle} alt={"ESTitle"}/>
                    </SEFigure>
                    {/*내용*/}
                    {/*나중에 불러온 내용 사용*/}
                    <SEDiv>
                        <SEDHeader>
                            <SEDHH3>서머 2 프로모션</SEDHH3>
                            <SEDHSpan>진행중</SEDHSpan>
                        </SEDHeader>
                        <SEDPDate>2022-07-26 ~ 2022-09-01</SEDPDate>
                        <Link to={"/summerEvent"} style={{textDecoration: "none"}}>
                            <SEDPLink>
                                http://localhost:3000/summerEvent
                            </SEDPLink>
                        </Link>
                    </SEDiv>
                </SSLi>
            </SSUl>
        </SSection>
    );
};