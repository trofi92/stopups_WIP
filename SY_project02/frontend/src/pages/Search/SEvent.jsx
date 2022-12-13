import * as styled_Search from "../../styled/Search";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESTitle.jpg";

export const SEvent = () => {
    return (
        <styled_Search.SSection>
            {/*이벤트 헤더*/}
            <styled_Search.SSHeader>
                <styled_Search.SSHH2>이벤트</styled_Search.SSHH2>
                <Link to={"/event"}>
                    <styled_Search.SSHP>이벤트 더보기</styled_Search.SSHP>
                </Link>
            </styled_Search.SSHeader>
            {/*이벤트 내용*/}
            <styled_Search.SSUl>
                {/*검색 결과 없을 때*/}
                <styled_Search.SSLi>
                    <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
                </styled_Search.SSLi>
                {/*검색 결과 있을 때*/}
                <styled_Search.SSLi>
                    {/*이미지*/}
                    <styled_Search.SEFigure>
                        {/*나중에 src 부분에 불러온 이미지 사용*/}
                        <styled_Search.SEFImg src={ESTitle} alt={"ESTitle"}/>
                    </styled_Search.SEFigure>
                    {/*내용*/}
                    {/*나중에 불러온 내용 사용*/}
                    <styled_Search.SEDiv>
                        <styled_Search.SEDHeader>
                            <styled_Search.SEDHH3>서머 2 프로모션</styled_Search.SEDHH3>
                            <styled_Search.SEDHSpan>진행중</styled_Search.SEDHSpan>
                        </styled_Search.SEDHeader>
                        <styled_Search.SEDPDate>2022-07-26 ~ 2022-09-01</styled_Search.SEDPDate>
                        <Link to={"/summerEvent"} style={{textDecoration: "none"}}>
                            <styled_Search.SEDPLink>
                                http://localhost:3000/summerEvent
                            </styled_Search.SEDPLink>
                        </Link>
                    </styled_Search.SEDiv>
                </styled_Search.SSLi>
            </styled_Search.SSUl>
        </styled_Search.SSection>
    );
};