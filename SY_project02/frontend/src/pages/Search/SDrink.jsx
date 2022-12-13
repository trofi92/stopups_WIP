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

export const SDrink = () => {
    return (
        <SSection>
            {/*음료 헤더*/}
            <SSHeader>
                <SSHH2>음료</SSHH2>
                <Link to={"/event"}>
                    <SSHP>음료 더보기</SSHP>
                </Link>
            </SSHeader>
            {/*음료 내용*/}
            <SSUl>
                <SSLi>
                    <SSLP>검색 결과가 없습니다.</SSLP>
                </SSLi>
                {/*음료 검색 결과 있을 때*/}
                <SSLi>
                    <SDFigure>
                        {/*이미지 넣기*/}
                        <SDFImg/>
                    </SDFigure>
                    <SDDiv>
                        <SEDHeader>
                            <SEDHH3>
                                나이트로 <SYellow>바닐라</SYellow> 크림
                            </SEDHH3>
                        </SEDHeader>
                        <SDDPText>
                            부드러운 목넘김의 나이트로 커피와
                            <SYellow>바닐라</SYellow>
                            크림의 매력을 한번에 느껴보세요!
                        </SDDPText>
                        <Link to={"#"}>
                            <SEDPLink>
                                메뉴 링크
                            </SEDPLink>
                        </Link>
                    </SDDiv>
                </SSLi>
            </SSUl>
        </SSection>
    );
};