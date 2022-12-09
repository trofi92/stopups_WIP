import {AllBox} from "../styled/AllBox";
import Header from "../components/Header/Header";
import {SRB, SRBInner, SRBPosition} from "../styled/ServiceReady";
import {Footer} from "../components/Footer/Footer";

const ServiceReady = () => {
    return (
        <AllBox>
            <Header/>

           <SRB>
               <SRBPosition>
                   <SRBInner/>
               </SRBPosition>
           </SRB>

            <Footer/>
        </AllBox>
    );
};

export default ServiceReady;