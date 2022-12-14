import * as styled_C from "../../styled/Cart"
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

export const CNoDF = () => {
    return (
        <>
            {/*음료/푸드에 상품이 없을 때*/}
            <styled_C.GBoxs>
                <styled_C.GBox>
                    <styled_C.GBTitle>음료/푸드 장바구니가 비어있습니다.</styled_C.GBTitle>
                    <styled_C.GBText>
                        원하는 음료/푸드를 장바구니에 담고
                        <br/>
                        한번에 주문해 보세요.
                    </styled_C.GBText>
                    {/*나중에 메뉴쪽으로 링크 걸기*/}
                    <styled_C.GBButton>음료/푸드 담으러 가기</styled_C.GBButton>
                </styled_C.GBox>
                <styled_C.GBImg/>
            </styled_C.GBoxs>

            {/*음료/푸드에 상품이 있을 때*/}
            <styled_C.CFBoxs>
                {/*주문 메뉴*/}
                <styled_C.CFBox>
                    <styled_C.CBTitle>주문 메뉴</styled_C.CBTitle>
                    <styled_C.CBTSpan>총 주문 가능 수량 <styled_C.CBTSpanColor>20</styled_C.CBTSpanColor>개</styled_C.CBTSpan>
                </styled_C.CFBox>
                {/*전체 선택, 선택삭제, 전체삭제*/}
                <styled_C.CFAllCheckBox>
                    <styled_C.CFAllCheck>
                        <styled_C.CFACInput
                            type={"checkbox"}
                            title={"전체 선택"}
                        />
                    </styled_C.CFAllCheck>
                    <styled_C.CFAllCheckText>전체선택</styled_C.CFAllCheckText>
                    <styled_C.CFCDelete>선택삭제</styled_C.CFCDelete>
                    <styled_C.CFCAllDelete>전체삭제</styled_C.CFCAllDelete>
                </styled_C.CFAllCheckBox>

                {/*메뉴 map 사용*/}
                <styled_C.CFMenuBox>
                    <styled_C.CMCheck>
                        <styled_C.CMCInput
                            type={"checkbox"}
                            title={"개별 선택"}
                        />
                    </styled_C.CMCheck>
                    {/*상품 이미지, 이름 등*/}
                    <styled_C.CMBox>
                        <styled_C.CFMImg/>
                        <styled_C.CFMText>
                            <styled_C.CFMTitle>블루밍 프루트 유스베리 티</styled_C.CFMTitle>
                            <styled_C.CFMOption>
                                <styled_C.CFMIceHot>ICED</styled_C.CFMIceHot>
                                <styled_C.CFMSize>Tall</styled_C.CFMSize>
                                <styled_C.CFMCup>일회용 컵</styled_C.CFMCup>
                                <styled_C.CFMMoney>6,700원</styled_C.CFMMoney>
                            </styled_C.CFMOption>
                            <styled_C.CFMCountBox>
                                {/*수량이 1일 때 color #c3c3c3 밑 버튼 비활성화*/}
                                <styled_C.CFMCMinus><AiOutlineMinusCircle style={{fontSize: "30px"}}/></styled_C.CFMCMinus>
                                <styled_C.CFMCount>1</styled_C.CFMCount>
                                <styled_C.CFMCPlus><AiOutlinePlusCircle style={{fontSize: "30px"}}/></styled_C.CFMCPlus>
                                <styled_C.CFMTotalMoney>6,700원</styled_C.CFMTotalMoney>
                            </styled_C.CFMCountBox>
                        </styled_C.CFMText>
                    </styled_C.CMBox>
                </styled_C.CFMenuBox>
                {/*여기까지 map*/}

                {/*총 갯수 박스*/}
                <styled_C.CFButtonBox>
                    <styled_C.CFBAmount>총 <styled_C.CFBAmountColor>0</styled_C.CFBAmountColor>개 / 20개</styled_C.CFBAmount>
                    <styled_C.CFBTotal>0원</styled_C.CFBTotal>
                </styled_C.CFButtonBox>
                {/*체크된 상품이 없을 때 color #c3c3c3*에 버튼 비활성화*/}
                {/*클릭 시 결제 쪽으로 정보 및 링크*/}
                <styled_C.CFButton>주문하기</styled_C.CFButton>
            </styled_C.CFBoxs>
        </>
    );
};