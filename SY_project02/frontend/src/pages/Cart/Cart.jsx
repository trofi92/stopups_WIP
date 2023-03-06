import * as styled_AB from "../../styled/AllBox";
import * as styled_F from "../../styled/Favorite";
import * as styled_C from "../../styled/Cart";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import CTitle from "../../image/Cart/CTitle.png";
import { CNoDF } from "./CNoDF";
import { useState } from "react";
import { CNoG } from "./CNoG";

const Cart = () => {
  const [state, setState] = useState(1);

  const onClick = (id) => {
    setState(id);
  };

  const obj = {
    1: <CNoDF />,
    2: <CNoG />,
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_F.FBox>
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img src={CTitle} alt={"MyMenu"} />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_F.FHTitle>
        </styled_F.FHeader>

        <styled_F.FContentsAllBox>
          <styled_F.FCBox>
            <styled_F.FCSection1>
              <styled_F.FCSectionP></styled_F.FCSectionP>
            </styled_F.FCSection1>
            <styled_F.FCSection2>
              <div>
                <styled_C.CDiv>
                  <styled_C.CFoodBox1>
                    <styled_F.FCSH5>
                      {state === 1 ? (
                        <styled_C.CFoodG
                          href={"#"}
                          onClick={() => onClick(1)}
                        >
                          음료/푸드
                        </styled_C.CFoodG>
                      ) : (
                        <styled_C.CFood
                          href={"#"}
                          onClick={() => onClick(1)}
                        >
                          음료/푸드
                        </styled_C.CFood>
                      )}
                    </styled_F.FCSH5>
                  </styled_C.CFoodBox1>

                  <styled_C.CGoodsBox>
                    <styled_F.FCSH5>
                      {state === 2 ? (
                        <styled_C.CGoodsG
                          href={"#"}
                          onClick={() => onClick(2)}
                        >
                          상품
                        </styled_C.CGoodsG>
                      ) : (
                        <styled_C.CGoods
                          href={"#"}
                          onClick={() => onClick(2)}
                        >
                          상품
                        </styled_C.CGoods>
                      )}
                    </styled_F.FCSH5>
                  </styled_C.CGoodsBox>

                  {obj[state]}
                </styled_C.CDiv>
              </div>
            </styled_F.FCSection2>
          </styled_F.FCBox>
        </styled_F.FContentsAllBox>
      </styled_F.FBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default Cart;
