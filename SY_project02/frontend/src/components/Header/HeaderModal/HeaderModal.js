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
  HMSIP,
  Nav,
  NLiFirstTitle,
  NLiTitle,
  NLiTitleP,
  NUl,
} from "../../../styled/HeaderModal";
import { useRef, useState } from "react";
import { HMTButton } from "../../../styled/Button";
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // 여기 값 /search로 보내주기
  const onSearchSubmit = () => {
    if (search === "") {
      alert("검색어를 입력하세요.");
      searchRef.current.focus();
    } else {
      searchRef.current.focus();
      navigate("/search");
    }
  };

  return (
    <HM>
      {/*모달 뒷배경*/}
      <HMBg />
      {/*모달 전체 박스*/}
      <HMBox>
        <HMBInner>
          {/*닫기 버튼*/}
          <HMBIAside>
            <HMBIAsideP onClick={modalClose} />
          </HMBIAside>
          {/*검색*/}
          {/*공백일 경우 alert(검색어를 입력하세요.)*/}
          {/*공백이 아닐 경우 값과 함께 /serach 페이지로 이동*/}
          <HMSearch>
            <HMSInner>
              <HMSIInput
                type={"text"}
                onChange={handleSearch}
                ref={searchRef}
                search={search}
              />
              <HMSIP onClick={onSearchSubmit}>Search</HMSIP>
            </HMSInner>
          </HMSearch>
          {/*Nav*/}
          <Nav>
            <NUl>
              <NLiFirstTitle>
                <NLiTitleP onClick={myStopUpsToggle}>
                  My StopUps
                  <HMTButton />
                </NLiTitleP>
              </NLiFirstTitle>
              {openMyStopUps === true ? <MyStopUps /> : null}
              <NLiTitle onClick={coffeeToggle}>
                <NLiTitleP>
                  COFFEE
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openCoffee === true ? <Coffee /> : null}
              <NLiTitle onClick={menuToggle}>
                <NLiTitleP>
                  MENU
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openMenu === true ? <Menu /> : null}
              <NLiTitle onClick={storeToggle}>
                <NLiTitleP>
                  STORE
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openStore === true ? <Store /> : null}
              <NLiTitle onClick={responsibilityToggle}>
                <NLiTitleP>
                  RESPONSIBILITY
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openResponsibility === true ? (
                <Responsibility />
              ) : null}
              <NLiTitle onClick={stopUpsRewardsToggle}>
                <NLiTitleP>
                  StopUps Rewards
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openStopUpsRewards === true ? (
                <StopUpsRewards />
              ) : null}
              <NLiTitle onClick={corporateSalesToggle}>
                <NLiTitleP>
                  CORPORATE SALES
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openCorporateSales === true ? (
                <CorporateSales />
              ) : null}
              <NLiTitle onClick={whatsNewToggle}>
                <NLiTitleP>
                  WHAT'S NEW
                  <HMTButton />
                </NLiTitleP>
              </NLiTitle>
              {openWhatsNew === true ? <WhatsNew /> : null}
            </NUl>
          </Nav>
        </HMBInner>
      </HMBox>
    </HM>
  );
};

export default HeaderModal;
