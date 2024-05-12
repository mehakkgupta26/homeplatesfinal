import Useonlinestatus from "../utlis/Useonlinestatus";
import Shimmering_ui from "./Shimmering_ui";

function Contact() {
  //online status
  const x = Useonlinestatus();
  if (x === false)
    return (
      <div>
        <h4 className="internetStatus"> you are offline !! </h4>
        <Shimmering_ui />
      </div>
    );

  return (
    <div className="contact-us-page">
      <div className="contact-us-image-container">
        <img
          src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=1060&t=st=1706872125~exp=1706872725~hmac=c0548b7525d07ca8f723a2aecd98144a1e0a2f2410a020d80714c3567a4184ac"
          alt="Food Image"
        />
      </div>
      <div className="contact-us-form-container">
        <h2>Contact Us</h2>
        <div className="contact-us-form-group">
          <p style={{fontSize: '16px', marginBottom: '10px'}}>Mail your queries to us on abc@gmail.com</p>
          <p style={{fontSize: '16px'}}>Or call on 9988776611</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
