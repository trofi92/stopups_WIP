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

export const Success = () => {
  // 글자
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  // 라인
  const [line2, setLien2] = useState(false);
  const [line3, setLien3] = useState(false);
  const [line4, setLien4] = useState(false);

  const [paymentData, setPaymentData] = useState();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

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
          console.log("order Item ===>", res);
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

  useEffect(() => {
    orderedDataRequest();
    paymentsRequest();
    dispatch(clearCart());
    orderedItemsRequest();
    return;
  }, []);
  console.log("payment data===>", paymentData);
  useEffect(() => {
    const random = Math.floor(Math.random() * 9001) + 1000;
    const random1 = Math.floor(Math.random() * 70001) + 30000;
    const random2 = Math.floor(Math.random() * 500001) + 500000;
    let timer1 = setTimeout(function () {
      setText1(!text1);
      setText2(!text2);
      setLien2(!line2);
      clearTimeout(timer1);
    }, random);

    let timer2 = setTimeout(function () {
      setText2(false);
      setText3(!text3);
      setLien3(!line3);
      clearTimeout(timer2);
    }, random + random1);

    let timer3 = setTimeout(function () {
      setText3(false);
      setText4(!text4);
      setLien4(!line4);
      clearTimeout(timer3);
    }, random + random1 + random2);
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
  // const [img, setImg] = useState([]);
  //
  // useEffect(() => {
  //   const event = async () => {
  //     // i < 받아온 데이터.length
  //     for (let i = 0; i < "받아온데이터".length; i++) {
  //       await axios
  //           .get(`${API}&Category=분류&Name=&ProductId=`)
  //           .then((res) => {
  //             setImg(res.data);
  //           });
  //     }
  //   };
  //   event();
  // }, []);

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
          <styled_Payment.PSection1>
            <styled_Success.STitleBox>
              {text4 === true ? (
                <styled_Success.STitle1>
                  {/*매장 이름*/}
                  <span>{user?.location?.content}</span>에서
                </styled_Success.STitle1>
              ) : (
                <styled_Success.STitle11>
                  {/*매장 이름*/}
                  <span>{user?.location?.content}</span>에서
                </styled_Success.STitle11>
              )}
              {/*n이랑 A-1의 숫자는 db의 id값 */}
              <styled_Success.STitle2>
                n번째 메뉴로
                {text4 === true
                  ? " 완성되었습니다(A-1)"
                  : " 준비 중입니다(A-1)"}
              </styled_Success.STitle2>
            </styled_Success.STitleBox>
            <styled_Success.STitle3>
              주문 승인 즉시 메뉴 준비가 시작됩니다. 완성 후, 빠르게
              픽업해 주세요.
            </styled_Success.STitle3>
            {/*결제 완료, 주문 요청, 주문 승인, 준비 완료*/}
            <styled_Success.STitle4>
              <styled_Success.STestFlex>
                {/*일정 시간 지남에 따라 바뀌게*/}
                <styled_Success.STF2>
                  {text1 === true ? (
                    <styled_Success.STest2>
                      결제 완료
                    </styled_Success.STest2>
                  ) : (
                    <styled_Success.STest>
                      결제 완료
                    </styled_Success.STest>
                  )}
                  <styled_Success.STLine2 />
                </styled_Success.STF2>
                <styled_Success.STF2>
                  {text2 === true ? (
                    <styled_Success.STest2>
                      주문 요청
                    </styled_Success.STest2>
                  ) : (
                    <styled_Success.STest>
                      주문 요청
                    </styled_Success.STest>
                  )}
                  {line2 === true ? (
                    <styled_Success.STLine2 />
                  ) : (
                    <styled_Success.STLine />
                  )}
                </styled_Success.STF2>
                <styled_Success.STF2>
                  {text3 === true ? (
                    <styled_Success.STest2>
                      주문 승인
                    </styled_Success.STest2>
                  ) : (
                    <styled_Success.STest>
                      주문 승인
                    </styled_Success.STest>
                  )}
                  {line3 === true ? (
                    <styled_Success.STLine2 />
                  ) : (
                    <styled_Success.STLine />
                  )}
                </styled_Success.STF2>
                <styled_Success.STF2>
                  {text4 === true ? (
                    <styled_Success.STest2>
                      준비 완료
                    </styled_Success.STest2>
                  ) : (
                    <styled_Success.STest>
                      준비 완료
                    </styled_Success.STest>
                  )}
                  {line4 === true ? (
                    <styled_Success.STLine2 />
                  ) : (
                    <styled_Success.STLine />
                  )}
                </styled_Success.STF2>
              </styled_Success.STestFlex>
            </styled_Success.STitle4>
          </styled_Payment.PSection1>

          {/*주문 내역*/}
          <styled_Success.SSection>
            <div>
              {/*()안에 주문한 메뉴 갯수*/}
              <styled_Success.SSTitle>
                주문내역 (1)
              </styled_Success.SSTitle>
            </div>
            {/*포장 => 포장 // 포장 X => 포장 안함 // 둘다 => 부분 포장*/}
            <styled_Success.SSTakeOut>
              포장 옵션 : 포장 안함
            </styled_Success.SSTakeOut>
            {/*결제 완료한 메뉴들 map 사용*/}
            <styled_Payment.PSMenuBox>
              {/*{img.map((item) => {*/}
              {/*  return (*/}
              {/*      <styled_Payment.PSMBox>*/}
              {/*        /!*이미지*!/*/}
              {/*        {img.map((img, idx) => {*/}
              {/*          if (img.ProductId === item.Product.p_id) {*/}
              {/*            return <styled_Payment.PSMBImg src={img.Image} key={idx}/>*/}
              {/*          }*/}
              {/*        })}*/}
              {/*        <styled_Payment.PSMBImg/>*/}
              {/*        /!*메뉴 이름*!/*/}
              {/*        <styled_Payment.PSMBText>*/}
              {/*          <styled_C.CFMTitle>{item.name}</styled_C.CFMTitle>*/}
              {/*          {item.category === "브레드" || item.category === "케이크" || item.category === "샌드위치" || item.category === "샐러드" || item.category === "따뜻한 푸드" ? (*/}
              {/*              <styled_C.CFMOption>*/}
              {/*                <styled_C.CFMIceHot>*/}
              {/*                  {item.cooked*/}
              {/*                      ? item.cooked === "Desert"*/}
              {/*                          ? "따뜻하게 데움"*/}
              {/*                          : "데우지 않음"*/}
              {/*                      : "워밍 옵션 없음"}*/}
              {/*                </styled_C.CFMIceHot>*/}
              {/*                <styled_C.CFMSize>*/}
              {/*                  {item.takeout === "takeout"*/}
              {/*                      ? "테이크 아웃"*/}
              {/*                      : "매장"}*/}
              {/*                </styled_C.CFMSize>*/}
              {/*                <styled_C.CFMCup>{item.quantity}</styled_C.CFMCup>*/}
              {/*              </styled_C.CFMOption>*/}
              {/*          ) : (*/}
              {/*              <styled_C.CFMOption>*/}
              {/*                <styled_C.CFMIceHot>{item.ice}</styled_C.CFMIceHot>*/}
              {/*                <styled_C.CFMSize>{item.size}</styled_C.CFMSize>*/}
              {/*                <styled_C.CFMSize>*/}
              {/*                  {item.takeout === "takeout"*/}
              {/*                      ? "일회용 컵"*/}
              {/*                      : "매장용 컵"}*/}
              {/*                </styled_C.CFMSize>*/}
              {/*                <styled_C.CFMCup>{item.quantity}</styled_C.CFMCup>*/}
              {/*              </styled_C.CFMOption>*/}
              {/*          )}*/}
              {/*          /!*옵션*!/*/}
              {/*        </styled_Payment.PSMBText>*/}
              {/*      </styled_Payment.PSMBox>*/}
              {/*  )*/}
              {/*})}*/}
              <styled_Payment.PSMBox>
                {/*이미지*/}
                <styled_Payment.PSMBImg />
                {/*메뉴 이름*/}
                <styled_Payment.PSMBText>
                  <styled_C.CFMTitle>메뉴 이름</styled_C.CFMTitle>
                  {/*옵션*/}
                  <styled_C.CFMOption>
                    <styled_C.CFMIceHot>ICED</styled_C.CFMIceHot>
                    <styled_C.CFMSize>사이즈</styled_C.CFMSize>
                    <styled_C.CFMSize>일회용 컵</styled_C.CFMSize>
                    <styled_C.CFMCup>양</styled_C.CFMCup>
                  </styled_C.CFMOption>
                </styled_Payment.PSMBText>
              </styled_Payment.PSMBox>
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
