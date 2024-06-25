import avatar from '../assets/avatar.jpg';
import { IoMdCalendar } from 'react-icons/io';
import { MdPerson } from 'react-icons/md';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const education = [
        {
            title: 'BS in Computer Science',
            school: 'Lemery Colleges',
            year: '2020 - Present',
        },
        {
            title: 'Senior Highschool',
            school: 'St. Blaise Community Academy',
            year: '2018 - 2020',
        },
        {
            title: 'Junior Highschool',
            school: 'St. Blaise Community Academy',
            year: '2013 - 2017',
        },
        {
            title: 'Elementary School',
            school: 'Talon Elementary School',
            year: '2007 - 2013',
        },
    ];

    const skills = [
        {
            name: 'HTML',
            percent: 'w-[100%]',
        },
        {
            name: 'CSS',
            percent: 'w-[100%]',
        },
        {
            name: 'PHP',
            percent: 'w-[70%]',
        },
        {
            name: 'Javascript',
            percent: 'w-[50%]',
        },
        {
            name: 'Python',
            percent: 'w-[35%]',
        },
    ];

    return (
        <div className='text-gray-900'>
            <div className='flex flex-col items-center pt-20 pb-28 xl:h-fit h-screen border-b'>
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
                <button onClick={()=>navigate('contact')} className='rounded-r-full rounded-l-full py-2 px-6 border-2 border-gray-900 hover:scale-95 transition-all '>
                    Hire me
                </button>
            </div>
            <div className='flex flex-col items-center max-w-screen-lg w-full  mx-auto px-6 lg:px-0'>
                <h1 className='font-semibold  py-20 tracking-wide text-3xl md::text-5xl'>
                    WORK EXPERIENCE
                </h1>
                <div className='flex flex-col w-full'>
                    <h2 className='font-semibold lg:text-xl pb-1'>
                        San Luis Rescue
                    </h2>
                    <div className='rounded-l-full w-fit mb-3 text-xs lg:text-sm text-white px-3 rounded-r-full bg-gray-600'>
                        San Luis
                    </div>
                    <hr />
                </div>
            </div>
            <div className='flex flex-col items-center max-w-screen-lg w-full pt-10 mx-auto px-6 lg:px-0'>
                <h1 className='font-semibold  py-20 tracking-wide text-3xl md::text-5xl'>
                    EDUCATION
                </h1>
                <div className='flex flex-col gap-6 w-full'>
                    {education?.map(({ title, school, year }, i) => {
                        return (
                            <div className='flex flex-col w-full' key={i}>
                                <div className='flex justify-between items-center'>
                                    <h2 className='font-semibold lg:text-xl pb-1'>
                                        {title}
                                    </h2>
                                    <h2 className='text-xs lg:text-sm font-medium text-gray-600'>
                                        {year}
                                    </h2>
                                </div>

                                <div className='rounded-l-full w-fit mb-3 text-xs lg:text-sm text-white px-3 rounded-r-full bg-green-600'>
                                    {school}
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-6 w-full'>
                    <div className='lg:border-2 border-gray-50 lg:shadow-md rounded-md lg:px-10 pt-10 pb-12 lg:min-h-96'>
                        <h1 className='font-semibold pb-6 text-xl'>Skills</h1>
                        <div className='flex flex-col w-full gap-6'>
                            {skills?.map(({ name, percent }, i) => {
                                return (
                                    <div className='w-full' key={i}>
                                        <h1 className='font-medium pb-2'>
                                            {name}
                                        </h1>
                                        <div className='w-full h-1 bg-gray-100 overflow-hidden rounded-full'>
                                            <div
                                                className={`${percent} h-full bg-blue-500`}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='lg:border-2 border-gray-50 lg:shadow-md rounded-md lg:px-10 pt-10 pb-12 lg:min-h-96'>
                        <h1 className='font-semibold pb-6 text-xl'>
                            Contact Info
                        </h1>
                        <div className='flex flex-col gap-3 text-gray-600'>
                            <div className='flex items-center gap-4'>
                                <IoMdCalendar className='text-2xl' />
                                <p>07/17/200</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdPerson className='text-2xl' />
                                <p>Brix Carlo Jalos</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdOutlineAlternateEmail className='text-2xl' />
                                <p>brixcarlojalos17@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
