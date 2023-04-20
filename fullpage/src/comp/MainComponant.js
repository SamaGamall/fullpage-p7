import './MainComponant.css';
import React from 'react';

const MainComponant = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,900&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/master.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>blood bank</title>
  <section id="container">
    <section className="container">
      <div className="container-img">
        <div className="caption">
          <h2>Blood</h2>
          <p>
            When you give blood, you’re more than
            <br />
            just a donor. You’re the Lifeblood of Egypt.
          </p>
          <a href="#">
            <span
              className=" colm 
                  colmlink"
            >
              Donets Now
            </span>
          </a>
        </div>
      </div>
    </section>
    <section className="woman">
      <div className="woman-grid">
        <div className="grid-item">
          <img src="images/woman.jpg" />
        </div>
        <div className="grid-itemtext">
          <h5>Celebrate the women who give.</h5>
          <h2>Donate blood between 6 March–2 April for a Jenny Kee bandage.</h2>
          <p>
            in support of International Women’s Day on 8 March, we’ve teamed-up
            with Aussie fashion icon Jenny Kee to celebrate all the women who
            change lives through Lifeblood.
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink"
            >
              Donets Now
            </span>
          </a>
        </div>
      </div>
    </section>
    <section className="photo-text">
      <div className="congrid">
        <div className="grid-item">
          <img src="images/m1.webp" />
          <h2>Can I donate blood?</h2>
          <p>
            See if you are eligible to donate blood today,
            <br />
            or find answers to frequently aske questions.
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink"
            >
              Check your eligibility{" "}
            </span>
          </a>
        </div>
        <div className="grid-item">
          <img src="images/m2.webp" />
          <h2>Making your donation</h2>
          <p>
            Discover how you can give blood, plasma or
            <br />
            platelets, and book your next donation.
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink"
            >
              Know how to donate{" "}
            </span>
          </a>
        </div>
        <div className="grid-item">
          <img src="images/m3.webp" />
          <h2>Find a blood donor centre</h2>
          <p>
            There are donor centres all across the <br />
            country. Find one that's closest to you.
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink"
            >
              Find a donor centre
            </span>
          </a>
        </div>
        <div className="grid-item">
          <img src="images/m4.webp" />
          <h2>Learn about blood</h2>
          <p>
            Know the fine details about blood, like
            <br /> what’s in it, who needs it, and where it goes <br />
            after you give it.
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink"
            >
              See the details{" "}
            </span>
          </a>
        </div>
        <div className="grid-item">
          <img src="images/m5.webp" />
          <h2>Blood testing and safety</h2>
          <p>
            Egypthas one of the safest blood <br />
            supplies in the world. Find out what we test,
            <br />
            and how.
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink"
            >
              Learn about safety{" "}
            </span>
          </a>
        </div>
        <div className="grid-item">
          <img src="images/m6.webp" />
          <h2>Donate as a group</h2>
          <p>
            Be part of our group donation program,
            <br /> Lifeblood Teams. It’s about friendship,
            <br /> community
          </p>
          <a href="#">
            <span
              className=" colm 
                      colmlink">
            
              Join Lifeblood Teams
            </span>
          </a>
        </div>
      </div>
    </section>
    <section className="link-title">
      <h2>Your most asked questions</h2>
      <div className="qest-link">
        <div className="grid-item">
          <a href="#">
            <span className="link-caption">
              If I've been diagnosed with COVID-19, when can I donate blood?
            </span>
            <i className="fa-sharp fa-solid fa-arrow-right qicon" />
          </a>
          <hr />
        </div>
        <div className="grid-item">
          <a href="#">
            <span className="link-caption">
              I lived in the UK . When will I be able to donate?
            </span>
            <i className="fa-sharp fa-solid fa-arrow-right qicon" />
          </a>
          <hr />
        </div>
        <div className="grid-item">
          <a href="#">
            <span className="link-caption">
              What medications will prevent me from donating?
            </span>
            <i className="fa-sharp fa-solid fa-arrow-right qicon" />
          </a>
          <hr />
        </div>
        <div className="grid-item">
          <a href="#">
            <span className="link-caption">
              I have a tattoo. Can I donate blood?
            </span>
            <i className="fa-sharp fa-solid fa-arrow-right qicon" />
          </a>
          <hr />
        </div>
        <div className="grid-item">
          <a href="#">
            <span className="link-caption">
              I have low iron. Can I donate blood?
            </span>
            <i className="fa-sharp fa-solid fa-arrow-right qicon" />
          </a>
          <hr />
        </div>
        <div className="grid-item">
          <a href="#">
            <span className="link-caption">All frequently asked questions</span>
            <i className="fa-sharp fa-solid fa-arrow-right qicon" />
          </a>
          <hr />
        </div>
      </div>
    </section>
    <div className="clear" />
    <section className="form">
      <div className="form-caption">
        <h2>How are we doing?</h2>
        <p>
          Before you go, how would you rate your experience on the website
          today?
        </p>
        <div className="form-select">
          <select>
            <option selected="selected">- Select -</option>
            <option>Brilliant, thanks!</option>
            <option>Good</option>
            <option>It's OK</option>
            <option>Not good</option>
            <option>Terrible, sorry!</option>
          </select>
          <textarea defaultValue={"\n                    "} />
          <button className="btn-submit" type="submit">
            submit
          </button>
        </div>
      </div>
    </section>
  </section>
</>

  
  );
}

export default MainComponant;
