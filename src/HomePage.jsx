import React from 'react';
import MainLogo from './assets/main-logo-kdys-intern.png';
import CurveLine from './assets/underline.png'
import MainText from './assets/Group 4.png'
import UpperDotText from './assets/Group 5.png'
import LowerText from './assets/Group 6.png'
import Blog from './assets/Blogs.png'
import LeftTree from './assets/tree-left.png'
import WhiteFlower from './assets/white-flower.png'
import BlogImage1 from './assets/luxury-interior-exterior-design-pool-villa-with-livingroom.png'
import BlogImagee2 from './assets/miami-luxury-house.png'
import Balinese from './assets/thai-balinese-luxury-villa-with-infinity-swimming-pool.png'
import Contact from './assets/Contact-Us.png'
// import BlogImage3 from './assets/thai-balinese-luxury-villa-with-infinity-swimming-pool.png'
// import WhiteBorder from './assets/white-border.png'
import BackgroundImage from './assets/miami-luxury-house.png'
import BlueBackground from './assets/blue-background.png'
import MiamiLuxuryBackImg from './assets/miami-luxury-house.png'
import About from './assets/About-us.png'
import Underline from './assets/underline.png'
import Tree from './assets/tree.png'
import PoolImage from './assets/outdoor-swimming-pool.png'
import WishlistRental from './assets/Wishlist-Rentals.png'
import KeralaIndia from './assets/kerala-india.png'
import Spa from './assets/sky-summer-resort-nobody-spa.png'
import LuxuryPoolVilla from './assets/luxury-pool-villa.png'
// import SwimmingPool from './assets/swimming-pool.png'
// import Contact from './assets/contact-us.png'
import WhiteBG from './assets/white-bg.png'
import RoundThirdImg from './assets/houseboat-kerala-backwaters-kerala-india.png'
import FooterLogo from './assets/footer-logo.png'
import './App.css';

