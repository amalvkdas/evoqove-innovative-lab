import { useState } from "react";
import "./PaginationComponent.css";

const PaginationComponent = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
}) => {
    const [activePage, setActivePage] = useState(1);

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
        setActivePage(page);
    };

    const goToPreviousPage = () => {
        if (activePage > 1) {
            handlePageClick(activePage - 1);
        }
    };

    const goToNextPage = () => {
        if (activePage < pages.length) {
            handlePageClick(activePage + 1);
        }
    };

    return (
        <div className='pagination'>
            {activePage !== 1 && (
                <button onClick={goToPreviousPage}>&lt;</button>
            )}
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => handlePageClick(page)}
                        className={page === activePage ? "active" : ""}
                    >
                        {page}
                    </button>
                );
            })}
            {activePage !== pages.length && (
                <button onClick={goToNextPage}>&gt;</button>
            )}
        </div>
    );
};

export default PaginationComponent;
