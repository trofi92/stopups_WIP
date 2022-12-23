import * as styled_F from "../../styled/Favorite";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../features/favorite/favoriteSlice"
import {useState} from "react";

export const FDrink = () => {
    // 체크된 아이템 담을 배열
    const [checkItems, setCheckItems] = useState([]);
    const [id, setId] = useState([]);
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

    // filter 부분 수정해야 함
    const onClickSingle = (checked, idx) => {
        if (checked) {
            setId((prev) => [...prev, idx]);
        } else {
            setId(idx.filter((el) => el !== idx));
        }
    }

    // 시도 중
    const handleRemove = () => {
        if (checkItems.length === 0) {
            alert("삭제 할 음료를 선택 하세요.")
        } else if (checkItems.id === favorite.favorites.id) {
            dispatch(removeItem())
        }
    }

    console.log("checkItems", checkItems);
    console.log("id", id);
    console.log("favorite", favorite.favorites);


    return (
        <styled_F.FCDd1>
            <styled_F.FCDP1/>
            <styled_F.FCDArticle1>
                <styled_F.FCDFieldset1>

                    {favorite.favorites.length === 0 ? (
                        <styled_F.FCDTable1>
                            <styled_F.FCDTColgroup>
                                <col style={{width: "52px"}}/>
                                <col style={{width: "60px"}}/>
                                <col style={{width: "195px"}}/>
                                <col style={{width: "409px"}}/>
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
                                <styled_F.FCDTHTbodyTd1 colSpan={5}>데이터가 없습니다.</styled_F.FCDTHTbodyTd1>
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
                                                    onChange={(e) => handleAllCheck(e.target.checked)}
                                                    // 데이터의 수와 체크된 아이템의 수가 다를 때 체크 해제
                                                    checked={checkItems.length === favorite.favorites.length}
                                                />
                                            </styled_F.FCDTHThDiv1>
                                        </styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>No</styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>음료명</styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>퍼스널 옵션</styled_F.FCDTHTh1>
                                        <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                                    </styled_F.FCDTHTr1>
                                </styled_F.FCDTHead1>
                                {favorite.favorites.map((favorite, idx) => {
                                    if (favorite.category !== "브레드" && favorite.category !== "케이크" && favorite.category !== "샌드위치" && favorite.category !== "샐러드" && favorite.category !== "따뜻한 푸드") {
                                        return (
                                            <styled_F.FCDTHTbody1 key={favorite.id}>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    <styled_F.FCDTHThDiv1>
                                                        <styled_F.FCDTHThDInput1
                                                            type={"checkbox"}
                                                            title={"개별 선택"}
                                                            onClick={(e) => onClickSingle(e.target.checked, idx)}
                                                            onChange={(e) => handleSingleCheck(e.target.checked, favorite.id)}
                                                            // 체크된 아이템 배열에 해당 데이터가 있을 경우 활성화
                                                            checked={checkItems.includes(favorite.id)}
                                                        />
                                                    </styled_F.FCDTHThDiv1>
                                                </styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.id}</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.name}</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.size}</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.whatDateTime}</styled_F.FCDTHTbodyTdOK>
                                            </styled_F.FCDTHTbody1>
                                        )
                                    }
                                })}
                            </styled_F.FCDTable1>
                            <styled_F.FCDADiv>
                                <styled_F.FCDADUl>
                                    <styled_F.FCDADLi>
                                        <styled_F.FCDADLA>
                                            전체 선택
                                        </styled_F.FCDADLA>
                                    </styled_F.FCDADLi>
                                    <styled_F.FCDADLi>
                                        <styled_F.FCDADLA>
                                            선택 삭제
                                        </styled_F.FCDADLA>
                                    </styled_F.FCDADLi>
                                    <styled_F.FCDADLiCart>
                                        <styled_F.FCDADLACart>
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