import {AllBox} from "../styled/AllBox";
import Header from "../components/Header/Header";
import {FContentsAllBox, FHeader, FHTInner, FHTInnerH4, FHTitle} from "../styled/Favorite";
import SearchTitle from "../image/SearchTitle.png"
import {
    SBox, SEDHeader, SEDHH3, SEDHSpan, SEDiv, SEDPDate, SEDPLink, SEDPP, SEFigure, SEFImg, SFBLi, SFBLP, SFBLPGreen,
    SFBox, SFBUl,
    SFButtonBox,
    SFieldset,
    SFInput,
    SFInputBox,
    SFIP,
    SFStrong,
    SInnerBox, SNoResult, SSection, SSHeader, SSHH2, SSHP, SSLi, SSLP, SSUl
} from "../styled/Search";
import {Link} from "react-router-dom";
import {Footer} from "../components/Footer/Footer";
import ESTitle from "../image/Event/ESTitle.jpg"

const Search = ({search}) => {
    console.log(search)

    const onChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <AllBox>
            <Header/>

            <SBox>
                {/*통합검색 헤더*/}
                <FHeader>
                    <FHTitle>
                        <FHTInner>
                            <FHTInnerH4>
                                <img src={SearchTitle} alt={"MyMenu"}/>
                            </FHTInnerH4>
                        </FHTInner>
                    </FHTitle>
                </FHeader>
            </SBox>

            <FContentsAllBox>
                <SInnerBox>
                    {/*통합검색 입력*/}
                    <SFieldset>
                        <SFBox>
                            <SFStrong>원하시는 검색어를 입력하신 후 검색 버튼을 클릭하세요.</SFStrong>
                            {/*인풋*/}
                            <SFInputBox>
                                <SFInput
                                    type={"text"}
                                    value={search}
                                    onChange={onChange}
                                />
                                {/*검색 버튼 나중에 onSubmit?? 이벤트 걸기*/}
                                <SFIP/>
                            </SFInputBox>
                            {/*버튼*/}
                            <SFButtonBox>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLPGreen>통합검색</SFBLPGreen>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>이벤트</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>뉴스</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>매장이벤트</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>원두</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>음료</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>푸드</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>상품</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>카드</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        <SFBLP>매장</SFBLP>
                                    </SFBLi>
                                </SFBUl>
                            </SFButtonBox>
                        </SFBox>
                    </SFieldset>
                    {/*검색 결과가 없는 경우 이거 띄우기*/}
                    <SNoResult>검색 결과가 없습니다.</SNoResult>
                    {/*이벤트*/}
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
                    {/*뉴스*/}
                    <SSection>
                        {/*뉴스 헤더*/}
                        <SSHeader>
                            <SSHH2>뉴스</SSHH2>
                            <Link to={"/serviceReady"}>
                                <SSHP>뉴스 더보기</SSHP>
                            </Link>
                        </SSHeader>
                        {/*뉴스 내용*/}
                        <SSUl>
                            <SSLi>
                                <SSLP>검색 결과가 없습니다.</SSLP>
                            </SSLi>
                        </SSUl>
                    </SSection>
                    {/*매장 이벤트*/}
                    <SSection>
                        {/*매장 이벤트 헤더*/}
                        <SSHeader>
                            <SSHH2>매장 이벤트</SSHH2>
                            <Link to={"/serviceReady"}>
                                <SSHP>매장 이벤트 더보기</SSHP>
                            </Link>
                        </SSHeader>
                        {/*매장 이벤트 내용*/}
                        <SSUl>
                            <SSLi>
                                <SSLP>검색 결과가 없습니다.</SSLP>
                            </SSLi>
                        </SSUl>
                    </SSection>
                    {/*원두*/}
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
                    {/*음료*/}
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
                        </SSUl>
                    </SSection>
                    {/*푸드*/}
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
                    </SSection>
                    {/*상품*/}
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
                    {/*카드*/}
                    <SSection>
                        {/*카드 헤더*/}
                        <SSHeader>
                            <SSHH2>카드</SSHH2>
                            <Link to={"/serviceReady"}>
                                <SSHP>카드 더보기</SSHP>
                            </Link>
                        </SSHeader>
                        {/*카드 내용*/}
                        <SSUl>
                            <SSLi>
                                <SSLP>검색 결과가 없습니다.</SSLP>
                            </SSLi>
                        </SSUl>
                    </SSection>
                    {/*매장*/}
                    <SSection>
                        {/*매장 헤더*/}
                        <SSHeader>
                            <SSHH2>매장</SSHH2>
                            <Link to={"/serviceReady"}>
                                <SSHP>매장 더보기</SSHP>
                            </Link>
                        </SSHeader>
                        {/*매장 내용*/}
                        <SSUl>
                            <SSLi>
                                <SSLP>검색 결과가 없습니다.</SSLP>
                            </SSLi>
                        </SSUl>
                    </SSection>
                </SInnerBox>
            </FContentsAllBox>

            <Footer/>
        </AllBox>
    );
};

export default Search;