// eslint-disable-next-line no-unused-vars
import React from 'react';
import hero from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="container">
                <div className="row align-items-center"  style={{minHeight:'85dvh'}}>
                    <div className="col-lg-6 col-12 animate__backInUp">
                        <h1>Selamat datang di Enigma Market! <strong>Tempat Kebutuhan Harian Anda</strong></h1>
                        <h2>Temukan Segala Kebutuhan Makanan dan Kelontong disini</h2>
                        <p className="my-4">Di Enigma Market, kami berkomitmen untuk menyediakan produk-produk
                        berkualitas tinggi yang memenuhi kebutuhan sehari-hari anda, mulai dari makanan
                        segar,bahan pokok,sampai keperluan rumah tangga. Dengan harga yang terjangkau, belanja
                        jadi lebih mudah dan menyenangkan!</p>
                        <div className="row-gap-4">
                            <button className="col-4 btn btn-primary rounded-3 m-3" style={{color : "white"}}>Belanja Sekarang</button>
                            <button className="col-4 btn btn-outline-light rounded-3">Kontak kami</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 py-4">
                        <img src={hero} alt="hero" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Hero;