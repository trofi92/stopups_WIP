import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {FContentsAllBox, FHeader, FHTInner, FHTInnerH4, FHTitle} from "../../styled/Favorite";
import SearchTitle from "../../image/SearchTitle.png"
import {
    SBox, SDDiv, SDDPText,
    SDFigure, SDFImg, SDHeader,
    SEDHeader,
    SEDHH3,
    SEDHSpan,
    SEDiv,
    SEDPDate,
    SEDPLink,
    SEDPP,
    SEFigure,
    SEFImg,
    SFBLi,
    SFBLP, SFBLPA, SFBLPAG, SFBLPE, SFBLPEG,
    SFBLPGreen,
    SFBox,
    SFBUl,
    SFButtonBox,
    SFieldset,
    SFInput,
    SFInputBox,
    SFIP,
    SFStrong,
    SInnerBox,
    SNoResult,
    SSection,
    SSHeader,
    SSHH2,
    SSHP,
    SSLi,
    SSLP,
    SSUl, SYellow
} from "../../styled/Search";
import {Link} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";
import ESTitle from "../../image/Event/ESTitle.jpg"
import {useState} from "react";
import {SEvent} from "./SEvent";
import {SNews} from "./SNews";
import {SMapEvent} from "./SMapEvent";
import {SCoffee} from "./SCoffee";
import {SFood} from "./SFood";
import {SGoods} from "./SGoods";
import {SCard} from "./SCard";
import {SMap} from "./SMap";
import {SDrink} from "./SDrink";

const Search = ({search}) => {
    const [state, setState] = useState(1);

    const onClick = (id) => {
        setState(id);
    }

    const obj = {
        1:
        <>
            <SEvent/>
            <SNews/>
            <SMapEvent/>
            <SCoffee/>
            <SDrink/>
            <SFood/>
            <SGoods/>
            <SCard/>
            <SMap/>
        </>,
        2: <SEvent/>,
        3: <SNews/>,
        4: <SMapEvent/>,
        5: <SCoffee/>,
        6: <SDrink/>,
        7: <SFood/>,
        8: <SGoods/>,
        9: <SCard/>,
        10: <SMap/>
    };


    console.log(search)

    const onChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <AllBox>
            <Header/>

            <SBox>
                {/*통합검색 헤더*/}
                <FHeader>
                    <FHTitle>
                        <FHTInner>
                            <FHTInnerH4>
                                <img src={SearchTitle} alt={"MyMenu"}/>
                            </FHTInnerH4>
                        </FHTInner>
                    </FHTitle>
                </FHeader>
            </SBox>

            <FContentsAllBox>
                <SInnerBox>
                    {/*통합검색 입력*/}
                    <SFieldset>
                        <SFBox>
                            <SFStrong>원하시는 검색어를 입력하신 후 검색 버튼을 클릭하세요.</SFStrong>
                            {/*인풋*/}
                            <SFInputBox>
                                <SFInput
                                    type={"text"}
                                    value={search}
                                    onChange={onChange}
                                />
                                {/*검색 버튼 나중에 onSubmit?? 이벤트 걸기*/}
                                <SFIP/>
                            </SFInputBox>
                            {/*버튼*/}
                            <SFButtonBox>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 1 ? (
                                            <SFBLPAG onClick={() => onClick(1)}>통합검색</SFBLPAG>
                                            ) : (
                                            <SFBLPA onClick={() => onClick(1)}>통합검색</SFBLPA>
                                            )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 2 ? (
                                            <SFBLPAG onClick={() => onClick(2)}>이벤트</SFBLPAG>
                                            ) : (
                                            <SFBLPA onClick={() => onClick(2)}>이벤트</SFBLPA>
                                            )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 3 ? (
                                            <SFBLPAG onClick={() => onClick(3)}>뉴스</SFBLPAG>
                                            ) : (
                                            <SFBLPA onClick={() => onClick(3)}>뉴스</SFBLPA>
                                            )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 3 ? (
                                            <SFBLPAG onClick={() => onClick(4)}>매장이벤트</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(4)}>매장이벤트</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 5 ? (
                                            <SFBLPAG onClick={() => onClick(5)}>원두</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(5)}>원두</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 6 ? (
                                            <SFBLPAG onClick={() => onClick(6)}>음료</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(6)}>음료</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 7 ? (
                                            <SFBLPAG onClick={() => onClick(7)}>푸드</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(7)}>푸드</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 8 ? (
                                            <SFBLPAG onClick={() => onClick(8)}>상품</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(8)}>상품</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 9 ? (
                                            <SFBLPAG onClick={() => onClick(9)}>카드</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(9)}>카드</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                                <SFBUl>
                                    <SFBLi>
                                        {state === 10 ? (
                                            <SFBLPAG onClick={() => onClick(10)}>매장</SFBLPAG>
                                        ) : (
                                            <SFBLPA onClick={() => onClick(10)}>매장</SFBLPA>
                                        )}
                                    </SFBLi>
                                </SFBUl>
                            </SFButtonBox>
                        </SFBox>
                    </SFieldset>

                    {/*각 내용*/}
                    {obj[state]}

                </SInnerBox>
            </FContentsAllBox>

            <Footer/>
        </AllBox>
    );
};

export default Search;