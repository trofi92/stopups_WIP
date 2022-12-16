import {useState} from "react";
import {NPA, NPLi, NPLNButton, NPUl} from "../../styled/Notice/Notice";

const Pagination = ({page, totalPosts, limit, setPage}) => {
    const numPages = Math.ceil(totalPosts / limit)
    const [currPage, setCurrPage] = useState(page);
    let firstNum = currPage - (currPage % 5) + 1
    let lastNum = currPage - (currPage % 5) + 5

    return (
        <NPUl>
            <NPLi>
                <NPLNButton onClick={() => {
                    setPage(page - 1);
                    setCurrPage(page - 2);
                }} disabled={page === 1}>
                    &lt;
                </NPLNButton>

                <NPA
                    onClick={() => setPage(firstNum)}
                    aria-current={page === firstNum ? "page" : null}
                >
                    {firstNum}
                </NPA>
                {Array(4).fill().map((_, i) => {
                    if (i <= 2) {
                        return (
                            <NPA
                                border="true"
                                key={i + 1}
                                onClick={() => {
                                    setPage(firstNum + 1 + i)
                                }}
                                aria-current={page === firstNum + 1 + i ? "page" : null}
                            >
                                {firstNum + 1 + i}
                            </NPA>
                        )
                    } else if (i >= 3) {
                        return (
                            <NPA
                                border="true"
                                key={i + 1}
                                onClick={() => setPage(lastNum)}
                                aria-current={page === lastNum ? "page" : null}
                            >
                                {lastNum}
                            </NPA>
                        )
                    }
                })}
                <NPLNButton
                    onClick={() => {
                        setPage(page + 1)
                    }}
                    disabled={page === numPages}
                >
                    &gt;
                </NPLNButton>
            </NPLi>
        </NPUl>
    )

}

export default Pagination;
