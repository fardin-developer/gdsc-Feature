"use client";
import { contentData } from "./data";
import Styles from "./content.module.css";
import Head from "next/head";
import { Style } from "@mui/icons-material";
import CountUp, { useCountUp } from 'react-countup';



const Content = () => {
    // useCountUp({
    //     ref: 'counter',
    //     end: 1234567,
    //     enableScrollSpy: true,
    //     scrollSpyDelay: 4000,
    // });

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

                            <div className={Styles.image}>
                                <img src={item.imgUrl} alt={item.title} />
                            </div>


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
                        </div>
                    ))
                }

            </div>
        </>

    )
}

export default Content;