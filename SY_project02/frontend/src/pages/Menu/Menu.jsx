import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as styled_Menu from "../../styled/Menu/Menu";
import { ButtonBox } from "../../styled/Button";
import Nutrition from "./Nutrition";
import CheckboxLabels from "./MenuItem/CheckboxLabels";
import { AllBox } from "../../styled/AllBox";
import axios from "axios";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuItem/MenuCard";
import MenuTheme from "../../image/Menu/MenuTheme.png";
import { API } from "../../utils/urls";

const Menu = () => {
  const [ClassificationInValid, setClassificationInValid] =
    useState(true);
  const [DetailBox, setDetailBox] = useState(true);
  const [smallBox, setSmallBox] = useState(false);
  const [hidden, setHidden] = useState("");
  const [categoryTheme, setCategoryThema] = useState(true);
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [dataCategory, setDataCategory] = useState([]);
  const [newInValid, setNewInValid] = useState(false);
  const [limitInValid, setLimitInValid] = useState(false);

  const params = useParams();

  const paramsInValid =
    params.Category === "케이크" ||
    params.Category === "브레드" ||
    params.Category === "샌드위치" ||
    params.Category === "따뜻한 푸드" ||
    params.Category === "샐러드";

  const checkedItemHandler = (box, id, isChecked, target) => {
    if (isChecked) {
      setData([]);
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      setData([]);
    }

    return checkedItems;
  };

  useEffect(() => {
    checkedItems.clear();
    setClassificationInValid(true);

    let p2 = [];
    const fetchData = async () => {
      const response = await axios.get(`${API}&Category=분류&Name=`);

      if (paramsInValid) {
        p2 = ["전체 푸드 보기"];
        const filterData = response.data.filter((params) => {
          return (
            params.Category === "케이크" ||
            params.Category === "브레드" ||
            params.Category === "샌드위치" ||
            params.Category === "따뜻한 푸드" ||
            params.Category === "샐러드"
          );
        });
        filterData.forEach((v) => {
          if (!p2.includes(v.Category)) p2.push(v.Category);
        });
        setDataCategory(p2);
        checkedItems.add(params.Category);
        setCheckedItems(checkedItems);
      } else if (params.Category === "전체 푸드 보기") {
        p2 = ["전체 푸드 보기"];
        const filterData = response.data.filter((params) => {
          return (
            params.Category === "케이크" ||
            params.Category === "브레드" ||
            params.Category === "샌드위치" ||
            params.Category === "따뜻한 푸드" ||
            params.Category === "샐러드"
          );
        });

        filterData.forEach((v) => {
          if (!p2.includes(v.Category)) p2.push(v.Category);
        });
        setDataCategory(p2);

        checkedItems.add(params.Category);
        setCheckedItems(checkedItems);
      } else if (!paramsInValid) {
        p2 = ["전체 음료 보기"];
        const filterData = response.data.filter((params) => {
          return (
            params.Category !== "케이크" &&
            params.Category !== "브레드" &&
            params.Category !== "샌드위치" &&
            params.Category !== "따뜻한 푸드" &&
            params.Category !== "샐러드"
          );
        });
        filterData.forEach((v) => {
          if (!p2.includes(v.Category)) p2.push(v.Category);
        });
        setDataCategory(p2);
        checkedItems.add(params.Category);
        setCheckedItems(checkedItems);
      }

      setDataCategory(p2);

      checkedItems.add(params.Category);
      setCheckedItems(checkedItems);
    };
    fetchData();
  }, [params.Category, checkedItems]);

  const classificationInValidHandler = () => {
    setClassificationInValid(!ClassificationInValid);
  };

  const detailBoxHandler = () => {
    setDetailBox(!DetailBox);
  };

  const smallBoxTrueHanlder = () => {
    setSmallBox(true);
    setHidden("hidden");
  };

  const smallBoxFalseHanlder = () => {
    setSmallBox(false);
    setHidden("");
  };

  const checkboxHandler = () => {
    setDetailBox(false);
  };

  const categoryThemaTrueHandler = () => {
    setCategoryThema(true);
  };

  const categoryThemaFalseHandler = () => {
    setCategoryThema(false);
  };

  return (
    <AllBox>
      <Header />

      <styled_Menu.Main>
        <styled_Menu.ItemTitle>
          {dataCategory[1] === "브레드" ? (
            <styled_Menu.ItemTitleBox>
              <h1>푸드</h1>
            </styled_Menu.ItemTitleBox>
          ) : (
            <styled_Menu.ItemTitleBox>
              <h1>음료</h1>
            </styled_Menu.ItemTitleBox>
          )}
        </styled_Menu.ItemTitle>
        {ClassificationInValid ? (
          <styled_Menu.FirstContainer height="55">
            <styled_Menu.MainInner>
              <p>분류 보기</p>{" "}
              <img
                src="//image.istarbucks.co.kr/common/img/menu/list_down_btn.png"
                alt=""
                onClick={classificationInValidHandler}
              />
            </styled_Menu.MainInner>
            <styled_Menu.CategoryBox>
              {categoryTheme ? (
                <>
                  <styled_Menu.ButtonBoxCotainer>
                    <ButtonBox
                      onClick={categoryThemaTrueHandler}
                      background="#006633"
                      color="#fff"
                      underline="underline"
                    >
                      <span>카테고리</span>
                    </ButtonBox>
                    <ButtonBox
                      onClick={categoryThemaFalseHandler}
                      background="#f4f4f1"
                    >
                      <span>테마</span>
                    </ButtonBox>
                  </styled_Menu.ButtonBoxCotainer>

                  <styled_Menu.CheckBox>
                    {paramsInValid
                      ? dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })
                      : dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })}
                  </styled_Menu.CheckBox>
                </>
              ) : (
                <>
                  <styled_Menu.ButtonBoxCotainer>
                    <ButtonBox
                      onClick={categoryThemaTrueHandler}
                      background="#f4f4f1"
                    >
                      <span>카테고리</span>
                    </ButtonBox>
                    <ButtonBox
                      onClick={categoryThemaFalseHandler}
                      background="#006633"
                      color="#fff"
                      underline="underline"
                    >
                      <span>테마</span>
                    </ButtonBox>
                  </styled_Menu.ButtonBoxCotainer>
                  <styled_Menu.CheckBox none="none">
                    {paramsInValid
                      ? dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })
                      : dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })}
                  </styled_Menu.CheckBox>
                  <img alt="이미지가 없습니다" src={MenuTheme} />
                </>
              )}
            </styled_Menu.CategoryBox>
          </styled_Menu.FirstContainer>
        ) : (
          <styled_Menu.FirstContainer height="260">
            <styled_Menu.MainInner>
              <p>분류 보기 </p>

              <img
                src="https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png"
                alt=""
                onClick={classificationInValidHandler}
              />
            </styled_Menu.MainInner>
            <styled_Menu.CategoryBox>
              {categoryTheme ? (
                <>
                  <styled_Menu.ButtonBoxCotainer>
                    <ButtonBox
                      onClick={categoryThemaTrueHandler}
                      background="#006633"
                      color="#fff"
                      underline="underline"
                    >
                      <span>카테고리</span>
                    </ButtonBox>
                    <ButtonBox
                      onClick={categoryThemaFalseHandler}
                      background="#f4f4f1"
                    >
                      <span>테마</span>
                    </ButtonBox>
                  </styled_Menu.ButtonBoxCotainer>

                  <styled_Menu.CheckBox>
                    {paramsInValid
                      ? dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })
                      : dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })}
                  </styled_Menu.CheckBox>
                </>
              ) : (
                <>
                  <styled_Menu.ButtonBoxCotainer>
                    <ButtonBox
                      onClick={categoryThemaTrueHandler}
                      background="#f4f4f1"
                    >
                      <span>카테고리</span>
                    </ButtonBox>
                    <ButtonBox
                      onClick={categoryThemaFalseHandler}
                      background="#006633"
                      color="#fff"
                      underline="underline"
                    >
                      <span>테마</span>
                    </ButtonBox>
                  </styled_Menu.ButtonBoxCotainer>
                  <styled_Menu.CheckBox none="none">
                    {paramsInValid
                      ? dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })
                      : dataCategory.map((value, index) => {
                          return (
                            <CheckboxLabels
                              checkedItemHandler={checkedItemHandler}
                              Category={value}
                              params={params}
                              checkedItems={checkedItems}
                            >
                              {value.Category}
                            </CheckboxLabels>
                          );
                        })}
                  </styled_Menu.CheckBox>
                  <img alt="이미지가 없습니다" src={MenuTheme} />
                </>
              )}
            </styled_Menu.CategoryBox>
          </styled_Menu.FirstContainer>
        )}
        <styled_Menu.SmallBoxContanier>
          {smallBox ? (
            <>
              <styled_Menu.SmallBox
                url="https://image.istarbucks.co.kr/common/img/menu/icon_pic.png"
                onClick={smallBoxFalseHanlder}
                backgroundColor="#fff"
                color="#666"
                width="69"
              >
                사진으로 보기
              </styled_Menu.SmallBox>
              <styled_Menu.SmallBox
                url="https://image.istarbucks.co.kr/common/img/menu/icon_ante_on.png"
                onClick={smallBoxTrueHanlder}
                backgroundColor="#666"
                color="#fff"
                width="80"
              >
                영양정보로 보기
              </styled_Menu.SmallBox>
            </>
          ) : (
            <>
              <styled_Menu.SmallBox
                url="https://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png"
                onClick={smallBoxFalseHanlder}
                backgroundColor="#666"
                color="#fff"
                underline="underline"
                width="69"
              >
                사진으로 보기
              </styled_Menu.SmallBox>
              <styled_Menu.SmallBox
                url="https://image.istarbucks.co.kr/common/img/menu/icon_ante.png"
                onClick={smallBoxTrueHanlder}
                backgroundColor="#fff"
                color="#666"
                width="80"
              >
                영양정보로 보기
              </styled_Menu.SmallBox>
            </>
          )}

          {DetailBox ? (
            <styled_Menu.ClassificationContainer
              size="hidden"
              hidden={hidden}
            >
              <styled_Menu.ClassificationBox
                onClick={detailBoxHandler}
              >
                상세분류
              </styled_Menu.ClassificationBox>
            </styled_Menu.ClassificationContainer>
          ) : (
            <styled_Menu.ClassificationContainer>
              <styled_Menu.ClassificationBox
                onClick={detailBoxHandler}
              >
                상세분류
              </styled_Menu.ClassificationBox>

              <styled_Menu.ClassificationList
                onClick={checkboxHandler}
              >
                <input
                  type="checkbox"
                  id="new"
                  checked={newInValid}
                  onClick={() => {
                    setNewInValid(!newInValid);
                  }}
                  onChange={() => {}}
                />
                <img
                  src="//image.istarbucks.co.kr/common/img/menu/smark01.png"
                  alt="이미지없음"
                />
                <label htmlFor="new">
                  <span>신규 출시된 메뉴</span>{" "}
                </label>
              </styled_Menu.ClassificationList>
              <styled_Menu.ClassificationList
                onClick={checkboxHandler}
              >
                <input
                  type="checkbox"
                  id="season"
                  checked={limitInValid}
                  onClick={() => {
                    setLimitInValid(!limitInValid);
                  }}
                  onChange={() => {}}
                />
                <img
                  src="//image.istarbucks.co.kr/common/img/menu/smark02.png"
                  alt="이미지없음"
                />
                <label htmlFor="season">
                  <span>한정기간 출시되는 시즌성 메뉴</span>
                </label>
              </styled_Menu.ClassificationList>
            </styled_Menu.ClassificationContainer>
          )}
        </styled_Menu.SmallBoxContanier>
        {newInValid || limitInValid ? (
          <styled_Menu.NewlimitedBox>
            <p>검색 결과가 없습니다.</p>
          </styled_Menu.NewlimitedBox>
        ) : smallBox &&
          (checkedItems.has("전체 음료 보기") ||
            checkedItems.has("전체 푸드 보기")) ? (
          <>
            {dataCategory.map((value, index) => {
              return (
                (value !== "전체 음료 보기" ||
                  value !== "전체 푸드 보기") && (
                  <Nutrition Category={value} key={index} />
                )
              );
            })}
          </>
        ) : checkedItems.has("전체 푸드 보기") ||
          checkedItems.has("전체 음료 보기") ? (
          <>
            {dataCategory.map((value, index) => {
              console.log(index);
              return (
                (value !== "전체 푸드 보기" ||
                  value !== "전체 음료 보기") && (
                  <MenuCard Category={value} />
                )
              );
            })}
          </>
        ) : (
          <>
            {dataCategory.map((value, index) => {
              return smallBox
                ? checkedItems.has(value) && (
                    <Nutrition Category={value} key={index} />
                  )
                : checkedItems.has(value) && (
                    <MenuCard Category={value} key={index} />
                  );
            })}
          </>
        )}
      </styled_Menu.Main>
    </AllBox>
  );
};
export default Menu;
