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
import { decrypt } from "../../util/crypto-front";
import { API } from "../../util/urls";

export const Payment = () => {
  // 주문하기 클릭 시 선택된 제품만 리덕스에 저장
  const cart = useSelector((state) => state.cart);
  // 쿠폰 및 할인 투글용
  const [openCoupon, setOpenCoupon] = useState(false);
  // 구매자 이름 = 유저 닉네임
  const user = useSelector((state) => state.user);
  const nickname = decrypt(user.nickname);

  const clientKey = process.env.REACT_APP_CLIENT_KEY;
  // payType=> 변수=> ENUM,혹은 배열로 결제 타입을 저장
  const payType = {
    easy: "간편결제",
    card: "카드",
    virtual: "가상계좌",
  };
  Object.freeze(payType);
  //불변성 부여

  // 쿠폰 및 할인 투글 버튼
  const couponToggle = () => {
    setOpenCoupon(!openCoupon);
  };

  // 쿠폰 클릭 시 alert 호출
  const onClickReady = () => {
    alert("서비스 준비중입니다.");
  };

  // 결제 요청 이벤트 발생시 호출
  const tossPay = () => {
    //orderId가 필요해서 만든 랜덤 아이디값
    const randomId = v4();

    loadTossPayments(clientKey).then((tossPayments) => {
      // 카드 결제 메서드 실행
      tossPayments
        .requestPayment(payType.easy, {
          amount: cart.total, // 가격
          orderId: `${randomId}`, // 주문 id
          orderName: `StopUps`, // 결제 이름
          customerName: `${nickname}`, // 구매자, 구매처 이름
          successUrl: "http://localhost:3000/success", // 성공시 리다이렉트 주소
          failUrl: "http://localhost:3000/failed", // 실패시 리다이렉트 주소
          windowTarget: "iframe",
        })
        .catch(function (error) {
          if (error.code === "PAY_PROCESS_ABORTED") {
            console.error(error);
          }
        });
    });
  };

  // api에서 받아온 메뉴
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
        {/*결제 헤더*/}
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img src={PaymentTitle} alt={"PaymentTitle"} />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_F.FHTitle>
        </styled_F.FHeader>

        {/*결제 내용*/}
        <styled_F.FContentsAllBox>
          <styled_F.FCBox>
            {/*결제 수단*/}
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
            {/*쿠폰 및 할인*/}
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
            {/*주문 내역*/}
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
                          {/*음료*/}
                          {cart.category === "브레드" ||
                          cart.category === "케이크" ||
                          cart.category === "샌드위치" ||
                          cart.category === "샐러드" ||
                          cart.category === "따뜻한 푸드" ? (
                            <styled_C.CFMOption>
                              <styled_C.CFMIceHot>
                                워밍 옵션
                              </styled_C.CFMIceHot>
                              <styled_C.CFMIceHot>
                                테이크 인/아웃
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
                                ICED
                              </styled_C.CFMIceHot>
                              <styled_C.CFMSize>
                                {cart.size}
                              </styled_C.CFMSize>
                              <styled_C.CFMSize>
                                일회용 컵
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
            {/*금액*/}
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
            {/*결제하기 버튼*/}
            <styled_Payment.PSection3>
              <styled_Payment.PS3Button onClick={() => tossPay()}>
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
