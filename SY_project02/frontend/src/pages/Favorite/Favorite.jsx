import { AllBox } from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {
  FBox,
  FCBox,
  FContentsAllBox,
  FCSA1,
  FCSA1G,
  FCSA2,
  FCSA2G,
  FCSA3,
  FCSA3G,
  FCSDl,
  FCSDt1,
  FCSDt2,
  FCSDt3,
  FCSection1,
  FCSection2,
  FCSectionP,
  FCSH5,
  FHeader,
  FHTInner,
  FHTInnerH4,
  FHTitle,
} from "../../styled/Favorite";
import MyMenu from "../../image/Favorite/MyMenu.png";
import { FDrink } from "./FDrink";
import { FFood } from "./FFood";
import { FGoods } from "./FGoods";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";

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
    <AllBox>
      <Header />

      <FBox>
        {/*My 메뉴의 헤더*/}
        <FHeader>
          <FHTitle>
            <FHTInner>
              <FHTInnerH4>
                <img src={MyMenu} alt={"MyMenu"} />
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
                      {state === 1 ? (
                        <FCSA1G href={"#"} onClick={() => onClick(1)}>
                          나만의 음료
                        </FCSA1G>
                      ) : (
                        <FCSA1 href={"#"} onClick={() => onClick(1)}>
                          나만의 음료
                        </FCSA1>
                      )}
                    </FCSH5>
                  </FCSDt1>
                  <FCSDt2>
                    <FCSH5>
                      {state === 2 ? (
                        <FCSA2G href={"#"} onClick={() => onClick(2)}>
                          나만의 푸드
                        </FCSA2G>
                      ) : (
                        <FCSA2 href={"#"} onClick={() => onClick(2)}>
                          나만의 푸드
                        </FCSA2>
                      )}
                    </FCSH5>
                  </FCSDt2>
                  <FCSDt3>
                    <FCSH5>
                      {state === 3 ? (
                        <FCSA3G href={"#"} onClick={() => onClick(3)}>
                          나만의 상품
                        </FCSA3G>
                      ) : (
                        <FCSA3 href={"#"} onClick={() => onClick(3)}>
                          나만의 상품
                        </FCSA3>
                      )}
                    </FCSH5>
                  </FCSDt3>

                  {/*각 테이블*/}
                  {obj[state]}
                </FCSDl>
              </div>
            </FCSection2>
          </FCBox>
        </FContentsAllBox>
      </FBox>

      <Footer />
    </AllBox>
  );
};

export default Favorite;
