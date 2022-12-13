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
    CBTitle,
    CBTSpan,
    CBTSpanColor,
    CDiv,
    CFACInput,
    CFAllCheck,
    CFAllCheckBox,
    CFAllCheckText, CFBAmount, CFBAmountColor,
    CFBox,
    CFBoxs, CFBTotal, CFButton, CFButtonBox,
    CFCAllDelete,
    CFCDelete, CFMCMinus, CFMCount, CFMCountBox, CFMCPlus, CFMCup,
    CFMenuBox, CFMIceHot,
    CFMImg, CFMMoney, CFMOption, CFMSize, CFMText, CFMTitle, CFMTotalMoney,
    CFood,
    CFoodBox1, CFoodG,
    CGoods,
    CGoodsBox, CGoodsG,
    CMBox,
    CMCheck,
    CMCInput,

} from "../../styled/Cart";
import {CNoDF} from "./CNoDF";
import {useState} from "react";
import {FDrink} from "../Favorite/FDrink";
import {FFood} from "../Favorite/FFood";
import {FGoods} from "../Favorite/FGoods";
import {CNoG} from "./CNoG";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

const Favorite = () => {
    const [state, setState] = useState(1);

    const onClick = (id) => {
        setState(id);
    }

    const obj = {
        1: <CNoDF/>,
        2: <CNoG/>,
    };

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
                                            {state === 1 ? (
                                                <CFoodG href={"#"} onClick={() => onClick(1)}>
                                                    음료/푸드
                                                </CFoodG>
                                            ) : (
                                                <CFood href={"#"} onClick={() => onClick(1)}>
                                                    음료/푸드
                                                </CFood>
                                            )}
                                        </FCSH5>
                                    </CFoodBox1>

                                    {/*상품 버튼*/}
                                    <CGoodsBox>
                                        <FCSH5>
                                            {state === 2 ? (
                                                <CGoodsG href={"#"} onClick={() => onClick(2)}>
                                                    상품
                                                </CGoodsG>
                                            ) : (
                                                <CGoods href={"#"} onClick={() => onClick(2)}>
                                                    상품
                                                </CGoods>
                                            )}
                                        </FCSH5>
                                    </CGoodsBox>

                                    {obj[state]}
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