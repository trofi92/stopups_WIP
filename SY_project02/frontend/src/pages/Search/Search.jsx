import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_F from "../../styled/Favorite";
import SearchTitle from "../../image/SearchTitle.png";
import * as styled_Search from "../../styled/Search";
import {Footer} from "../../components/Footer/Footer";
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
import axios from "axios";
import {useLocation} from "react-router-dom";

axios.defaults.withCredentials = false;

const Search = () => {
    const [category, setCategory] = useState(1);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    const {state} = useLocation();

    const onClick = (id) => {
        setCategory(id);
    };

    const obj = {
        1: (
            <>
                <SEvent result={result} state={state}/>
                <SNews/>
                <SMapEvent/>
                <SCoffee/>
                <SDrink result={result} state={state}/>
                <SFood result={result} state={state}/>
                <SGoods/>
                <SCard/>
                <SMap/>
            </>
        ),
        2: <SEvent result={result} state={state}/>,
        3: <SNews/>,
        4: <SMapEvent/>,
        5: <SCoffee/>,
        6: <SDrink result={result} state={state}/>,
        7: <SFood result={result} state={state}/>,
        8: <SGoods/>,
        9: <SCard/>,
        10: <SMap/>,
    };

    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const onClickSearch = (e) => {
        e.preventDefault();
        if (search === "") {
            alert("검색어를 입력하세요.");
        } else {
            setResult(search);
        }
    };

    return (
        <styled_AB.AllBox>
            <Header/>

            <styled_Search.SBox>
                {/*통합검색 헤더*/}
                <styled_F.FHeader>
                    <styled_F.FHTitle>
                        <styled_F.FHTInner>
                            <styled_F.FHTInnerH4>
                                <img src={SearchTitle} alt={"MyMenu"}/>
                            </styled_F.FHTInnerH4>
                        </styled_F.FHTInner>
                    </styled_F.FHTitle>
                </styled_F.FHeader>
            </styled_Search.SBox>

            <styled_F.FContentsAllBox>
                <styled_Search.SInnerBox>
                    {/*통합검색 입력*/}
                    <styled_Search.SFieldset>
                        <styled_Search.SFBox>
                            <styled_Search.SFStrong>
                                원하시는 검색어를 입력하신 후 검색 버튼을 클릭하세요.
                            </styled_Search.SFStrong>
                            {/*onSearch 이벤트 걸기*/}
                            <form>
                                {/*인풋*/}
                                <styled_Search.SFInputBox>
                                    <styled_Search.SFInput
                                        type={"text"}
                                        value={search}
                                        onChange={onChangeSearch}
                                        placeholder={state}
                                    />
                                    {/*검색 버튼 나중에 onSubmit?? 이벤트 걸기*/}
                                    <styled_Search.SFIP
                                        type={"submit"}
                                        onClick={onClickSearch}
                                    />
                                </styled_Search.SFInputBox>
                            </form>
                            {/*버튼*/}
                            <styled_Search.SFButtonBox>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 1 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(1)}
                                            >
                                                통합검색
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(1)}
                                            >
                                                통합검색
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 2 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(2)}
                                            >
                                                이벤트
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(2)}
                                            >
                                                이벤트
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 3 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(3)}
                                            >
                                                뉴스
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(3)}
                                            >
                                                뉴스
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 3 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(4)}
                                            >
                                                매장이벤트
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(4)}
                                            >
                                                매장이벤트
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 5 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(5)}
                                            >
                                                원두
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(5)}
                                            >
                                                원두
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 6 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(6)}
                                            >
                                                음료
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(6)}
                                            >
                                                음료
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 7 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(7)}
                                            >
                                                푸드
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(7)}
                                            >
                                                푸드
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 8 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(8)}
                                            >
                                                상품
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(8)}
                                            >
                                                상품
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 9 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(9)}
                                            >
                                                카드
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(9)}
                                            >
                                                카드
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                                <styled_Search.SFBUl>
                                    <styled_Search.SFBLi>
                                        {category === 10 ? (
                                            <styled_Search.SFBLPAG
                                                onClick={() => onClick(10)}
                                            >
                                                매장
                                            </styled_Search.SFBLPAG>
                                        ) : (
                                            <styled_Search.SFBLPA
                                                onClick={() => onClick(10)}
                                            >
                                                매장
                                            </styled_Search.SFBLPA>
                                        )}
                                    </styled_Search.SFBLi>
                                </styled_Search.SFBUl>
                            </styled_Search.SFButtonBox>
                        </styled_Search.SFBox>
                    </styled_Search.SFieldset>

                    {/*각 내용*/}
                    {obj[category]}
                </styled_Search.SInnerBox>
            </styled_F.FContentsAllBox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default Search;
