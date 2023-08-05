import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            FIVERR &gt; GRAPHICS & DESIGN &gt;
          </span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="profile picture"
            />
            <span className="name">Anna Bell</span> <div className="hdiv" />
            <div className="stars">
              <img
                src="/img/star.png"
                alt="rating star icon/imagerating star icon/imagerating star icon/image"
              />
              <img
                src="/img/star.png"
                alt="rating star icon/imagerating star icon/imagerating star icon/image"
              />
              <img
                src="/img/star.png"
                alt="rating star icon/imagerating star icon/imagerating star icon/image"
              />
              <img
                src="/img/star.png"
                alt="rating star icon/imagerating star icon/imagerating star icon/image"
              />
              <img
                src="/img/star.png"
                alt="rating star icon/imagerating star icon/imagerating star icon/image"
              />
              <span className="number">5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="slider Image"
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="slider Image"
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="slider Image"
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user portfolio image"
              />
              <div className="info">
                <span className="name">Anna Bell</span>
                <p>Hi! I can help you with your art fantasy!</p>
                <div className="stars">
                  <img src="/img/star.png" alt="rating star icon/image" />
                  <img src="/img/star.png" alt="rating star icon/image" />
                  <img src="/img/star.png" alt="rating star icon/image" />
                  <img src="/img/star.png" alt="rating star icon/image" />
                  <img src="/img/star.png" alt="rating star icon/image" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Hey! I am an AI-powered art seller on Fiverr, providing
                custom-made masterpieces that'll take your breath away. From
                character portraits to fan art, I use the latest AI technology
                to bring your favorite characters to life. With fast turnaround
                times, affordable prices, and exceptional quality. Order now and
                see the magic unfold!
              </p>
            </div>
          </div>

          <hr className="her" />

          <div className="reviews">
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="reviewer's profile image"
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt="reviewer's country's flag image"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <span>5</span>
                <div className="hdiv" />
                <time>1 month ago</time>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span className="help">Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="chr" />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="reviewer's profile image"
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt="reviewer's country's flag image"
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <span>5</span>
                <div className="hdiv" />
                <time>1 month ago</time>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span className="help">Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="chr" />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="reviewer's profile image"
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt="reviewer's country's flag image"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <img src="/img/star.png" alt="rating star icon/image" />
                <span>5</span>
                <div className="hdiv" />
                <time>1 month ago</time>
              </div>
              <p>
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span className="help">Helpful?</span>
                <img src="/img/like.png" alt="like icon" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="dislike icon" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav-container">
            <label
              className="lab"
              htmlFor="package-tab-1"
              tabIndex="0"
              role="tab"
              aria-selected="false"
            >
              Basic
            </label>
            <label
              className="lab mlav"
              htmlFor="package-tab-2"
              tabIndex="0"
              role="tab"
              aria-selected="true"
            >
              Standard
            </label>
            <label
              className="lab"
              htmlFor="package-tab-3"
              tabIndex="0"
              role="tab"
              aria-selected="false"
            >
              Premium
            </label>
          </div>

          <div className="content">
            <div className="price">
              <h3>Standard</h3>
              <h2>PKR 16,312</h2>
            </div>
            <p>
              2 Variation Images to explore your concept. [Portrait] High
              upscale included
            </p>
            <div className="details">
              <div className="item1">
                <img src="/img/clock.png" alt="" />
                <span>6 Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>1 Revision</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Additional design</span>
              </div>
            </div>
            <button className="button">
              Continue
              <span className="btnspan" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  color="white"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                </svg>
              </span>
            </button>

            <button className="comp">Compare Packages</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gig;
