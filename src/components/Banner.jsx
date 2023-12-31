import { BsFillPlayFill } from 'react-icons/bs';
import banner from "../assets/pngwing 3.png"
import madel from "../assets/medal 1.png"
import company1 from "../assets/evolving_google_identity_2x1-removebg-preview 1.png"
import company2 from "../assets/image 28.png"
import company3 from "../assets/3288cee37d6a0e1d01e993381c9e6410-removebg-preview 1.png"
import company4 from "../assets/image 29.png"
import ContainerBox from '../Pages/Shared/Container/ContainerBox';
import vector1 from "../assets/Vector 1.png"
import vector2 from "../assets/Polygon 1.png"
import vector3 from "../assets/Vector 3.png"
import vector4 from "../assets/Vector 2.png"
import vector5 from "../assets/Vector 4.png"
import vector6 from "../assets/Ellipse 1.png"


const Banner = () => {
    return (
        <ContainerBox>
            <div className='pb-16'>
                <div className='lg:flex items-center justify-between gap-10'>
                    <div className='relative'>
                        <h1 className='text-6xl text-[#161E49] font-semibold'>For Every Student</h1>
                        <h1 className='text-6xl text-[#161E49] font-semibold lg:mt-3'>Every Classroom.</h1>
                        <h1 className='text-6xl font-semibold lg:mt-3 text-blue-500'>Real Results.</h1>
                        <p className='font-serif mt-5'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete. But I must explain to you how all this mistaken idea of denouncing pleasure and praising.</p>
                        <div className='flex items-center gap-5 mt-5'>
                            <button className='rounded-3xl px-5 py-1 bg-blue-500 text-white font-semibold'>Get Started</button>
                            <div className='flex items-center gap-9 font-semibold relative'>
                                <img className='w-5' src={vector6} alt="" />
                                <div className='bg-white rounded-full p-2 absolute left-1'>
                                    <BsFillPlayFill className='text-blue-500 text-2xl' />
                                </div>
                                <p>Watch Video</p>
                            </div>
                        </div>
                        <img className='w-1/2 absolute lg:-bottom-40 -bottom-14 lg:visible invisible' src={vector1} alt="" />
                    </div>
                    <div className='lg:w-1/2 relative mt-20'>
                        <img className='lg:top-16 lg:w-14 w-12 -top-3 absolute' src={vector2} alt="" />
                        <img src={vector3} className='lg:right-10 right-0 lg:-top-0 -top-10 lg:w-40 w-28 absolute' alt="" />
                        <img className='lg:-bottom-[42px] w-28 -bottom-10 right-0 lg:w-44 absolute' src={vector4} alt="" />
                        <div className="rounded-full lg:h-[480px] h-80 lg:w-[480px] w-80 flex bg-blue-400 lg:mt-20 lg:ml-6"></div>
                        <img className='absolute top-3/4 -left-28 lg:w-40' src={vector5} alt="" />

                        <img className='absolute lg:w-[400px] lg:h-[500px] w-72 lg:top-1 -top-11 lg:right-28 right-14' src={banner} alt="" />
                        <div className='w-[240px] absolute bottom-0 lg:right-0 right-0 lg:mr-28 mr-16 bg-white rounded-xl h-[95px] p-3'>
                            <div className='flex items-center gap-5'>
                                <img src={madel} alt="" />
                                <div className='font-semibold'>
                                    <p>Counting</p>
                                    <p className='text-xl'>100,585+</p>
                                </div>
                            </div>
                            <div className='text-blue-500 flex justify-between items-center'>
                                <p>Graduations</p>
                                <p>5.5 Year</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 bg-white rounded-xllg:px-2 px-4 py-2 mt-16'>
                    <img className='lg:w-64 w-16' src={company1} alt="" />
                    <img className='lg:w-56 w-16' src={company2} alt="" />
                    <img className='lg:w-64 w-16' src={company3} alt="" />
                    <img className='lg:w-64 w-16' src={company4} alt="" />
                </div>
            </div>

        </ContainerBox>
    );
};

export default Banner;