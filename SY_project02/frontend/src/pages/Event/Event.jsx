import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {NTIH2, NTIImg, NTInner, NTitleBox} from "../../styled/Notice/Notice";
import ETitle from "../../image/Event/ETitle.jpg";
import {
    EBox,
    EBPosition,
    ESA, ESA1, ESA1G, ESA2, ESA2G, ESA3, ESA3G, ESA4, ESA4G,
    ESAClicked,
    ESArticle, ESDd,
    ESDiv, ESDl, ESDLA, ESDLDd, ESDLDl, ESDLDt, ESDLH4, ESDLi, ESDLImg, ESDLP, ESDt, ESDUl,
    ESection,
    ESH31,
    ESH32,
    ESH33,
    ESH34, ESList
} from "../../styled/Event/Event";
import ESTitle from "../../image/Event/ESTitle.jpg"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {CNoDF} from "../Cart/CNoDF";
import {CNoG} from "../Cart/CNoG";
import {EAll} from "./EAll";
import {ESCard} from "./ESCard";
import {ESReward} from "./ESReward";
import {EOnline} from "./EOnline";

const Event = () => {
    const [state, setState] = useState(1);

    const onClick = (id) => {
        setState(id);
    }

    // 지금은 전체 빼고 에빈트 없어서 이렇게 해놓음
    // 나중에 추가 시 스탑업스 카드, 리워드, 온라인 각 컴포넌트 파서 추가하기
    const obj = {
        1: <EAll/>,
        2: <ESCard/>,
        3: <ESReward/>,
        4: <EOnline/>,
    };

    const imageView = async () => {
        // 이미지 조회 시 카테고리 지정 및 검색 값에 따른 DB 조회
        const image = await axios.get('http://stopupsapi.tk:8080/api/?apikey=TeamYN1670397914440&MImage=ALL&Name=&ImageId=');
        console.log(image.data);
    };

    useEffect(() => {
            imageView().then(r => console.log("111111=>", r));
        }
        , []
    )

    // console.log("2222222222=>", event);

    return (
        <AllBox>
            <Header/>

            {/*이벤트 타이틀*/}
            <NTitleBox>
                <NTInner>
                    <NTIH2>
                        <NTIImg src={ETitle} alt={"ETitle"}/>
                    </NTIH2>
                </NTInner>
            </NTitleBox>
            {/*이벤트 전체 박스*/}
            <EBox>
                <EBPosition>
                    <ESection>
                        {/*이벤트 종류 버튼 박스*/}
                        <ESDiv/>
                        {/*이벤트 종류 버튼*/}
                        <ESH31>
                            {/*클릭된 이벤트 종류*/}
                            {state === 1 ? (
                                <ESA1G href={"#"} onClick={() => onClick(1)}>전체</ESA1G>
                            ) : (
                                <ESA1 href={"#"} onClick={() => onClick(1)}>전체</ESA1>
                            )}

                        </ESH31>
                        <ESH32>
                            {state === 2 ? (
                                <ESA2G href={"#"} onClick={() => onClick(2)}>스탑업스 카드</ESA2G>
                            ) : (
                                <ESA2 href={"#"} onClick={() => onClick(2)}>스탑업스 카드</ESA2>
                            )}
                        </ESH32>
                        <ESH33>
                            {state === 3 ? (
                                <ESA3G href={"#"} onClick={() => onClick(3)}>스탑업스 리워드</ESA3G>
                            ) : (
                                <ESA3 href={"#"} onClick={() => onClick(3)}>스탑업스 리워드</ESA3>
                            )}
                        </ESH33>
                        <ESH34>
                            {state === 4 ? (
                                <ESA4G href={"#"} onClick={() => onClick(4)}>온라인</ESA4G>
                            ) : (
                                <ESA4 href={"#"} onClick={() => onClick(4)}>온라인</ESA4>
                            )}
                        </ESH34>

                        {obj[state]}
                    </ESection>
                </EBPosition>
            </EBox>
        </AllBox>
    );
};

export default Event;