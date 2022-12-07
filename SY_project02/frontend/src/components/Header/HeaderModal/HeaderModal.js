import {Link} from "react-router-dom";
import axios from "axios";
import {
    HM,
    HMBg,
    HMBIAside,
    HMBIAsideP,
    HMBInner,
    HMBox,
    HMSearch,
    HMSIInput,
    HMSInner,
    HMSIP, Nav, NLiFirstTitle, NLiTitle, NLiTitleP, NUl
} from "../../../styled/HeaderModal";
import {useState} from "react";
import {HMTButton} from "../../../styled/Button";
import {MyStopUps} from "./MyStopUps/MyStopUps";
import {Coffee} from "./Coffee/Coffee";
import {Menu} from "./Menu/Menu";
import {Store} from "./Store/Store";
import {Responsibility} from "./Responsibility/Responsibility";
import {StopUpsRewards} from "./StopUpsRewards/StopUpsRewards";
import {CorporateSales} from "./CorporateSales/CorporateSales";
import {WhatsNew} from "./WhatsNew/WhatsNew";

const HeaderModal = ({modalClose}) => {

    const [openMyStopUps, setOpenMyStopUps] = useState(false);
    const myStopUpsToggle = () => {
        setOpenMyStopUps(!openMyStopUps);
    }

    const [openCoffee, setOpenCoffee] = useState(false);
    const coffeeToggle = () => {
        setOpenCoffee(!openCoffee);
    }

    const [openMenu, setOpenMenu] = useState(false);
    const menuToggle = () => {
        setOpenMenu(!openMenu);
    }

    const [openStore, setOpenStore] = useState(false);
    const storeToggle = () => {
        setOpenStore(!openStore);
    }

    const [openResponsibility, setOpenResponsibility] = useState(false);
    const responsibilityToggle = () => {
        setOpenResponsibility(!openResponsibility);
    }

    const [openStopUpsRewards, setOpenStopUpsRewards] = useState(false);
    const stopUpsRewardsToggle = () => {
        setOpenStopUpsRewards(!openStopUpsRewards);
    }

    const [openCorporateSales, setOpenCorporateSales] = useState(false);
    const corporateSalesToggle = () => {
        setOpenCorporateSales(!openCorporateSales);
    }

    const [openWhatsNew, setOpenWhatsNew] = useState(false);
    const whatsNewToggle = () => {
        setOpenWhatsNew(!openWhatsNew);
    }

    const onLogoutHandler = () => {
        axios.get("http://localhost:8000/", {}).then((res) => {
            console.log("로그아웃", res);
            localStorage.removeItem("email")
        })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <HM>
            {/*모달 뒷배경*/}
            <HMBg/>
            {/*모달 전체 박스*/}
            <HMBox>
                <HMBInner>
                    {/*닫기 버튼*/}
                    <HMBIAside>
                        <HMBIAsideP onClick={modalClose}/>
                    </HMBIAside>
                    {/*검색*/}
                    <HMSearch>
                        <HMSInner>
                            <HMSIInput
                                type={"text"}
                                />
                            <HMSIP>Search</HMSIP>
                        </HMSInner>
                    </HMSearch>
                    {/*Nav*/}
                    <Nav>
                        <NUl>
                            <NLiFirstTitle>
                                <NLiTitleP onClick={myStopUpsToggle}>
                                    My StopUps
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiFirstTitle>
                            {openMyStopUps === true ? <MyStopUps/> : null}
                            <NLiTitle onClick={coffeeToggle}>
                                <NLiTitleP>
                                     COFFEE
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openCoffee === true ? <Coffee/> : null}
                            <NLiTitle onClick={menuToggle}>
                                <NLiTitleP>
                                    MENU
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openMenu === true ? <Menu/> : null}
                            <NLiTitle onClick={storeToggle}>
                                <NLiTitleP>
                                    STORE
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openStore === true ? <Store/> : null}
                            <NLiTitle onClick={responsibilityToggle}>
                                <NLiTitleP>
                                    RESPONSIBILITY
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openResponsibility === true ? <Responsibility/> : null}
                            <NLiTitle onClick={stopUpsRewardsToggle}>
                                <NLiTitleP>
                                    StopUps Rewards
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openStopUpsRewards === true ? <StopUpsRewards/> : null}
                            <NLiTitle onClick={corporateSalesToggle}>
                                <NLiTitleP>
                                    CORPORATE SALES
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openCorporateSales === true ? <CorporateSales/> : null}
                            <NLiTitle onClick={whatsNewToggle}>
                                <NLiTitleP>
                                    WHAT'S NEW
                                    <HMTButton/>
                                </NLiTitleP>
                            </NLiTitle>
                            {openWhatsNew === true ? <WhatsNew/> : null}
                        </NUl>
                    </Nav>
                </HMBInner>
            </HMBox>
        </HM>
    );
};

export default HeaderModal;