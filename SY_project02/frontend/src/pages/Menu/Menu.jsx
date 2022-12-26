import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import * as styled_Menu from "../../styled/Menu/Menu";
import { ButtonBox } from "../../styled/Button";
import Nutrition from "./Nutrition";
import { CheckboxLabels } from "../../styled/Menu/Menu";
import { AllBox } from "../../styled/AllBox";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailCard from "./MenuItem/MenuCard";


const Menu = () => {
  const [ClassificationInValid, setClassificationInValid] = useState(true);
  const [DetailBox, setDetailBox] = useState(true);
  const [smallBox, setSmallBox] = useState(false);
  const [hidden, setHidden] = useState("");
  const [categoryTheme, setCategoryThema] = useState(true);
  const [data1, setData1] = useState([]); //  <- 필요없는 거 랜더링 이슈 때문에 일단 만들어 놓음
  const [checkedItems, setCheckedItems] = useState(new Set()); //set을 만들어 has ,add 를 이용하여 체크박스안에 value , category 를 이용해서 어떤 체크박스가 선택됫는지 확인 ,식별을 할 수 있게 사용
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
      setData1([]); // 이게 없어지면 랜더링이 안되서 실시간으로 변경이 안됨 이유를 모르겠음 밑에 setCheckedItems 도 잇는데 왜 하나를 더 사용해야 렌더링이 되는지
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      setData1([]);
    }

    return checkedItems;
  };

  useEffect(() => {
    checkedItems.clear();
    setClassificationInValid(true);

    let p2 = []; // 전체 상품 보기는 api 에 없어서 하드코딩으로 미리 적어놓는다.,
    const fetchData = async () => {
      const response = await axios.get(
        `http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=분류&Name=`
        // { withCredentials: true }
      );

      // <- 전체 상품을 보려고 먼저 데이터에 들어오는 카테고리를 빼서 DataCategory 에 넣어준 후 이 배열을 사용해서  map 함수를 사용한다.
      if (paramsInValid) {
        p2 = ["전체 푸드 보기"];
        const filterData = response.data.filter((params) => {
          return (
            params.Category === "케이크" ||
            params.Category === "브레드" ||
            params.Category === "샌드위치" ||
            params.Category === "따뜻한 푸드" ||
            params.Category === "샐러드"

            // 왜 밑에 코드랑 같은건데 왜 다르게 출력되는거?
            // params.Category === paramsInValid
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

            // 왜 밑에 코드랑 같은건데 왜 다르게 출력되는거?
            // params.Category === paramsInValid
          );
        });

        filterData.forEach((v) => {
          if (!p2.includes(v.Category)) p2.push(v.Category);
        });
        setDataCategory(p2);
        console.log(p2, dataCategory);
        checkedItems.add(params.Category);
        setCheckedItems(checkedItems);
        console.log("---------------> hello", p2, dataCategory);
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
      setCheckedItems(checkedItems); // params 를 통해서 들어오는 params 를 통해서 set 안에 params 를 넣고 그걸 props 로 보내주면 만약 콜드브루 면 처음에 콜드브루가 checkedItems 에 담기게 되서 제일 처음에 콜드브루가 화면에 보이게 된다.
    };
    fetchData();
  }, [params.Category, checkedItems]);

  const classificationInValidHandler = () => {
    setClassificationInValid(!ClassificationInValid);
    console.log(dataCategory, params.Category);

    // 화살표를 누르면 상세보기가 켜지는 함수
  };

  const detailBoxHandler = () => {
    setDetailBox(!DetailBox);
  }; // 상세분류 박스가 누르면 true , false 로 밑에 박스가 출력되거나 사라지게 하는 함수

  const smallBoxTrueHanlder = () => {
    setSmallBox(true);
    setHidden("hidden");
    console.log(setCheckedItems);
  }; // 사진으로 보기 , 영양정보로 true , false 로 출력되는 화면이 달라짐

  const smallBoxFalseHanlder = () => {
    setSmallBox(false);
    setHidden("");
    console.log();
    // 사진으로 보기 , 영양정보로 true , false 로 출력되는 화면이 달라짐
  };

  const checkboxHandler = () => {
    setDetailBox(false);
  }; // 상세분류의 box 를 화면에 고정시키기 위해 만든 함수

  const categoryThemaTrueHandler = () => {
    setCategoryThema(true);
  }; // thema 를 true 로 만들면 checkbox 가 보이게 된다 false 가 되면 테마 박스가 보이게 된다.

  const categoryThemaFalseHandler = () => {
    setCategoryThema(false);
  }; // thema 를 true 로 만들면 checkbox 가 보이게 된다 false 가 되면 테마 박스가 보이게 된다.

  return (
    <AllBox>
      <Header />

      <styled_Menu.Main>
        <styled_Menu.ItemTitle>
          {dataCategory[1] === "브레드" ? <h1>푸드</h1> : <h1>음료</h1>}
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
          </styled_Menu.FirstContainer>
        ) : (
          <styled_Menu.FirstContainer height="255">
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
                      ? dataCategory.map((value) => {
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
                      : dataCategory.map((value) => {
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
                    {/* 처음에 none 으로 두지 않고 밑에 checkbox 를 전부 없애고 true 일때만 체크박스가 나오게 했는데 이렇게 되는경우 렌더링 때문에 issue
                  때문에 checkbox 가 풀려서 일단은 none 으로 두고 기능을 구현을 했는데 별로 좋은코드는 아닌거 같다. 왜 그런지 정확한 이유는 모르겠다. 한번 다음에 제대로 공부를 해서
                  더 좋은 코드로 작성을 해야한다.   */}
                    {paramsInValid
                      ? dataCategory.map((value) => {
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
                      : dataCategory.map((value) => {
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
                  <img
                    alt="이미지가 없습니다"
                    src="https://image.istarbucks.co.kr/upload/banner/themebnr/jAVzia_20221201102659366.jpg"
                  />
                </>
              )}
            </styled_Menu.CategoryBox>
          </styled_Menu.FirstContainer>
        )}
        <styled_Menu.SmallBoxContanier>
          {smallBox ? (
            <>
              <styled_Menu.SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png"
                onClick={smallBoxFalseHanlder}
                width="69"
                backgroundColor="#EEB233"
              >
                사진으로 보기
              </styled_Menu.SmallBox>
              <styled_Menu.SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_ante.png"
                width="80"
                onClick={smallBoxTrueHanlder}
                backgroundColor="#000"
                underline="underline"
              >
                영양정보로 보기
              </styled_Menu.SmallBox>
            </>
          ) : (
            <>
              <styled_Menu.SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_pic_on.png"
                onClick={smallBoxFalseHanlder}
                width="69"
                backgroundColor="#000"
                underline="underline"
              >
                사진으로 보기
              </styled_Menu.SmallBox>
              <styled_Menu.SmallBox
                url="http://image.istarbucks.co.kr/common/img/menu/icon_ante.png"
                width="80"
                onClick={smallBoxTrueHanlder}
                backgroundColor="#EEB233"
              >
                영양정보로 보기
              </styled_Menu.SmallBox>
            </>
          )}

          {DetailBox ? (
            <styled_Menu.ClassificationContainer size="hidden" hidden={hidden}>
              <styled_Menu.ClassificationBox onClick={detailBoxHandler}>
                상세 분류
              </styled_Menu.ClassificationBox>
            </styled_Menu.ClassificationContainer>
          ) : (
            <styled_Menu.ClassificationContainer>
              <styled_Menu.ClassificationBox onClick={detailBoxHandler}>
                상세 분류
              </styled_Menu.ClassificationBox>

              <styled_Menu.ClassificationList onClick={checkboxHandler}>
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
              <styled_Menu.ClassificationList onClick={checkboxHandler}>
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
                  <span>시즌기간 출시되는 시즌성 메뉴</span>
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
                (value !== "전체 음료 보기" || value !== "전체 푸드 보기") && (
                  <Nutrition key={index} Category={value} />
                ) // 전체상품보기가 api에 없기때문에 조건문을 줘서 출력이 되지 않게 함
              );
            })}
          </>
        ) : checkedItems.has("전체 푸드 보기") ||
          checkedItems.has("전체 음료 보기") ? (
          <>
            {dataCategory.map((value) => {
              return (
                (value !== "전체 푸드 보기" || value !== "전체 음료 보기") && (
                  <DetailCard Category={value} />
                ) // 전체상품보기가 api에 없기때문에 조건문을 줘서 출력이 되지 않게 함
              );
            })}
          </>
        ) : (
          <>
            {dataCategory.map((value, index) => {
              return smallBox
                ? checkedItems.has(value) && (
                    <Nutrition key={index} Category={value} />
                  )
                : checkedItems.has(value) && <DetailCard Category={value} />;
            })}
          </>
        )}
      </styled_Menu.Main>
    </AllBox>
  );
};
export default Menu;
