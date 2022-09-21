import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";


function Home() {
  const [input, setInput] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
 
  return (
    <div className="home">
      <div className="home-header">
        <a href="http://www.gmail.com"> Gmail</a>
        <a href="https://www.google.co.in/imghp?hl=en&ogbl"> Images</a>
        {/* <Link to="/gmail">Gmail</Link>         */}
        {/* <Link to="/images">Images</Link> */}
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Button variant="contained" color="primary">
          SignIn
        </Button>
      </div>
      <div className="home-body">
        <img
          src="https://pngimg.com/uploads/google/google_PNG19644.png"
          alt="logo"
        />
        <div class="searchbox">
          <form className="search" onSubmit={submitHandler}>
            <div class="search-input">
              <SearchIcon className="sicon" />
              <input
                value={input}
                className="ipvalue"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <MicIcon className="sicon" />
            </div>
            <div className="search-button">
              <Button type="submit" variant="outlined">
                Google Search
              </Button>
              <Button type="submit" variant="outlined">
                I'm Feeling Lucky
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="languages">
        Google offered in :<Link to="/hindi">हिन्दी</Link>
        <Link to="/english">English</Link>
        <Link to="/telugu">తెలుగు</Link>
        <Link to="/marati">मराठी</Link>
        <Link to="/malayalam">മലയാളം</Link>
      </div>
      <div className="footer">
        <div className="india">India</div>
        <div className="footer-all">
          <div className="footer-left">
            <Link to="/about">About</Link>
            <Link to="/advertising">Advertising</Link>
            <Link to="/business">Business</Link>
            <Link to="/searchworks">HowSerachWorks</Link>
          </div>
          <div className="footer-right">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
