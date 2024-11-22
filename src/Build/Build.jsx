import React from "react";
import "./Build.css";
import topanimation from "../assets/sich.png";
import bottomanimation from "../assets/3.png";
import customersupport from "../assets/customer support.jpg";
import pandelivery from "../assets/pan india.jpg";
import technical from "../assets/consulting.jpg";
import secure from '../assets/parcel.jpg';

const Build = () => {
  return (
    <>
      <div className="sliding">
        <figure className="figuring">
          <img className="topani" src={topanimation} alt="" />
          <img className="bottomani" src={bottomanimation} alt="" />
        </figure>
      </div>
      <div className="Build">
        <h2 className="build-text autoshowing">Why Choose Us</h2>
        <p className="build-sub-text">Explore our Support's</p>
        <div className="main-content2">
          <div className="picture">
            <h2 className="picture-title autoshowing">Exceptional Customer Support</h2>
            <img className="autoshowing" src={customersupport} alt="" />
          </div>
          <div className="build-content autoshowing">
            <p>
              We provide 24/7 customer support to assist with any queries or
              issues, ensuring you have help whenever you need it. Our dedicated
              team is here to make your PC-building experience smooth and
              enjoyable.
            </p>
            <p>
              Building a customer persona is an essential step for our sales
              team to provide tailored PC solutions. A customer persona is a
              detailed representation of our ideal custome r based on real data
              and insights gathered through direct interactions
            </p>
          </div>
        </div>
        <div className="main-content2">
          <div className="build-content2 autoshowing">
            <p>
              Enjoy fast and free delivery across India! We ensure that your
              custom-built PC arrives safely and quickly, no matter where you
              are.
            </p>
            <p>
              We provide complimentary delivery and shipping services, ensuring
              a seamless experience for our customers. To guarantee the safety
              and security of your purchase, we employ premium packing
              materials.
            </p>
          </div>
          <div className=" picture2 autoshowing">
            <h2 className="picture-title">Pan-India Free Delivery</h2>
            <img className="autoshowing" src={pandelivery} alt="" />
          </div>
        </div>

        <div className="main-content2">
          <div className="picture3">
            <h2 className="picture-title autoshowing">Expert Technical Consulting</h2>
            <img className="autoshowing" src={technical} alt="" />
          </div>
          <div className="build-content3 autoshowing">
            <p>
              Our experienced consultants are ready to guide you in selecting
              the best components for your needs, whether you’re a gamer, a
              content creator, or a professional. Get personalized advice on
              performance, compatibility, and budget.
            </p>
            <p>
              Our dedicated team of engineers is here to make sure you're
              well-prepared even before your new PC arrives at your doorstep. We
              are deeply committed to educating our valued customers. Before
              your PC is delivered or set up, our experts provide comprehensive
              support to ensure you have the essential skills and knowledge
              required for optimal PC usage.
            </p>
          </div>
        </div>

        <div className="main-content2">
          <div className="build-content2 autoshowing">
            <p>
              We prioritize the safe delivery of your PC with highly secure
              packaging to protect it during transit. From shock-proof materials
              to protective padding, we ensure every part arrives intact and
              ready to perform
            </p>
            <p>
              The third layer protects against environmental factors such as
              moisture, dust, and temperature fluctuations. This comprehensive
              approach minimizes the risk of damage, ensuring your items arrive
              in perfect condition.
            </p>
          </div>
          <div className=" picture2">
            <h2 className="picture-title autoshowing">Strong and Secure Packing</h2>
            <img className="autoshowing" src={secure} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Build;
