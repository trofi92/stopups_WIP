import * as styled_Search from "../../styled/Search";
import {Link} from "react-router-dom";

export const SDrink = () => {
    return (
        <styled_Search.SSection>
            {/*음료 헤더*/}
            <styled_Search.SSHeader>
                <styled_Search.SSHH2>음료</styled_Search.SSHH2>
                <Link to={"/event"}>
                    <styled_Search.SSHP>음료 더보기</styled_Search.SSHP>
                </Link>
            </styled_Search.SSHeader>
            {/*음료 내용*/}
            <styled_Search.SSUl>
                <styled_Search.SSLi>
                    <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
                </styled_Search.SSLi>
                {/*음료 검색 결과 있을 때*/}
                <styled_Search.SSLi>
                    <styled_Search.SDFigure>
                        {/*이미지 넣기*/}
                        <styled_Search.SDFImg/>
                    </styled_Search.SDFigure>
                    <styled_Search.SDDiv>
                        <styled_Search.SEDHeader>
                            <styled_Search.SEDHH3>
                                나이트로 <styled_Search.SYellow>바닐라</styled_Search.SYellow> 크림
                            </styled_Search.SEDHH3>
                        </styled_Search.SEDHeader>
                        <styled_Search.SDDPText>
                            부드러운 목넘김의 나이트로 커피와
                            <styled_Search.SYellow>바닐라</styled_Search.SYellow>
                            크림의 매력을 한번에 느껴보세요!
                        </styled_Search.SDDPText>
                        <Link to={"#"}>
                            <styled_Search.SEDPLink>
                                메뉴 링크
                            </styled_Search.SEDPLink>
                        </Link>
                    </styled_Search.SDDiv>
                </styled_Search.SSLi>
            </styled_Search.SSUl>
        </styled_Search.SSection>
    );
};