import React, { useEffect, useState } from "react"
import Card from "./Card"
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import DressStyleSection from "./DressStyleSection";

export default function Content() {
    const [goods, setGoods] = useState([]);
    const [topSelling, setTopSelling] = useState([]);

    useEffect(() => {
        const fetchData = [
            {
                img: "img/arrivals/1.svg",
                title: 'T-shirt with Tape Details',
                ratings: '4.5/5',
                price: 120,
                lastPrice: '',
                discount: ''
                },
                {
                img: "img/arrivals/2.svg",
                title: 'Skinny Fit Jeans',
                ratings: '3.5/5',
                price: 240,
                lastPrice: '260',
                discount: '-20%'
                },
                {
                img: "img/arrivals/3.svg",
                title: 'Checkered Shirt',
                ratings: '4.5/5',
                price: 180,
                lastPrice: '',
                discount: ''
                },
                {
                img: "img/arrivals/4.svg",
                title: 'Sleeve Striped T-shirt',
                ratings: '4.5/5',
                price: 130,
                lastPrice: '160',
                discount: '-30%'
                },
            
        ]
        const topSellData = [
            {
                img: "img/topSelling/5.svg",
                title: 'Vertical Striped Shirt',
                ratings: '4.5/5',
                price: 212,
                lastPrice: '232',
                discount: '-20%'
                },
                {
                img: "img/topSelling/6.svg",
                title: 'Courage Graphic T-shirt',
                ratings: '3.5/5',
                price: 145,
                lastPrice: '',
                discount: ''
                },
                {
                img: "img/topSelling/7.svg",
                title: 'Loose Fit Bermuda Shorts',
                ratings: '4.5/5',
                price: 80,
                lastPrice: '',
                discount: ''
                },
                {
                img: "img/topSelling/8.svg",
                title: 'Faded Skinny Jeans',
                ratings: '4.5/5',
                price: 210,
                lastPrice: '',
                discount: ''
                },
            
        ]
        setGoods(fetchData)
        setTopSelling(topSellData)
    }, [])

      // Анимация для всех карточек
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Задержка между анимациями дочерних элементов
            delayChildren: 0.3   // Небольшая задержка перед началом анимации
        }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        show: { 
        y: 0, 
        opacity: 1,
        transition: { type: "tween", ease: "easeOut", duration: 0.4 }
        }
    };

    return (
        <div className="content">
            <div className="containerContent">
                <h1 className="contentTitle ">NEW ARRIVALS</h1>
                <motion.div
                    className="arrivalsCards d-flex"
                    style={{ gap: 20 }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }} // Анимация сработает, если 20% блока в зоне видимости
                >
                {
                    goods.map((obj, index) => {
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                key={index}
                                title={obj.title}
                                img={obj.img}
                                ratings={obj.ratings}
                                price={obj.price}
                                lastPrice={obj.lastPrice}
                                discount={obj.discount}
                                />
                            </motion.div>
                        )
                    })
                }
                </motion.div>
                
                <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#f8f9fa", color: "#333" }}
                whileTap={{ scale: 0.95 }}
                className="contentBtnAll"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                View All
                </motion.button>
                <span className="section"></span>
                <h1 className="contentTitle">TOP SELLING</h1>
                <motion.div
                    className="arrivalsCards d-flex"
                    style={{ gap: 20 }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }} // Анимация сработает, если 20% блока в зоне видимости
                >
                {
                    topSelling.map((obj, index) => {
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card
                                key={index}
                                title={obj.title}
                                img={obj.img}
                                ratings={obj.ratings}
                                price={obj.price}
                                lastPrice={obj.lastPrice}
                                discount={obj.discount}
                                />
                            </motion.div>
                        )
                    })
                }
                </motion.div>
                
                <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#f8f9fa", color: "#333" }}
                whileTap={{ scale: 0.95 }}
                className="contentBtnAll"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                View All
                </motion.button>

{/*                 <section className="dressStyle">
                    <h1 style={{fontSize: 48}} className="contentTitle">BROWSE BY DRESS STYLE</h1>
                    <div className="style">
                        <div className="casual">
                            <p className="textStyle">Casual</p>
                            <img style={{borderRadius: 20}} src="img/dressStyle/casual.svg" alt="casual" />
                        </div>
                        <div className="formal">
                            <p className="textStyle">Formal</p>
                            <img style={{borderRadius: 20}} src="img/dressStyle/formal.svg" alt="formal" />
                        </div>
                    </div>
                    <div className="styleDown">
                        <div className="party">
                            <p className="textStyle">Party</p>
                            <img style={{borderRadius: 20}} src="img/dressStyle/party.png" alt="party" width={684} height={293}/>
                        </div>
                        <div className="gym">
                            <p className="textStyle">Gym</p>
                            <img style={{borderRadius: 20}} src="img/dressStyle/gym.png" alt="gym" width={407} height={293}/>
                        </div>
                    </div>
                </section> */}
                <DressStyleSection/>
                <Carousel/>
            </div>
        </div>
    )
}