import React, {Component, useEffect, useRef, useState} from 'react';
import '/src/Components/Content/ContentsStyle.css';
import{gsap} from 'gsap';
import {Link} from "react-router-dom";

function Contents(){
    const handleLogout = () => {
        if(!confirm("Sure want to logout?")) return;
        window.location.reload();
    }


    const hiddenContentRefUp = useRef(null);
    const hiddenContentRefRight = useRef(null);
    const hiddenContentRefLeftB = useRef(null);
    const hiddenContentRefLeftT = useRef(null);

    const handleHover = (ref, opacity) => {
        gsap.to(ref.current, { opacity, duration: 0.4 });
        ref.current.style.boxShadow = '0 0 8px 2px rgba(255, 255, 255, 0.5)';
    }


    const handleHoverOff = (ref,opacity) => {
        gsap.to(ref.current, { opacity, duration: 0.4 });
        ref.current.style.boxShadow = 'none';
    }

        return (
            <div className=" container mt-4 mb-4 ">
                <div className="up" onMouseEnter={() => handleHover(hiddenContentRefUp,1)}
                     onMouseLeave={() => handleHoverOff(hiddenContentRefUp,0)}>
                    <Link to="/menu" style={{textDecoration: 'none'}}>
                    <div ref={hiddenContentRefUp} className="layerU text-white ">
                        <h2 className=" ms-4 mt-5">Bahari's Menu</h2>
                        <p className="ms-4">Experience coastal culinary excellence at Bahari Restaurant, where fresh
                            seafood delights and artisanal creations await. Indulge in vibrant flavors and ocean-inspired
                            dishes that transport you to a world of culinary bliss. Join us for an unforgettable dining
                            experience at Bahari.
                        </p>
                    </div>
                    </Link>
                </div>

                <div className="left rounded-5"  onMouseEnter={() => handleHover(hiddenContentRefLeftT,1)}
                     onMouseLeave={() => handleHoverOff(hiddenContentRefLeftT,0)}>
                    <Link to="/shop" style={{textDecoration: 'none'}}>
                    <div ref={hiddenContentRefLeftT} className="layerLT  text-light">
                        <h3 className="mt-2">Bring it Home</h3>
                        <p className="mt-2"> Home dining experience? Order your favorite meals
                            online<br/> and enjoy a delicious dining experience without ever leaving home.</p>
                    </div>
                    </Link>
                </div>

                <div className="left-b rounded-5" onMouseEnter={() => handleHover(hiddenContentRefLeftB,1)} onMouseLeave={() => handleHoverOff(hiddenContentRefLeftB,0)} >
                    <div onClick={handleLogout} ref={hiddenContentRefLeftB} className=" layerLB rounded-5 text-white ">
                        <h3 className="mt-2 ">Log Out</h3>
                    </div>
                </div>

                    <div className="right rounded-5  " onMouseEnter={()=> handleHover(hiddenContentRefRight,1)} onMouseLeave={()=> handleHoverOff(hiddenContentRefRight,0)} >
                        <Link to="/table" className="text-decoration-none">
                        <div ref={hiddenContentRefRight} className="layerR d-flex align-items-center row-gap-4 text-white">
                            <h2 className=" ms-4">Bahari's Table</h2>
                            <p className="ms-4 ">Our Table Reservation Service is tailored for families, providing a
                                polished and inviting setting ideal for dining together on any special occasion.</p>
                        </div>
                        </Link>
                    </div>
            </div>
        );
}


export default Contents;