import "./Gigs.scss";
import { useState } from "react";
import {gigs} from "../../data"
import GigCard from "../../Components/gigCard/GigCard";


const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  function condition() {
    return sort === "sales"
      ? "Best Sellings"
      : sort === "recommended"
      ? "Recommended"
      : sort === "createdAt"
      ? "Newest Arrivals"
      : null;
  }

  function jsxcon() {
    if (sort === "sales") {
      return (
        <>
          <span onClick={() => reSort("recommended")}>Recommended</span>
          <span onClick={() => reSort("createdAt")}>Newest Arrivals</span>
        </>
      );
    } else if (sort === "recommended") {
      return (
        <>
          <span onClick={() => reSort("sales")}>Best Sellings</span>
          <span onClick={() => reSort("createdAt")}>Newest Arrivals</span>
        </>
      );
    } else {
      return (
        <>
          <span onClick={() => reSort("recommended")}>Recommended</span>
          <span onClick={() => reSort("sales")}>Best Sellings</span>
        </>
      );
    }
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          {" "}
          FIVERR &gt; GRAPHICS & DESIGN &gt;{" "}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">{condition()}</span>
            <img
              src="./img/down.png"
              alt="down arrow icon for a list"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                 {jsxcon()}
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          { gigs.map(gig => (
             <GigCard key={gig.id} item={gig} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gigs;
