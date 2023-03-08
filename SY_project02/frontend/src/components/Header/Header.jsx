import { useState, useLayoutEffect } from "react";
// import logo from "../../image/Header/logo.png";
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

  return (
    <>
      <styled_H.HB>
        <styled_H.HPosition>
          {/* <Link to={"/"}>
            <styled_H.HLogoBox>
              <styled_H.HLogo src={logo} alt={"logo"} />
            </styled_H.HLogoBox>
          </Link> */}
          <styled_H.HNPosition>
            <styled_H.HNUl>
              <div
                style={{
                  display: "inline-block",
                  width: "560px",
                  margin: "10px 0 0 -790px",
                }}
              >
                해당 페이지는 학습목적으로 제작된 임시페이지이며,
                사용한 이미지와 상품 및 지적재산권에 대한 모든 권리는
                "주식회사 에스씨케이컴퍼니"에 있습니다.
              </div>
              <styled_H.HNLi></styled_H.HNLi>
              <styled_H.HNLi>
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
                  <styled_H.HIconSpot
                    src={spotLogo}
                    alt={"spotLogo"}
                  />
                </Link>
              </styled_H.HNLi>

              <styled_H.HNLi>
                <Link to={"/cart"}>
                  {amount !== 0 && (
                    <styled_H.HIconCartSpan>
                      {amount}
                    </styled_H.HIconCartSpan>
                  )}
                  <styled_H.HIconCart
                    src={cartLogo}
                    alt={"cartLogo"}
                  />
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
    </>
  );
};

export default Header;
