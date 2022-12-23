import * as styled_Search from "../../styled/Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const SFood = ({ result, state }) => {
  const [allFood, setAllFood] = useState([]);

  // console.log("푸드 검색 결과",result);

  useEffect(() => {
    const all = async () => {
      await axios
        .get(
          "http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=분류&Name="
        )
        .then((res) => {
          setAllFood(res.data);
        });
    };
    all();
  }, []);

  const searchedAllFood = allFood.filter((data) => {
    if (
      data.Category === "브레드" ||
      data.Category === "케이크" ||
      data.Category === "따뜻한 푸드" ||
      data.Category === "샐러드" ||
      data.Category === "샌드위치"
    ) {
      if (state !== "" && result === "") {
        return data.Name.toLowerCase().includes(state.toLowerCase());
      } else if (result !== "") {
        return data.Name.toLowerCase().includes(result.toLowerCase());
      }
    }
  });

  // console.log("searchedAllFood", searchedAllFood);

  return (
    <styled_Search.SSection>
      {/*푸드 헤더*/}
      <styled_Search.SSHeader>
        <styled_Search.SSHH2>푸드</styled_Search.SSHH2>
        <Link to={"/event"}>
          <styled_Search.SSHP>푸드 더보기</styled_Search.SSHP>
        </Link>
      </styled_Search.SSHeader>
      {/*푸드 내용*/}
      <styled_Search.SSUl>
        {searchedAllFood.length === 0 || (result === "" && state === "") ? (
          <styled_Search.SSLi>
            <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
          </styled_Search.SSLi>
        ) : (
          searchedAllFood.map((food) => {
            if (food) {
              return (
                <styled_Search.SSLi key={food.ProductId}>
                  <styled_Search.SDFigure>
                    <styled_Search.SDFImg
                      src={food.Image}
                      alt={"푸드 이미지"}
                    />
                  </styled_Search.SDFigure>
                  <styled_Search.SDDiv>
                    <styled_Search.SEDHeader>
                      <styled_Search.SEDHH3>
                        {food.Name}
                        {/*<styled_Search.SYellow>검색단어강조</styled_Search.SYellow>*/}
                      </styled_Search.SEDHH3>
                    </styled_Search.SEDHeader>
                    <styled_Search.SDDPText>{food.Desc}</styled_Search.SDDPText>
                    <Link to={"#"}>
                      <styled_Search.SEDPLink>메뉴 링크</styled_Search.SEDPLink>
                    </Link>
                  </styled_Search.SDDiv>
                </styled_Search.SSLi>
              );
            }
          })
        )}
      </styled_Search.SSUl>
    </styled_Search.SSection>
  );
};
