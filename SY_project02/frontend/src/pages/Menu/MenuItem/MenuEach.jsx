import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuOne from "./MenuOne";
import { API } from "../../../utils/urls";
import { NotFound } from "../../NotFound";

const MenuEach = () => {
  const [data, setData] = useState([]);
  const [Nutrient, setNutrient] = useState([]);
  const [Price, setPrice] = useState([]);

  const [DrinkType, setDrinkType] = useState([]);
  const [EatType, setEatType] = useState([]);
  const [CookType, setCookType] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${API}&Category=${params.Category}&Name=`
      );
      const data = response.data.filter(
        (value) => value.ProductId === params.item
      );

      setData(data[0]);
      setNutrient(data[0].Nutrient);
      setPrice(data[0].Price);
      setDrinkType(data[0].DrinkType);
      setCookType(data[0].CookType);
      setEatType(data[0].EatType);
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <MenuOne
          key={data.ProductId}
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
          DrinkType={DrinkType}
          CookType={CookType}
          EatType={EatType}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MenuEach;
