import {RMagazine, RMBBInner, RMBBIP, RMButtonBox, RMInner, RMVImg, RMVisual} from "../../styled/Main";
import {Link} from "react-router-dom";
import RMImg from "../../image/Main/MRMagazine/RMImg.jpg"

export const MRMagazine = () => {
    return (
        <RMagazine>
            <RMInner>
                <RMVisual>
                    <RMVImg src={RMImg} alt={"RMImg"}/>
                </RMVisual>
                <RMButtonBox>
                    <RMBBInner>
                        <Link to={"#"} style={{textDecoration: "none"}}>
                            <RMBBIP>자세히 보기</RMBBIP>
                        </Link>
                    </RMBBInner>
                </RMButtonBox>
            </RMInner>
        </RMagazine>
    );
};
