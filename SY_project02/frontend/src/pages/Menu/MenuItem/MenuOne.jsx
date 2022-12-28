import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { AllBox } from "../../../styled/AllBox";
import * as styled_Menu from "../../../styled/Menu/Menu";
import * as styled_MenuItem from "../../../styled/Menu/MenuItem";
import { ButtonSmallBox } from "../../../styled/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { addToFavorites } from "../../../features/favorite/favoriteSlice";

const DetailOne = (props) => {
  const [sizeData, setSizeData] = useState("");
  const [Cooked, setCooked] = useState("");
  const [TakeOut, setTakeOut] = useState("");
  const [DrinkType, setDrinkType] = useState("");
  const params = useParams();
  const EatTypeInValid = props.EatType.SHOP || props.EatType.TAKEOUT;
  const CookedInValid = props.CookType.COOKED || props.CookType.NOTCOOKED; // 어떤 식으로 해야할까?
  const DrinkTypeInValid = props.DrinkType.HOT || props.DrinkType.ICED;
  const SizeInValid = props.price.Desert !== "0" && props.price.Desert;

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
      console.log(
        props.productId,
        props.name,
        sizeData,
        props.price[sizeData],
        DrinkType,
        Cooked,
        TakeOut
      );
      console.log(params, props.productId);

      e.preventDefault();
      dispatch(
        addToFavorites({
          id: props.productId,
          name: props.name,
          size: sizeData,
          price: props.price[sizeData],
          whatDateTime: whatDateTime,
          category: props.category,
          amount: 1,
        })
      );
      alert("나만의 음료에 등록했습니다.");
      // 새로고침 되면서 favorite에 들어간 내용들이 전부 초기화됨....
      // if(window.confirm("나만의 음료에 등록했습니다. My 메뉴로 이동하시겠습니까?")) {
      //     window.location.href = "/favorite"
      // }
    }
  };

  const onClickFavoriteFood = (e) => {
    if (sizeData === "") {
      e.preventDefault();
      alert("워밍 옵션을 선택해주세요.");
    } else {
      e.preventDefault();
      dispatch(
        addToFavorites({
          id: props.productId,
          name: props.name,
          price: props.price.Desert,
          whatDateTime: whatDateTime,
          category: props.category,
          amount: 1,
        })
      );
      alert("나만의 푸드에 등록했습니다.");
      // 새로고침 되면서 favorite에 들어간 내용들이 전부 초기화됨....
      // if(window.confirm("나만의 음료에 등록했습니다. My 메뉴로 이동하시겠습니까?")) {
      //     window.location.href = "/favorite"
      // }
    }
  };

  const onClickCart = (e) => {
    if (EatTypeInValid && CookedInValid) {
      if (Cooked === "" || TakeOut === "") {
        alert("옵션을 선택해주세요!(푸드)"); // 푸드 종류 dispatch
        console.log(Cooked, TakeOut);
      } else {
        alert("장바구니 등록 완료");
      }
    } else if (!SizeInValid && EatTypeInValid && DrinkTypeInValid) {
      if (sizeData === "" || DrinkType === "" || TakeOut === "") {
        // 음료 dispatch
        alert("옵션을 선택해주세요(음료)");
      } else {
        e.preventDefault();
        dispatch(
          addToCart({
            id: props.productId,
            name: props.name,
            size: sizeData,
            price: props.price[sizeData],
            category: props.category,
          })
        );
      }
    } else if (EatTypeInValid || CookedInValid) {
      // 푸드 중에 warm 이 없는 카테고리들 dispatch
      if (TakeOut === "") {
        alert("옵션을 선택해주세요~! 테이크 아웃 단독 ");
        console.log(SizeInValid, props);
      } else {
        alert("장바구니 등록 완료");
      }
    }
  };

  const onClickFoodCart = (e) => {
    if (Cooked === "" || TakeOut === "") {
      alert("원하시는 옵션을 선택해주세요!");
    } else {
      e.preventDefault();

      console.log(
        "id:",
        props.productId,
        "name:",
        props.name,
        "size:",
        "Desert",
        "price:",
        props.price["Desert"],
        "category:",
        props.category
      );
    }

    const onClickCartFood = (e) => {
      if (sizeData === "") {
        e.preventDefault();
        alert("워밍 옵션을 선택해주세요.");
      } else {
        e.preventDefault();
        dispatch(
          addToCart({
            id: props.productId,
            name: props.name,
            price: props.price.Desert,
            whatDateTime: whatDateTime,
            category: props.category,
          })
        );
        alert("장바구니에 등록했습니다.");
      }
    };
  };

  return (
    <AllBox>
      <Header />
      {props && (
        <styled_Menu.Main>
          <styled_Menu.ItemTitle>
            <h2>{props.name}</h2>
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
                  {props.price.Desert && replaceNumber(props.price.Desert)}원
                </styled_MenuItem.TextBoxSpan>
              )}

              {/* <span> Nitro Vanilla Cream</span> */}

              {(CookedInValid || DrinkTypeInValid) && (
                <styled_MenuItem.Fieldset>
                  {CookedInValid ? (
                    <legend>Cooked</legend>
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
                        {props.price.Tall && replaceNumber(props.price.Tall)}원
                      </label>
                    </>
                  )}

                  {CookedInValid && (
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
                        {props.price.Venti && replaceNumber(props.price.Venti)}
                        원
                      </label>
                    </>
                  )}
                </styled_MenuItem.Fieldset>
              )}
              <styled_MenuItem.smallFieldset>
                {DrinkTypeInValid && (
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
                  <ButtonSmallBox onClick={onClickFoodCart}>
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
      )}
    </AllBox>
  );
};

export default DetailOne;
