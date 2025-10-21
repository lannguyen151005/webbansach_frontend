import React from "react";

interface PaginationImpl {
    currentPage: number;
    totalPage: number;
    paginate: any
}
export const Pagination: React.FC<PaginationImpl> = (props) => {

    const pageList = [];
    
    //props.currentPage-2: hien 2 nut tang truoc trang hien tai
    const startPage = Math.max(1, props.currentPage - 2);
    //props.currentPage+2: hien 2 nut tang sau trang hien tai
    const endPage = Math.min(props.totalPage, props.currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        pageList.push(i);
    }


    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={() => props.paginate(1)}>First</button>
                    </li>

                    {
                        pageList.map(page => (
                            <li className={"page-item" + (props.currentPage === page ? "active" : "")} key={page} onClick={() => props.paginate(page)}>
                                <button className="page-link">{page}</button>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <button className="page-link" onClick={() => props.paginate(props.totalPage)}>Last</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}