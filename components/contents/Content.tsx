"use client";
import { contentData } from "./data";
import Styles from "./content.module.css";
import Head from "next/head";
import { Style } from "@mui/icons-material";
import CountUp, { useCountUp } from 'react-countup';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';







const Content = () => {
    // useCountUp({
    //     ref: 'counter',
    //     end: 1234567,
    //     enableScrollSpy: true,
    //     scrollSpyDelay: 4000,
    // });
    const [hasScrolled, setHasScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true);

            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    return (

        <>
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <h1>We Have</h1>
                    {/* <p>Google Developer Student Club Leads are passionate leaders at their Universities.</p> */}
                </div>


                {
                    contentData?.map((item, index) => (


                        <div className={`${Styles.wrapper} ${index % 2 == 0 ? Styles.right : Styles.left}`} key={index}>
                            <motion.div initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 3 }}
                                viewport={{ once: true }}>

                                <div className={Styles.image}>
                                    <img src={item.imgUrl} alt={item.title} />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 2 }}
                                viewport={{ once: true }}>

                                <div className={Styles.block}>
                                    <div className={Styles.heads}>
                                        <div className={Styles.side}>

                                            <div className={Styles.oneContainer}>

                                                <div className={Styles.titlenGif}>
                                                    <div className={Styles.gifPosition}>
                                                        <img src="/assests/content/google.gif" alt="google" />
                                                    </div>
                                                    <div className={Styles.h2div}>
                                                        <h2>{item.title}</h2>
                                                    </div>
                                                </div>
                                                <h4 style={{ marginTop: "-1rem", display: "flex" }}>
                                                    <CountUp start={0} end={300} duration={4}
                                                        enableScrollSpy
                                                        scrollSpyDelay={500}
                                                    />
                                                    <span className={Styles.plusToggle}>+</span></h4>
                                                <p className={Styles.desc}>{item.description}</p>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </motion.div>

                        </div>


                    ))
                }

            </div >
        </>

    )
}

export default Content;