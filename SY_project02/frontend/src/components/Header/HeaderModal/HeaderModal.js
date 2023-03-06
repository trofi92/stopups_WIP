import * as styled_HM from "../../../styled/HeaderModal";
import { useRef, useState } from "react";
import * as styled_BU from "../../../styled/Button";
import { MyStopUps } from "./MyStopUps/MyStopUps";
import { Coffee } from "./Coffee/Coffee";
import { Menu } from "./Menu/Menu";
import { Store } from "./Store/Store";
import { Responsibility } from "./Responsibility/Responsibility";
import { StopUpsRewards } from "./StopUpsRewards/StopUpsRewards";
import { CorporateSales } from "./CorporateSales/CorporateSales";
import { WhatsNew } from "./WhatsNew/WhatsNew";
import { useNavigate } from "react-router-dom";

const HeaderModal = ({ modalClose }) => {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const [openMyStopUps, setOpenMyStopUps] = useState(false);
  const myStopUpsToggle = () => {
    setOpenMyStopUps(!openMyStopUps);
  };

  const [openCoffee, setOpenCoffee] = useState(false);
  const coffeeToggle = () => {
    setOpenCoffee(!openCoffee);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const [openStore, setOpenStore] = useState(false);
  const storeToggle = () => {
    setOpenStore(!openStore);
  };

  const [openResponsibility, setOpenResponsibility] = useState(false);
  const responsibilityToggle = () => {
    setOpenResponsibility(!openResponsibility);
  };

  const [openStopUpsRewards, setOpenStopUpsRewards] = useState(false);
  const stopUpsRewardsToggle = () => {
    setOpenStopUpsRewards(!openStopUpsRewards);
  };

  const [openCorporateSales, setOpenCorporateSales] = useState(false);
  const corporateSalesToggle = () => {
    setOpenCorporateSales(!openCorporateSales);
  };

  const [openWhatsNew, setOpenWhatsNew] = useState(false);
  const whatsNewToggle = () => {
    setOpenWhatsNew(!openWhatsNew);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = () => {
    if (search === "") {
      alert("검색어를 입력하세요.");
      searchRef.current.focus();
    } else {
      searchRef.current.focus();
      navigate("/search", { state: search });
    }
  };

  return (
    <styled_HM.HM>
      <styled_HM.HMBg />
      <styled_HM.HMBox>
        <styled_HM.HMBInner>
          <styled_HM.HMBIAside>
            <styled_HM.HMBIAsideP onClick={modalClose} />
          </styled_HM.HMBIAside>
          <styled_HM.HMSearch>
            <styled_HM.HMSInner>
              <styled_HM.HMSIInput
                type={"text"}
                onChange={handleSearchChange}
                ref={searchRef}
                search={search}
              />
              <styled_HM.HMSIP onClick={onSearchSubmit}>
                Search
              </styled_HM.HMSIP>
            </styled_HM.HMSInner>
          </styled_HM.HMSearch>
          <styled_HM.Nav>
            <styled_HM.NUl>
              <styled_HM.NLiFirstTitle>
                <styled_HM.NLiTitleP onClick={myStopUpsToggle}>
                  My StopUps
                  {openMyStopUps ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiFirstTitle>
              {openMyStopUps === true ? <MyStopUps /> : null}
              <styled_HM.NLiTitle onClick={coffeeToggle}>
                <styled_HM.NLiTitleP>
                  COFFEE
                  {openCoffee ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openCoffee === true ? <Coffee /> : null}
              <styled_HM.NLiTitle onClick={menuToggle}>
                <styled_HM.NLiTitleP>
                  MENU
                  {openMenu ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openMenu === true ? <Menu /> : null}
              <styled_HM.NLiTitle onClick={storeToggle}>
                <styled_HM.NLiTitleP>
                  STORE
                  {openStore ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openStore === true ? <Store /> : null}
              <styled_HM.NLiTitle onClick={responsibilityToggle}>
                <styled_HM.NLiTitleP>
                  RESPONSIBILITY
                  {openResponsibility ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openResponsibility === true ? (
                <Responsibility />
              ) : null}
              <styled_HM.NLiTitle onClick={stopUpsRewardsToggle}>
                <styled_HM.NLiTitleP>
                  StopUps Rewards
                  {openStopUpsRewards ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openStopUpsRewards === true ? (
                <StopUpsRewards />
              ) : null}
              <styled_HM.NLiTitle onClick={corporateSalesToggle}>
                <styled_HM.NLiTitleP>
                  CORPORATE SALES
                  {openCorporateSales ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openCorporateSales === true ? (
                <CorporateSales />
              ) : null}
              <styled_HM.NLiTitle onClick={whatsNewToggle}>
                <styled_HM.NLiTitleP>
                  WHAT'S NEW
                  {openWhatsNew ? (
                    <styled_BU.HMTButtonClicked />
                  ) : (
                    <styled_BU.HMTButton />
                  )}
                </styled_HM.NLiTitleP>
              </styled_HM.NLiTitle>
              {openWhatsNew === true ? <WhatsNew /> : null}
            </styled_HM.NUl>
          </styled_HM.Nav>
        </styled_HM.HMBInner>
      </styled_HM.HMBox>
    </styled_HM.HM>
  );
};

export default HeaderModal;
