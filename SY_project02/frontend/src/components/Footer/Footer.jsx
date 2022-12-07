import {
    F,
    FAward,
    FUBUl,
    FUButton,
    FWInner,
    FWrap,
    FWUl,
    FWLi,
    FWA1,
    FWA2, FUBLi, FUBLiP, FAInner, FAside, FAsideAGreen, FAsideA, FAButtonA, FAUl, FALi, FASpan
} from "../../styled/Footer"
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            {/*푸터*/}
            <F>
                {/*메뉴*/}
                <FWrap>
                    <FWInner>
                        <FWUl>
                            <FWLi>
                                <FWA1>CUSTOMER SERVICE & IDEAS</FWA1>
                            </FWLi>
                            <FWLi>
                                <FWA2>자주 하는 질문</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>고객의 소리</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>스탑업스 이용 팁</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>고객 경험 설문조사</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>비회원 전자영수증 조회</FWA2>
                            </FWLi>
                        </FWUl>
                        <FWUl>
                            <FWLi>
                                <FWA1>COMPANY</FWA1>
                            </FWLi>
                            <FWLi>
                                <FWA2>한눈에 보기</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>스탑업스 사명</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>스탑업스 소개</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>국내 뉴스룸</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>세계의 스탑업스</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>글로벌 뉴스룸</FWA2>
                            </FWLi>
                        </FWUl>
                        <FWUl>
                            <FWLi>
                                <FWA1>CORPORATE SALES</FWA1>
                            </FWLi>
                            <FWLi>
                                <FWA2>단체 및 기업 구매 안내</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>단체 주문 배달 안내</FWA2>
                            </FWLi>
                        </FWUl>
                        <FWUl>
                            <FWLi>
                                <FWA1>PARTNERSHIP</FWA1>
                            </FWLi>
                            <FWLi>
                                <FWA2>신규 입점 제의</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>협력 고객사 등록신청</FWA2>
                            </FWLi>
                        </FWUl>
                        <FWUl>
                            <FWLi>
                                <FWA1>ONLINE COMMUNITY</FWA1>
                            </FWLi>
                            <FWLi>
                                <a href={"https://www.facebook.com/starbuckskorea"} target={"_blank"}>
                                    <FWA2>페이스북</FWA2>
                                </a>
                            </FWLi>
                            <FWLi>
                                <a href={"https://twitter.com/StarbucksKorea"} target={"_blank"}>
                                    <FWA2>트위터</FWA2>
                                </a>
                            </FWLi>
                            <FWLi>
                                <a href={"https://www.youtube.com/user/starbuckskorea"} target={"_blank"}>
                                    <FWA2>유튜브</FWA2>
                                </a>
                            </FWLi>
                            <FWLi>
                                <a href={"https://www.instagram.com/starbuckskorea/"} target={"_blank"}>
                                    <FWA2>인스타그램</FWA2>
                                </a>
                            </FWLi>
                        </FWUl>
                        <FWUl>
                            <FWLi>
                                <FWA1>RECRUIT</FWA1>
                            </FWLi>
                            <FWLi>
                                <FWA2>채용 소개</FWA2>
                            </FWLi>
                            <FWLi>
                                <FWA2>채용 지원하기</FWA2>
                            </FWLi>
                        </FWUl>
                    </FWInner>
                </FWrap>

                {/*유틸 버튼*/}
                <FUButton>
                    <FUBUl>
                        <FUBLi>
                            <Link to={"/"} style={{textDecoration: "none", color: "#fff"}}>
                                <FUBLiP>HOME</FUBLiP>
                            </Link>
                        </FUBLi>
                        <FUBLi>
                            <Link to={"/"} style={{textDecoration: "none", color: "#fff"}}>
                                <FUBLiP>Sign In</FUBLiP>
                            </Link>
                        </FUBLi>
                        <FUBLi>
                            <Link to={"/"} style={{textDecoration: "none", color: "#fff"}}>
                                <FUBLiP>Join Us</FUBLiP>
                            </Link>
                        </FUBLi>
                    </FUBUl>
                </FUButton>

                {/*수상 내역*/}
                <FAward>
                    <FAInner>
                        수상내역
                    </FAInner>
                </FAward>

                {/*그외 기타*/}
                <FAside>
                    <FAsideAGreen>개인정보처리방침</FAsideAGreen>
                    <FAsideA>영상정보처리기기 운영관리 방침</FAsideA>
                    <FAsideA>홈페이지 이용약관</FAsideA>
                    <FAsideA>위치정보 이용약관</FAsideA>
                    <FAsideA>스타벅스 카드 이용약관</FAsideA>
                    <FAsideA>비회원 이용약관</FAsideA>
                    <br/>
                    <FAsideA>My DT Pass 서비스 이용약관</FAsideA>
                    <FAsideA>윤리경영 핫라인</FAsideA>
                    <br/>
                    <FAButtonA>찾아오시는 길</FAButtonA>
                    <FAButtonA>신규입점제의</FAButtonA>
                    <FAButtonA>사이트 맵</FAButtonA>
                    <br/>
                    <FAUl>
                        <FALi>사업자등록번호 : 201-81-21515</FALi>
                        <FALi>주식회사 에스씨케이컴퍼니 대표이사: 송 데이비드 호섭</FALi>
                        <FALi>TEL: 1522-3232</FALi>
                        <FALi>개인정보 책임자: 이현수</FALi>
                    </FAUl>
                    <FASpan>ⓒ 2022 StopUps Coffee Company. All Rights Reserved.</FASpan>
                </FAside>
            </F>
        </>
    );
};
