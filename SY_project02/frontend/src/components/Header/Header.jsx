import { useEffect, useState } from "react";
import logo from "../../image/Header/logo.png";
import userLogo from "../../image/Header/headerUser.png";
import spotLogo from "../../image/Header/headerSpot.png";
import userCategory from "../../image/Header/headerCategory.png";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal/HeaderModal";
import {
  HB,
  HPosition,
  HLogo,
  HLogoBox,
  HNPosition,
  HNUl,
  HNLi,
  HIconUser,
  HIconSpot,
  HIconCategory,
} from "../../styled/Header";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  //삼항연산자 사용해서 로그인시 링크와 아닐 시의 링크를 다르게...전부...다르게...설정...해야...하.ㅁ....
  return (
    <HB>
      <HPosition>
        <Link to={"/"}>
          <HLogoBox>
            <HLogo src={logo} alt={"logo"} />
          </HLogoBox>
        </Link>

        <HNPosition>
          <HNUl>
            <HNLi></HNLi>
            <HNLi>
              <Link to={"/login"}>
                <HIconUser src={userLogo} alt={"userLogo"} />
              </Link>
            </HNLi>
            <HNLi>
              <Link to={"/map"}>
                <HIconSpot src={spotLogo} alt={"spotLogo"} />
              </Link>
            </HNLi>
            <HNLi>
              <HIconCategory
                src={userCategory}
                alt={"userCategory"}
                onClick={modalClose}
              />
            </HNLi>
          </HNUl>
        </HNPosition>
      </HPosition>
      {modalOpen && <HeaderModal modalClose={modalClose} />}
    </HB>
  );
};

export default Header;
