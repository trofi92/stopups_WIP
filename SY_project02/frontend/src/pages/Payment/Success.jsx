import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { SERVER_URL } from "../../utils/urls";
import Header from "../../components/Header/Header";
import * as styled_AB from "../../styled/AllBox";
import * as styled_Success from "../../styled/Payment/Success";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import * as styled_F from "../../styled/Favorite";
import SuccessTitle from "../../image/Payment/SuccessTitle.png";
import * as styled_Payment from "../../styled/Payment/Payment";
import * as styled_C from "../../styled/Cart";
import { Footer } from "../../components/Footer/Footer";
import { SuccessSetTimeOut } from "./SuccessSetTimeOut";
import { API } from "../../utils/urls";

export const Success = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [menu, setMenu] = useState([]);

  const paymentsDataRequest = async (res) => {
    try {
      await axios.post(
        `${SERVER_URL}/payment`,
        {
          res,
          email: user?.email,
        },
        { withCredentials: true }
      );
    } catch (error) {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const orderedItemsRequest = async (data) => {
    try {
      await axios
        .post(
          `${SERVER_URL}/order/orderedItems`,
          { orderId: data },
          { withCredentials: true }
        )
        .then((res) => {
          setMenu(res.data.orderedItemsList);
        });
    } catch (error) {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const orderedDataRequest = async () => {
    try {
      await axios
        .post(
          `${SERVER_URL}/order`,
          {
            email: user?.email,
            address: user?.location?.content,
            total: cart?.total,
            cart: cart,
          },
          { withCredentials: true }
        )
        .then((res) => orderedItemsRequest(res?.data?.orderId));
    } catch (error) {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const paymentsRequest = async () => {
    try {
      await axios
        .get(
          `${SERVER_URL}/payment/success?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}`,
          { withCredentials: true }
        )
        .then((res) => {
          paymentsDataRequest(res);
        });
    } catch (error) {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const event = async () => {
    await axios
      .get(`${API}&Category=분류&Name=&ProductId=`)
      .then((res) => {
        setImg(res.data);
      });
  };

  useEffect(() => {
    event();
    orderedDataRequest();
    paymentsRequest();
    dispatch(clearCart());
    return;
  }, []);

  let orderId = new URL(window.location.href).searchParams.get(
    "orderId"
  );
  let paymentKey = new URL(window.location.href).searchParams.get(
    "paymentKey"
  );
  let amount = new URL(window.location.href).searchParams.get(
    "amount"
  );

  const [img, setImg] = useState([]);
  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Success.SBox>
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img src={SuccessTitle} alt={"SuccessTitle"} />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_F.FHTitle>
        </styled_F.FHeader>

        <styled_F.FContentsAllBox>
          <SuccessSetTimeOut />

          <styled_Success.SSection>
            <div>
              <styled_Success.SSTitle>
                주문내역 ({menu.length})
              </styled_Success.SSTitle>
            </div>

            <styled_Payment.PSMenuBox>
              {menu.map((item) => {
                return (
                  <styled_Payment.PSMBox key={item.Product.p_id}>
                    {img.map((img, idx) => {
                      if (img.ProductId === item.Product.p_id) {
                        return (
                          <styled_Payment.PSMBImg
                            src={img.Image}
                            key={idx}
                          />
                        );
                      }
                    })}
                    <styled_Payment.PSMBText>
                      <styled_C.CFMTitle>
                        {item.Product.name}
                      </styled_C.CFMTitle>
                      {item.category === "브레드" ||
                      item.category === "케이크" ||
                      item.category === "샌드위치" ||
                      item.category === "샐러드" ||
                      item.category === "따뜻한 푸드" ? (
                        <styled_C.CFMOption>
                          <styled_C.CFMIceHot>
                            {item.cookType
                              ? item.cookType === "Desert"
                                ? "따뜻하게 데움"
                                : "데우지 않음"
                              : "워밍 옵션 없음"}
                          </styled_C.CFMIceHot>
                          <styled_C.CFMSize>
                            {item.eatType === "takeout"
                              ? "테이크 아웃"
                              : "매장"}
                          </styled_C.CFMSize>
                          <styled_C.CFMCup>
                            {item.quantity}개
                          </styled_C.CFMCup>
                        </styled_C.CFMOption>
                      ) : (
                        <styled_C.CFMOption>
                          <styled_C.CFMIceHot>
                            {item.drinkType}
                          </styled_C.CFMIceHot>
                          <styled_C.CFMSize>
                            {item.size}
                          </styled_C.CFMSize>
                          <styled_C.CFMSize>
                            {item.eatType === "takeout"
                              ? "일회용 컵"
                              : "매장용 컵"}
                          </styled_C.CFMSize>
                          <styled_C.CFMCup>
                            {item.quantity}개
                          </styled_C.CFMCup>
                        </styled_C.CFMOption>
                      )}
                    </styled_Payment.PSMBText>
                  </styled_Payment.PSMBox>
                );
              })}
            </styled_Payment.PSMenuBox>
          </styled_Success.SSection>
        </styled_F.FContentsAllBox>
      </styled_Success.SBox>

      <Footer />
    </styled_AB.AllBox>
  );
};
