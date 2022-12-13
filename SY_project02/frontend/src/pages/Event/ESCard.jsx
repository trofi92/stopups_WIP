import * as styled_Event from "../../styled/Event/Event";


export const ESCard = () => {
    return (
        <styled_Event.ESArticle>
            <styled_Event.ESList>
                <styled_Event.ESDl>
                    {/*진행 이벤트*/}
                    <styled_Event.ESDt>진행 이벤트</styled_Event.ESDt>
                    <styled_Event.ESDd>

                    </styled_Event.ESDd>
                    {/*종료 이벤트*/}
                    <styled_Event.ESDt>종료 이벤트</styled_Event.ESDt>
                    <styled_Event.ESDd>

                    </styled_Event.ESDd>
                </styled_Event.ESDl>
            </styled_Event.ESList>
        </styled_Event.ESArticle>
    );
};