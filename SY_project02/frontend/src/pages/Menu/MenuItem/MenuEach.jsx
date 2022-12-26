import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailOne from "./MenuOne";

const DetailEach = () => {
  const [data, setData] = useState([]);
  const [Nutrient, setNutrient] = useState([]);
  const [Price, setPrice] = useState([]);
  const [productId, setProductId] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=${params.Category}&Name=`
      );
      const data = response.data.filter(
        (value) => value.ProductId === params.item
      );
      setData(data[0]);
    };

    const NutrientData = async () => {
      const response = await axios.get(
        `http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=${params.Category}&Name=`
      );

      const data = response.data.filter(
        (value) => value.ProductId === params.item
      );
      setData(data[0]);
      setNutrient(data[0].Nutrient);
    };
    const PriceData = async () => {
      const response = await axios.get(
        `http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=${params.Category}&Name=`
      );
      const data = response.data.filter(
        (value) => value.ProductId === params.item
      );
      setData(data[0]);

      setPrice(data[0].Price);
    };
    const productIdData = async () => {
      const response = await axios.get(
          `http://stopupsapi.shop:8080/api/?apikey=TeamYN1672012490329&Category=${params.Category}&Name=`
      );
      const data = response.data.filter(
          (value) => value.ProductId === params.item
      );
      setData(data[0]);

      setProductId(data[0].ProductId)
    };
    fetchData();
    NutrientData();
    PriceData();
  }, []);

  console.log(productId)

  return (
    <DetailOne
      category={data.Category}
      name={data.Name}
      desc={data.Desc}
      defaultSize={Nutrient.DefaultSize}
      kcal={Nutrient.kcal}
      fat={Nutrient.Fat}
      protein={Nutrient.Protein}
      sugar={Nutrient.Sugar}
      caffeine={Nutrient.Caffeine}
      na={Nutrient.Na}
      url={data.Image}
      carbohydrate={Nutrient.Carbohydrate}
      transFat={Nutrient.TransFat}
      cholesterol={Nutrient.Cholesterol}
      saturatedFat={Nutrient.SaturatedFat}
      price={Price}
      productId={data.ProductId}
    />
  );
};

export default DetailEach;
