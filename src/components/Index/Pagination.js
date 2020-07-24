import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "1em 0",
  },
  buttonsContainer: {
    textAlign: "center",
  },
  infoContainer: {
    margin: "1em 0",
  },
  active: {
    border: "1px solid #384257",
    borderRight: "none",
  },
  pageButton: {
    background: "none",
    border: "none",
    borderLeft: "1px solid #384257",
    padding: "6px 10px",
    textAlign: "center",
    cursor: "pointer",
  },
  firstPageButton: {
    borderLeft: "none",
  },
  forceRightBorder: {
    borderRight: "1px solid #384257",
  },
  navButton: {
    padding: "10px 10px ",
    cursor: "pointer",
    color: "white",
    background: "#384257",
    border: "none",
    marginRight: "1px",
  },
};

const Pagination = ({ page, num_pages: numPages, setPage, itemsPerPage }) => {
  const decreasePage = () => {
    setPage(page - 1);
  };
  const increasePage = () => {
    setPage(page + 1);
  };
  const goToFirstPage = () => {
    setPage(1);
  };
  const goToLastPage = () => {
    setPage(numPages);
  };

  const MAX_NUM_PAGE_BUTTONS = 9;
  const halvesSize = Math.floor(MAX_NUM_PAGE_BUTTONS / 2);
  let firstPage;
  let lastPage;
  if (page <= halvesSize) {
    firstPage = 1;
    lastPage = MAX_NUM_PAGE_BUTTONS;
  } else if (page + halvesSize >= numPages) {
    firstPage = numPages - MAX_NUM_PAGE_BUTTONS;
    lastPage = numPages;
  } else {
    firstPage = page - halvesSize;
    lastPage = page + halvesSize;
  }
  const pageButtons = [];
  let buttonStyles = {};
  for (let i = firstPage; i <= lastPage; i++) {
    buttonStyles =
      i === page
        ? { ...styles.pageButton, ...styles.active }
        : styles.pageButton;
    buttonStyles =
      i !== page && i === firstPage
        ? { ...buttonStyles, ...styles.firstPageButton }
        : buttonStyles;
    buttonStyles =
      i === page && i === numPages
        ? { ...buttonStyles, ...styles.forceRightBorder }
        : buttonStyles;
    pageButtons.push(
      <button
        key={`${page}-${i}`}
        style={buttonStyles}
        onClick={() => setPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <section style={styles.container}>
      <div style={styles.buttonsContainer}>
        {page > 1 ? (
          <>
            <button
              className="clickable"
              style={styles.navButton}
              onClick={goToFirstPage}
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
            <button
              className="clickable"
              style={styles.navButton}
              onClick={decreasePage}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </>
        ) : null}

        {pageButtons}

        {page < numPages ? (
          <>
            <button
              className="clickable"
              style={styles.navButton}
              onClick={increasePage}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button
              className="clickable"
              style={styles.navButton}
              onClick={goToLastPage}
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </>
        ) : null}

        <div style={styles.infoContainer}>
          Page {page} of {numPages}. Showing {itemsPerPage} papers per page.
        </div>
      </div>
    </section>
  );
};

export default Pagination;
