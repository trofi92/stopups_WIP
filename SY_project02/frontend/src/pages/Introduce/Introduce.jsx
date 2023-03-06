import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import * as styled_F from "../../styled/Favorite";
import * as styled_Intro from "../../styled/Introduce";
import IntroHeaderTitle from "../../image/Introduce/IntroHeaderTitle.png";

const Introduce = () => {
  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Intro.IBox>
        {/*헤더*/}
        <styled_F.FHeader>
          <styled_Intro.IBTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img
                  src={IntroHeaderTitle}
                  alt={"IntroHeaderTitle"}
                />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_Intro.IBTitle>
        </styled_F.FHeader>

        <styled_F.FContentsAllBox>
          <styled_F.FCBox>
            <div></div>
          </styled_F.FCBox>
        </styled_F.FContentsAllBox>
      </styled_Intro.IBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default Introduce;
