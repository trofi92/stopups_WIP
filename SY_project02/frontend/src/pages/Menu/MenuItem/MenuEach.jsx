import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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
                `http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=${params.Category}&Name=`
            );
            setData(response.data[params.item]);
        };

        const NutrientData = async () => {
            const response = await axios.get(
                `http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=${params.Category}&Name=`
            );

            setNutrient(response.data[params.item].Nutrient);
        };
        const PriceData = async () => {
            const response = await axios.get(
                `http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=${params.Category}&Name=`
            );

            setPrice(response.data[params.item].Price);
        };
        const productIdData = async () => {
            const response = await axios.get(
                `http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=${params.Category}&Name=`
            );
            setProductId(response.data[params.item].ProductId);
        };
        fetchData();
        NutrientData();
        PriceData();
        productIdData();
    }, []);

    return (
        <DetailOne
            category={data.Category}
            name={data.Name}
            productId={data.ProductId}
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
        />
    );
};

export default DetailEach;