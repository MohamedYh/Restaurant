import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePageClick = (page: number) => {
        if (page !== currentPage) onPageChange(page);
    };

    const getVisiblePages = () => {
        const maxNumbers = 10;
        let startPage = Math.max(1, currentPage - Math.floor(maxNumbers / 2));
        let endPage = startPage + maxNumbers - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxNumbers + 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Add ellipses and boundaries
        if (startPage > 1) {
            pages.unshift(1);
            if (startPage > 2) pages.splice(1, 0, -1); // -1 acts as a placeholder for "..."
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push(-1);
            pages.push(totalPages);
        }

        return pages;
    };

    const renderPageNumbers = () => {
        const visiblePages = getVisiblePages();
        return visiblePages.map((page, index) =>
            page === -1 ? (
                <li
                    style={{ display: "flex", alignItems: "center" }}
                    key={`ellipsis-${index}`}
                    className="page-item disabled"
                >
                    <span
                        style={{
                            border: "none",
                            background: "transparent",
                            color: "white",
                        }}
                        className="page-link"
                    >
                        ...
                    </span>
                </li>
            ) : (
                <li key={page} className="page-item">
                    <button
                        className={`page-link rounded-pill mx-1 border-0`}
                        style={{
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:
                                page === currentPage ? "red" : "transparent",
                            color: "white",
                            fontSize: "1.25rem",
                            fontWeight: "500",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handlePageClick(page)}
                        onMouseEnter={(e) => {
                            if (page !== currentPage)
                                e.currentTarget.style.backgroundColor = "red";
                        }}
                        onMouseLeave={(e) => {
                            if (page !== currentPage)
                                e.currentTarget.style.backgroundColor =
                                    "transparent";
                        }}
                    >
                        {page}
                    </button>
                </li>
            )
        );
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li
                    className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link rounded-pill mx-2 border-0"
                        style={{
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "transparent",
                            color: "white", // Default text color is white
                            fontSize: "1.25rem",
                            fontWeight: "500",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handlePageClick(currentPage - 1)}
                    >
                        <MdArrowBackIos />
                    </button>
                </li>
                {renderPageNumbers()}
                <li
                    className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link rounded-pill mx-1 border-0"
                        style={{
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "transparent",
                            color: "white", // Default text color is white
                            fontSize: "1.25rem",
                            fontWeight: "500",
                            transition: "background-color 0.3s, color 0.3s",
                        }}
                        onClick={() => handlePageClick(currentPage + 1)}
                    >
                        <MdArrowForwardIos />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
