import React from 'react';
import Agency from '../../Components/Agency';
import Banner from '../../Components/Banner';
import HowITWork from '../../Components/HowITWork';
import QualityHome from '../../Components/QualityHome';
import SupportiveBrands from '../../Components/SupportiveBrands';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <SupportiveBrands/>
            <Agency/>
            <QualityHome/>
            {/* <HowITWork/> */}
            <Footer/>
        </div>
    );
};

export default home;