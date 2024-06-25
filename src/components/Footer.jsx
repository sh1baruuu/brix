import { Link } from 'react-router-dom';
import { IoLogoInstagram } from 'react-icons/io5';
import { GrFacebookOption } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const links = [
        {
            link: 'https://www.facebook.com/',
            Icon: GrFacebookOption,
        },
        {
            link: 'https://www.instagram.com/',
            Icon: IoLogoInstagram,
        },
        {
            link: 'https://twitter.com/',
            Icon: FaXTwitter,
        },
    ];

    return (
        <div className='flex flex-col items-center border-t py-10'>
            <ul className='flex font-medium text-sm lg:text-base '>
                <li className='px-4'>
                    <Link to={'aboutme'}>About Me</Link>
                </li>
                <li className='px-4'>
                    <Link to={'contact'}>Contact Me</Link>
                </li>
                <li className='px-4'>
                    <Link to={'projects'}>Projects</Link>
                </li>
            </ul>
            <ul className='flex gap-6 pt-6'>
                {links?.map(({ link, Icon }, i) => {
                    return (
                        <li
                            className='grid place-items-center h-10 w-10 lg:h-12 lg:w-12 active:scale-95 rounded-full bg-gray-200'
                            key={i}
                        >
                            <a href={link}>
                                <Icon className=' text-xl lg:text-2xl' />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Footer;
