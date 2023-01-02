import { Table } from "../../styled/Menu/Nutrition";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ColorBox } from "../../styled/Menu/Menu";
import { API } from "../../util/urls";

const Nutrition = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${API}&Category=${props.Category}&Name=`
      );

      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {data[0] && data[0].Category !== "" && (
        <ColorBox>
          <h3>{data[0] && data[0].Category}</h3>
        </ColorBox>
      )}
      <Table>
        <colgroup>
          <col width="16%"></col>
          <col width="14%"></col>
          <col width="14%"></col>
          <col width="14%"></col>
          <col width="14%"></col>
          <col width="14%"></col>
          <col width="14%"></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">메뉴</th>
            <th scope="col">칼로리</th>
            <th scope="col">당류</th>
            <th scope="col">단백질</th>
            <th scope="col">나트륨</th>
            <th scope="col">포화지방</th>
            <th scope="col">카페인</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr>
                <td>{value.Name}</td>
                <td>{value.Nutrient.kcal}</td>
                <td>{value.Nutrient.Sugar}</td>
                <td>{value.Nutrient.Protein}</td>
                <td>{value.Nutrient.Na}</td>
                <td>{value.Nutrient.Fat}</td>
                <td>{value.Nutrient.Caffeine}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Nutrition;
