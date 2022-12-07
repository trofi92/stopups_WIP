import {GBButton, GBImg, GBox, GBoxs, GBText, GBTitle} from "../../styled/Cart";

export const CNoG = () => {
    return (
        <GBoxs>
            <GBox>
                <GBTitle>상품 장바구니가 비어있습니다.</GBTitle>
                <GBText>
                    원하는 상품을 장바구니에 담고
                    <br/>
                    한번에 주문해 보세요.
                </GBText>
                <GBButton>상품 담으러 가기</GBButton>
            </GBox>
            <GBImg></GBImg>
        </GBoxs>
    );
};