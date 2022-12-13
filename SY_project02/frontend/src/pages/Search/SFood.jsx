import {
    SDDiv, SDDPText,
    SDFigure, SDFImg,
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
    SSUl, SYellow
} from "../../styled/Search";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESTitle.jpg";

export const SFood = () => {
    return (
        <SSection>
            {/*푸드 헤더*/}
            <SSHeader>
                <SSHH2>푸드</SSHH2>
                <Link to={"/event"}>
                    <SSHP>푸드 더보기</SSHP>
                </Link>
            </SSHeader>
            {/*푸드 내용*/}
            <SSUl>
                <SSLi>
                    <SSLP>검색 결과가 없습니다.</SSLP>
                </SSLi>
            </SSUl>
            {/*푸드 있을 때*/}
            <SSLi>
                <SDFigure>
                    {/*이미지 넣기*/}
                    <SDFImg/>
                </SDFigure>
                <SDDiv>
                    <SEDHeader>
                        <SEDHH3>
                            유기농 아이스크림 <SYellow>바닐라</SYellow>
                        </SEDHH3>
                    </SEDHeader>
                    <SDDPText>
                        부드럽고 깔끔한 맛의 유기농 아이스크림을 즐기세요.
                    </SDDPText>
                    <Link to={"#"}>
                        <SEDPLink>
                            메뉴 링크
                        </SEDPLink>
                    </Link>
                </SDDiv>
            </SSLi>
        </SSection>
    );
};