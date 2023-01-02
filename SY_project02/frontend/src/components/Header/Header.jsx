import { useState, useLayoutEffect } from "react";
import logo from "../../image/Header/logo.png";
import cartLogo from "../../image/Header/headerCart.png";
import userLogo from "../../image/Header/headerUser.png";
import spotLogo from "../../image/Header/headerSpot.png";
import userCategory from "../../image/Header/headerCategory.png";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal/HeaderModal";
import * as styled_H from "../../styled/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Header = () => {
  // 모달 여닫기 true, false 값 저장용
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
              {/*로그인 여부에 따라 클릭 시 이동 페이지 다르게*/}
              {user.email === "" ? (
                <Link to={"/login"}>
                  <styled_H.HIconUser
                    src={userLogo}
                    alt={"userLogo"}
                  />
                </Link>
              ) : (
                <Link to={"/myStopUps"}>
                  <styled_H.HIconUser
                    src={userLogo}
                    alt={"userLogo"}
                  />
                </Link>
              )}
            </styled_H.HNLi>

            <styled_H.HNLi>
              <Link to={"/map"}>
                <styled_H.HIconSpot src={spotLogo} alt={"spotLogo"} />
              </Link>
            </styled_H.HNLi>

            {/*숫자 1px 정도 위로 올라가면 좋겠는데 흠*/}
            {/*장바구니 들어가면 숫자가 사라짐 원래 이렇게 만드신거면 놔두고 아니면 수정*/}
            <styled_H.HNLi>
              <Link to={"/cart"}>
                {amount !== 0 && (
                  <styled_H.HIconCartSpan>
                    {amount}
                  </styled_H.HIconCartSpan>
                )}
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
