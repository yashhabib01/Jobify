import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useAppContext } from "../context/useAppContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const PagebtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();
  const prevPage = () => {
    let newPage = page;
    if (newPage - 1 < 1) {
      newPage = numOfPages;
    } else {
      newPage = newPage - 1;
    }
    changePage(newPage);
  };
  const nextPage = () => {
    let newPage = page;
    if (newPage + 1 > numOfPages) {
      newPage = 1;
    } else {
      newPage = newPage + 1;
    }
    changePage(newPage);
  };
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        prev
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">
        {pages.map((PageNumber) => {
          return (
            <button
              type="button"
              key={PageNumber}
              value={PageNumber}
              className={PageNumber === page ? "pageBtn active" : "pageBtn"}
              onClick={() => changePage(PageNumber)}
            >
              {PageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PagebtnContainer;
