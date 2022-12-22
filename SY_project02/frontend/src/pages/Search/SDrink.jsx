import * as styled_Search from "../../styled/Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const SDrink = ({ result, state }) => {
  const [allDrink, setAllDrink] = useState([]);

  useEffect(() => {
    const all = async () => {
      await axios
        .get(
          "http://stopupsapi.shop:8080/api/?apikey=TeamYN1671674386366&Category=분류&Name="
        )
        .then((res) => {
          setAllDrink(res.data);
        });
    };
    all();
  }, []);

  const searchedAllDrink = allDrink.filter((data) => {
    if (
      data.Category !== "브레드" &&
      data.Category !== "케이크" &&
      data.Category !== "따뜻한 푸드" &&
      data.Category !== "샐러드" &&
      data.Category !== "샌드위치"
    ) {
      if (state !== "" && result === "") {
        return data.Name.toLowerCase().includes(state.toLowerCase());
      } else if (result !== "") {
        return data.Name.toLowerCase().includes(result.toLowerCase());
      }
    }
  });

  return (
    <styled_Search.SSection>
      {/*음료 헤더*/}
      <styled_Search.SSHeader>
        <styled_Search.SSHH2>음료</styled_Search.SSHH2>
        <Link to={"/event"}>
          <styled_Search.SSHP>음료 더보기</styled_Search.SSHP>
        </Link>
      </styled_Search.SSHeader>
      {/*음료 내용*/}
      <styled_Search.SSUl>
        {searchedAllDrink.length === 0 || (result === "" && state === "") ? (
          <styled_Search.SSLi>
            <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
          </styled_Search.SSLi>
        ) : (
          searchedAllDrink.map((drink) => {
            if (drink) {
              return (
                <styled_Search.SSLi key={drink.ProductId}>
                  <styled_Search.SDFigure>
                    <styled_Search.SDFImg
                      src={drink.Image}
                      alt={"음료 이미지"}
                    />
                  </styled_Search.SDFigure>
                  <styled_Search.SDDiv>
                    <styled_Search.SEDHeader>
                      <styled_Search.SEDHH3>
                        {drink.Name}
                        {/*<styled_Search.SYellow>검색단어강조</styled_Search.SYellow>*/}
                      </styled_Search.SEDHH3>
                    </styled_Search.SEDHeader>
                    <styled_Search.SDDPText>
                      {drink.Desc}
                    </styled_Search.SDDPText>
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
