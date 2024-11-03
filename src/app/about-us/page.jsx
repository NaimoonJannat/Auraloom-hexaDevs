"use client";

import SectionTitle from "@/Components/Heading/SectionTitle";
import Lottie from "lottie-react";
import bannerAnimation from "/public/banner-1.json";

const page = () => {
  return (
    <div>
       
     

      {/* About Us Text */}
      <SectionTitle title={"About Auraloom"}></SectionTitle>
      <div className="px-6 py-8 lg:px-20 lg:py-12 text-gray-800 leading-relaxed">
        <p>
          Welcome to <span className="text-[#54A4F3] font-semibold italic">Auraloom</span>, a realm where the art of storytelling through sound is
          masterfully woven together. Our name, derived from the words{" "}
          <span className="text-[#54A4F3] font-semibold italic">aural</span>{" "}
          (relating to hearing) and{" "}
          <span className="text-[#54A4F3] font-semibold italic">loom</span> (a
          device for weaving), captures the very essence of our vision: to craft
          a community where every thread of a podcast weaves into a rich tapestry
          of human experience, connection, and creativity.
        </p>
        <br />
        <p>
          Picture a world where voices are like threads—diverse in color,
          texture, and vibrancy—coming together to create something extraordinary.
          At Auraloom, we believe that each podcast holds the power to{" "}
          <span className="text-[#54A4F3] font-semibold italic">transport</span>{" "}
          listeners,{" "}
          <span className="text-[#54A4F3] font-semibold italic">ignite</span>{" "}
          imaginations, and kindle the warmth of shared human emotions. Whether
          it’s an engaging narrative, an insightful interview, or the comforting
          familiarity of a favorite host’s voice, we celebrate the beauty of
          sounds that draw people closer.
        </p>
        <br />
        <p>
          <span className="text-[#54A4F3] font-semibold italic">Our Story</span>
          <br />
          Our journey began with a simple idea: to build a digital sanctuary for
          podcast lovers and creators, a space where{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            discovery
          </span>{" "}
          and{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            creation
          </span>{" "}
          blend seamlessly. We, the Hexa Devs team, envisioned Auraloom as a
          place where you’re not just a passive listener but an{" "}
          <span className="text-[#54A4F3] font-semibold italic">active</span>{" "}
          part of a thriving community. It’s a place for the curious minds who
          wander through the intricate world of knowledge and stories, for the
          passionate creators who dream of their voices echoing far and wide, and
          for the seekers of connection, warmth, and wisdom.
        </p>
        <br />
        <p>
          <span className="text-[#54A4F3] font-semibold italic">
            Our Vision
          </span>
          <br />
          We dream of a world where ideas are free to{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            inspire
          </span>
          ,{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            challenge
          </span>
          , and{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            comfort
          </span>
          , and where every voice finds its place. Through Auraloom, we aim to
          empower creators with powerful tools to reach and engage their audience
          while providing listeners with a gateway to content that{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            enlightens
          </span>
          ,{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            entertains
          </span>
          , and{" "}
          <span className="text-[#54A4F3] font-semibold italic">excites</span>.
        </p>
        <br />

         {/* animation */}
      <div className="flex justify-center ">
        <Lottie
          className="w-4/5 md:w-1/3 lg:w-1/4 lg:h-1/4 -mt-12"
          animationData={bannerAnimation}
          loop={true}
        />
      </div>

        {/* SectionTitle for What We Offer */}
        <SectionTitle title={"What We Offer"}></SectionTitle>
        <p>
          - For the casual listener, Auraloom is a{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            treasure trove
          </span>{" "}
          of audio wonders. Dive into curated playlists, explore trending shows,
          or simply let your curiosity guide you through our seamless search
          features.
        </p>
        <p>
          - For the passionate creator, we provide a{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            canvas of possibilities
          </span>
          , complete with tools like AI-assisted thumbnail generation and
          insights to help your content shine brighter.
        </p>
        <p>
          - For the devoted podcast lover, our Pro Mode unlocks an{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            enhanced experience
          </span>
          , offering exclusive content, advanced badges, and personalized
          listening features.
        </p>
        <br />

        {/* SectionTitle for The Fabric of Our Community */}
        <SectionTitle title={"The Fabric of Our Community"}></SectionTitle>
        <p>
          Here at Auraloom, you’re not just a user; you’re a part of our{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            ever-growing, vibrant tapestry
          </span>
          . Every like, comment, and shared moment adds depth and meaning to our
          shared journey. As you browse, listen, create, and engage, you help
          weave a richer and more beautiful world of sounds, stories, and
          connections.
        </p>
        <p>
          Join us in this immersive world of aural wonders, where every whisper
          and every word contributes to the grand design. Together, we’re not
          just listening; we’re{" "}
          <span className="text-[#54A4F3] font-semibold italic">
            weaving an unforgettable auditory experience
          </span>
          . Welcome to Auraloom, where the magic of sound finds its true home.
        </p>
      </div>
    </div>
  );
};

export default page;
