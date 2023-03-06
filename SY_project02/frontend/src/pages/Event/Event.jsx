import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_Notice from "../../styled/Notice/Notice";
import * as styled_Event from "../../styled/Event/Event";
import ETitle from "../../image/Event/ETitle.jpg";
import { useState } from "react";
import axios from "axios";
import { EAll } from "./EAll";
import { ESCard } from "./ESCard";
import { ESReward } from "./ESReward";
import { EOnline } from "./EOnline";

// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = false;

const Event = () => {
  const [state, setState] = useState(1);

  const onClick = (id) => {
    setState(id);
  };

  const obj = {
    1: <EAll Link={"/event/all"} />,
    2: <ESCard Link={"/event/stopUpsCard"} />,
    3: <ESReward Link={"/event/stopUpsReward"} />,
    4: <EOnline Link={"/event/online"} />,
  };

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_Notice.NTitleBox>
        <styled_Notice.NTInner>
          <styled_Notice.NTIH2>
            <styled_Notice.NTIImg src={ETitle} alt={"ETitle"} />
          </styled_Notice.NTIH2>
        </styled_Notice.NTInner>
      </styled_Notice.NTitleBox>
      <styled_Event.EBox>
        <styled_Event.EBPosition>
          <styled_Event.ESection>
            <styled_Event.ESDiv />
            <styled_Event.ESH31>
              {state === 1 ? (
                <styled_Event.ESA1G
                  href={"#"}
                  onClick={() => onClick(1)}
                >
                  전체
                </styled_Event.ESA1G>
              ) : (
                <styled_Event.ESA1
                  href={"#"}
                  onClick={() => onClick(1)}
                >
                  전체
                </styled_Event.ESA1>
              )}
            </styled_Event.ESH31>
            <styled_Event.ESH32>
              {state === 2 ? (
                <styled_Event.ESA2G
                  href={"#"}
                  onClick={() => onClick(2)}
                >
                  스탑없으 카드
                </styled_Event.ESA2G>
              ) : (
                <styled_Event.ESA2
                  href={"#"}
                  onClick={() => onClick(2)}
                >
                  스탑없으 카드
                </styled_Event.ESA2>
              )}
            </styled_Event.ESH32>
            <styled_Event.ESH33>
              {state === 3 ? (
                <styled_Event.ESA3G
                  href={"#"}
                  onClick={() => onClick(3)}
                >
                  스탑없으 리워드
                </styled_Event.ESA3G>
              ) : (
                <styled_Event.ESA3
                  href={"#"}
                  onClick={() => onClick(3)}
                >
                  스탑없으 리워드
                </styled_Event.ESA3>
              )}
            </styled_Event.ESH33>
            <styled_Event.ESH34>
              {state === 4 ? (
                <styled_Event.ESA4G
                  href={"#"}
                  onClick={() => onClick(4)}
                >
                  온라인
                </styled_Event.ESA4G>
              ) : (
                <styled_Event.ESA4
                  href={"#"}
                  onClick={() => onClick(4)}
                >
                  온라인
                </styled_Event.ESA4>
              )}
            </styled_Event.ESH34>

            {obj[state]}
          </styled_Event.ESection>
        </styled_Event.EBPosition>
      </styled_Event.EBox>
    </styled_AB.AllBox>
  );
};

export default Event;
