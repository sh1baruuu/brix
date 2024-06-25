import avatar from '../assets/avatar.jpg';
import game from '../assets/game.jpg';
import { GoStar } from 'react-icons/go';
import { IoBulbOutline } from 'react-icons/io5';
import { GoGear } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

    return (
        <div className='text-gray-900'>
            <div className='flex flex-col items-center pt-20 pb-28 xl:h-fit h-screen'>
                <img
                    className='bg-black h-60 w-60 lg:h-72 lg:w-72 rounded-full object-cover'
                    src={avatar}
                    alt=''
                />
                <p className='py-10 text-center text-lg px-6 lg:px-0'>
                    Hi! I'm{' '}
                    <span className='font-semibold'>Brix Carlo Jalos</span>{' '}
                    Graduating Computer Science Student major in Game <br />{' '}
                    Development bassed in the Philippines.
                </p>
                <button onClick={()=>navigate('aboutme')} className='rounded-r-full rounded-l-full py-2 px-6 border-2 border-gray-900 hover:scale-95 transition-all '>
                    About Me
                </button>
            </div>
            <div className='flex flex-col items-center max-w-screen-xl px-10 w-full  mx-auto'>
                <h1 className='font-semibold  py-20 tracking-wide text-3xl md::text-5xl'>
                    SPECIAL SKILLS
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full pb-28'>
                    <div className='flex flex-col items-center'>
                        <div className='grid place-items-center w-14 h-14 rounded-full bg-gradient-to-r from-black to-gray-800'>
                            <GoStar className='text-white text-3xl' />
                        </div>
                        <h1 className='pt-5 pb-2 font-bold'>Web Design</h1>
                        <p className='text-sm text-center'>
                            As a front-end developer, I create the visual and
                            interactive elements of websites and web apps using
                            HTML, CSS, and JavaScript. I ensure smooth,
                            responsive user experiences across devices and
                            browsers. Collaborating with designers and back-end
                            developers, I bring creative concepts to life while
                            maintaining performance and accessibility standards.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='grid place-items-center w-14 h-14 rounded-full bg-gradient-to-r from-black to-gray-800'>
                            <IoBulbOutline className='text-white text-3xl' />
                        </div>
                        <h1 className='pt-5 pb-2 font-bold'>
                            Frontend Developer
                        </h1>
                        <p className='text-sm text-center'>
                            As a front-end developer, I build the visual and
                            interactive elements of websites and web apps using
                            HTML, CSS, and JavaScript. I ensure responsive and
                            user-friendly experiences across all devices and
                            browsers, collaborating with designers and back-end
                            developers to bring creative concepts to life.
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='grid place-items-center w-14 h-14 rounded-full bg-gradient-to-r from-black to-gray-800'>
                            <GoGear className='text-white text-3xl' />
                        </div>
                        <h1 className='pt-5 pb-2 font-bold'>Graphic Design</h1>
                        <p className='text-sm text-center'>
                            Graphic design is the art of creating visual content
                            to communicate messages. Using typography, imagery,
                            color, and layout, graphic designers craft designs
                            for various media such as print, digital, and social
                            platforms. The goal is to visually represent ideas
                            and concepts in a way that is both effective and
                            aesthetically pleasing, enhancing user engagement
                            and conveying information clearly.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-black to-gray-700'>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-screen-lg py-24 w-full  mx-auto'>
                    <div className='text-white px-6 lg:px-0'>
                        <h1 className='lg:text-right text-center font-medium pb-2 text-2xl'>
                            Game Project
                        </h1>
                        <p className='flex justify-right leading-relaxed py-6 lg:py-0 font-light text-sm'>
                            Tala is a single-player narrative-driven puzzle
                            platformer where you control a character who can
                            manipulate time. The game features beautiful pixel
                            art environments and a captivating original
                            soundtrack.
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-72 px-2 h-44'>
                                <div className='w-full p-2 bg-white rounded h-full'>
                                    <img
                                        src={game}
                                        className='w-full object-cover h-full bg-black'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='h-[10px] mt-[1px] border-t-2 rounded-es-lg rounded-ee-lg bg-white w-[300px] '></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
