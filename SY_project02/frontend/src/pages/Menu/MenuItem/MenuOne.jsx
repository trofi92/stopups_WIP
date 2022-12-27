import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../../components/Header/Header";
import {AllBox} from "../../../styled/AllBox";
import * as styled_Menu from "../../../styled/Menu/Menu";
import * as styled_MenuItem from "../../../styled/Menu/MenuItem";
import {ButtonSmallBox} from "../../../styled/Button";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../../features/cart/cartSlice";
import {addToFavorites} from "../../../features/favorite/favoriteSlice";
import {Footer} from "../../../components/Footer/Footer";
import {MenuDescP} from "../../../styled/Menu/MenuItem";

const DetailOne = (props) => {
    const [sizeData, setSizeData] = useState("");
    const replaceNumber = (value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let now = new Date();
    let year = now.getFullYear();
    let todayMont = now.getMonth() + 1;
    let todayDate = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const whatDateTime = `${year}-${todayMont}-${todayDate} ${hour}:${minutes}:${seconds}`;

    const dispatch = useDispatch();
    const params = useParams();

    const InValid =
        props.price.Desert !== "0" && props.price.hasOwnProperty("Desert");

    const onChangeHandler = (e) => {
        setSizeData(e.target.value);
    };

    const CategoryInValid =
        props.category === "케이크" ||
        props.category === "브레드" ||
        props.category === "샌드위치" ||
        props.category === "따뜻한 푸드" ||
        props.category === "샐러드";

    const onClickFavorite = (e) => {
        if (sizeData === "") {
            e.preventDefault();
            alert("사이즈를 선택해주세요.");
        } else {
            e.preventDefault();
            dispatch(addToFavorites({
                id: props.productId,
                name: props.name,
                size: sizeData,
                price: props.price[sizeData],
                whatDateTime: whatDateTime,
                category: props.category,
                amount: 1,
            }))
            alert("나만의 푸드에 등록했습니다.")
            // 새로고침 되면서 favorite에 들어간 내용들이 전부 초기화됨....
            // if(window.confirm("나만의 음료에 등록했습니다. My 메뉴로 이동하시겠습니까?")) {
            //     window.location.href = "/favorite"
            // }
        }
    }

    const onClickFavoriteFood = (e) => {
        if (sizeData === "") {
            e.preventDefault();
            alert("워밍 옵션을 선택해주세요.");
        } else {
            e.preventDefault();
            dispatch(addToFavorites({
                id: props.productId,
                name: props.name,
                price: props.price.Desert,
                whatDateTime: whatDateTime,
                category: props.category,
                amount: 1,
            }))
            alert("나만의 푸드에 등록했습니다.")
            // 새로고침 되면서 favorite에 들어간 내용들이 전부 초기화됨....
            // if(window.confirm("나만의 음료에 등록했습니다. My 메뉴로 이동하시겠습니까?")) {
            //     window.location.href = "/favorite"
            // }
        }
    };

    const onClickCart = (e) => {
        if (sizeData === "") {
            e.preventDefault();
            alert("사이즈를 선택해주세요.");
        } else {
            e.preventDefault();
            dispatch(addToCart({
                id: props.productId,
                name: props.name,
                size: sizeData,
                price: props.price[sizeData],
                category: props.category
            }))
            alert("장바구니에 등록했습니다.")
        }
    };

    const onClickCartFood = (e) => {
        if (sizeData === "") {
            e.preventDefault();
            alert("워밍 옵션을 선택해주세요.");
        } else {
            e.preventDefault();
            dispatch(addToCart({
                id: props.productId,
                name: props.name,
                price: props.price.Desert,
                whatDateTime: whatDateTime,
                category: props.category,
            }))
            alert("장바구니에 등록했습니다.")
        }
    };

    return (
        <AllBox>
            <Header/>
            <styled_Menu.Main>
                <styled_Menu.ItemTitle>
                    <styled_Menu.ItemTitleBox>
                        <h2>{props.name}</h2>
                    </styled_Menu.ItemTitleBox>
                </styled_Menu.ItemTitle>
                <styled_MenuItem.DetailBox>
                    <styled_MenuItem.DetailImageBox>
                        <styled_MenuItem.Image url={props.url}/>
                        <styled_MenuItem.SmallImage url={props.url}/>
                    </styled_MenuItem.DetailImageBox>
                    <styled_MenuItem.DetailTextBox>
                        <span>
                          {props.name}
                        </span>
                        {props.price.Desert !== "0" && props.price.Desert && (
                            <styled_MenuItem.TextBoxSpan>
                                {props.price.Desert && replaceNumber(props.price.Desert)}원
                            </styled_MenuItem.TextBoxSpan>
                        )}

                        {/* <span> Nitro Vanilla Cream</span> */}

                        <styled_MenuItem.Fieldset>
                            {props.price.Tall !== "0" && (
                                <>
                                    <legend>사이즈</legend>
                                    <styled_MenuItem.Input id="Tall" onChange={onChangeHandler}/>

                                    <label htmlFor="Tall">
                                        Tall : {props.price.Tall && replaceNumber(props.price.Tall)}
                                        원
                                    </label>
                                </>
                            )}

                            {InValid && (
                                <>
                                    <legend>워밍 옵션</legend>
                                    <styled_MenuItem.Input
                                        id="Desert"
                                        onChange={onChangeHandler}
                                    />

                                    <label htmlFor="Desert">따뜻하게 데움</label>

                                    <styled_MenuItem.Input
                                        id="Desert1"
                                        onChange={onChangeHandler}
                                    />
                                    <label htmlFor="Desert1">데우지 않음</label>
                                </>
                            )}

                            {props.price.Grande !== "0" && (
                                <>
                                    <styled_MenuItem.Input
                                        id="Grande"
                                        onChange={onChangeHandler}
                                    />
                                    <label htmlFor="Grande">
                                        Grande :
                                        {props.price.Grande && replaceNumber(props.price.Grande)}원
                                    </label>
                                </>
                            )}
                            {props.price.Venti !== "0" && (
                                <>
                                    <styled_MenuItem.Input
                                        id="Venti"
                                        onChange={onChangeHandler}
                                    />
                                    <label for="Venti">
                                        Venti :
                                        {props.price.Venti && replaceNumber(props.price.Venti)}원
                                    </label>
                                </>
                            )}
                        </styled_MenuItem.Fieldset>
                        <styled_MenuItem.smallFieldset>
                            {!(props.price.Desert !== "0" && props.price.Desert) && (
                                <styled_MenuItem.Fieldset width="100%">
                                    <legend>ICE & HOT</legend>
                                    <styled_MenuItem.Input name="ICE" id="ICE"/>
                                    <label for="ICE">ICE</label>
                                    <styled_MenuItem.Input name="ICE" id="HOT"/>
                                    <label for="HOT">HOT</label>
                                </styled_MenuItem.Fieldset>
                            )}
                            <styled_MenuItem.Fieldset width="100%">
                                <legend>Takeout</legend>
                                <styled_MenuItem.Input name="takeout" id="takeout"/>
                                <label for="takeout">take-out</label>
                                <styled_MenuItem.Input name="takeout" id="eat-in"/>
                                <label for="eat-in">eat-in</label>
                            </styled_MenuItem.Fieldset>
                        </styled_MenuItem.smallFieldset>
                        <styled_Menu.ButtonBoxCotainer>
                            {CategoryInValid ? (
                                <>
                                    <ButtonSmallBox onClick={onClickFavoriteFood}>
                                        <p>나만의 푸드로 등록</p>
                                    </ButtonSmallBox>
                                    <ButtonSmallBox onClick={onClickCartFood}>
                                        <p>장바구니 등록</p>
                                    </ButtonSmallBox>
                                </>
                            ) : (
                                <>
                                    <ButtonSmallBox onClick={onClickFavorite}>
                                        <p>나만의 음료로 등록</p>
                                    </ButtonSmallBox>
                                    <ButtonSmallBox onClick={onClickCart}>
                                        <p>장바구니 등록</p>
                                    </ButtonSmallBox>
                                </>
                            )}
                        </styled_Menu.ButtonBoxCotainer>
                        <styled_MenuItem.MenuDescP>{props.desc}</styled_MenuItem.MenuDescP>
                        <styled_MenuItem.Ntitle>
                            <p>
                                제품 영양 정보
                            </p>
                            <span> {props.defaultSize}</span>
                        </styled_MenuItem.Ntitle>
                        <styled_MenuItem.NDetail>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            1회 제공량(kcal)
                                        </dt>
                                        <dd>{props.kcal}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            포화지방(g)
                                        </dt>
                                        <dd>{props.fat}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            단백질(g)
                                        </dt>
                                        <dd>{props.protein}</dd>
                                    </dl>
                                </li>
                            </ul>
                            <hr/>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            나트륨 (mg)
                                        </dt>
                                        <dd>{props.na}</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            당류 (g)
                                        </dt>
                                        <dd>{props.sugar}</dd>
                                    </dl>
                                </li>
                                {" "}
                                <li>
                                    <dl>
                                        <dt>
                                            카페인 (mg)
                                        </dt>
                                        <dd>{props.caffeine}</dd>
                                    </dl>
                                </li>
                            </ul>
                        </styled_MenuItem.NDetail>
                    </styled_MenuItem.DetailTextBox>
                </styled_MenuItem.DetailBox>
            </styled_Menu.Main>

            <Footer/>
        </AllBox>
    );
};

export default DetailOne;
