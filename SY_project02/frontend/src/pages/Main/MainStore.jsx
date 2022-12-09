import {
    MSButton,
    MSButtonP,
    MSDiv1,
    MSDiv2,
    MSDiv3,
    MSDiv4,
    MSDiv5,
    MSDiv6,
    MStore,
    MStoreInner
} from "../../styled/Main";
import {Link} from "react-router-dom";

export const MainStore = () => {
    return (
        <MStore>
            <MStoreInner>
                <MSDiv1/>
                <MSDiv2/>
                <MSDiv3/>
                <MSDiv4/>
                <MSDiv5/>
                <MSDiv6/>
                <MSButton>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <MSButtonP>매장 찾기</MSButtonP>
                    </Link>
                </MSButton>
            </MStoreInner>
        </MStore>
    );
};