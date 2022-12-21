import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { AllBox } from "../../../styled/AllBox";
import { Main, ButtonBoxCotainer } from "../../../styled/Menu/Menu";
import {
    DetailBox,
    DetailImageBox,
    NDetail,
    SizeBox,
    SizeDetailBox,
} from "../../../styled/Menu/MenuItem";
import { ButtonSmallBox } from "../../../styled/Button";

const DetailOne = (props) => {
    const [sizeData, setSizeData] = useState("");
    const [price, setPrice] = useState({});
    const params = useParams();
    const InValid =
        props.price.Desert !== "0" && props.price.hasOwnProperty("Desert");
    const onChangeHandler = (e) => {
        setSizeData(e.target.value);
    };
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

    return (
        <AllBox>
            <Header />
            <Main>
                <form onSubmit={onSubmitHandler}>
                    <DetailBox>
                        <SizeBox>
                            <span>{props.category}</span>
                            <SizeDetailBox>
                                {props.price.Tall !== "0" && <p>Tall:￦{props.price.Tall} </p>}

                                {InValid && <p>Desert: ￦{props.price.Desert}</p>}

                                {props.price.Grande !== "0" && (
                                    <p>Grande: ￦{props.price.Grande}</p>
                                )}

                                {props.price.Venti !== "0" && (
                                    <p>Venti: ￦{props.price.Venti}</p>
                                )}
                            </SizeDetailBox>
                        </SizeBox>
                        <h2>{props.name}</h2>

                        <fieldset>
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
                                    <label htmlFor="Tall">Tall </label>
                                </div>
                            )}

                            {InValid && (
                                <div>
                                    <input
                                        type="radio"
                                        id="Desert"
                                        name="size"
                                        value="Desert"
                                        checked={props.price.Desert !== "0"}
                                        onChange={onChangeHandler}
                                    />
                                    <label htmlFor="Desert">Desert</label>
                                </div>
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
                                    <label htmlFor="Grande">Grande</label>
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
                                    <label for="Venti">Venti</label>
                                </div>
                            )}
                        </fieldset>

                        <p>{props.desc}</p>
                        <ButtonBoxCotainer>
                            <ButtonSmallBox>
                                <p>나만의 음료로 등록</p>
                            </ButtonSmallBox>

                            <ButtonSmallBox>
                                <p>장바구니 등록</p>
                            </ButtonSmallBox>
                        </ButtonBoxCotainer>
                    </DetailBox>

                    <DetailImageBox url={props.url} />
                </form>
                <NDetail>
                    <p>
                        제품 영양 정보
                        <br />
                    </p>
                    <hr />

                    <ul>
                        <li>
                            <span> {props.defaultSize}</span>
                        </li>
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
                                    탄수화물(g)<dd>{props.carbohydrate}</dd>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    지방(g)<dd>{props.fat}</dd>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    트랜스지방(g)<dd>{props.transFat}</dd>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    포화지방(g)<dd>{props.saturatedFat}</dd>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    콜레스테롤(mg)<dd>{props.cholesterol}</dd>
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
                        <li>
                            <dl>
                                <dt>
                                    나트륨(mg)<dd>{props.na}</dd>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    당류(g)<dd>{props.sugar}</dd>
                                </dt>
                            </dl>
                        </li>{" "}
                        <li>
                            <dl>
                                <dt>
                                    카페인(mg)<dd>{props.caffeine}</dd>
                                </dt>
                            </dl>
                        </li>{" "}
                    </ul>
                    <hr />
                </NDetail>
            </Main>
            <p style={{ color: "#444" }}>{props.desc}</p>

            <Footer />
        </AllBox>
    );
};

export default DetailOne;