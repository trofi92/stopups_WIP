import * as styled_C from "../../styled/Cart"
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    clearCart,
    removeItem,
    removeFromCart,
    calculateTotals,
    increase, decrease
} from "../../features/cart/cartSlice"
import {useState} from "react";

export const CNoDF = () => {
    // 체크된 아이템 담을 배열
    const [checkItems, setCheckItems] = useState([]);
    // 전체 선택 버튼 클릭 인지 용
    const [click, setClick] = useState(false);

    // 상품 종류
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAllCheck = (checked) => {
        if (checked) {
            // 체크 시 모든 아이템을 배열에 추가
            const idArray = [];
            cart.cartItems.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else {
            // 체크 해제 시 빈 배열
            setCheckItems([]);
        }
    };

    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 체크 시 체크된 아이템을 배열에 추가
            setCheckItems((prev) => [...prev, id]);
        } else {
            // 체크 해제 시 체크된 아이템을 제외한 나머지 배열
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const onClickAll = () => {
        setClick(!click);
        if (!click) {
            const idArray = [];
            cart.cartItems.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else if (click) {
            setCheckItems([]);
        }
    };

    const handleClear = () => {
        if (checkItems.length === 0) {
            alert("삭제 할 음료를 선택 하세요.")
        } else {
            dispatch(clearCart());
            setCheckItems([]);
        }
    }

    const handleRemove = () => {
        if (checkItems.length === 0) {
            alert("삭제 할 음료를 선택 하세요.")
        } else {
            dispatch(removeFromCart(checkItems));
            setCheckItems([]);
        }
    };

    const handleTotalCalculate = (itemIds) => {
        dispatch(calculateTotals(itemIds));
    };

    handleTotalCalculate([checkItems]);

    // console.log("checkItems", checkItems);
    // console.log("cart.cartItems", cart.cartItems);
    // console.log("amount=>", cart.amount);
    // console.log("total=>", cart.total);


    // const [apiMenu, setApiMenu] = useState([]);
    //
    // useEffect(() => {
    //     const event = async () => {
    //         await axios
    //             .get("http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=분류&Name=")
    //             .then((res) => {
    //                 setApiMenu(res.data);
    //             })
    //
    //     };
    //     event();
    // }, []);
    //
    // console.log(apiMenu);

    // name, ICED, size, 일회용 컵, amount, price, totalAmount, totalPrice
    return (
        <>
            {cart.cartItems.length === 0 ? (
                <styled_C.GBoxs>
                    <styled_C.GBox>
                        <styled_C.GBTitle>음료/푸드 장바구니가 비어있습니다.</styled_C.GBTitle>
                        <styled_C.GBText>
                            원하는 음료/푸드를 장바구니에 담고
                            <br/>
                            한번에 주문해 보세요.
                        </styled_C.GBText>
                        {/*나중에 메뉴쪽으로 링크 걸기*/}
                        <Link to={"/menu/전체 상품 보기"} style={{textDecoration: "none"}}>
                            <styled_C.GBButton>음료/푸드 담으러 가기</styled_C.GBButton>
                        </Link>
                    </styled_C.GBox>
                    <styled_C.GBImg/>
                </styled_C.GBoxs>
            ) : (
                <styled_C.CFBoxs>
                    {/*주문 메뉴*/}
                    <styled_C.CFBox>
                        <styled_C.CBTitle>주문 메뉴</styled_C.CBTitle>
                        <styled_C.CBTSpan>총 주문 가능 수량 <styled_C.CBTSpanColor>20</styled_C.CBTSpanColor>개
                        </styled_C.CBTSpan>
                    </styled_C.CFBox>
                    {/*전체 선택, 선택삭제, 전체삭제*/}
                    <styled_C.CFAllCheckBox>
                        <styled_C.CFAllCheck>
                            <styled_C.CFACInput
                                type={"checkbox"}
                                title={"전체 선택"}
                                onChange={(e) => handleAllCheck(e.target.checked)}
                                // 데이터의 수와 체크된 아이템의 수가 다를 때 체크 해제
                                checked={checkItems.length === cart.cartItems.length}
                            />
                        </styled_C.CFAllCheck>
                        <styled_C.CFAllCheckText
                            onClick={onClickAll}
                        >
                            전체선택
                        </styled_C.CFAllCheckText>
                        <styled_C.CFCDelete
                            onClick={handleRemove}
                        >
                            선택삭제
                        </styled_C.CFCDelete>
                        <styled_C.CFCAllDelete
                            onClick={handleClear}
                        >
                            전체삭제
                        </styled_C.CFCAllDelete>
                    </styled_C.CFAllCheckBox>

                    {/*메뉴 map 사용*/}
                    {cart.cartItems.map((cart) => {
                        return (
                            <styled_C.CFMenuBox key={cart.id}>
                                <styled_C.CMCheck>
                                    <styled_C.CMCInput
                                        type={"checkbox"}
                                        title={"개별 선택"}
                                        onChange={(e) => handleSingleCheck(e.target.checked, cart.id)}
                                        // 체크된 아이템 배열에 해당 데이터가 있을 경우 활성화
                                        checked={checkItems.includes(cart.id)}
                                    />
                                </styled_C.CMCheck>
                                {/*상품 이미지, 이름 등*/}
                                <styled_C.CMBox>
                                    <styled_C.CFMImg/>
                                    <styled_C.CFMText>
                                        <styled_C.CFMTitle>{cart.name}</styled_C.CFMTitle>
                                        <styled_C.CFMOption>
                                            <styled_C.CFMIceHot>ICED</styled_C.CFMIceHot>
                                            <styled_C.CFMSize>{cart.size}</styled_C.CFMSize>
                                            <styled_C.CFMCup>일회용 컵</styled_C.CFMCup>
                                            <styled_C.CFMMoney>{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</styled_C.CFMMoney>
                                        </styled_C.CFMOption>
                                        <styled_C.CFMCountBox>
                                            {/*수량이 1일 때 color #c3c3c3 밑 버튼 비활성화*/}
                                            <styled_C.CFMCMinus
                                                onClick={() => {
                                                    if (cart.quantity < 1) {
                                                        alert("최소 주문 가능 수량은 1개 입니다.")
                                                    } else {
                                                        dispatch(decrease(cart.id))
                                                    }
                                                }}
                                            >
                                                <AiOutlineMinusCircle style={{fontSize: "30px"}}/>
                                            </styled_C.CFMCMinus>
                                            <styled_C.CFMCount>{cart.quantity}</styled_C.CFMCount>
                                            <styled_C.CFMCPlus
                                                onClick={() => {
                                                    if (cart.quantity >= 20) {
                                                        alert("총 주문 가능 수량은 20개 입니다.");
                                                    } else {
                                                        dispatch(increase(cart.id));
                                                    }
                                                }}
                                            >
                                                <AiOutlinePlusCircle style={{fontSize: "30px"}}/>
                                            </styled_C.CFMCPlus>
                                            <styled_C.CFMTotalMoney>{(cart.price * cart.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</styled_C.CFMTotalMoney>
                                        </styled_C.CFMCountBox>
                                    </styled_C.CFMText>
                                </styled_C.CMBox>
                            </styled_C.CFMenuBox>
                        )
                    })}

                    {/*총 갯수 박스*/}
                    <styled_C.CFButtonBox>
                        <styled_C.CFBAmount>총
                            <styled_C.CFBAmountColor>
                                {checkItems.length === 0 ? 0 : cart.amount}
                                {/*체크된 음료들의 양의 합계...*/}
                                {/*{checkItems.length >= 20 ? alert("총 주문 가능 수량은 20개 입니다. 수량을 낮춰주세요.") : checkItems.length}*/}
                            </styled_C.CFBAmountColor>
                            개 / 20개
                        </styled_C.CFBAmount>
                        <styled_C.CFBTotal>{checkItems.length === 0 ? 0 : cart.total}원</styled_C.CFBTotal>
                    </styled_C.CFButtonBox>
                    {/*체크된 상품이 없을 때 color #c3c3c3*에 버튼 비활성화*/}
                    {/*클릭 시 결제 쪽으로 정보 및 링크*/}
                    {checkItems.length === 0 ? (
                        <styled_C.CFButtonNo>주문하기</styled_C.CFButtonNo>
                    ) : (
                        <styled_C.CFButton>주문하기</styled_C.CFButton>
                    )}
                </styled_C.CFBoxs>
            )}
        </>
    );
};