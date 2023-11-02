"use client";
import React from 'react'
import './teams.css'
import { useEffect } from 'react';




const Teams = () => {

    useEffect(() => {
        const teamLink = document.querySelector('a[href="/team"]');
        if (teamLink) {
          teamLink.addEventListener('click', (e) => {
            e.preventDefault();
            const teamSection = document.getElementById('team');
            if (teamSection) {
              window.scrollTo({
                top: teamSection.offsetTop,
                behavior: 'smooth',
              });
            }
          });
        }
      }, []);
    

    return (
        <div className="wrapper" id='team'>
            {/* <i id="left" className="fa-solid fa-angle-left"> Swipe </i> */}
            <h1 className='title'>
                OUR TEAM
            </h1>
            <ul className="carousel">
                <li className="card abhinav">
                    <div className="img">
                        <img src="../assests/members/Abhinav.webp" alt="img" draggable="false" />
                    </div>
                    <h2>Abhinav Upadhyay</h2>
                    <span>GDSC Lead</span>
                </li>



                <div className="coumnBox">
                    <li className="card">
                        <div className="img">
                            <img src="../assests/members/Hrishita.webp" alt="img" draggable="false" />
                        </div>
                        <h2>Hrishita Bhuyan</h2>
                        <span>Design Lead</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="../assests/members/Mugdha.webp" alt="img" draggable="false" />
                        </div>
                        <h2>Sneh Meend</h2>
                        <span>Management Lead</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="../assests/members/Mugdha.webp" alt="img" draggable="false" />
                        </div>
                        <h2>Mugdha Saikia</h2>
                        <span>Content Lead</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="../assests/members/Himangshu.webp" alt="img" draggable="false" />
                        </div>
                        <h2>Himangshu Lahkar</h2>
                        <span>Technical Lead</span>
                    </li>

                    <li className="card">
                        <div className="img">
                            <img src="../assests/members/Jyotishmoy.webp" alt="img" draggable="false" />
                        </div>
                        <h2>Jyotishmoy Deka</h2>
                        <span>Programming Lead</span>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="../assests/members/Debarshi.webp" alt="img" draggable="false" />
                        </div>
                        <h2>Debarshi Sonowal</h2>
                        <span>Development Lead</span>
                    </li>

                </div>


            </ul>



        </div>


    )
}

export default Teams