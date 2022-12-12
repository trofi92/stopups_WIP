import {
    CBTitle,
    CBTSpan,
    CBTSpanColor,
    CFACInput,
    CFAllCheck,
    CFAllCheckBox,
    CFAllCheckText, CFBAmount, CFBAmountColor,
    CFBox,
    CFBoxs, CFBTotal, CFButton, CFButtonBox,
    CFCAllDelete,
    CFCDelete, CFMCMinus, CFMCount, CFMCountBox, CFMCPlus, CFMCup,
    CFMenuBox,
    CFMIceHot,
    CFMImg, CFMMoney,
    CFMOption, CFMSize,
    CFMText,
    CFMTitle, CFMTotalMoney,
    CMBox,
    CMCheck,
    CMCInput,
    GBButton,
    GBImg,
    GBox,
    GBoxs,
    GBText,
    GBTitle
} from "../../styled/Cart";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

export const CNoDF = () => {
    return (
        <>
            {/*음료/푸드에 상품이 없을 때*/}
            {/*<GBoxs>*/}
            {/*    <GBox>*/}
            {/*        <GBTitle>음료/푸드 장바구니가 비어있습니다.</GBTitle>*/}
            {/*        <GBText>*/}
            {/*            원하는 음료/푸드를 장바구니에 담고*/}
            {/*            <br/>*/}
            {/*            한번에 주문해 보세요.*/}
            {/*        </GBText>*/}
            {/*        /!*나중에 메뉴쪽으로 링크 걸기*!/*/}
            {/*        <GBButton>음료/푸드 담으러 가기</GBButton>*/}
            {/*    </GBox>*/}
            {/*    <GBImg></GBImg>*/}
            {/*</GBoxs>*/}

            {/*음료/푸드에 상품이 있을 때*/}
            <CFBoxs>
                {/*주문 메뉴*/}
                <CFBox>
                    <CBTitle>주문 메뉴</CBTitle>
                    <CBTSpan>총 주문 가능 수량 <CBTSpanColor>20</CBTSpanColor>개</CBTSpan>
                </CFBox>
                {/*전체 선택, 선택삭제, 전체삭제*/}
                <CFAllCheckBox>
                    <CFAllCheck>
                        <CFACInput
                            type={"checkbox"}
                            title={"전체 선택"}
                        />
                    </CFAllCheck>
                    <CFAllCheckText>전체선택</CFAllCheckText>
                    <CFCDelete>선택삭제</CFCDelete>
                    <CFCAllDelete>전체삭제</CFCAllDelete>
                </CFAllCheckBox>

                {/*메뉴 map 사용*/}
                <CFMenuBox>
                    <CMCheck>
                        <CMCInput
                            type={"checkbox"}
                            title={"개별 선택"}
                        />
                    </CMCheck>
                    {/*상품 이미지, 이름 등*/}
                    <CMBox>
                        <CFMImg/>
                        <CFMText>
                            <CFMTitle>블루밍 프루트 유스베리 티</CFMTitle>
                            <CFMOption>
                                <CFMIceHot>ICED</CFMIceHot>
                                <CFMSize>Tall</CFMSize>
                                <CFMCup>일회용 컵</CFMCup>
                                <CFMMoney>6,700원</CFMMoney>
                            </CFMOption>
                            <CFMCountBox>
                                {/*수량이 1일 때 color #c3c3c3 밑 버튼 비활성화*/}
                                <CFMCMinus><AiOutlineMinusCircle style={{fontSize: "30px"}}/></CFMCMinus>
                                <CFMCount>1</CFMCount>
                                <CFMCPlus><AiOutlinePlusCircle style={{fontSize: "30px"}}/></CFMCPlus>
                                <CFMTotalMoney>6,700원</CFMTotalMoney>
                            </CFMCountBox>
                        </CFMText>
                    </CMBox>
                </CFMenuBox>
                {/*여기까지 map*/}

                {/*총 갯수 박스*/}
                <CFButtonBox>
                    <CFBAmount>총 <CFBAmountColor>0</CFBAmountColor>개 / 20개</CFBAmount>
                    <CFBTotal>0원</CFBTotal>
                </CFButtonBox>
                {/*체크된 상품이 없을 때 color #c3c3c3*에 버튼 비활성화*/}
                {/*클릭 시 결제 쪽으로 정보 및 링크*/}
                <CFButton>주문하기</CFButton>
            </CFBoxs>
        </>
    );
};