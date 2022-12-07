import {MRButton, MRButtonBox, MReserve, MRIImg, MRInner, MRText1, MRText2} from "../../styled/Main";
import {Link} from "react-router-dom";

export const MainReserve = () => {
    return (
        <MReserve>
            <MRInner>
                {/*애니메이션*/}
                <MRText1></MRText1>
                <MRText2></MRText2>
                <MRIImg></MRIImg>
                <MRButtonBox>
                    <Link to={"#"} style={{textDecoration: "none"}}>
                        <MRButton>자세히 보기</MRButton>
                    </Link>
                </MRButtonBox>
            </MRInner>
        </MReserve>
    );
};