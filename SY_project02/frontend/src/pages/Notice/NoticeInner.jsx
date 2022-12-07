import {NTBTd, NTBTDLA, NTBTDLeft, NTBTr} from "../../styled/Notice";

export const NoticeInner = () => {
    // 데이터 받아서 map 사용
    return (
        <NTBTr>
            <NTBTd>1</NTBTd>
            <NTBTDLeft>
                <NTBTDLA>공지사항</NTBTDLA>
            </NTBTDLeft>
            <NTBTd>2022-12-05</NTBTd>
            <NTBTd>484</NTBTd>
        </NTBTr>
    );
};
