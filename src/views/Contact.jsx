
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='text-gray-900 pb-28'>
            <div className='flex flex-col items-center max-w-screen-lg lg:px-10 w-full  mx-auto'>
                <h1 className='font-semibold  py-20 tracking-wide text-3xl md::text-5xl'>
                    HIRE ME
                </h1>
                <form
                    className='flex flex-col lg:shadow-lg w-full gap-6 rounded-md max-w-screen-md p-6 lg:p-14'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col w-full'>
                        <label className='font-semibold' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='border rounded w-full h-10 px-4 mt-1 focus:  outline-gray-500'
                            type='text'
                            name='name'
                            id='name'
                            autoComplete="off"
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='font-semibold' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='border rounded w-full h-10 px-4 mt-1 focus:  outline-gray-500'
                            type='email'
                            name='email'
                            id='email'
                            autoComplete="off"
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='font-semibold' htmlFor='message'>
                            Message
                        </label>
                        <textarea
                            className='border rounded w-full h-32 px-4 mt-1 focus:  outline-gray-500'
                            name='message'
                            id='message'
                        ></textarea>
                    </div>
                    <button className='w-full h-10 bg-gray-700 text-white rounded-full mt-6'>
                        Hire Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
