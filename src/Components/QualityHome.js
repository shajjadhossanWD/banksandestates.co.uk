import React from 'react';
import qualityBg from '../assets/images/qualitysec-bg.jpg'
import person from '../assets/images/quality.png'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FlareIcon from '@mui/icons-material/Flare';

const QualityHome = () => {
    return (
        <div className='flex flex-row items-center pt-20' style={{ backgroundImage: `url(${qualityBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='basis-1/2 pl-20 z-10'>
                <p className='text-primary font-medium text-xl'> <HorizontalRuleIcon />Timely Service Delivery & Incident Resolutions!!</p>
                <h2 className='text-5xl font-bold py-5 leading-normal'>We Provided Some Of The <span className='text-primary'>Good Quality To You</span> </h2>
                <p className='text-[#74777C]'>
                    The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you'll end up reviewing and negotiating the content itself and not the design.</p>
                <div className='flex justify-between items-center pb-20'>
                    <div>
                        <div className='flex justify-between items-center py-5'>
                            <div className='text-primary pr-5'><FlareIcon /></div>
                            <div>
                                <h3 className='text-accent text-2xl font-semibold py-2'>Finance Consultant</h3>
                                <p className='text-[#74777C]'>Organisations in the UK offier a wealth of <br /> information and expertise</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='text-primary pr-5'><FlareIcon /></div>
                            <div>
                                <h3 className='text-accent text-2xl font-semibold py-2'>Finance Consultant</h3>
                                <p className='text-[#74777C]'>Organisations in the UK offier a wealth of <br /> information and expertise</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-10 py-5 text-base-100 bg-gradient-to-r from-[#ED1C24] to-[#ED521C] mr-[-150px]'>
                        <h4 className='text-6xl font-extrabold'>35+</h4>
                        <p className='text-2xl font-semibold'>Years Of <br /> Experience</p>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 z-0'>
                <img className='w-75 ml-[-100px]' src={person} alt="" />
            </div>
        </div>
    );
};

export default QualityHome;