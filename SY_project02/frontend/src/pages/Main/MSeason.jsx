import {MS, MSIButtonDiv, MSIImg1, MSIImg2, MSIImg3, MSInner, MSITitle} from "../../styled/Main";
import MSImg1 from "../../image/Main/MSeason/MSImg1.png";
import MSImg2 from "../../image/Main/MSeason/MSImg2.png";
import MSImg3 from "../../image/Main/MSeason/MSImg3.png";
import {Link} from "react-router-dom";
import {SeeDetails} from "../../styled/Button";

export const MSeason = () => {
    return (
        <MS>
            <MSInner>
                {/*순차적으로 fade in 애니메이션 넣어주기*/}
                <MSITitle/>
                <MSIImg1 src={MSImg1}/>
                <MSIImg2 src={MSImg2}/>
                <MSIImg3 src={MSImg3}/>
                <MSIButtonDiv>
                    {/*프로모션 페이지로 이동*/}
                    <Link to={"/summerEvent"} style={{textDecoration: "none"}}>
                        <SeeDetails>자세히 보기</SeeDetails>
                    </Link>
                </MSIButtonDiv>
            </MSInner>
        </MS>
    );
};
