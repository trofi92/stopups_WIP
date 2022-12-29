import * as styled_F from "../../styled/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/favorite/favoriteSlice";
import { useState, useEffect } from "react";
import { addToCart } from "../../features/cart/cartSlice";
import axios from "axios";
import { SERVER_URL } from "../../util/urls";

export const FDrink = () => {
  const [data, setData] = useState();
  // 체크된 아이템 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 전체 선택 버튼 클릭 인지 용
  const [click, setClick] = useState(false);
  const favorite = useSelector((state) => state.favorite);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log("Drink favorite.favorites", favorite.favorites)

  // 목록 요청 함수
  const post = {
    email: user?.email,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `${SERVER_URL}/bookmarks/sendBookmarks`,
        { data: post },
        // { withCredentials: true }
      );
      // console.log(response?.data);
      setData(response.data);
    };
    fetchData();
  }, []);
  const serverData = data?.bookmarkedProducts;
  // console.log("data?.bookmarkedProducts=>", data?.bookmarkedProducts);


  const handleAllCheck = (checked) => {
    if (checked) {
      // 체크 시 모든 아이템을 배열에 추가
      // 전체 선택 시 처음부터 drink만 선택되게
      let idArray = [];
      serverData?.map((drink) => {
        if (drink?.category !== "브레드" && drink?.category !== "케이크" && drink?.category !== "샌드위치" && drink?.category !== "샐러드" && drink?.category !== "따뜻한 푸드") {
          idArray.push(drink.Product.p_id);
        }
      })
      setCheckItems(idArray);
    } else {
      // 체크 해제 시 빈 배열
      setCheckItems([]);
    }
  };
  // console.log(serverData?.[0].id);
  console.log("checkItems=>",checkItems);
  console.log("serverData=>", serverData);
  // console.log("serverData.length=>", serverData?.length);
  // console.log("checkItems.length === serverData?.length=>", checkItems.length === serverData?.length)
  //
  // console.log("favorite.favorites", favorite.favorites)

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 체크 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => ([...prev, id]));
    } else {
      // 체크 해제 시 체크된 아이템을 제외한 나머지 배열
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const onClickAll = () => {
    setClick(!click);
    if (!click) {
      let idArray = [];
      serverData?.map((drink) => {
        if (drink?.category !== "브레드" && drink?.category !== "케이크" && drink?.category !== "샌드위치" && drink?.category !== "샐러드" && drink?.category !== "따뜻한 푸드") {
          idArray.push(drink.Product.p_id);
        }
      })
      setCheckItems(idArray);
    } else if (click) {
      setCheckItems([]);
    }
  };

  //404 에러길래 확인해봤더디 bookmarks에 deleteBookmarks가 없다!
  const handleRemove = () => {
    if (checkItems.length === 0) {
      alert("삭제 할 음료를 선택 하세요.");
    } else {
      dispatch(removeFromCart(checkItems));
      axios.put(
        `${SERVER_URL}/bookmarks/deleteBookmarks`,
        { data: post },
        { withCredentials: true }
      );
      setCheckItems([]);
    }
  };

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
      alert("장바구니로 이동했습니다.");
    }
  };

  return (
    <styled_F.FCDd1>
      <styled_F.FCDP1 />
      <styled_F.FCDArticle1>
        <styled_F.FCDFieldset1>
          {serverData?.length === 0 ? (
            <styled_F.FCDTable1>
              <styled_F.FCDTColgroup>
                <col style={{ width: "52px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "200px" }} />
                <col style={{ width: "364px" }} />
                <col style={{ width: "114px" }} />
              </styled_F.FCDTColgroup>
              <styled_F.FCDTHead1>
                <styled_F.FCDTHTr1>
                  <styled_F.FCDTHTh1>
                    {/*체크박스 체크시 이미지 변경*/}
                    <styled_F.FCDTHThDiv1>
                      {/*A component is changing a controlled input to be uncontrolled. 에러 */}
                      {/*input의 value가 undefined일 때 ""를 넣으라고 하는데 갑자기 이게 왜 뜨지?? */}
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
                  <col style={{ width: "52px" }} />
                  <col style={{ width: "100px" }} />
                  <col style={{ width: "200px" }} />
                  <col style={{ width: "364px" }} />
                  <col style={{ width: "114px" }} />
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
                          checked={checkItems.length === serverData?.length}
                        />
                      </styled_F.FCDTHThDiv1>
                    </styled_F.FCDTHTh1>
                    <styled_F.FCDTHTh1>No</styled_F.FCDTHTh1>
                    <styled_F.FCDTHTh1>음료명</styled_F.FCDTHTh1>
                    <styled_F.FCDTHTh1>퍼스널 옵션</styled_F.FCDTHTh1>
                    <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                  </styled_F.FCDTHTr1>
                </styled_F.FCDTHead1>
                {serverData?.map((sData) => {
                  // console.log(sData);
                  if (
                    sData?.category !== "브레드" &&
                    sData?.category !== "케이크" &&
                    sData?.category !== "샌드위치" &&
                    sData?.category !== "샐러드" &&
                    sData?.category !== "따뜻한 푸드"
                  ) {
                    return (
                      <styled_F.FCDTHTbody1
                        key={sData?.Product?.p_id}
                      >
                        <styled_F.FCDTHTbodyTdOK>
                          <styled_F.FCDTHThDiv1>
                            <styled_F.FCDTHThDInput1
                              type={"checkbox"}
                              title={"개별 선택"}
                              onChange={(e) =>
                                handleSingleCheck(
                                  e.target.checked,
                                  sData?.Product?.p_id
                                )
                              }
                              // 체크된 아이템 배열에 해당 데이터가 있을 경우 활성화
                              checked={checkItems.includes(
                                sData?.Product?.p_id
                              )}
                            />
                          </styled_F.FCDTHThDiv1>
                        </styled_F.FCDTHTbodyTdOK>
                        <styled_F.FCDTHTbodyTdOK>
                          {sData?.Product?.p_id}
                        </styled_F.FCDTHTbodyTdOK>
                        <styled_F.FCDTHTbodyTdOK>
                          {sData?.Product?.name}
                        </styled_F.FCDTHTbodyTdOK>
                        <styled_F.FCDTHTbodyTdOK>
                          {sData?.size +
                            " | " +
                            sData?.drinkType +
                            " | " +
                            sData?.eatType}
                        </styled_F.FCDTHTbodyTdOK>
                        <styled_F.FCDTHTbodyTdOK>
                          {sData?.updatedAt.replace(/T|\.000Z/g, " ")}
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
