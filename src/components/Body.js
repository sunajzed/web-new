import React from 'react';
import hero from './images/hero.svg';
import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';
import img4 from './images/img4.svg';
import img5 from './images/img5.svg';
import img6 from './images/img6.svg';

const BodySection = () => {
  return (
    <div className="bg-gray-100">
      <style jsx>{`
        @keyframes rotateCoin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .hover\\:rotate-coin:hover {
          animation: rotateCoin 5s infinite;
        }

        .image-size {
          max-width: 300px;
        }

        .section-container {
          padding: 4rem 1.5rem;
        }

        .text-section {
          margin-right: 2rem;
        }

        .img-section {
          max-width: 100%;
        }

        .fade-in {
          animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          .text-section, .img-section {
            margin-right: 2rem;
          }
        }
      `}</style>
      {/* Hero Image Section */}
      <section className="relative">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-[400px] object-cover fade-in"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-extrabold leading-tight px-4 py-2">
            Sure, we will be ready to <br /> become true with your <br /> dream
          </h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-container bg-[#87A8E7]">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-10">
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-6 text-[#2C3586]">About Us</h2>
            <p className="text-gray-700 mb-10 leading-relaxed">
              Its core products or services, and who your target audience is
            </p>
          </div>

          {/* Content with text and images */}
          {[
            { img: img1, title: "Villa Project", description: "Start with a brief introduction to the villa project. Mention its location, size, and any unique features that make it attractive.", reverse: false },
            { img: img2, title: "Gold", description: "Gold mining involves the exploration and extraction of gold from the earth. This can range from small-scale artisanal mining to large-scale operations involving heavy machinery and advanced technology.", reverse: true },
            { img: img3, title: "Silver", description: "Silver mining involves the exploration and extraction of silver from the earth. It encompasses a range of methods from traditional mining to advanced technology-based operations.", reverse: false },
            { img: img4, title: "Crude Oil", description: "Crude oil extraction and processing involve complex technologies and strategies to maximize yield and efficiency in the oil industry.", reverse: true },
            { img: img5, title: "Tiles", description: "Tiles are essential materials in construction, providing durability and aesthetic value. Explore various tile options and their applications.", reverse: false },
            { img: img6, title: "Sanitaryware", description: "Sanitaryware products are essential for any modern bathroom. Discover a range of options for functionality and style.", reverse: true }
          ].map((item, index) => (
            <div className={`flex flex-col md:flex-row gap-12 mb-12 items-center ${item.reverse ? 'md:flex-row-reverse' : ''} fade-in`} key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="image-size h-auto object-cover rounded-lg shadow-md hover:rotate-coin transition-transform duration-500"
              />
              <div className="text-section flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#2C3586] mb-2">{item.title}</h3>
                <p className="text-gray-800 text-lg mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BodySection;
