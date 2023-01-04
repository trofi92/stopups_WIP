import React from "react";
import { Link } from "react-router-dom";
import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {SBox} from "../../styled/Payment/Success";

export const Failed = () => {
  return (
      <styled_AB.AllBox>
          <Header/>

          <SBox>
              <div>fail</div>
              <Link to="/">
                  <button>to main</button>
              </Link>
          </SBox>
      </styled_AB.AllBox>
  );
};
