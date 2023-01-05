import * as styled_F from "../../styled/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { useState, useLayoutEffect } from "react";
import { addToCart } from "../../features/cart/cartSlice";
import axios from "axios";
import { SERVER_URL } from "../../utils/urls";

export const FDrink = () => {
  //요청한 데이터
  const [data, setData] = useState(null);

  //렌더링 즉시 유발
  const [render, setRender] = useState(true);

  // 체크된 아이템 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 전체 선택 버튼 클릭 인지 용
  const [click, setClick] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const post = {
    email: user?.email,
    items: checkItems,
  };

  // 목록 요청
  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `${SERVER_URL}/bookmarks/sendBookmarks`,
        { data: post },
        { withCredentials: true }
      );
      setData(response?.data || null);
    };
    fetchData();
  }, [render]);
  const serverData = data?.bookmarkedProducts;
  console.log(serverData);
  console.log(SERVER_URL);
  const deleteFavoriteReq = async (data) => {
    await axios
      .put(
        `${SERVER_URL}/bookmarks/deleteBookmarks`,
        { data: data },
        { withCredentials: true }
      )
      .then((res) => console.log("deleted ==>", res));
    setRender((prev) => !prev);
  };

  const handleRemove = () => {
    if (checkItems.length === 0) {
      alert("삭제 할 음료를 선택 하세요.");
    } else {
      serverData?.map((drink) => {
        if (
          drink?.category !== "브레드" &&
          drink?.category !== "케이크" &&
          drink?.category !== "샌드위치" &&
          drink?.category !== "샐러드" &&
          drink?.category !== "따뜻한 푸드"
        ) {
          if (checkItems.includes(drink.id)) {
            const id = checkItems.filter((item) => item === drink.id);
            console.log("id ===>", id);
            const data = {
              email: user?.email,
              items: id,
            };
            console.log("data ===>", data);
            deleteFavoriteReq(data);
            setCheckItems([]);
          }
        }
      });
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      // 체크 시 모든 아이템을 배열에 추가
      let idArray = [];
      serverData?.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 체크 해제 시 빈 배열
      setCheckItems([]);
    }
  };
  console.log("checkItems ==>", checkItems);

  const onClickAll = () => {
    setClick(!click);
    if (!click) {
      let idArray = [];
      serverData?.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else if (click) {
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

  const onClick = () => {
    if (checkItems.length === 0) {
      alert("장바구니로 이동 할 음료를 선택하세요.");
    } else {
      serverData?.map((drink) => {
        if (
          drink?.category !== "브레드" &&
          drink?.category !== "케이크" &&
          drink?.category !== "샌드위치" &&
          drink?.category !== "샐러드" &&
          drink?.category !== "따뜻한 푸드"
        ) {
          if (checkItems.includes(drink.id)) {
            dispatch(
              addToCart({
                id: drink.Product.p_id,
                name: drink.name,
                size: drink.size,
                ice: drink.drinkType,
                takeout: drink.eatType,
                price: drink.price,
                category: drink.category,
                quantity: drink.quantity,
              })
            );
          }
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
                          onChange={(e) => handleAllCheck(e.target.checked)}
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
                      <styled_F.FCDTHTbody1 key={sData.id}>
                        <styled_F.FCDTHTbodyTdOK>
                          <styled_F.FCDTHThDiv1>
                            <styled_F.FCDTHThDInput1
                              type={"checkbox"}
                              title={"개별 선택"}
                              onChange={(e) =>
                                handleSingleCheck(e.target.checked, sData?.id)
                              }
                              // 체크된 아이템 배열에 해당 데이터가 있을 경우 활성화
                              checked={checkItems.includes(sData?.id)}
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
