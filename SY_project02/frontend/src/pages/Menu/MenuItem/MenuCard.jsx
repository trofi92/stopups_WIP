import React, { useEffect, useState } from "react";

import {
    CardContainer,
    Card,
    CardText,
    CardList,
    ColorBox,
} from "../../../styled/Menu/Menu";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailCard = (props) => {
    const params = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://stopupsapi.shop:8080/api/?apikey=TeamYN1670397914440&Category=${props.Category}&Name=`
            );

            setData(response.data);
        };
        fetchData();
    }, []);
    return (
        <>
            {props.Category === "브레드" ||
            props.Category === "샌드위치" ||
            props.Category === "케이크" ||
            props.Category === "따뜻한 푸드" ||
            props.Category === "샐러드" ? (
                <>
                    <ColorBox>
                        <h3>{data[0] && data[0].Category}</h3>
                    </ColorBox>
                    <CardList>
                        {data.map((value, index) => {
                            return (
                                <CardContainer>
                                    <Link to={`/menu/${value.Category}/${index}`}>
                                        <Card
                                            url={value.Image}
                                            productId={value.ProductId}
                                            category={value.category}
                                        />
                                    </Link>
                                    <CardText>{value.Name}</CardText>
                                </CardContainer>
                            );
                        })}
                    </CardList>{" "}
                </>
            ) : (
                <>
                    <ColorBox>
                        <h3>{data[0] && data[0].Category} </h3>
                        <img
                            src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                            alt=""
                        />
                        <span>디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
                    </ColorBox>
                    <CardList>
                        {data.map((value, index) => {
                            return (
                                <CardContainer>
                                    <Link to={`/menu/${value.Category}/${index}`}>
                                        <Card
                                            url={value.Image}
                                            productId={value.ProductId}
                                            category={value.category}
                                        />
                                    </Link>
                                    <CardText>{value.Name}</CardText>
                                </CardContainer>
                            );
                        })}
                    </CardList>{" "}
                </>
            )}
        </>
    );
};

export default DetailCard;