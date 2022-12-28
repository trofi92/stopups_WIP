import * as styled_F from "../../styled/Favorite";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../features/favorite/favoriteSlice";
import {useState} from "react";
import {addToCart} from "../../features/cart/cartSlice";

export const FDrink = () => {
    // 체크된 아이템 담을 배열
    const [checkItems, setCheckItems] = useState([]);
    // 전체 선택 버튼 클릭 인지 용
    const [click, setClick] = useState(false);
    const favorite = useSelector((state) => state.favorite);
    const dispatch = useDispatch();

    const handleAllCheck = (checked) => {
        if (checked) {
            // 체크 시 모든 아이템을 배열에 추가
            const idArray = [];
            favorite.favorites.forEach((el) => idArray.push(el.id));
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
            favorite.favorites.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else if (click) {
            setCheckItems([]);
        }
    };

    const handleRemove = () => {
        if (checkItems.length === 0) {
            alert("삭제 할 음료를 선택 하세요.");
        } else {
            dispatch(removeFromCart(checkItems));
            setCheckItems([]);
        }
    };

    // 나중에 ice, hot, take in, out 추가 되면 여기다도 넣기
    const onClick = () => {
        if (checkItems.length === 0) {
            alert("장바구니로 이동 할 음료를 선택하세요.");
        } else {
            favorite.favorites.map((drink) => {
                if (checkItems.includes(drink.id)) {
                    dispatch(
                        addToCart({
                            id: drink.id,
                            name: drink.name,
                            size: drink.size,
                            ice: drink.ice,
                            takeout: drink.takeout,
                            price: drink.price,
                            category: drink.category,
                            quantity: drink.quantity,
                        })
                    );
                }
            });
            alert("장바구니로 이동했습니다.")
        }
    };

    // const [drink, setDrink] = useState([])
    //
    // useEffect(() => {
    //     favorite.favorites.map((drink) => {
    //         if (drink.category !== "브레드" && drink.category !== "케이크" && drink.category !== "샌드위치" && drink.category !== "샐러드" && drink.category !== "따뜻한 푸드") {
    //             console.log("111111111=>", drink);
    //             setDrink(drink);
    //         }
    //     })
    //
    // },[]);
    //
    // console.log("drink =>", drink);

    // FDfink랑 FFood
    // favorite.favorites에 데이터가 들어있을 때
    // drink가 아니라면 데이터 없음이 뜨고 버튼은 보이면 안됨
    // map 사용하면 데이터 없음이 여러번 반복됨
    // return() 전체 수정 해야할 듯

    return (
        <styled_F.FCDd1>
            <styled_F.FCDP1/>
            <styled_F.FCDArticle1>
                <styled_F.FCDFieldset1>
                    {favorite.favorites.length === 0 ? (
                        <styled_F.FCDTable1>
                            <styled_F.FCDTColgroup>
                                <col style={{width: "52px"}}/>
                                <col style={{width: "100px"}}/>
                                <col style={{width: "200px"}}/>
                                <col style={{width: "364px"}}/>
                                <col style={{width: "114px"}}/>
                            </styled_F.FCDTColgroup>
                            <styled_F.FCDTHead1>
                                <styled_F.FCDTHTr1>
                                    <styled_F.FCDTHTh1>
                                        {/*체크박스 체크시 이미지 변경*/}
                                        <styled_F.FCDTHThDiv1>
                                            <styled_F.FCDTHThDInput1
                                                type={"checkbox"}
                                                title={"전체 선택"}
                                                disabled
                                            />
                                        </styled_F.FCDTHThDiv1>
                                    </styled_F.FCDTHTh1>
                                    <styled_F.FCDTHTh1>No</styled_F.FCDTHTh1>
                                    <styled_F.FCDTHTh1>음료명</styled_F.FCDTHTh1>
                                    <styled_F.FCDTHTh1>퍼스널 옵션</styled_F.FCDTHTh1>
                                    <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                                </styled_F.FCDTHTr1>
                            </styled_F.FCDTHead1>
                            <styled_F.FCDTHTbody1>
                                <styled_F.FCDTHTbodyTd1 colSpan={5}>
                                    데이터가 없습니다.
                                </styled_F.FCDTHTbodyTd1>
                            </styled_F.FCDTHTbody1>
                        </styled_F.FCDTable1>
                    ) : (
                        <>
                            <styled_F.FCDTable1>
                                <styled_F.FCDTColgroup>
                                    <col style={{width: "52px"}}/>
                                    <col style={{width: "100px"}}/>
                                    <col style={{width: "200px"}}/>
                                    <col style={{width: "364px"}}/>
                                    <col style={{width: "114px"}}/>
                                </styled_F.FCDTColgroup>
                                <styled_F.FCDTHead1>
                                    <styled_F.FCDTHTr1>
                                        <styled_F.FCDTHTh1>
                                            <styled_F.FCDTHThDiv1>
                                                <styled_F.FCDTHThDInput1
                                                    type={"checkbox"}
                                                    title={"전체 선택"}
                                                    onChange={(e) =>
                                                        handleAllCheck(e.target.checked)
                                                    }
                                                    // 데이터의 수와 체크된 아이템의 수가 다를 때 체크 해제
                                                    checked={
                                                        checkItems.length ===
                                                        favorite.favorites.length
                                                    }
                                                />
                                            </styled_F.FCDTHThDiv1>
                                        </styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>No</styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>음료명</styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>퍼스널 옵션</styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                                    </styled_F.FCDTHTr1>
                                </styled_F.FCDTHead1>
                                {favorite.favorites.map((favorite) => {
                                    console.log(favorite)
                                    if (
                                        favorite.category !== "브레드" &&
                                        favorite.category !== "케이크" &&
                                        favorite.category !== "샌드위치" &&
                                        favorite.category !== "샐러드" &&
                                        favorite.category !== "따뜻한 푸드"
                                    ) {
                                        return (
                                            <styled_F.FCDTHTbody1 key={favorite.id}>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    <styled_F.FCDTHThDiv1>
                                                        <styled_F.FCDTHThDInput1
                                                            type={"checkbox"}
                                                            title={"개별 선택"}
                                                            onChange={(e) =>
                                                                handleSingleCheck(
                                                                    e.target.checked,
                                                                    favorite.id
                                                                )
                                                            }
                                                            // 체크된 아이템 배열에 해당 데이터가 있을 경우 활성화
                                                            checked={checkItems.includes(
                                                                favorite.id
                                                            )}
                                                        />
                                                    </styled_F.FCDTHThDiv1>
                                                </styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    {favorite.id}
                                                </styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    {favorite.name}
                                                </styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    {favorite.size + " | " + favorite.ice + " | " + favorite.takeout}
                                                </styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    {favorite.whatDateTime}
                                                </styled_F.FCDTHTbodyTdOK>
                                            </styled_F.FCDTHTbody1>
                                        );
                                    }
                                })}
                            </styled_F.FCDTable1>
                            <styled_F.FCDADiv>
                                <styled_F.FCDADUl>
                                    <styled_F.FCDADLi>
                                        <styled_F.FCDADLA onClick={onClickAll}>
                                            전체 선택
                                        </styled_F.FCDADLA>
                                    </styled_F.FCDADLi>
                                    <styled_F.FCDADLi>
                                        <styled_F.FCDADLA onClick={handleRemove}>
                                            선택 삭제
                                        </styled_F.FCDADLA>
                                    </styled_F.FCDADLi>
                                    <styled_F.FCDADLiCart>
                                        <styled_F.FCDADLACart onClick={onClick}>
                                            장바구니 이동
                                        </styled_F.FCDADLACart>
                                    </styled_F.FCDADLiCart>
                                </styled_F.FCDADUl>
                            </styled_F.FCDADiv>
                        </>
                    )}
                </styled_F.FCDFieldset1>
            </styled_F.FCDArticle1>
        </styled_F.FCDd1>
    );
};
