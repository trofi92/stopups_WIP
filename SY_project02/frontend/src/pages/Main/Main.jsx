import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import {AllBox} from "../../styled/AllBox"
import {LineNotice} from "../../components/LineNotice/LineNotice";
import {Footer} from "../../components/Footer/Footer";
import {MSeason} from "./MSeason";
import {MSReword} from "./MSReword";
import {MSPromotionBanner} from "./MSPromotionBanner";
import {MRMagazine} from "./MRMagazine";
import {MainStore} from "./MainStore";
import {MainReserve} from "./MainReserve";

export const Main = () => {

    return (
        <AllBox>
            {/*헤더*/}
            <Header/>

            {/*여름 시즌 메뉴*/}
            <MSeason/>

            {/*라인 공지 + 프로모션*/}
            <LineNotice/>

            {/*스탑업스 리워드*/}
            <MSReword/>

            {/*시즌 프로모션 배너*/}
            <MSPromotionBanner/>

            {/*메인 리저브*/}
            <MainReserve/>

            {/*리저브 매거진*/}
            <MRMagazine/>

            {/*매장 찾기*/}
            <MainStore/>

            {/*푸터*/}
            <Footer/>

            {/*테스트*/}
            <div>this is main</div>
            <Link to="/test">
                <button>test</button>
            </Link>
            <Link to="/asdf">
                <button>not found</button>
            </Link>
        </AllBox>
    );
};