import { useState, useLayoutEffect } from "react";
import logo from "../../image/Header/logo.png";
import userLogo from "../../image/Header/headerUser.png";
import spotLogo from "../../image/Header/headerSpot.png";
import userCategory from "../../image/Header/headerCategory.png";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal/HeaderModal";
import * as styled_H from "../../styled/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setModalOpen((prev) => !prev);
  }, [pathname]);

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const user = useSelector((state) => state.user);

  return (
    <styled_H.HB>
      <styled_H.HPosition>
        <Link to={"/"}>
          <styled_H.HLogoBox>
            <styled_H.HLogo src={logo} alt={"logo"} />
          </styled_H.HLogoBox>
        </Link>

        <styled_H.HNPosition>
          <styled_H.HNUl>
            <styled_H.HNLi></styled_H.HNLi>
            <styled_H.HNLi>
              {user.email === "" ? (
                <Link to={"/login"}>
                  <styled_H.HIconUser src={userLogo} alt={"userLogo"} />
                </Link>
              ) : (
                <Link to={"/myStopUps"}>
                  <styled_H.HIconUser src={userLogo} alt={"userLogo"} />
                </Link>
              )}
            </styled_H.HNLi>
            <styled_H.HNLi>
              <Link to={"/map"}>
                <styled_H.HIconSpot src={spotLogo} alt={"spotLogo"} />
              </Link>
            </styled_H.HNLi>
            <styled_H.HNLi>
              <styled_H.HIconCategory
                src={userCategory}
                alt={"userCategory"}
                onClick={modalClose}
              />
            </styled_H.HNLi>
          </styled_H.HNUl>
        </styled_H.HNPosition>
      </styled_H.HPosition>
      {modalOpen && <HeaderModal modalClose={modalClose} />}
    </styled_H.HB>
  );
};

export default Header;
