import * as styled_C from "../../styled/Cart";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  calculateTotals,
  increase,
  decrease,
} from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../utils/urls";

export const CNoDF = () => {
  const [checkItems, setCheckItems] = useState([]);
  const [click, setClick] = useState(false);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      cart.cartItems.forEach((el) =>
        idArray.push({
          id: el.id,
          size: el.size,
          cooked: el.cooked,
          ice: el.ice,
        })
      );
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id, size, cooked, ice) => {
    if (checked) {
      setCheckItems((prev) => [...prev, { id, size, cooked, ice }]);
    } else {
      setCheckItems(
        checkItems.filter(
          (el) =>
            !(
              el.id === id &&
              el.size === size &&
              el.cooked === cooked &&
              el.ice === ice
            )
        )
      );
    }
  };

  const onClickAll = () => {
    setClick(!click);
    if (!click) {
      const idArray = [];
      cart.cartItems.forEach((el) =>
        idArray.push({
          id: el.id,
          size: el.size,
          cooked: el.cooked,
          ice: el.ice,
        })
      );
      setCheckItems(idArray);
    } else if (click) {
      setCheckItems([]);
    }
  };

  const handleClear = () => {
    dispatch(clearCart());
    setCheckItems([]);
  };

  const handleRemove = () => {
    if (checkItems.length === 0) {
      alert("삭제 할 음료를 선택하세요.");
    } else {
      dispatch(removeFromCart(checkItems));
      setCheckItems([]);
    }
  };

  useEffect(() => {
    const handleTotalCalculate = (itemIds) => {
      dispatch(calculateTotals(itemIds));
    };

    handleTotalCalculate(checkItems);
  }, [checkItems, cart]);

  const onClick = () => {
    if (cart.totalAmount > 20) {
      alert("총 주문 가능 수량은 20개 입니다.");
    } else if (cart.totalAmount <= 20) {
      if (user.location === "") {
        alert("주문하실 매장을 선택해 주세요.");
        navigate("/selectMap");
      } else {
        alert("결제 페이지로 이동합니다.");
        navigate("/payment");
      }
    }
  };

  const [img, setImg] = useState([]);

  useEffect(() => {
    const event = async () => {
      await axios
        .get(`${API}&Category=분류&Name=&ProductId=`)
        .then((res) => {
          setImg(res.data);
        });
    };
    event();
  }, []);

  return (
    <>
      {cart.cartItems.length === 0 ? (
        <styled_C.GBoxs>
          <styled_C.GBox>
            <styled_C.GBTitle>
              음료/푸드 장바구니가 비어있습니다.
            </styled_C.GBTitle>
            <styled_C.GBText>
              원하는 음료/푸드를 장바구니에 담고
              <br />
              한번에 주문해 보세요.
            </styled_C.GBText>
            <Link
              to={"/menu/전체 음료 보기"}
              style={{ textDecoration: "none" }}
            >
              <styled_C.GBButton>
                음료/푸드 담으러 가기
              </styled_C.GBButton>
            </Link>
          </styled_C.GBox>
          <styled_C.GBImg />
        </styled_C.GBoxs>
      ) : (
        <styled_C.CFBoxs>
          <styled_C.CFBox>
            <styled_C.CBTitle>주문 메뉴</styled_C.CBTitle>
            <styled_C.CBTSpan>
              총 주문 가능 수량{" "}
              <styled_C.CBTSpanColor>20</styled_C.CBTSpanColor>개
            </styled_C.CBTSpan>
          </styled_C.CFBox>
          <styled_C.CFAllCheckBox>
            <styled_C.CFAllCheck>
              <styled_C.CFACInput
                type={"checkbox"}
                title={"전체 선택"}
                onChange={(e) => {
                  handleAllCheck(e.target.checked);
                }}
                checked={checkItems.length === cart.cartItems.length}
              />
            </styled_C.CFAllCheck>
            <styled_C.CFAllCheckText onClick={onClickAll}>
              전체선택
            </styled_C.CFAllCheckText>
            <styled_C.CFCDelete onClick={handleRemove}>
              선택삭제
            </styled_C.CFCDelete>
            <styled_C.CFCAllDelete onClick={handleClear}>
              전체삭제
            </styled_C.CFCAllDelete>
          </styled_C.CFAllCheckBox>

          {cart.cartItems.map((cart) => {
            return (
              <styled_C.CFMenuBox
                key={`${cart.id}${cart.size}${cart.cooked}${cart.ice}`}
              >
                <styled_C.CMCheck>
                  <styled_C.CMCInput
                    type={"checkbox"}
                    title={"개별 선택"}
                    onChange={(e) =>
                      handleSingleCheck(
                        e.target.checked,
                        cart.id,
                        cart.size,
                        cart.cooked,
                        cart.ice
                      )
                    }
                    checked={checkItems.some(
                      (item) =>
                        item.id === cart.id &&
                        item.size === cart.size &&
                        item.cooked === cart.cooked &&
                        item.ice === cart.ice
                    )}
                  />
                </styled_C.CMCheck>
                <styled_C.CMBox>
                  {img.map((img, idx) => {
                    if (img.ProductId === cart.id) {
                      return (
                        <styled_C.CFMImg src={img.Image} key={idx} />
                      );
                    }
                  })}
                  <styled_C.CFMText>
                    <styled_C.CFMTitle>{cart.name}</styled_C.CFMTitle>
                    {cart.category === "브레드" ||
                    cart.category === "케이크" ||
                    cart.category === "샌드위치" ||
                    cart.category === "샐러드" ||
                    cart.category === "따뜻한 푸드" ? (
                      <styled_C.CFMOption>
                        <styled_C.CFMIceHot>
                          {cart.cooked
                            ? cart.cooked === "Desert"
                              ? "따뜻하게 데움"
                              : "데우지 않음"
                            : "워밍 옵션 없음"}
                        </styled_C.CFMIceHot>
                        <styled_C.CFMCup>
                          {cart.takeout === "takeout"
                            ? "테이크 아웃"
                            : "매장"}
                        </styled_C.CFMCup>
                        <styled_C.CFMMoney>
                          {cart.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </styled_C.CFMMoney>
                      </styled_C.CFMOption>
                    ) : (
                      <styled_C.CFMOption>
                        <styled_C.CFMIceHot>
                          {cart.ice}
                        </styled_C.CFMIceHot>
                        <styled_C.CFMSize>
                          {cart.size}
                        </styled_C.CFMSize>
                        <styled_C.CFMCup>
                          {cart.takeout === "takeout"
                            ? "일회용 컵"
                            : "매장용 컵"}
                        </styled_C.CFMCup>
                        <styled_C.CFMMoney>
                          {cart.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </styled_C.CFMMoney>
                      </styled_C.CFMOption>
                    )}
                    <styled_C.CFMCountBox>
                      <styled_C.CFMCMinus
                        onClick={() => {
                          if (cart.quantity <= 1) {
                            alert(
                              "최소 주문 가능 수량은 1개 입니다."
                            );
                          } else {
                            dispatch(
                              decrease({
                                id: cart.id,
                                size: cart.size,
                                cooked: cart.cooked,
                                ice: cart.ice,
                                quantity: cart.quantity,
                              })
                            );
                          }
                        }}
                      >
                        <AiOutlineMinusCircle
                          style={{ fontSize: "30px" }}
                        />
                      </styled_C.CFMCMinus>
                      <styled_C.CFMCount>
                        {cart.quantity}
                      </styled_C.CFMCount>
                      <styled_C.CFMCPlus
                        onClick={() => {
                          if (cart.quantity >= 20) {
                            alert("총 주문 가능 수량은 20개 입니다.");
                          } else {
                            dispatch(
                              increase({
                                id: cart.id,
                                size: cart.size,
                                cooked: cart.cooked,
                                ice: cart.ice,
                                quantity: cart.quantity,
                              })
                            );
                          }
                        }}
                      >
                        <AiOutlinePlusCircle
                          style={{ fontSize: "30px" }}
                        />
                      </styled_C.CFMCPlus>
                      <styled_C.CFMTotalMoney>
                        {(cart.price * cart.quantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </styled_C.CFMTotalMoney>
                    </styled_C.CFMCountBox>
                  </styled_C.CFMText>
                </styled_C.CMBox>
              </styled_C.CFMenuBox>
            );
          })}

          <styled_C.CFButtonBox>
            <styled_C.CFBAmount>
              총
              <styled_C.CFBAmountColor>
                {checkItems.length === 0 ? 0 : cart.totalAmount}
              </styled_C.CFBAmountColor>
              개 / 20개
            </styled_C.CFBAmount>
            <styled_C.CFBTotal>
              {checkItems.length === 0
                ? 0
                : cart.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </styled_C.CFBTotal>
          </styled_C.CFButtonBox>
          {checkItems.length === 0 ? (
            <styled_C.CFButtonNo>주문하기</styled_C.CFButtonNo>
          ) : (
            <styled_C.CFButton onClick={onClick}>
              주문하기
            </styled_C.CFButton>
          )}
        </styled_C.CFBoxs>
      )}
    </>
  );
};
