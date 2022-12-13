import * as styled_Main from "../../styled/Main";
import {Link} from "react-router-dom";
import RMImg from "../../image/Main/MRMagazine/RMImg.jpg"

export const MRMagazine = () => {
    return (
        <styled_Main.RMagazine>
            <styled_Main.RMInner>
                <styled_Main.RMVisual>
                    <styled_Main.RMVImg src={RMImg} alt={"RMImg"}/>
                </styled_Main.RMVisual>
                <styled_Main.RMButtonBox>
                    <styled_Main.RMBBInner>
                        <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                            <styled_Main.RMBBIP>자세히 보기</styled_Main.RMBBIP>
                        </Link>
                    </styled_Main.RMBBInner>
                </styled_Main.RMButtonBox>
            </styled_Main.RMInner>
        </styled_Main.RMagazine>
    );
};
