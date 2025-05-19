import React, { useState } from "react"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Carousel() {

const testimonials = [
    {id: 1, text: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.', author: 'Sarah M.'},
    {id: 2, text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.', author: 'Alex K.'},
    {id: 3, text: '"As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”', author: 'James L.'},
    {id: 4, text: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.', author: 'Sarah M.'},
    {id: 5, text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.', author: 'Alex K.'},
    {id: 6, text: '"As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”', author: 'James L.'},
]

const [current, setCurrent] = useState(0);
const itemsToShow = 3;

const next = () => {
  if (current < testimonials.length - itemsToShow) {
    setCurrent(current + 1);
  }
};

const prev = () => {
  if (current > 0) {
    setCurrent(current - 1);
  }
};

    return (
    <>
    <div className="recalls">
        <div className="recallsHeader d-flex justify-between align-center">
            <h2 className="recallTitle">OUR HAPPY CUSTOMERS</h2>
            <div style={{gap: 15}} className="arrows d-flex">
                <div onClick={prev} disabled={current === 0} className="arrowBtn">
                    <img src="img/arrow-left.svg" alt="btn" />
                </div>
                <div onClick={next} disabled={current >= testimonials.length} className="arrowBtn">
                    <img src="img/arrow-right.svg" alt="btn" />
                </div>
            </div>
        </div>



        <AnimatePresence mode="wait">
        <motion.div   
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="carouselCards d-flex"
            style={{ justifyContent: 'space-between', }}>
            <div style={{justifyContent: 'space-between', gap: 15}} className="carouselCards d-flex">
            {
                testimonials.slice(current, current + itemsToShow).map(item => { 
                    return (
                        <div className="recalls-card">
                    <div key={item.id} className="recallCard">
                        <div className="starsRating d-flex">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="img/star.svg" alt="star" width={20} height={20} />
                        ))}
                        </div>
                        <div style={{gap: 4, paddingBottom: 10, fontWeight: 'bold', fontSize: 20}} className="author d-flex">{item.author} <img src="img/galka.svg" alt="img" /></div>
                        <div style={{opacity: 0.6}} className="p-text">"{item.text}”</div>
                    </div>
                </div>
                    )
                
                })
            }
            </div>
        </motion.div>
        </AnimatePresence>
    </div>
    </>
    )
}