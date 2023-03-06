import * as styled_F from "../../styled/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { useState, useLayoutEffect } from "react";
import { addToCart } from "../../features/cart/cartSlice";
import axios from "axios";
import { SERVER_URL } from "../../utils/urls";

export const FDrink = () => {
  const [data, setData] = useState(null);
  const [render, setRender] = useState(true);
  const [checkItems, setCheckItems] = useState([]);
  const [click, setClick] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const post = {
    email: user?.email,
    items: checkItems,
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `${SERVER_URL}/bookmarks/sendBookmarks`,
        { data: post },
        { withCredentials: true }
      );
      setData(response.data || null);
    };
    fetchData();
  }, [render]);
  const serverData = data?.bookmarkedProducts;

  const deleteFavoriteReq = async (data) => {
    await axios.put(
      `${SERVER_URL}/bookmarks/deleteBookmarks`,
      { data: data },
      { withCredentials: true }
    );
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
          if (checkItems.includes(drink.Product.p_id)) {
            const id = checkItems.filter(
              (item) => item === drink.Product.p_id
            );
            const data = {
              email: user?.email,
              items: id,
            };
            deleteFavoriteReq(data);
            setCheckItems([]);
          }
        }
      });
      alert("선택하신 상품이 삭제되었습니다.");
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      let idArray = [];
      serverData?.forEach((el) => idArray.push(el.Product.p_id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const onClickAll = () => {
    setClick(!click);
    if (!click) {
      let idArray = [];
      serverData?.forEach((el) => idArray.push(el.Product.p_id));
      setCheckItems(idArray);
    } else if (click) {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
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
          if (checkItems.includes(drink.Product.p_id)) {
            dispatch(
              addToCart({
                id: drink.Product.p_id,
                name: drink.Product.name,
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
                          onChange={(e) =>
                            handleAllCheck(e.target.checked)
                          }
                          checked={
                            checkItems.length === serverData?.length
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
                {serverData?.map((sData) => {
                  if (
                    sData?.category !== "브레드" &&
                    sData?.category !== "케이크" &&
                    sData?.category !== "샌드위치" &&
                    sData?.category !== "샐러드" &&
                    sData?.category !== "따뜻한 푸드"
                  ) {
                    return (
                      <styled_F.FCDTHTbody1 key={sData?.id}>
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
