import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { AllBox } from "../../../styled/AllBox";
import { ItemTitle, Main, ButtonBoxCotainer } from "../../../styled/Menu/Menu";

import {
  DetailBox,
  DetailImageBox,
  DetailTextBox,
  Fieldset,
  Image,
  NDetail,
  Notice,
  Ntitle,
  SmallImage,
  TextBoxSpan,
} from "../../../styled/Menu/MenuItem";

import { ButtonSmallBox } from "../../../styled/Button";

const DetailOne = (props) => {
  const params = useParams();
  const [sizeData, setSizeData] = useState("");

  const InValid =
    props.price.Desert !== "0" && props.price.hasOwnProperty("Desert");
  const onChangeHandler = (e) => {
    setSizeData(e.target.value);
    console.log(props);
  };
  const CategoryInValid =
    props.category === "케이크" ||
    props.category === "브레드" ||
    props.category === "샌드위치" ||
    props.category === "따뜻한 푸드" ||
    props.category === "샐러드";
  const onSubmitHandler = (e) => {
    if (sizeData === "") {
      alert("사이즈를 선택해주세요!");
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(props);
      console.log(props.name, sizeData, props.price[sizeData]);
    }
  };
  const replaceNumber = (value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <AllBox>
      <Header />
      <Main>
        <ItemTitle>
          <h2>{props.name}</h2>
        </ItemTitle>
        <DetailBox>
          <DetailImageBox>
            <Image url={props.url} />
            <SmallImage url={props.url} />
          </DetailImageBox>
          <DetailTextBox>
            <span>{props.name} </span>
            {props.price.Desert !== "0" && (
              <TextBoxSpan>
                {props.price.Desert && replaceNumber(props.price.Desert)}원
              </TextBoxSpan>
            )}

            {/* <span> Nitro Vanilla Cream</span> */}

            <Fieldset>
              <legend>사이즈</legend>

              {props.price.Tall !== "0" && (
                <div>
                  <input
                    type="radio"
                    id="Tall"
                    name="size"
                    value="Tall"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="Tall">
                    Tall : {props.price.Tall && replaceNumber(props.price.Tall)}
                    원{" "}
                  </label>
                </div>
              )}

              {InValid && (
                <>
                  <div>
                    <input
                      type="radio"
                      id="Desert"
                      name="size"
                      value="Desert"
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="Desert">따뜻하게 데움</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="Desert1"
                      name="size"
                      value="Desert"
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="Desert1">데우지 않음</label>
                  </div>
                </>
              )}

              {props.price.Grande !== "0" && (
                <div>
                  <input
                    type="radio"
                    id="Grande"
                    name="size"
                    value="Grande"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="Grande">
                    Grande :{" "}
                    {props.price.Grande && replaceNumber(props.price.Grande)}원
                  </label>
                </div>
              )}
              {props.price.Venti !== "0" && (
                <div>
                  <input
                    type="radio"
                    id="Venti"
                    name="size"
                    value="Venti"
                    onChange={onChangeHandler}
                  />
                  <label for="Venti">
                    Venti :{" "}
                    {props.price.Venti && replaceNumber(props.price.Venti)}원
                  </label>
                </div>
              )}
            </Fieldset>
            <ButtonBoxCotainer>
              {CategoryInValid ? (
                <ButtonSmallBox onClick={onChangeHandler}>
                  <p>나만의 푸드로 등록</p>
                </ButtonSmallBox>
              ) : (
                <ButtonSmallBox onClick={onChangeHandler}>
                  <p>나만의 음료로 등록</p>
                </ButtonSmallBox>
              )}
              <ButtonSmallBox>
                <p>장바구니 등록</p>
              </ButtonSmallBox>
            </ButtonBoxCotainer>

            <p>{props.desc}</p>
            <Ntitle>
              <p>
                제품 영양 정보
                <br />
                <span> {props.defaultSize}</span>
              </p>
              <br></br>
            </Ntitle>
            <NDetail>
              <ul>
                <li>
                  <dl>
                    <dt>
                      1회 제공량(kcal)<dd>{props.kcal}</dd>
                    </dt>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      포화지방(g)<dd>{props.fat}</dd>
                    </dt>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      단백질(g)<dd>{props.protein}</dd>
                    </dt>
                  </dl>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <dl>
                    <dt>
                      나트륨 (mg)<dd>{props.na}</dd>
                    </dt>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      당류 (g)<dd>{props.sugar}</dd>
                    </dt>
                  </dl>
                </li>{" "}
                <li>
                  <dl>
                    <dt>
                      카페인 (mg)<dd>{props.caffeine}</dd>
                    </dt>
                  </dl>
                </li>
              </ul>
            </NDetail>
          </DetailTextBox>
        </DetailBox>
      </Main>
    </AllBox>
  );
};

export default DetailOne;
