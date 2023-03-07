import * as styled_Notice from "../../styled/Notice/Notice";
import { Link } from "react-router-dom";

export const NoticeInner = ({ result, notice }) => {
  const searchedAllNotice = notice.filter((data) => {
    if (result !== "") {
      return data.Title.toLowerCase().includes(result.toLowerCase());
    }
  });

  return (
    <>
      {searchedAllNotice.length !== 0 && result !== ""
        ? searchedAllNotice.map((notice, idx) => {
            if (notice) {
              return (
                <styled_Notice.NTBTr key={idx}>
                  <styled_Notice.NTBTd>
                    {notice.Num}
                  </styled_Notice.NTBTd>
                  <styled_Notice.NTBTDLeft>
                    <Link
                      to={`/notice/${notice.Num}`}
                      style={{ textDecoration: "none" }}
                    >
                      <styled_Notice.NTBTDLA>
                        {notice.Title}
                      </styled_Notice.NTBTDLA>
                    </Link>
                  </styled_Notice.NTBTDLeft>
                  <styled_Notice.NTBTd>
                    {notice.Date}
                  </styled_Notice.NTBTd>
                  <styled_Notice.NTBTd>조회수</styled_Notice.NTBTd>
                </styled_Notice.NTBTr>
              );
            }
          })
        : notice.map((notice, idx) => {
            return (
              <styled_Notice.NTBTr key={idx}>
                <styled_Notice.NTBTd>
                  {notice.Num}
                </styled_Notice.NTBTd>
                <styled_Notice.NTBTDLeft>
                  <Link
                    to={`/notice/${notice.Num}`}
                    style={{ textDecoration: "none" }}
                  >
                    <styled_Notice.NTBTDLA>
                      {notice.Title}
                    </styled_Notice.NTBTDLA>
                  </Link>
                </styled_Notice.NTBTDLeft>
                <styled_Notice.NTBTd>
                  {notice.Date}
                </styled_Notice.NTBTd>
                <styled_Notice.NTBTd>조회수</styled_Notice.NTBTd>
              </styled_Notice.NTBTr>
            );
          })}
    </>
  );
};
