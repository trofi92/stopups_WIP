import {GBButton, GBImg, GBox, GBoxs, GBText, GBTitle} from "../../styled/Cart";

export const CNoDF = () => {
    return (
        <GBoxs>
            <GBox>
                <GBTitle>음료/푸드 장바구니가 비어있습니다.</GBTitle>
                <GBText>
                    원하는 음료/푸드를 장바구니에 담고
                    <br/>
                    한번에 주문해 보세요.
                </GBText>
                <GBButton>음료/푸드 담으러 가기</GBButton>
            </GBox>
            <GBImg></GBImg>
        </GBoxs>
    );
};