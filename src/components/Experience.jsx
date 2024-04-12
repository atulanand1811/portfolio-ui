import React from 'react'

function Experience({ user }) {
    let workEx = user.experience;
    return (
        <div
            name="experience"
            id="experience"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                Work Experience
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        {workEx.map((ex) => {
                            return <>
                            <div className="sm:text-right text-xl font-bold">
                                <p>
                                    {ex.organization}
                                </p>
                                <i className="sm:text-right text-sm font-italic">{ex.timeToFrom}</i>
                            </div>
                            <div>
                                <p>
                                    {" "}
                                    {ex.projects.map((project) =>{
                                        return <><p className="font-bold">{project.name}</p>
                                        <li>Role - {project.role}</li>
                                        <li>Responsibility -{project.responsibility}</li>
                                        <li>TechStack - {project.techstack}</li><br/></>
                                        
                                    })}
                                </p>
                            </div></> 
                        })}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experience;