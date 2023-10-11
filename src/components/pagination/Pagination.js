import { useEffect, useState } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = (props) => {
  const [totalPages, setTotalPages] = useState(0);

  const { totalData, pageLimit, onPageChanged, currentPage, pageNeighbours } =
    props;

  useEffect(() => {
    setTotalPages(Math.ceil(totalData / pageLimit));
  }, [setTotalPages]);

  const fetchNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffSet = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffSet, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = fetchNumbers() || [];

  return (
    <nav>
      <ul className=" flex">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={index} className="p-3 ">
                <a
                  href="/"
                  className={`  py-4 px-5 mx-3 border-4  rounded-2xl text-lg font-bold bg-gray-100  text-black  hover:bg-gray-200 ${
                    currentPage === page ? "bg-gray-300" : ""
                  }`}
                  aria-label="Previous"
                  onClick={(e) => onPageChanged(e, pageNeighbours * 2 - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index} className="p-3 ">
                <a
                  className={`  py-4 px-5 mx-3 border-4 rounded-2xl text-lg font-bold bg-gray-100  text-black  hover:bg-gray-200 ${
                    currentPage === page ? "bg-gray-300" : ""
                  }`}
                  href="/"
                  aria-label="Next"
                  onClick={(e) => onPageChanged(e, pageNeighbours * 2 + 3)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            );

          return (
            <li key={index} className="">
              <a
                className={`py-2 px-3 mx-3 rounded-2xl text-lg font-bold shadow-2xl hover:bg-gray-500 hover:text-white duration-150 ease-in ${
                  currentPage === page
                    ? "bg-gray-600 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                href="/"
                onClick={(e) => onPageChanged(e, page)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
