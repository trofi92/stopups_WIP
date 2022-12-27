import React, {useEffect, useState} from "react";
import * as styled_AB from "../../styled/AllBox";
import {Link, useLocation} from "react-router-dom";
import {loadTossPayments} from "@tosspayments/payment-sdk";
import {v4} from "uuid";
import {useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import {
    PBox, PS3Button, PSDiv1, PSDiv4, PSDSpan4,
    PSection, PSection1, PSection2, PSection3, PSection4, PSImg1, PSImg4, PSMBImg,
    PSMBox, PSMBText,
    PSMenuBox, PSPrice, PSPriceTitle, PSSpan1, PSSpan4,
    PSTitle, PSTitle1, PSTitle4,
    PSTitleDiv,
    PSTitleH1,
    PSTitleH3, PSToggle, PSTotalPrice, PSTotalPriceSpan, PSTotalPriceTitle
} from "../../styled/Payment/Payment";
import * as styled_F from "../../styled/Favorite";
import CTitle from "../../image/Cart/CTitle.png";
import PaymentTitle from "../../image/Payment/PaymentTitle.png"
import * as styled_C from "../../styled/Cart";
import {CFMenuBox} from "../../styled/Cart";
import axios from "axios";
import {Footer} from "../../components/Footer/Footer";
import PaymentCard from "../../image/Payment/PaymentCard.png"
import HMButton1 from "../../image/Header/HMButton1.png"
import HMButton2 from "../../image/Header/HMButton2.png"
import PaymentCoupon from "../../image/Payment/PaymentCoupon.png"
import PaymentGift from "../../image/Payment/PaymentGift.png"
import PaymentPhone from "../../image/Payment/PaymentPhone.png"
import {decrypt} from "../../util/crypto-front";

export const Payment = () => {
    // 주문하기 클릭 시 선택된 제품만 리덕스에 저장
    const cart = useSelector((state) => state.cart);
    // 쿠폰 및 할인 투글용
    const [openCoupon, setOpenCoupon] = useState(false);
    // 구매자 이름 = 유저 닉네임
    const user = useSelector((state) => state.user);
    const nickname = decrypt(user.nickname);

    const [name, setName] = React.useState("");
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
    }

    // 쿠폰 클릭 시 alert 호출
    const onClickReady = () => {
        alert("서비스 준비중입니다.")
    }

    // 결제 요청 이벤트 발생시 호출
    const tossPay = () => {
        //orderId가 필요해서 만든 랜덤 아이디값
        const randomId = v4();

        loadTossPayments(clientKey).then((tossPayments) => {
            // 카드 결제 메서드 실행
            tossPayments
                .requestPayment("카드", {
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
    const [img, setImg] = useState([])

    useEffect(() => {

        const event = async () => {
            for (let i = 0; i < cart.cartItems.length; i++) {
                await axios
                    .get(`http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=분류&Name=&ProductId=`)
                    .then((res) => {
                        setImg(res.data)
                    })
            }
        };
        event();
    }, []);

    return (
        <styled_AB.AllBox>
            <Header/>

            <PBox>
                {/*결제 헤더*/}
                <styled_F.FHeader>
                    <styled_F.FHTitle>
                        <styled_F.FHTInner>
                            <styled_F.FHTInnerH4>
                                <img src={PaymentTitle} alt={"PaymentTitle"}/>
                            </styled_F.FHTInnerH4>
                        </styled_F.FHTInner>
                    </styled_F.FHTitle>
                </styled_F.FHeader>

                {/*결제 내용*/}
                <styled_F.FContentsAllBox>
                    <styled_F.FCBox>
                        {/*결제 수단*/}
                        <PSection1>
                            <div>
                                <PSTitle1>결제 수단</PSTitle1>
                                <PSDiv1>
                                    <PSImg1 src={PaymentCard} alt={"PaymentCard"}/>
                                    <PSSpan1>신용/체크 카드</PSSpan1>
                                </PSDiv1>
                            </div>
                        </PSection1>
                        {/*쿠폰 및 할인*/}
                        <PSection4>
                            <div>
                                <PSTitle4 onClick={couponToggle}>
                                    쿠폰 및 할인
                                    <PSSpan4>
                                        {openCoupon === true ? (
                                            <PSToggle src={HMButton2}/>
                                        ) : (
                                            <PSToggle src={HMButton1}/>
                                        )}
                                    </PSSpan4>
                                </PSTitle4>

                                {openCoupon === true ? (
                                    <>
                                        <PSDiv4 onClick={onClickReady}>
                                            <PSImg4 src={PaymentCoupon} alt={"PaymentCoupon"}/>
                                            <PSDSpan4>쿠폰</PSDSpan4>
                                        </PSDiv4>
                                        <PSDiv4 onClick={onClickReady}>
                                            <PSImg4 src={PaymentGift} alt={"PaymentGift"}/>
                                            <PSDSpan4>선물</PSDSpan4>
                                        </PSDiv4>
                                        <PSDiv4 onClick={onClickReady}>
                                            <PSImg4 src={PaymentPhone} alt={"PaymentPhone"}/>
                                            <PSDSpan4>통신사 제휴 할인</PSDSpan4>
                                        </PSDiv4>
                                    </>
                                ) : ""}
                            </div>
                        </PSection4>
                        {/*주문 내역*/}
                        <PSection>
                            <div>
                                <PSTitle>주문 내역</PSTitle>
                                {cart.cartItems.map((cart) => {
                                    return (
                                        <PSMenuBox key={cart.id}>
                                            <PSMBox>
                                                {img.map((img) => {
                                                    if (img.ProductId === cart.id) {
                                                        return <PSMBImg src={img.Image}/>
                                                    }
                                                })}
                                                <PSMBText>
                                                    <styled_C.CFMTitle>{cart.name}</styled_C.CFMTitle>
                                                    {/*음료*/}
                                                    {cart.category === "브레드" || cart.category === "케이크" || cart.category === "샌드위치" || cart.category === "샐러드" || cart.category === "따뜻한 푸드" ? (
                                                        <styled_C.CFMOption>
                                                            <styled_C.CFMIceHot>워밍 옵션</styled_C.CFMIceHot>
                                                            <styled_C.CFMIceHot>테이크 인/아웃</styled_C.CFMIceHot>
                                                            <styled_C.CFMCup>{cart.quantity}개</styled_C.CFMCup>
                                                            <styled_C.CFMMoney>{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</styled_C.CFMMoney>
                                                        </styled_C.CFMOption>
                                                    ) : (
                                                        <styled_C.CFMOption>
                                                            <styled_C.CFMIceHot>ICED</styled_C.CFMIceHot>
                                                            <styled_C.CFMSize>{cart.size}</styled_C.CFMSize>
                                                            <styled_C.CFMSize>일회용 컵</styled_C.CFMSize>
                                                            <styled_C.CFMCup>{cart.quantity}개</styled_C.CFMCup>
                                                            <styled_C.CFMMoney>{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</styled_C.CFMMoney>
                                                        </styled_C.CFMOption>
                                                    )}
                                                </PSMBText>
                                            </PSMBox>
                                        </PSMenuBox>
                                    )
                                })}
                            </div>
                        </PSection>
                        {/*금액*/}
                        <PSection2>
                            <div>
                                <PSPriceTitle>주문
                                    금액<PSPrice>{cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</PSPrice></PSPriceTitle>
                                <PSPriceTitle>할인 금액<PSPrice>0원</PSPrice></PSPriceTitle>
                            </div>
                            <PSTotalPrice>
                                <PSTotalPriceTitle>최종 결제
                                    금액<PSTotalPriceSpan>{cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</PSTotalPriceSpan></PSTotalPriceTitle>
                            </PSTotalPrice>
                        </PSection2>
                        {/*결제하기 버튼*/}
                        <PSection3>
                            <PS3Button
                                onClick={() => tossPay()}>{cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                                결제하기</PS3Button>
                        </PSection3>


                        <br/>
                        <input onChange={(e) => setName(e.target.value)} name="id"/>
                        <div>구매자 : {name}</div>
                        <Link to="/">
                            <button>to main</button>
                        </Link>

                    </styled_F.FCBox>
                </styled_F.FContentsAllBox>
            </PBox>

            <Footer/>
        </styled_AB.AllBox>

    );
};
