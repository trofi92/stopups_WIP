import * as styled_Search from "../../styled/Search";
import {Link} from "react-router-dom";

export const SFood = () => {
    return (
        <styled_Search.SSection>
            {/*푸드 헤더*/}
            <styled_Search.SSHeader>
                <styled_Search.SSHH2>푸드</styled_Search.SSHH2>
                <Link to={"/event"}>
                    <styled_Search.SSHP>푸드 더보기</styled_Search.SSHP>
                </Link>
            </styled_Search.SSHeader>
            {/*푸드 내용*/}
            <styled_Search.SSUl>
                <styled_Search.SSLi>
                    <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
                </styled_Search.SSLi>
            </styled_Search.SSUl>
            {/*푸드 있을 때*/}
            <styled_Search.SSLi>
                <styled_Search.SDFigure>
                    {/*이미지 넣기*/}
                    <styled_Search.SDFImg/>
                </styled_Search.SDFigure>
                <styled_Search.SDDiv>
                    <styled_Search.SEDHeader>
                        <styled_Search.SEDHH3>
                            유기농 아이스크림 <styled_Search.SYellow>바닐라</styled_Search.SYellow>
                        </styled_Search.SEDHH3>
                    </styled_Search.SEDHeader>
                    <styled_Search.SDDPText>
                        부드럽고 깔끔한 맛의 유기농 아이스크림을 즐기세요.
                    </styled_Search.SDDPText>
                    <Link to={"#"}>
                        <styled_Search.SEDPLink>
                            메뉴 링크
                        </styled_Search.SEDPLink>
                    </Link>
                </styled_Search.SDDiv>
            </styled_Search.SSLi>
        </styled_Search.SSection>
    );
};