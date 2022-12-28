import { useState, useLayoutEffect } from "react";
import logo from "../../image/Header/logo.png";
import cartLogo from "../../image/Header/headerCart.png"
import userLogo from "../../image/Header/headerUser.png";
import spotLogo from "../../image/Header/headerSpot.png";
import userCategory from "../../image/Header/headerCategory.png";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal/HeaderModal";
import * as styled_H from "../../styled/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { TestDiv, TestDiv1 } from "../../styled/Menu/Menu";
import {HIconCart, HIconCartSpan} from "../../styled/Header";
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
  const amount = useSelector((state) => state.cart.amount);
  const cartItems = useSelector((state) => state.cart.cartItems);

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

            {/*숫자 1px 정도 위로 올라가면 좋겠는데 흠*/}
            <styled_H.HNLi>
              <Link to={"/cart"}>
                {amount !== 0 && <HIconCartSpan>{amount}</HIconCartSpan>}
                <styled_H.HIconCart src={cartLogo} alt={"cartLogo"} />
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
