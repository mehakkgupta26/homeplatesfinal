import Shimmering_ui from "./Shimmering_ui";
import Useonlinestatus from "../utlis/Useonlinestatus";
import { AuthContext } from "../utlis/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);

  //online status
  const x = Useonlinestatus();

  const nav = useNavigate();

  if (x === false)
    return (
      <div>
        <h4 className="internetStatus"> you are offline !! </h4>
        <Shimmering_ui />
      </div>
    );

  //code for protexted route
  // if(!isLoggedIn){
  //   return(
  //   nav("/Login")
  //   )
  // }

  return (
    <div>
      <div className="about-page">
        <div className="about-page">
          <div className="logo">
            <img
              src="https://png.pngtree.com/png-clipart/20190413/ourmid/pngtree-cartoon-hamburg-fries-design-material-png-image_861555.jpg"
              alt="Food Ville Logo"
            />
            <h1>HomePlates</h1>
          </div>
          <div className="content">
            <h2>About Us</h2>
            <p>
              HomePlates is a pioneering initiative committed to providing a
              seamless platform for the delivery of homemade food, aiming to
              bridge the gap between home cooks and food enthusiasts seeking
              authentic, homemade meals. Our mission is to celebrate the rich
              diversity of homemade cuisines while supporting local home chefs
              and promoting a healthier lifestyle through freshly prepared,
              preservative-free dishes.
            </p>
            <p>
              we believe in the power of homemade food to evoke memories, foster
              connections, and nourish the body and soul. Our platform offers a
              curated selection of homemade meals crafted with love and care by
              talented home chefs, ensuring that every bite is a culinary
              delight.
            </p>
            <p>
              Whether you're craving traditional comfort food, exotic flavors
              from around the world, or wholesome dishes made with locally
              sourced ingredients, HomePlates has something for everyone. Our
              user-friendly website and mobile app make it easy to browse,
              order, and enjoy homemade meals right at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
