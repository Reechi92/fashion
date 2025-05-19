import React, { useRef } from "react";
import { motion, useViewportScroll, useMotionValue, useTransform } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

export default function PromoSection() {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // фон двигается медленнее

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const x = useTransform(() => (mouseX.current / window.innerWidth) * 100 - 50, []);
  //const y = useTransform(() => (mouseY.current / window.innerHeight) * 100 - 50, []);

  const handleMouseMove = (e) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
  };

  const AnimatedPromoTitle = ({ text }) => (
    <motion.h1
      className="promoTitle"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 2,
        delay: 0.5,
        ease: "easeInOut"
      }}
    >
      {text}
    </motion.h1>
  );

  return (
    <>
      <motion.div
        className="promo-sector"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="main-screen"
          onMouseMove={handleMouseMove}
          style={{
            backgroundImage: "url('img/mainGround.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Параллакс-фон */}
          <motion.div
            className="parallax-bg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('img/mainGround.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "transform",
              x: x,
              y: y
            }}
          />

          {/* Контент поверх фона */}
          <div className="wrapper-promo" style={{ position: "relative", zIndex: 1 }}>
            <AnimatedPromoTitle text="FIND CLOTHES THAT MATCHES YOUR STYLE" />

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "tween",
                duration: 2,
                delay: 0.5,
                ease: "easeInOut"
              }}
            >
              <p className="promoText">
                Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "tween",
                duration: 2,
                delay: 0.5,
                ease: "easeInOut"
              }}
            >
              <button className="promoBtn">Shop Now</button>
            </motion.div>

            <div className="wrapper-marketing">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="wrapper-marketing"
                transition={{
                  type: "tween",
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              >
                <div className="marketing">
                  <h1><AnimatedNumber end={200} suffix="+"/></h1>
                  <p>International Brands</p>
                </div>
                <span></span>
                <div className="marketing">
                  <h1><AnimatedNumber end={2000} suffix="+"/></h1>
                  <p>High-Quality Products</p>
                </div>
                <span></span>
                <div className="marketing">
                  <h1><AnimatedNumber end={30000} suffix="+"/></h1>
                  <p>Happy Customers</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}