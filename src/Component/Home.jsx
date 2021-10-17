import React from "react";
import "../index.css";
import background from "../images/gal_img_full_2.jpg";
import wallet from "../images/WhatsApp Image 2021-10-16 at 3.19.08 PM.jpeg";
import credit from "../images/WhatsApp Image 2021-10-16 at 3.40.40 PM.jpeg";
import money from "../images/WhatsApp Image 2021-10-16 at 3.18.06 PM.jpeg"



var sectionStyle = {
    width: "100%",
  height: "500px",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
    backgroundSize: "cover"
    
  }



function Home(){
    return(
        <div>  
        <br/>        
  <section style={ sectionStyle }>
  <h1>EASY Banking</h1>
  </section>
  <br/>
  <br/>
  <br/>
<div className="row">
    <div className="col-lg-4 col-md-12 col-sm-12">
    <img src={wallet} alt="wallet Inc. logo"/>
    <h4>MONEY SAVING</h4>
    <p>Someone’s sitting in the shade
     today because someone planted a tree a long time ago</p>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12">
    <img src={credit} alt="wallet Inc. logo"/>
    <h4>ONLINE SHOPPING</h4>
    <p>Live with a modern look personality with soclicheclothing that offers women dresses online in large discounts prices and with the whole sale also</p>
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12">
    <img src={money} alt="wallet Inc. logo"/>
    <h4>CREDIT / DEBIT CARD</h4>
    <p>My bank must stop trying to sell me identity theft protection. You know why I expect you to protect my money? Because you're a bank.</p>
    </div>
</div>

        </div>
    )
}

export default Home;