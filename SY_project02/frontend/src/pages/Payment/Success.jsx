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
import {SuccessSetTimeOut} from "./SuccessSetTimeOut";
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
    for (let i = 0; i < menu.length; i++) {
      await axios
          .get(`${API}&Category=분류&Name=&ProductId=`)
          .then((res) => {
            console.log("aaaaaaaa=>",res.data)
            setImg(res.data);
          });
    }
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

  // api에서 받아온 메뉴
  const [img, setImg] = useState([]);


  console.log("menu====>", menu)
  console.log("menu====>", menu.length);
  console.log("에=>", img)

  return (
    // 결제 성공
    <styled_AB.AllBox>
      <Header />

      <styled_Success.SBox>
        {/*성공 헤더*/}
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
          {/*매장 및 준비 중*/}
          <SuccessSetTimeOut/>

          {/*주문 내역*/}
          <styled_Success.SSection>
            <div>
              {/*()안에 주문한 메뉴 갯수*/}
              <styled_Success.SSTitle>
                주문내역 ({menu.length})
              </styled_Success.SSTitle>
            </div>
            {/*포장 => 포장 // 포장 X => 포장 안함 // 둘다 => 부분 포장*/}
            {/*<styled_Success.SSTakeOut>*/}
            {/*  포장 옵션 : 포장 안함*/}
            {/*</styled_Success.SSTakeOut>*/}
            {/*결제 완료한 메뉴들 map 사용*/}
            <styled_Payment.PSMenuBox>
              {menu.map((item) => {
                console.log(item)
                return (
                    <styled_Payment.PSMBox key={item.Product.p_id}>
                      {/*이미지*/}
                      {img.map((img, idx) => {
                        if (img.ProductId === item.Product.p_id) {
                          return <styled_Payment.PSMBImg src={img.Image} key={idx}/>
                        }
                      })}
                      <styled_Payment.PSMBImg/>
                      {/*메뉴 이름*/}
                      <styled_Payment.PSMBText>
                        <styled_C.CFMTitle>{item.Product.name}</styled_C.CFMTitle>
                        {item.category === "브레드" || item.category === "케이크" || item.category === "샌드위치" || item.category === "샐러드" || item.category === "따뜻한 푸드" ? (
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
                              <styled_C.CFMCup>{item.quantity}개</styled_C.CFMCup>
                            </styled_C.CFMOption>
                        ) : (
                            <styled_C.CFMOption>
                              <styled_C.CFMIceHot>{item.drinkType}</styled_C.CFMIceHot>
                              <styled_C.CFMSize>{item.size}</styled_C.CFMSize>
                              <styled_C.CFMSize>
                                {item.eatType === "takeout"
                                    ? "일회용 컵"
                                    : "매장용 컵"}
                              </styled_C.CFMSize>
                              <styled_C.CFMCup>{item.quantity}개</styled_C.CFMCup>
                            </styled_C.CFMOption>
                        )}
                        {/*옵션*/}
                      </styled_Payment.PSMBText>
                    </styled_Payment.PSMBox>
                )
              })}
              {/*<styled_Payment.PSMBox>*/}
              {/*  /!*이미지*!/*/}
              {/*  <styled_Payment.PSMBImg />*/}
              {/*  /!*메뉴 이름*!/*/}
              {/*  <styled_Payment.PSMBText>*/}
              {/*    <styled_C.CFMTitle>메뉴 이름</styled_C.CFMTitle>*/}
              {/*    /!*옵션*!/*/}
              {/*    <styled_C.CFMOption>*/}
              {/*      <styled_C.CFMIceHot>ICED</styled_C.CFMIceHot>*/}
              {/*      <styled_C.CFMSize>사이즈</styled_C.CFMSize>*/}
              {/*      <styled_C.CFMSize>일회용 컵</styled_C.CFMSize>*/}
              {/*      <styled_C.CFMCup>양</styled_C.CFMCup>*/}
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
