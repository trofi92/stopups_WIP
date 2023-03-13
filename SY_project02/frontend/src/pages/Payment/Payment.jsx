import React, { useEffect, useState } from "react";
import * as styled_AB from "../../styled/AllBox";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import * as styled_Payment from "../../styled/Payment/Payment";
import * as styled_F from "../../styled/Favorite";
import PaymentTitle from "../../image/Payment/PaymentTitle.png";
import * as styled_C from "../../styled/Cart";
import axios from "axios";
import { Footer } from "../../components/Footer/Footer";
import PaymentCard from "../../image/Payment/PaymentCard.png";
import HMButton1 from "../../image/Header/HMButton1.png";
import HMButton2 from "../../image/Header/HMButton2.png";
import PaymentCoupon from "../../image/Payment/PaymentCoupon.png";
import PaymentGift from "../../image/Payment/PaymentGift.png";
import PaymentPhone from "../../image/Payment/PaymentPhone.png";
import { decrypt } from "../../utils/crypto-front";
import { API, CLIENT_PAYMENT_URL } from "../../utils/urls";

export const Payment = () => {
  const cart = useSelector((state) => state?.cart);
  const [openCoupon, setOpenCoupon] = useState(false);
  const user = useSelector((state) => state?.user);
  const nickname = decrypt(user?.nickname);

  const clientKey = process.env.REACT_APP_CLIENT_KEY;
  const payType = {
    easy: "간편결제",
    card: "카드",
    virtual: "가상계좌",
  };
  Object.freeze(payType);

  const couponToggle = () => {
    setOpenCoupon(!openCoupon);
  };
  const onClickReady = () => {
    alert("서비스 준비중입니다.");
  };

  const tossPay = () => {
    const randomId = v4();
    loadTossPayments(clientKey).then((tossPayments) => {
      tossPayments
        .requestPayment(payType.card, {
          amount: cart.total,
          orderId: `${randomId}`,
          orderName: `StopUps`,
          customerName: `${nickname}`,
          successUrl: `${CLIENT_PAYMENT_URL}/success`,
          failUrl: `${CLIENT_PAYMENT_URL}/failed`,
          windowTarget: "iframe",
        })
        .catch(function (error) {
          if (error.code === "PAY_PROCESS_ABORTED") {
          }
        });
    });
  };

  const handleOrderClick = () => {
    tossPay();
  };

  const [img, setImg] = useState([]);

  useEffect(() => {
    const event = async () => {
      for (let i = 0; i < cart.cartItems.length; i++) {
        await axios
          .get(`${API}&Category=분류&Name=&ProductId=`)
          .then((res) => {
            setImg(res.data);
          });
      }
    };
    event();
  }, []);

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Payment.PBox>
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img src={PaymentTitle} alt={"PaymentTitle"} />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_F.FHTitle>
        </styled_F.FHeader>

        <styled_F.FContentsAllBox>
          <styled_F.FCBox>
            <styled_Payment.PSection1>
              <div>
                <styled_Payment.PSTitle1>
                  결제 수단
                </styled_Payment.PSTitle1>
                <styled_Payment.PSDiv1>
                  <styled_Payment.PSImg1
                    src={PaymentCard}
                    alt={"PaymentCard"}
                  />
                  <styled_Payment.PSSpan1>
                    신용/체크 카드
                  </styled_Payment.PSSpan1>
                </styled_Payment.PSDiv1>
              </div>
            </styled_Payment.PSection1>
            <styled_Payment.PSection4>
              <div>
                <styled_Payment.PSTitle4 onClick={couponToggle}>
                  쿠폰 및 할인
                  <styled_Payment.PSSpan4>
                    {openCoupon === true ? (
                      <styled_Payment.PSToggle src={HMButton2} />
                    ) : (
                      <styled_Payment.PSToggle src={HMButton1} />
                    )}
                  </styled_Payment.PSSpan4>
                </styled_Payment.PSTitle4>

                {openCoupon === true ? (
                  <>
                    <styled_Payment.PSDiv4 onClick={onClickReady}>
                      <styled_Payment.PSImg4
                        src={PaymentCoupon}
                        alt={"PaymentCoupon"}
                      />
                      <styled_Payment.PSDSpan4>
                        쿠폰
                      </styled_Payment.PSDSpan4>
                    </styled_Payment.PSDiv4>
                    <styled_Payment.PSDiv4 onClick={onClickReady}>
                      <styled_Payment.PSImg4
                        src={PaymentGift}
                        alt={"PaymentGift"}
                      />
                      <styled_Payment.PSDSpan4>
                        선물
                      </styled_Payment.PSDSpan4>
                    </styled_Payment.PSDiv4>
                    <styled_Payment.PSDiv4 onClick={onClickReady}>
                      <styled_Payment.PSImg4
                        src={PaymentPhone}
                        alt={"PaymentPhone"}
                      />
                      <styled_Payment.PSDSpan4>
                        통신사 제휴 할인
                      </styled_Payment.PSDSpan4>
                    </styled_Payment.PSDiv4>
                  </>
                ) : (
                  ""
                )}
              </div>
            </styled_Payment.PSection4>
            <styled_Payment.PSection>
              <div>
                <styled_Payment.PSTitle>
                  주문 내역
                </styled_Payment.PSTitle>
                {cart.cartItems.map((cart) => {
                  return (
                    <styled_Payment.PSMenuBox key={cart.id}>
                      <styled_Payment.PSMBox>
                        {img.map((img, idx) => {
                          if (img.ProductId === cart.id) {
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
                            {cart.name}
                            <styled_Payment.PSMBTSpan>
                              {cart.price
                                .toString()
                                .replace(
                                  /\B(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              원
                            </styled_Payment.PSMBTSpan>
                          </styled_C.CFMTitle>
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
                              <styled_C.CFMIceHot>
                                {cart.takeout === "takeout"
                                  ? "테이크 아웃"
                                  : "매장"}
                              </styled_C.CFMIceHot>
                              <styled_C.CFMCup>
                                {cart.quantity}개
                              </styled_C.CFMCup>
                              <styled_C.CFMMoney>
                                {(cart.price * cart.quantity)
                                  .toString()
                                  .replace(
                                    /\B(?=(\d{3})+(?!\d))/g,
                                    ","
                                  )}
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
                              <styled_C.CFMSize>
                                {cart.takeout === "takeout"
                                  ? "일회용 컵"
                                  : "매장용 컵"}
                              </styled_C.CFMSize>
                              <styled_C.CFMCup>
                                {cart.quantity}개
                              </styled_C.CFMCup>
                              <styled_C.CFMMoney>
                                {(cart.price * cart.quantity)
                                  .toString()
                                  .replace(
                                    /\B(?=(\d{3})+(?!\d))/g,
                                    ","
                                  )}
                                원
                              </styled_C.CFMMoney>
                            </styled_C.CFMOption>
                          )}
                        </styled_Payment.PSMBText>
                      </styled_Payment.PSMBox>
                    </styled_Payment.PSMenuBox>
                  );
                })}
              </div>
            </styled_Payment.PSection>
            <styled_Payment.PSection2>
              <div>
                <styled_Payment.PSPriceTitle>
                  주문 금액
                  <styled_Payment.PSPrice>
                    {cart.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </styled_Payment.PSPrice>
                </styled_Payment.PSPriceTitle>
                <styled_Payment.PSPriceTitle>
                  할인 금액
                  <styled_Payment.PSPrice>0원</styled_Payment.PSPrice>
                </styled_Payment.PSPriceTitle>
              </div>
              <styled_Payment.PSTotalPrice>
                <styled_Payment.PSTotalPriceTitle>
                  최종 결제 금액
                  <styled_Payment.PSTotalPriceSpan>
                    {cart.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </styled_Payment.PSTotalPriceSpan>
                </styled_Payment.PSTotalPriceTitle>
              </styled_Payment.PSTotalPrice>
            </styled_Payment.PSection2>
            <styled_Payment.PSection3>
              <styled_Payment.PS3Button onClick={handleOrderClick}>
                {cart.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원 결제하기
              </styled_Payment.PS3Button>
            </styled_Payment.PSection3>
          </styled_F.FCBox>
        </styled_F.FContentsAllBox>
      </styled_Payment.PBox>

      <Footer />
    </styled_AB.AllBox>
  );
};
