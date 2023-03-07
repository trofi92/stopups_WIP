import Header from "../../components/Header/Header";
import * as styled_AB from "../../styled/AllBox";
import { LineNotice } from "../../components/LineNotice/LineNotice";
import { Footer } from "../../components/Footer/Footer";
import { MSeason } from "./MSeason";
import { MSReword } from "./MSReword";
import { MSPromotionBanner } from "./MSPromotionBanner";
import { MRMagazine } from "./MRMagazine";
import { MainStore } from "./MainStore";
import { MainReserve } from "./MainReserve";

export const Main = () => {
  return (
    <styled_AB.AllBox>
      <Header />

      <MSeason />

      <LineNotice />

      <MSReword />

      <MSPromotionBanner />

      <MainReserve />

      <MRMagazine />

      <MainStore />

      <Footer />
    </styled_AB.AllBox>
  );
};
