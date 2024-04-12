import React from 'react';
import code from '../assets/code.png';

const Works = ({ user }) => {
    const works = user.works;
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {works.map((work) => {
                        return <>
                            {/* Container */}

                            {/* Grid Item */}
                            <div style={{ backgroundImage: `url(${code})` }}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                {/* Hover Effects */}
                                <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                                    <span className=' text-lg font-bold text-white tracking-wider'>
                                        {work.name}
                                    </span>
                                    <p className='text-center'>
                                        <li>{work.description}</li>
                                        <li>TechStack - {work.techstack}</li>
                                    </p>
                                    {work.url && <div className='pt-8 text-center'>
                                        <a href={work.url} target='_blank'
                                            rel='noreferrer'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Open APP
                                            </button>
                                        </a>
                                    </div>}
                                </div>
                            </div>

                        </>
                    })}
                </div>
            </div>
        </div>
    );
};
export default Works;