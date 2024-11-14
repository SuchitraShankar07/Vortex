import React from 'react';
import Slider from 'react-slick';
import './home.css';
import club1 from '../assets/club1.png';
import club2 from '../assets/club2.png';
import club3 from '../assets/club3.png';
import club4 from '../assets/club4.png'; // If you want to add any specific styling to the home page


const Home = () => {
  const settings = {
    dots: true,        // Show navigation dots
    infinite: true,    // Infinite scroll
    speed: 500,        // Speed of transition
    slidesToShow: 1,   // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true,    // Enable autoplay
    autoplaySpeed: 2000, // Time between transitions (in ms)
  };

 

  return (
    <div className="home-page">
      <section className="intro">
        <h1>Welcome to Vortex Club Hub</h1>
        <h2><em>Where Campus Clubs Bring Events to Life!</em></h2>
        <p>
          At <strong>Vortex Club Hub</strong>, we’re your one-stop platform for discovering, creating, and managing club events.
          Whether you’re a student looking to join an exciting event or a club leader organizing a big campus bash, we’ve got everything you need to make it happen!
        </p>
      </section>

      <section className="image-carousel">
        <h2>Explore Our Club Events</h2>
        <Slider {...settings}>
          <div><img src={club1} alt="Event 1" className="carousel-image" /></div>
          <div><img src={club2} alt="Event 2" className="carousel-image" /></div>
          <div><img src={club3} alt="Event 3" className="carousel-image" /></div>
          <div><img src={club4} alt="Event 4" className="carousel-image" /></div>
        </Slider>
      </section>

      <section className="grid-container">
        <div className="section-box">
          <h2>For Clubs: Create & Manage Events with Ease</h2>
          <p>As a club, you want to focus on what matters—engaging your community and making your events a success.</p>
        </div>

        <div className="section-box">
          <h2>Upcoming Events</h2>
          <p>Stay updated with the latest happenings on campus. From study sessions to epic parties, you don’t want to miss out!</p>
        </div>

        <div className="section-box">
          <h2>Host Your Event</h2>
          <p><strong>Planning an event?</strong> Clubs can now host their events through our platform with just a few clicks.</p>
        </div>

        <div className="section-box">
          <h2>Reserve a Venue</h2>
          <p>Need space for your next event? With our <strong>Venue Reservation System</strong>, clubs can quickly find available venues.</p>
        </div>

        <div className="section-box">
          <h2>Event Types</h2>
          <p>Here are some of the event types you can organize or attend:</p>
        </div>

        <div className="section-box">
          <h2>Contact Us</h2>
          <p>Got questions or need help organizing your next event? Reach out to our team, and we’ll assist you with everything from event planning to venue booking.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
