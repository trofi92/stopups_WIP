import * as styled_C from "../../styled/Cart"

export const CNoG = () => {
    return (
        <styled_C.GBoxs>
            <styled_C.GBox>
                <styled_C.GBTitle>상품 장바구니가 비어있습니다.</styled_C.GBTitle>
                <styled_C.GBText>
                    원하는 상품을 장바구니에 담고
                    <br/>
                    한번에 주문해 보세요.
                </styled_C.GBText>
                <styled_C.GBButton>상품 담으러 가기</styled_C.GBButton>
            </styled_C.GBox>
            <styled_C.GBImg></styled_C.GBImg>
        </styled_C.GBoxs>
    );
};