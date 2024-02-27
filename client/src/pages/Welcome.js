import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import WelcomeImage from "./welcome1.png";
import WelcomeImage2 from "./welcome2.png";
import WelcomeImage3 from "./welcome3.png";
import WelcomeImage4 from "./welcome4.png";

const Welcome = () => {
  return (
    <div>
      <div className="first">
        <div>
          <div>
            <h1 style={{ fontfamily: "Tektur sans-serif" }}>
              Welcome to Eco Explorer{" "}
            </h1>
          </div>
          <div>
            <div className="firs">
              <div>
                <Button
                  variant="contained"
                  sx={{ color: "white", margin: "12px" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  sx={{ color: "white", margin: "12px" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </div>
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "Times New Roman",
                  padding: "0px",
                  paddingTop: "0px",
                  marginRight: "130px",
                }}
              >
                Escape the ordinary and embrace the extraordinary with our
                curated travel experiences.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              className="im"
              // width={'600px'}
              // height={'401px'}
              // src="C:/Users/vaishnavi/OneDrive/Desktop/learning_blog_app/client/src/pages/welcome1.png"
              src={WelcomeImage}
            />
          </div>

          <div className="twoo">
            <div>
              <img
                className="im"
                style={{ padding: "10px" }}
                // width={'600px'}
                // height={'401px'}
                // src="C:/Users/vaishnavi/OneDrive/Desktop/learning_blog_app/client/src/pages/welcome1.png"
                src={WelcomeImage2}
              />
            </div>
            <div>
              <img
                style={{ padding: "10px" }}
                className="im"
                // width={'600px'}
                // height={'401px'}
                // src="C:/Users/vaishnavi/OneDrive/Desktop/learning_blog_app/client/src/pages/welcome1.png"
                src={WelcomeImage3}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <spam
        className="second"
        style={{
          fontSize: "30px",
          fontFamily: "Times New Roman",
          padding: "20px",
          align:"right"
        }}
      >
        Your blog is the unedited version of yourself...
      </spam>

      <div className="five">
        <div className="four">
          <img
            style={{ padding: "10px", borderRadius: "20px" }}
            className="im"
            width={"500px"}
            height={"257px"}
            // src="C:/Users/vaishnavi/OneDrive/Desktop/learning_blog_app/client/src/pages/welcome1.png"
            src={WelcomeImage4}
          />
        </div>
        <div>
          <li>
            <ul>
              <h2
                style={{
                  fontFamily: "Times New Roman",

                
                  marginRight: "130px",
                }}
              >
                <span
                  class="material-symbols-outlined"
                  style={{ padding: "10px" }}
                >
                  flight_takeoff
                </span>
                Travel: Venture into new destinations, immerse in diverse
                cultures, and explore the unknown.
              </h2>
            </ul>
            <ul>
              <h2
                style={{
                  fontFamily: "Times New Roman",

                  marginRight: "130px",
                }}
              >
                <span
                  class="material-symbols-outlined"
                  style={{ padding: "10px" }}
                >
                  ios_share
                </span>
                Share Your Experience: Reflect on memorable moments, exchange
                stories with fellow travelers, and inspire others with your
                adventures.
              </h2>
            </ul>
            <ul>
              <h2
                style={{
                  fontFamily: "Times New Roman",

                
                  marginRight: "130px",
                }}
              >
                <span
                  class="material-symbols-outlined"
                  style={{ padding: "10px" }}
                >
                  done_outline
                </span>
                Revisit the Experience for Better Feel: Recreate the sights,
                sounds, and sensations; relive cherished memories; and deepen
                your connection to past travels for an enriched experience.
              </h2>
            </ul>
          </li>
        </div>
      </div>

      <div>
        <div className="six"> 
        <Button
                  variant="contained"
                  sx={{ color: "white", margin: "12px",padding:'14px', fontSize:'24px',fontFamily:"Times New Roman" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Start Sharing your Experience Now
                </Button>

        </div>

      </div>
    </div>
  );
};

export default Welcome;
