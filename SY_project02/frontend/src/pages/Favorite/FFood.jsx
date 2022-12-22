import * as styled_F from "../../styled/Favorite";
import {useDispatch, useSelector} from "react-redux";

export const FFood = () => {
    const favorite = useSelector((state) => state.favorite);
    const dispatch = useDispatch();

    return (
        <styled_F.FCDd1>
            <styled_F.FCDP1/>
            <styled_F.FCDArticle1>
                <styled_F.FCDFieldset1>
                    <styled_F.FCDTable1>
                        <styled_F.FCDTColgroup>
                            <col style={{width: "52px"}}/>
                            <col style={{width: "60px"}}/>
                            <col style={{width: "210px"}}/>
                            <col style={{width: "185px"}}/>
                            <col style={{width: "204px"}}/>
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
                                <styled_F.FCDTHTh1>푸드명</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>워밍 옵션</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>메뉴 추가</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                            </styled_F.FCDTHTr1>
                        </styled_F.FCDTHead1>
                        {favorite.favorites.category === "브레드" || favorite.favorites.category === "케이크" || favorite.favorites.category === "샌드위치" || favorite.favorites.category === "샐러드" || favorite.favorites.category === "따뜻한 푸드" ? (
                            favorite.favorites.length === 0 ? (
                                    <styled_F.FCDTHTbody1>
                                        <styled_F.FCDTHTbodyTd1 colSpan={6}>데이터가 없습니다.</styled_F.FCDTHTbodyTd1>
                                    </styled_F.FCDTHTbody1>
                                ) : (
                                    favorite.favorites.map((favorite) => {
                                        return (
                                            <styled_F.FCDTHTbody1 key={favorite.id}>
                                                <styled_F.FCDTHTbodyTdOK>
                                                    <styled_F.FCDTHThDiv1>
                                                        <styled_F.FCDTHThDInput1
                                                            type={"checkbox"}
                                                            title={"전체 선택"}
                                                        />
                                                    </styled_F.FCDTHThDiv1>
                                                </styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.id}</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.name}</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>워밍 옵션</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>메뉴 추가</styled_F.FCDTHTbodyTdOK>
                                                <styled_F.FCDTHTbodyTdOK>{favorite.date}</styled_F.FCDTHTbodyTdOK>
                                            </styled_F.FCDTHTbody1>
                                        );
                                    })
                                )
                        ) : (
                            <styled_F.FCDTHTbody1>
                                <styled_F.FCDTHTbodyTd1 colSpan={6}>데이터가 없습니다.</styled_F.FCDTHTbodyTd1>
                            </styled_F.FCDTHTbody1>
                        )}
                    </styled_F.FCDTable1>

                    {favorite.favorites.category === "브레드" || favorite.favorites.category === "케이크" || favorite.favorites.category === "샌드위치" || favorite.favorites.category === "샐러드" || favorite.favorites.category === "따뜻한 푸드" ? (
                        favorite.favorites.length === 0 ? "" : (
                            <styled_F.FCDADiv>
                                <styled_F.FCDADUl>
                                    {/*전체 선택*/}
                                    <styled_F.FCDADLi>
                                        <styled_F.FCDADLA>
                                            전체 선택
                                        </styled_F.FCDADLA>
                                    </styled_F.FCDADLi>
                                    {/*선택 삭제*/}
                                    {/*선택된 제품이 없을 경우 alert("삭제 할 음료를 선택 하세요.")*/}
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
                        )
                    ) : ""}
                </styled_F.FCDFieldset1>
            </styled_F.FCDArticle1>
        </styled_F.FCDd1>
    );
};