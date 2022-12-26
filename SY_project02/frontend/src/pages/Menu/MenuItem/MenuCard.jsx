import React, { useEffect, useState } from "react";
import * as styled_Menu from "../../../styled/Menu/Menu";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailCard = (props) => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=${props.Category}&Name=`
      );
      setData(response.data);
    };
    fetchData();

    console.log(data);
  }, [props.Category]);


  return (
    <>
      {props.Category === "브레드" ||
      props.Category === "샌드위치" ||
      props.Category === "케이크" ||
      props.Category === "따뜻한 푸드" ||
      props.Category === "샐러드" ||
      props.Category === "전체 푸드 보기" ? (
        <styled_Menu.MenuContainer>
          {data[0] && data[0].Category !== "" && (
            <styled_Menu.ColorBox>
              <h3>{data[1] && data[1].Category}</h3>
            </styled_Menu.ColorBox>
          )}
          <styled_Menu.CardList>
            {data.map((value) => {
              return (
                <styled_Menu.CardContainer>
                  <Link to={`/menu/${value.Category}/${value.ProductId}`}>
                    <styled_Menu.Card
                      url={value.Image}
                      productId={value.ProductId}
                      category={value.category}
                    />
                  </Link>
                  <styled_Menu.CardText>{value.Name}</styled_Menu.CardText>
                </styled_Menu.CardContainer>
              );
            })}
          </styled_Menu.CardList>
        </styled_Menu.MenuContainer>
      ) : (
        <styled_Menu.MenuContainer>
          {data[0] && data[0].Category !== "" && (
            <styled_Menu.ColorBox>
              <h3>{data[0] && data[0].Category} </h3>
              <img
                src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt=""
              />
              <span>디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
            </styled_Menu.ColorBox>
          )}
          <styled_Menu.CardList>
            {data.map((value) => {
              return (
                <styled_Menu.CardContainer>
                  <Link to={`/menu/${value.Category}/${value.ProductId}`}>
                    <styled_Menu.Card
                      url={value.Image}
                      productId={value.ProductId}
                      category={value.category}
                    />
                  </Link>
                  <styled_Menu.CardText>{value.Name}</styled_Menu.CardText>
                </styled_Menu.CardContainer>
              );
            })}
          </styled_Menu.CardList>
        </styled_Menu.MenuContainer>
      )}
    </>
  );
};

export default DetailCard;
