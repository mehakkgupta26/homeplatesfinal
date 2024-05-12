import Restcard, { withPromotedlabel } from "./Restcard.js";
import Shimmering_ui from "./Shimmering_ui.js";
import rc from "../utlis/mockData.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import Useonlinestatus from "../utlis/Useonlinestatus.js";
import UserContext from "../utlis/UserContext.js";
import { AuthContext } from "../utlis/AuthContext";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const nav = useNavigate();

  // //set user name
  // const { setuserName, loggedInUser } = useContext(UserContext);
  // // console.log(setuserName);

  // set variable defined inside the function
  const [listOfRest] = useState(
    rc.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );
  const [listOfFilteredrest, setlistOfFilteredrest] = useState(
    rc.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );
  const [topRatedRest, settopRatedRest] = useState("Top Rated ");
  const [searchText, setsearchText] = useState("");

  //shimmering ui
  if (listOfFilteredrest.length === 0) {
    return <Shimmering_ui />;
  }

  //on click event handler for top rated rest.
  const handleTopRatedClick = () => {
    if (topRatedRest === "Top Rated ") {
      const Filterdlist = listOfRest.filter((res) => res.info.avgRating > 3.5);

      // console.log(Filterdlist);

      setlistOfFilteredrest(Filterdlist);
      settopRatedRest("All"); // Update the button text
    } else {
      setlistOfFilteredrest(listOfRest);
      settopRatedRest("Top Rated "); // Update the button text
    }
  };

  //online status
  const x = Useonlinestatus();
  if (x === false)
    return (
      <div>
        <h4 className="internetStatus"> you are offline !! </h4>
        <Shimmering_ui />
      </div>
    );

  const Restcardpromoted = withPromotedlabel(Restcard);

  //code for protexted route
  if (!isLoggedIn) {
    return nav("/Login");
  }

  return (
    <div className="Body">
      <div className="filter">
        {/* filtering on the basis of top rated rest. */}
        <button className="filter-btn" onClick={handleTopRatedClick}>
          {topRatedRest}
        </button>

        {/* input user name */}
        {/* <div className="Nameinputbox">
          <label className="Usernamebox"> Username: </label>
          <input
            className="inputBoxforname"
            type="text"
            placeholder="Enter name" 
            value = {loggedInUser}
            onChange={(e) => {
              setuserName(e.target.value)
            }}
            />
        </div> */}
      </div>

      <div className="rest-container">
        {listOfFilteredrest.map((res) => {
          //res is the name of the temporary parameter that helps in looping
          //resData is the name of the prop
          return (
            <Link
              key={res.info.id}
              to={"/restaurant/" + res.info.id}
              className="Restaurant_button"
            >
              {res.info.promoted ? (
                <Restcardpromoted resData={res} />
              ) : (
                <Restcard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
