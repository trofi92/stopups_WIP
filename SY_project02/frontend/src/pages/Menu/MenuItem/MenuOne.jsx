import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { AllBox } from "../../../styled/AllBox";
import * as styled_Menu from "../../../styled/Menu/Menu";
import * as styled_MenuItem from "../../../styled/Menu/MenuItem";
import { ButtonSmallBox } from "../../../styled/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { Footer } from "../../../components/Footer/Footer";
import axios from "axios";
import { SERVER_URL } from "../../../utils/urls";

const MenuOne = (props) => {
  const [sizeData, setSizeData] = useState("");
  const [cooked, setCooked] = useState("");
  const [takeOut, setTakeOut] = useState("");
  const [drinkType, setDrinkType] = useState("");
  const user = useSelector((state) => state.user);

  const eatTypeInValid = props.EatType.SHOP || props.EatType.TAKEOUT;
  const cookedInValid =
    props.CookType.COOKED || props.CookType.NOTCOOKED;
  const drinkTypeInValid =
    props.DrinkType.HOT || props.DrinkType.ICED;
  const sizeInValid =
    props.price.Desert !== "0" && props.price.Desert;
  const replaceNumber = (value) =>
    value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let now = new Date();
  let year = now.getFullYear();
  let todayMont = now.getMonth() + 1;
  let todayDate = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const whatDateTime = `${year}-${todayMont}-${todayDate} ${hour}:${minutes}:${seconds}`;

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setSizeData(e.target.value);
  };
  const onChangeCookedHandler = (e) => {
    setCooked(e.target.value);
  };
  const onChangeTakeOutHandler = (e) => {
    setTakeOut(e.target.value);
  };
  const onChangeDrinkTypeHandler = (e) => {
    setDrinkType(e.target.value);
  };

  const data = {
    email: user.email,
    pId: props.productId,
    price: props.price[sizeData]
      ? props.price[sizeData]
      : props.price.Desert,
    cookType: cooked,
    drinkType: drinkType,
    eatType: takeOut,
    whatDateTime: whatDateTime,
    category: props.category,
    size: sizeData,
  };

  const addFavoriteData = async () => {
    await axios.put(
      `${SERVER_URL}/bookmarks/addBookmarks`,
      {
        data: data,
      },
      { withCredentials: true }
    );
  };

  const CategoryInValid =
    props.category === "케이크" ||
    props.category === "브레드" ||
    props.category === "샌드위치" ||
    props.category === "따뜻한 푸드" ||
    props.category === "샐러드";

  const onClickFavorite = () => {
    if (eatTypeInValid && cookedInValid) {
      if (cooked === "" || takeOut === "") {
        alert("옵션을 선택해 주세요.");
      } else {
        addFavoriteData();
        alert("나만의 푸드에 등록했습니다.");
      }
    } else if (!sizeInValid && eatTypeInValid && drinkTypeInValid) {
      if (sizeData === "" || drinkType === "" || takeOut === "") {
        alert("옵션을 선택해 주세요.");
      } else {
        addFavoriteData();
        alert("나만의 음료에 등록했습니다.");
      }
    } else if (eatTypeInValid || cookedInValid) {
      if (takeOut === "") {
        alert("옵션을 선택해 주세요.");
      } else {
        addFavoriteData();
        alert("나만의 푸드에 등록했습니다.");
      }
    }
  };

  const onClickCart = (e) => {
    if (eatTypeInValid && cookedInValid) {
      if (cooked === "" || takeOut === "") {
        alert("옵션을 선택해 주세요.");
      } else {
        e.preventDefault();
        dispatch(
          addToCart({
            id: props.productId,
            name: props.name,
            price: props.price.Desert,
            cooked: cooked,
            takeout: takeOut,
            whatDateTime: whatDateTime,
            category: props.category,
          })
        );
        alert("장바구니에 등록했습니다.");
      }
    } else if (!sizeInValid && eatTypeInValid && drinkTypeInValid) {
      if (sizeData === "" || drinkType === "" || takeOut === "") {
        alert("옵션을 선택해 주세요.");
      } else {
        e.preventDefault();
        dispatch(
          addToCart({
            id: props.productId,
            name: props.name,
            size: sizeData,
            ice: drinkType,
            takeout: takeOut,
            price: props.price[sizeData],
            whatDateTime: whatDateTime,
            category: props.category,
          })
        );
        alert("장바구니에 등록했습니다.");
      }
    } else if (eatTypeInValid || cookedInValid) {
      if (takeOut === "") {
        alert("옵션을 선택해 주세요.");
      } else {
        e.preventDefault();
        dispatch(
          addToCart({
            id: props.productId,
            name: props.name,
            price: props.price.Desert,
            takeout: takeOut,
            whatDateTime: whatDateTime,
            category: props.category,
          })
        );
        alert("장바구니에 등록했습니다.");
      }
    }
  };

  return (
    <AllBox>
      <Header />
      <styled_Menu.Main>
        <styled_Menu.ItemTitle>
          <styled_Menu.ItemTitleBox>
            <h2>{props.name}</h2>
          </styled_Menu.ItemTitleBox>
        </styled_Menu.ItemTitle>
        <styled_MenuItem.DetailBox>
          <styled_MenuItem.DetailImageBox>
            <styled_MenuItem.Image url={props.url} />
            <styled_MenuItem.SmallImage url={props.url} />
          </styled_MenuItem.DetailImageBox>
          <styled_MenuItem.DetailTextBox>
            <span>{props.name}</span>
            {props.price.Desert !== "0" && props.price.Desert && (
              <styled_MenuItem.TextBoxSpan>
                {props.price.Desert &&
                  replaceNumber(props.price.Desert)}
                원
              </styled_MenuItem.TextBoxSpan>
            )}
            {(cookedInValid || drinkTypeInValid) && (
              <styled_MenuItem.Fieldset>
                {cookedInValid ? (
                  <legend>cooked</legend>
                ) : (
                  <legend>사이즈</legend>
                )}

                {props.price.Tall !== "0" && (
                  <>
                    <styled_MenuItem.Input
                      id="Tall"
                      onChange={onChangeHandler}
                    />

                    <label htmlFor="Tall">
                      Tall :
                      {props.price.Tall &&
                        replaceNumber(props.price.Tall)}
                      원
                    </label>
                  </>
                )}

                {cookedInValid && (
                  <>
                    {props.CookType.COOKED && (
                      <>
                        <styled_MenuItem.Input
                          id="Desert"
                          onChange={onChangeCookedHandler}
                        />
                        <label htmlFor="Desert">따뜻하게 데움</label>
                      </>
                    )}

                    {props.CookType.NOTCOOKED && (
                      <>
                        <styled_MenuItem.Input
                          id="Desert1"
                          onChange={onChangeCookedHandler}
                        />
                        <label htmlFor="Desert1">데우지 않음</label>
                      </>
                    )}
                  </>
                )}

                {props.price.Grande !== "0" && (
                  <>
                    <styled_MenuItem.Input
                      id="Grande"
                      value="Grande"
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="Grande">
                      Grande :
                      {props.price.Grande &&
                        replaceNumber(props.price.Grande)}
                      원
                    </label>
                  </>
                )}
                {props.price.Venti !== "0" && (
                  <>
                    <styled_MenuItem.Input
                      id="Venti"
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="Venti">
                      Venti :
                      {props.price.Venti &&
                        replaceNumber(props.price.Venti)}
                      원
                    </label>
                  </>
                )}
              </styled_MenuItem.Fieldset>
            )}

            <styled_MenuItem.smallFieldset>
              {drinkTypeInValid && (
                <styled_MenuItem.Fieldset width="100%">
                  <legend>ICE & HOT</legend>
                  {props.DrinkType.ICED && (
                    <>
                      <styled_MenuItem.Input
                        name="ICE"
                        id="ICE"
                        onChange={onChangeDrinkTypeHandler}
                      />
                      <label htmlFor="ICE">ICE</label>
                    </>
                  )}
                  {props.DrinkType.HOT && (
                    <>
                      <styled_MenuItem.Input
                        name="ICE"
                        id="HOT"
                        onChange={onChangeDrinkTypeHandler}
                      />
                      <label htmlFor="HOT">HOT</label>
                    </>
                  )}
                </styled_MenuItem.Fieldset>
              )}
              <styled_MenuItem.Fieldset width="100%">
                <legend>Takeout</legend>
                {props.EatType.TAKEOUT && (
                  <>
                    <styled_MenuItem.Input
                      name="takeout"
                      id="takeout"
                      onChange={onChangeTakeOutHandler}
                    />
                    <label htmlFor="takeout">테이크 아웃</label>
                  </>
                )}
                {props.EatType.SHOP && (
                  <>
                    <styled_MenuItem.Input
                      name="takeout"
                      id="eat-in"
                      onChange={onChangeTakeOutHandler}
                    />
                    <label htmlFor="eat-in">매장</label>
                  </>
                )}
              </styled_MenuItem.Fieldset>
            </styled_MenuItem.smallFieldset>
            <styled_Menu.ButtonBoxCotainer>
              {CategoryInValid ? (
                <ButtonSmallBox onClick={onClickFavorite}>
                  <p>나만의 푸드로 등록</p>
                </ButtonSmallBox>
              ) : (
                <ButtonSmallBox onClick={onClickFavorite}>
                  <p>나만의 음료로 등록</p>
                </ButtonSmallBox>
              )}
              <ButtonSmallBox onClick={onClickCart}>
                <p>장바구니 등록</p>
              </ButtonSmallBox>
            </styled_Menu.ButtonBoxCotainer>
            <p>{props.desc}</p>
            <styled_MenuItem.Ntitle>
              <p>
                제품 영양 정보
                <br />
                <span> {props.defaultSize}</span>
              </p>
              <br></br>
            </styled_MenuItem.Ntitle>
            <styled_MenuItem.NDetail>
              <ul>
                <li>
                  <dl>
                    <dt>1회 제공량(kcal)</dt>
                    <dd>{props.kcal}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>포화지방(g)</dt>
                    <dd>{props.fat}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>단백질(g)</dt>
                    <dd>{props.protein}</dd>
                  </dl>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <dl>
                    <dt>나트륨 (mg)</dt>
                    <dd>{props.na}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>당류 (g)</dt>
                    <dd>{props.sugar}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>카페인 (mg)</dt>
                    <dd>{props.caffeine}</dd>
                  </dl>
                </li>
              </ul>
            </styled_MenuItem.NDetail>
          </styled_MenuItem.DetailTextBox>
        </styled_MenuItem.DetailBox>
      </styled_Menu.Main>
      <Footer />
    </AllBox>
  );
};

export default MenuOne;
