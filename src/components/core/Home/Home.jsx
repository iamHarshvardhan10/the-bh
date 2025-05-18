import React from "react";
import "./Home.scss";
import Button from "../../common/Button";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(TextPlugin);
const Home = () => {
  useGSAP(() => {
    let words = ["Voice,", "Story,", "Space,"];
    const tl = gsap.timeline({
      repeat: -1,
      // yoyo: true,
    });
    words.forEach((word) => {
      const wordTl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        duration: 0.1,
        ease: "power4.in",
      });

      wordTl.to(".text", {
        text: word,
        duration: 2,
        ease: "back.inOut",
      });

      tl.add(wordTl);
    });
  }, []);
  return (
    <div className="home-container">
      <div className="heading">
        <h1 id="word">
          <span>You Are</span>
          <span className="text"></span>
        </h1>
      </div>
      <div className="home-content">
        <p className="excerpt">
          Share your ideas with the world — <span>or just your cat.</span> We
          won’t judge.
        </p>
        <p className="desc">
          Whether it’s a midnight thought, a how-to guide, or a hot take, this
          is your place to <span>write, read, and connect </span> with curious
          minds like yours.
        </p>
      </div>
      <div className="btn-grp">
        <Button text={"Start Writing Now"} color={"#FF4F0F"} />
      </div>
    </div>
  );
};

export default Home;
