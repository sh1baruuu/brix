import one from '../assets/works/1.jpg';
import two from '../assets/works/2.jpg';
import three from '../assets/works/3.jpg';
import four from '../assets/works/4.jpg';

const Projects = () => {
    const works = [one, two, three, four];

    return (
        <div className='text-gray-900'>
            <div className='flex flex-col items-center max-w-screen-lg px-10 w-full mx-auto'>
                <h1 className='font-semibold  py-20 tracking-wide text-3xl md::text-5xl'>
                    RECENT WORK
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-6 gap-y-10 pb-32'>
                  {works?.map((image, i) => {
                    return (
                      <div className='bg-black overflow-hidden shadow-md aspect-video' key={i}>
                        <img src={image} className='h-full w-full ' alt="" />
                      </div>
                    )
                  })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
