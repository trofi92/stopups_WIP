import {AllBox} from "../styled/AllBox";
import Header from "../components/Header/Header";
import {FBox, FCBox, FContentsAllBox, FHeader, FHTInner, FHTInnerH4, FHTitle} from "../styled/Favorite";
import MyStopUpsHeaderImg from "../image/MyStopUpsHeaderImg.png"
import {MSUDiv} from "../styled/MyStopUps";

const MyStopUps = () => {
    return (
        <AllBox>
            <Header/>

            <FBox>
                {/*My StopUps 헤더*/}
                <FHeader>
                    <FHTitle>
                        <FHTInner>
                            <FHTInnerH4>
                                <img src={MyStopUpsHeaderImg} alt={"MyStopUpsHeaderImg"}/>
                            </FHTInnerH4>
                        </FHTInner>
                    </FHTitle>
                </FHeader>
            </FBox>

            {/*My StopUps 내용 전체 박스*/}
            <FContentsAllBox>
                <FCBox>
                    <MSUDiv>

                    </MSUDiv>
                </FCBox>
            </FContentsAllBox>

        </AllBox>
    );
};

export default MyStopUps;