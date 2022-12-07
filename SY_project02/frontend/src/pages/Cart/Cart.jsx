import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {
    FBox,
    FCBox,
    FContentsAllBox,
    FCSection1,
    FCSection2,
    FCSectionP,
    FCSH5,
    FHeader,
    FHTInner,
    FHTInnerH4,
    FHTitle
} from "../../styled/Favorite";
import CTitle from "../../image/Cart/CTitle.png"
import {
    CDiv,
    CFood,
    CFoodBox1,
    CGoods,
    CGoodsBox,

} from "../../styled/Cart";
import {CNoDF} from "./CNoDF";

const Favorite = () => {
    // const [drink, setDrink] = useState();
    // const [food, setFood] = useState();
    // const [goods, setGoods] = useState();

    // const [btn, setBtn] = useState("drink");
    //
    // const onClick = (event: React.FormEvent<HTMLAnchorElement>) => {
    //     const {
    //         currentTarget: { id },
    //     } = event;
    //     setBtn(id);
    // };
    //
    // useEffect(() => {
    //     const allBtnArr = ["drink", "food", "goods"];
    //     const nonTargetedBtnArr = allBtnArr.filter((item) => item !== btn);
    //     document.getElementById(btn).style.backgroundColor = "#006633";
    //     document.getElementById(btn).style.color = "#fff";
    //     nonTargetedBtnArr.map((item) => {
    //         document.getElementById(item).style.backgroundColor = "white";
    //         document.getElementById(btn).style.color = "#444";
    //         return null;
    //     });
    // }, [btn]);


    return (
        <AllBox>
            <Header/>

            <FBox>
                {/*My 장바구니 헤더*/}
                <FHeader>
                    <FHTitle>
                        <FHTInner>
                            <FHTInnerH4>
                                <img src={CTitle} alt={"MyMenu"}/>
                            </FHTInnerH4>
                        </FHTInner>
                    </FHTitle>
                </FHeader>

                {/*My 장바구니 내용*/}
                <FContentsAllBox>
                    <FCBox>
                        {/**/}
                        <FCSection1>
                            <FCSectionP>
                                {/*strong 3개 더 들어가야하는데 샘플이 없어서 못 만드는 중*/}
                            </FCSectionP>
                        </FCSection1>
                        {/*장바구니 내역*/}
                        <FCSection2>
                            <div>
                                <CDiv>
                                    <CFoodBox1>
                                        <FCSH5>
                                            {/*버튼 클릭 시 border-bottom: 3px solid #006633*/}
                                            <CFood href={"#"} id={"DF"}>
                                                음료/푸드
                                            </CFood>
                                        </FCSH5>
                                    </CFoodBox1>

                                    {/*음료/푸드에 아무것도 없을 때*/}
                                    <CNoDF/>
                                    {/*상품을 클릭했을 때*/}
                                    {/*<CNoG/>*/}

                                    {/*음료/푸드에 상품이 있을 때*/}
                                    {/*상품 클릭시 GBoxs만 보이고 여기부터 hide*/}
                                    {/*<CFBoxs>*/}
                                    {/*    /!*주문 메뉴*!/*/}
                                    {/*    <CFBox>*/}
                                    {/*        <CBTitle>주문 메뉴</CBTitle>*/}
                                    {/*        <CBTSpan>총 주문 가능 수량 <CBTSpanColor>20</CBTSpanColor>개</CBTSpan>*/}
                                    {/*    </CFBox>*/}
                                    {/*    /!*전체 선택, 선택삭제, 전체삭제*!/*/}
                                    {/*    <CFAllCheckBox>*/}
                                    {/*        <CFAllCheck>*/}
                                    {/*            <CFACInput*/}
                                    {/*                type={"checkbox"}*/}
                                    {/*                title={"전체 선택"}*/}
                                    {/*            />*/}
                                    {/*        </CFAllCheck>*/}
                                    {/*        <CFAllCheckText>전체선택</CFAllCheckText>*/}
                                    {/*        <CFCDelete>선택삭제</CFCDelete>*/}
                                    {/*        <CFCAllDelete>전체삭제</CFCAllDelete>*/}
                                    {/*    </CFAllCheckBox>*/}

                                    {/*    /!*메뉴 map 사용*!/*/}
                                    {/*    <CFMenuBox>*/}
                                    {/*        <CMCheck>*/}
                                    {/*            <CMCInput*/}
                                    {/*                type={"checkbox"}*/}
                                    {/*                title={"개별 선택"}*/}
                                    {/*            />*/}
                                    {/*        </CMCheck>*/}
                                    {/*        /!*상품 이미지, 이름 등*!/*/}
                                    {/*        <CMBox>*/}
                                    {/*            <CFMImg/>*/}
                                    {/*            <CFMText>*/}
                                    {/*                <CFMTitle>블루밍 프루트 유스베리 티</CFMTitle>*/}
                                    {/*                <CFMOption>*/}
                                    {/*                    <CFMIceHot>ICED</CFMIceHot>*/}
                                    {/*                    <CFMSize>Tall</CFMSize>*/}
                                    {/*                    <CFMCup>일회용 컵</CFMCup>*/}
                                    {/*                    <CFMMoney>6,700원</CFMMoney>*/}
                                    {/*                </CFMOption>*/}
                                    {/*                <CFMCountBox>*/}
                                    {/*                    /!*수량이 1일 때 color #c3c3c3 밑 버튼 비활성화*!/*/}
                                    {/*                    <CFMCMinus><AiOutlineMinusCircle style={{fontSize: "30px"}}/></CFMCMinus>*/}
                                    {/*                    <CFMCount>1</CFMCount>*/}
                                    {/*                    <CFMCPlus><AiOutlinePlusCircle style={{fontSize: "30px"}}/></CFMCPlus>*/}
                                    {/*                    <CFMTotalMoney>6,700원</CFMTotalMoney>*/}
                                    {/*                </CFMCountBox>*/}
                                    {/*            </CFMText>*/}
                                    {/*        </CMBox>*/}
                                    {/*    </CFMenuBox>*/}
                                    {/*    /!*여기까지 map*!/*/}

                                    {/*    /!*총 갯수 박스*!/*/}
                                    {/*    <CFButtonBox>*/}
                                    {/*        <CFBAmount>총 <CFBAmountColor>0</CFBAmountColor>개 / 20개</CFBAmount>*/}
                                    {/*        <CFBTotal>0원</CFBTotal>*/}
                                    {/*    </CFButtonBox>*/}
                                    {/*    /!*체크된 상품이 없을 때 color #c3c3c3*에 버튼 비활성화*!/*/}
                                    {/*    <CFButton>주문하기</CFButton>*/}
                                    {/*</CFBoxs>*/}


                                    {/*상품 버튼*/}
                                    <CGoodsBox>
                                        <FCSH5>
                                            {/*버튼 클릭 시 border-bottom: 3px solid #006633*/}
                                            <CGoods href={"#"} id={"G"}>상품</CGoods>
                                        </FCSH5>
                                    </CGoodsBox>


                                </CDiv>
                            </div>
                        </FCSection2>
                    </FCBox>
                </FContentsAllBox>
            </FBox>

            <Footer/>
        </AllBox>
    );
};

export default Favorite;