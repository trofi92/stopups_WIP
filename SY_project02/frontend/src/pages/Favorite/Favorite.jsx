import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {
    FBox,
    FCBox,
    FContentsAllBox, FCSA1, FCSA2, FCSA3, FCSDl, FCSDt1, FCSDt2, FCSDt3,
    FCSection1, FCSection2,
    FCSectionP, FCSH5,
    FHeader,
    FHTInner,
    FHTInnerH4,
    FHTitle
} from "../../styled/Favorite";
import MyMenu from "../../image/Favorite/MyMenu.png"
import {FDrink} from "./FDrink";
import {FFood} from "./FFood";
import {FGoods} from "./FGoods";
import {useEffect, useState} from "react";

const Favorite = () => {
    const [drink, setDrink] = useState(true);
    const [food, setFood] = useState(false);
    const [goods, setGoods] = useState(false);

    const [color, setColor] = useState(false);




    return (
        <AllBox>
            <Header/>

            <FBox>
                {/*My 메뉴의 헤더*/}
                <FHeader>
                    <FHTitle>
                        <FHTInner>
                            <FHTInnerH4>
                                <img src={MyMenu} alt={"MyMenu"}/>
                            </FHTInnerH4>
                        </FHTInner>
                    </FHTitle>
                </FHeader>



                {/*My 메뉴의 내용*/}
                <FContentsAllBox>
                    <FCBox>
                        {/*최근 마신 음료 안내*/}
                        <FCSection1>
                            <FCSectionP>
                                {/*strong 3개 더 들어가야하는데 샘플이 없어서 못 만드는 중*/}
                            </FCSectionP>
                        </FCSection1>
                        {/*찜 목록 내역*/}
                        <FCSection2>
                            <div>
                                <FCSDl>
                                    <FCSDt1>
                                        <FCSH5>
                                            <FCSA1 href={"#"}>나만의 음료</FCSA1>
                                        </FCSH5>
                                    </FCSDt1>
                                    {/*음료 테이블*/}
                                    <FDrink id={"drink"}/>

                                    <FCSDt2>
                                        <FCSH5>
                                            <FCSA2 href={"#"}>나만의 푸드</FCSA2>
                                        </FCSH5>
                                    </FCSDt2>
                                    {/*푸드 테이블*/}
                                    <FFood id={"food"}/>

                                    <FCSDt3>
                                        <FCSH5>
                                            <FCSA3 href={"#"}>나만의 상품</FCSA3>
                                        </FCSH5>
                                    </FCSDt3>
                                    {/*상품 테이블*/}
                                    <FGoods id={"goods"}/>
                                </FCSDl>
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