import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillAmazonCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id = "home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution To All Your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo non
            pariatur error repudiandae mollitia quaerat architecto quis adipisci
            nihil perspiciatis praesentium quod odit dolore odio obcaecati
            nobis, et nemo dolor voluptatibus porro? Maiores illum quaerat
            voluptatum eum. Et, cum similique nisi reiciendis voluptatibus atque
            nobis tenetur, ipsa odio maiores fugiat enim iusto architecto ad
            labore aspernatur quam quis dicta, quae tempora magnam quasi
            perferendis illo libero. Earum sit eligendi, id porro dignissimos
            velit minima reprehenderit voluptates. Esse excepturi nulla officia
            tempora dolorum numquam ipsum earum, deleniti facere explicabo
            aperiam quam optio nam nobis eveniet vero architecto id pariatur
            voluptatum, delectus ex.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
