import * as styled_AB from "../styled/AllBox";
import Header from "../components/Header/Header";
import * as styled_SR from "../styled/ServiceReady";
import {Footer} from "../components/Footer/Footer";

const ServiceReady = () => {
    return (
        <styled_AB.AllBox>
            <Header/>

           <styled_SR.SRB>
               <styled_SR.SRBPosition>
                   <styled_SR.SRBInner/>
               </styled_SR.SRBPosition>
           </styled_SR.SRB>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default ServiceReady;