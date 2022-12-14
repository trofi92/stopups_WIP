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
      console.log(error);
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
          console.log("order Item ===>", res.data.orderedItemsList);
          setMenu(res.data.orderedItemsList);
        });
    } catch (error) {
      console.log(error);
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
      console.log(error);
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
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("payment data===>", paymentData);

  console.log("cart===>", cart);
  console.log("user===>", user);

  const event = async () => {
    // for (let i = 0; i < menu.length; i++) {
    await axios
      .get(`${API}&Category=??????&Name=&ProductId=`)
      .then((res) => {
        console.log("aaaaaaaa=>", res.data);
        setImg(res.data);
      });
    // }
  };

  useEffect(() => {
    event();
    orderedDataRequest();
    paymentsRequest();
    dispatch(clearCart());
    // orderedItemsRequest();
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

  // api?????? ????????? ??????
  const [img, setImg] = useState([]);

  console.log("menu====>", menu);
  console.log("menu====>", menu.length);
  console.log("???=>", img);

  return (
    // ?????? ??????
    <styled_AB.AllBox>
      <Header />

      <styled_Success.SBox>
        {/*?????? ??????*/}
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
          {/*?????? ??? ?????? ???*/}
          <SuccessSetTimeOut />

          {/*?????? ??????*/}
          <styled_Success.SSection>
            <div>
              {/*()?????? ????????? ?????? ??????*/}
              <styled_Success.SSTitle>
                ???????????? ({menu.length})
              </styled_Success.SSTitle>
            </div>
            {/*?????? => ?????? // ?????? X => ?????? ?????? // ?????? => ?????? ??????*/}
            {/*<styled_Success.SSTakeOut>*/}
            {/*  ?????? ?????? : ?????? ??????*/}
            {/*</styled_Success.SSTakeOut>*/}
            {/*?????? ????????? ????????? map ??????*/}
            <styled_Payment.PSMenuBox>
              {menu.map((item) => {
                console.log(item);
                return (
                  <styled_Payment.PSMBox key={item.Product.p_id}>
                    {/*?????????*/}
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
                    {/*?????? ??????*/}
                    <styled_Payment.PSMBText>
                      <styled_C.CFMTitle>
                        {item.Product.name}
                      </styled_C.CFMTitle>
                      {item.category === "?????????" ||
                      item.category === "?????????" ||
                      item.category === "????????????" ||
                      item.category === "?????????" ||
                      item.category === "????????? ??????" ? (
                        <styled_C.CFMOption>
                          <styled_C.CFMIceHot>
                            {item.cookType
                              ? item.cookType === "Desert"
                                ? "???????????? ??????"
                                : "????????? ??????"
                              : "?????? ?????? ??????"}
                          </styled_C.CFMIceHot>
                          <styled_C.CFMSize>
                            {item.eatType === "takeout"
                              ? "????????? ??????"
                              : "??????"}
                          </styled_C.CFMSize>
                          <styled_C.CFMCup>
                            {item.quantity}???
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
                              ? "????????? ???"
                              : "????????? ???"}
                          </styled_C.CFMSize>
                          <styled_C.CFMCup>
                            {item.quantity}???
                          </styled_C.CFMCup>
                        </styled_C.CFMOption>
                      )}
                      {/*??????*/}
                    </styled_Payment.PSMBText>
                  </styled_Payment.PSMBox>
                );
              })}
              {/*<styled_Payment.PSMBox>*/}
              {/*  /!*?????????*!/*/}
              {/*  <styled_Payment.PSMBImg />*/}
              {/*  /!*?????? ??????*!/*/}
              {/*  <styled_Payment.PSMBText>*/}
              {/*    <styled_C.CFMTitle>?????? ??????</styled_C.CFMTitle>*/}
              {/*    /!*??????*!/*/}
              {/*    <styled_C.CFMOption>*/}
              {/*      <styled_C.CFMIceHot>ICED</styled_C.CFMIceHot>*/}
              {/*      <styled_C.CFMSize>?????????</styled_C.CFMSize>*/}
              {/*      <styled_C.CFMSize>????????? ???</styled_C.CFMSize>*/}
              {/*      <styled_C.CFMCup>???</styled_C.CFMCup>*/}
              {/*    </styled_C.CFMOption>*/}
              {/*  </styled_Payment.PSMBText>*/}
              {/*</styled_Payment.PSMBox>*/}
            </styled_Payment.PSMenuBox>
          </styled_Success.SSection>
        </styled_F.FContentsAllBox>

        {/*<div>success</div>*/}
        {/*<Link to="/">*/}
        {/*  <button>to main</button>*/}
        {/*</Link>*/}
      </styled_Success.SBox>

      <Footer />
    </styled_AB.AllBox>
  );
};
