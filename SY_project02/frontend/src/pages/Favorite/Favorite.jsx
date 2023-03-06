import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import * as styled_F from "../../styled/Favorite";
import MyMenu from "../../image/Favorite/MyMenu.png";
import { FDrink } from "./FDrink";
import { FFood } from "./FFood";
import { FGoods } from "./FGoods";
import { useState } from "react";

const Favorite = () => {
  const [state, setState] = useState(1);

  const onClick = (id) => {
    setState(id);
  };

  const obj = {
    1: <FDrink />,
    2: <FFood />,
    3: <FGoods />,
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_F.FBox>
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img src={MyMenu} alt={"MyMenu"} />
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
                <styled_F.FCSDl>
                  <styled_F.FCSDt1>
                    <styled_F.FCSH5>
                      {state === 1 ? (
                        <styled_F.FCSA1G
                          href={"#"}
                          onClick={() => onClick(1)}
                        >
                          나만의 음료
                        </styled_F.FCSA1G>
                      ) : (
                        <styled_F.FCSA1
                          href={"#"}
                          onClick={() => onClick(1)}
                        >
                          나만의 음료
                        </styled_F.FCSA1>
                      )}
                    </styled_F.FCSH5>
                  </styled_F.FCSDt1>
                  <styled_F.FCSDt2>
                    <styled_F.FCSH5>
                      {state === 2 ? (
                        <styled_F.FCSA2G
                          href={"#"}
                          onClick={() => onClick(2)}
                        >
                          나만의 푸드
                        </styled_F.FCSA2G>
                      ) : (
                        <styled_F.FCSA2
                          href={"#"}
                          onClick={() => onClick(2)}
                        >
                          나만의 푸드
                        </styled_F.FCSA2>
                      )}
                    </styled_F.FCSH5>
                  </styled_F.FCSDt2>
                  <styled_F.FCSDt3>
                    <styled_F.FCSH5>
                      {state === 3 ? (
                        <styled_F.FCSA3G
                          href={"#"}
                          onClick={() => onClick(3)}
                        >
                          나만의 상품
                        </styled_F.FCSA3G>
                      ) : (
                        <styled_F.FCSA3
                          href={"#"}
                          onClick={() => onClick(3)}
                        >
                          나만의 상품
                        </styled_F.FCSA3>
                      )}
                    </styled_F.FCSH5>
                  </styled_F.FCSDt3>

                  {obj[state]}
                </styled_F.FCSDl>
              </div>
            </styled_F.FCSection2>
          </styled_F.FCBox>
        </styled_F.FContentsAllBox>
      </styled_F.FBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default Favorite;