const HomePage = () => {
  return (
   <div className='page-container'>
     <div className="home-page-container ">
      {/* Background layers */}
      <div className="luxury-background"></div>
      <div className="dark-overlay"></div>

      <header className="blurred-header">
        <div className="main-logo">
          <img src={MainLogo} alt="main-logo" />
        </div>
        <nav className="navbar">
          <ul className="navbar-links font-light text-[0.95rem]">
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">GRENVILLE HOUSE</a></li>
            <li><a href="/">ARTIST GARDEN'S</a></li>
            <li><a href="/">ARTISTS MAIN RESIDENCE</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">CONTACT US</a></li>
          </ul>
        </nav>
      </header>

<div className=" relative flex flex-col mt-[12vw] items-center">
  {/* First image a bit higher, add bottom margin */}
  <img className="z-10 ml-[-16vw] mb-[-12vw]" src={UpperDotText} alt="" />
  
  {/* Second image normal */}
  <img className="z-10 mt-[5vw]" src={MainText} alt="" />
  
  {/* Third image (the line) */}
  <img className="z-10 ml-[-20vw]" src={CurveLine} alt="" />
  
  {/* Fourth image shifted a bit right using ml-10 */}
  <img className="z-10 ml-[25vw] mt-[-3.5vw]" src={LowerText} alt="" />
</div>


    </div>


    <div className='about mt-10'>
  <div
  className="about-page relative h-[700px] w-full flex items-center justify-center px-8"
   style={{
     backgroundImage: `url(${WhiteBG})`,
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     backgroundPosition: "center",
   }}
>
  {/* Miami Background (Base Layer) */}
  <div className="relative w-[79%] h-full z-10 rounded-[15px] overflow-hidden right-[-12%]">
    {/* Miami image */}
    <img
      src={MiamiLuxuryBackImg}
      alt="Miami Background"
      className="w-full h-full object-cover rounded-[15px]"
    />

    {/* Blue overlay + content */}
    <div className="absolute  inset-0 z-20 pointer-events-none">
      {/* Blue overlay image */}
      <img
        src={BlueBackground}
        alt="Blue Shadow"
        className="w-full h-full object-cover opacity-50 mix-blend-multiply rounded-[15px]"
      />

  {/* Content over blue */}
<div className="absolute inset-0 z-30 pointer-events-auto ml-[2vw] min-w-[20vw] flex flex-col items-center justify-center text-white">
  {/* About Us + Underline stacked tightly */}
 <div className="flex flex-col items-start">
  <img src={About} alt="About Us" className="w-[15vw]" />
  <img src={Underline} alt="Underline" className="w-[20vw] -mt-16 -ml-20" />
</div>


 <p className="text-left text-lg max-w-[30vw]  mt-6 ml-[8vw]">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing.
</p>
<p className="text-left text-lg max-w-[30vw] mt-4 ml-[8vw]">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing.
</p>

{/* Button */}
<div className="ml-[-8vw] mt-6">
  <button className="bg-white text-blue-500 px-6 py-2 border border-white tect-left rounded-full font-semibold  transition">
    LEARN MORE
  </button>
</div>


  {/* Tree image on the right with larger size */}
  <div className="absolute right-[-2vw] bottom-0">
    <img src={Tree} alt="Tree" className="w-[20vw]" />
  </div>
</div>

    </div>
  </div>

  {/* Pool Image */}
  <div className="absolute right-[50%] z-30 w-[50%] h-[550px]">
    <img
      src={LuxuryPoolVilla}
      alt="Pool"
      className="w-full h-full object-cover rounded-[15px] shadow-xl"
    />
  </div>


  
</div>
<div className="wishlist-rental overflow-x-hidden grid grid-cols-[minmax(400px,1fr)_auto] gap-[5vw] px-[5vw] py-[6vh] items-end">
  {/* Left Section */}
  <div className="wishlist-rental-text py-16 flex flex-col ">
    {/* Image Section */}
    <div className="rental-img flex flex-col items-center">
      <img src={WishlistRental} alt="Wishlist Rental" className="w-[18.458vw]" />
      <img src={Underline} alt="Underline" className="-mt-8 w-[16.375vw]" />
    </div>

    {/* Text Section */}
    <div className="rental-text mt-[3.5vh] space-y-[2vh] text-left text-[1vw] max-w-[40vw] text-gray-700">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing.
      </p>
    </div>

    {/* Button */}
    <div className="mt-[3vh]">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
        EXPLORE MORE
      </button>
    </div>
  </div>

  {/* Right Section – Images */}
  <div className="vertical-straight-images flex flex-row gap-[1.5vw] items-end">
    <div className="w-[15.26vw] h-[33.854vw] overflow-hidden rounded-t-[30px] rounded-b-[30px]">
      <img src={Spa} alt="Spa" className="w-full h-full object-cover" />
    </div>
    <div className="w-[15.26vw] h-[33.854vw] overflow-hidden rounded-t-[30px] rounded-b-[30px] mb-[3vw]">
      <img src={PoolImage} alt="Kerala India" className="w-full h-full object-cover" />
    </div>
    <div className="w-[15.26vw] h-[33.854vw] overflow-hidden rounded-t-[30px] rounded-b-[30px]">
      <img src={RoundThirdImg} alt="Swimming" className="w-full h-full object-cover" />
    </div>
  </div>
</div>

<div
  className="contact relative w-[80vw] h-[30vw] rounded-[40px] bg-cover bg-center flex items-center justify-center px-[5vw] py-[6vh] mx-auto my-0"
  style={{
    backgroundImage: `url(${LuxuryPoolVilla})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 rounded-[40px] bg-black opacity-50 z-0"></div>

  {/* Content Container */}
  <div className="contact-content relative z-10 flex flex-row gap-[5vw] w-full max-w-[1440px] items-center justify-between">
    
    {/* Left Section */}
    <div className="contact-left flex flex-col text-white w-[50%]">
      <div className="contact-imgs mb-6">
        <img src={Contact} alt="Contact Visual" className="w-[70%] rounded-lg" />
      </div>
      <div className="contact-text text-[1.1vw] leading-relaxed max-w-[90%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing.
      </div>
    </div>

    {/* Right Section - Form */}
    <div
      className="contact-form relative w-[40%] p-[3vw] rounded-[20px] overflow-hidden flex items-center"
      style={{
        // backgroundImage: `url(${Spa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blue Overlay on Form */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover opacity-80  mix-blend-multiply"
          style={{ backgroundImage: `url(${BlueBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Form Fields */}
      <form className="relative z-10 text-white flex h-[20vw] flex-col gap-4 w-full">
        <input type="text" placeholder="Name" className="bg-white text-black px-4 py-2 rounded-full outline-none" />
        <input type="text" placeholder="Phone Number" className="bg-white text-black px-4 py-2 rounded-full outline-none" />
        <input type="email" placeholder="Email" className="bg-white text-black px-4 py-2 rounded-full outline-none" />
        <textarea placeholder="Message" className="bg-white text-black px-4 py-2 rounded-2xl outline-none resize-none h-[120px]" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 mt-2 rounded-full transition">Send Message</button>
      </form>
    </div>
  </div>
</div>






</div>

  <div className="blog mt-10">
  <div className="relative w-full h-screen overflow-hidden">
    {/* Background Image */}
    <img
      src={BackgroundImage}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.95] z-0"
    />

    {/* Blue Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-[0.60] z-10"
      style={{ backgroundImage: `url(${BlueBackground})` }}
    ></div>

    {/* Content */}
    <div className="relative w-full h-full z-20 flex flex-col items-center justify-center pt-10">
      {/* Blog Title */}
      <img
        src={Blog}
        alt="Blog Title"
        className=" opacity-100"
      />

      {/* 3 Cards Section */}
     <div className="flex flex-wrap justify-center gap-8 ">
  {/* Card 1 */}
  {/* <div className='border border-white '></div> */}
 <div className='border border-white p-3'>
 <div className="border border-2 border-white p-5 rounded-xl max-h-[30vw] w-[300px] bg-white text-black text-center shadow-lg">
    <img src={BlogImage1} alt="Card 1" className="mx-auto rounded-lg mb-4 w-30 h-30 min-h-[30px] object-contain" />
    <p className="mb-4 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum.
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">LEARN MORE</button>
  </div>
 </div>

  {/* Card 2 */}
 <div className='border border-white p-3'>
 <div className="border border-2 border-white p-5 rounded-xl max-h-[30vw] w-[300px] bg-white text-black text-center shadow-lg">
    <img src={Balinese} alt="Card 2" className="mx-auto mb-4 w-30 h-30 min-h-[30px] object-contain" />
    <p className="mb-4 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum.
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">LEARN MORE</button>
  </div>

 </div>
  {/* Card 3 */}
  <div className='border border-white p-3'>
 <div className="border border-2 border-white p-5 rounded-xl max-h-[30vw] w-[300px] bg-white text-black text-center shadow-lg">
    <img src={BlogImage1} alt="Card 2" className="mx-auto mb-4 w-30 h-30 min-h-[30px] object-contain" />
    <p className="mb-4 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum.
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">LEARN MORE</button>
  </div>

 </div>
</div>


      {/* Top-Right Flower */}
      <img
        src={WhiteFlower}
        alt="Flower"
        className="absolute top-[5vw] right-[-2vw] w-68 opacity-[0.53]"
      />

      {/* Bottom-Left Tree */}
      <img
        src={LeftTree}
        alt="Tree"
        className="absolute bottom-[-2vw] left-[-4vw] w-68 opacity-[0.55]"
      />
    </div>
  </div>
</div>
<footer
  className="relative bg-center bg-no-repeat contain text-white mt-10"
  style={{
    backgroundImage: `url(${LuxuryPoolVilla})`, // 👈 ya koi bhi high-res image
    backgroundSize: 'cover',                     // ✅ ensures full coverage
    backgroundPosition: 'center center',         // ✅ centers image
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

  {/* Footer Content Grid */}
  <div className="relative z-10 grid grid-cols-4 gap-8 px-[5vw] py-[6vh]">
    {/* Logo */}
    <div className="flex flex-col justify-center">
     <img className='w-[15vw]' src={FooterLogo} />
    </div>

    {/* Nav Links */}
    <div className="flex flex-col space-y-2">
      <h1 className="font-semibold text-lg mb-2">MENU</h1>
      <p>HOME</p>
      <p>ABOUT US</p>
      <p>GRENVILLE HOUSE</p>
      <p>ARTIST'S GARDEN</p>
      <p>ARTIST'S MAIN RESIDENCE</p>
      <p>BLOG</p>
      <p>TERMS & PRIVACY</p>
    </div>

    {/* Get in Touch */}
    <div>
      <h1 className="font-semibold text-lg mb-2">GET IN TOUCH</h1>
      <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur.</p>
      <div className="flex items-center mt-5 gap-2">
       
        <p>dummymail@gmail.com</p>
      </div>
    </div>

    {/* Social Icons */}
    <div>
      <h1 className="font-semibold text-lg mb-2">FOLLOW US</h1>
      <div className="flex gap-6 mt-5 text-xl">
        <i className="fab fa-youtube"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </div>
  </div>

  {/* Copyright Bar */}
  <div className="bg-blue-600 text-center py-3 z-50 text-sm">
    © Copyright 2023 | All Rights Reserved.
  </div>
</footer>




   </div>
  );
};

export default HomePage;

