import React, { useState } from 'react'
import food from '../assets/food.png'
import funiro from '../assets/funiro.png'
import RevealOnScroll from '../UI/RevealOnScroll'

export default function Project() {
    const [project] = useState([
        {
            image: food, name: 'Food App', brief: `Невеликий сайт по доставці харчування, та з розрахунком калорійності індивідуально під лоюдину
            за допомогою формул`
        },
        {
            image: funiro, name: 'Funiro App', brief: `багато-сторінковий сайт по продажу квартир, з слайдерами та різним функціоналом.
            Недороблений в три пезди, але є`
        },
    ])
    return (
        <section id='project' className='min-h-screen flex  flex-col items-center font-mono justify-center py-20'>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r
                 from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>Features Projects</h2>
            </div>

            <RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {project.map((project, index) => (
                        <div key={index} className="p-6 rounded-xl flex max-w-[400px] items-center text-center border-2 flex-col
                    border-white/10 hover:border-blue-500/30 
                    hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 ">

                            <h3 className='font-semibold text-xl mb-4 '>{project.name}</h3>
                            <p className='text-gray-300 mb-4 '>{project.brief}</p>
                            <div className="flex flex-wrap sm:items-center gap-2 mb-4 ">
                                {["React", "Supabase", "Swiper"].map((tech, index) => (
                                    <span key={index} className='bg-blue-500/10 text-blue-400 py-1 px-3
                                 rounded-full text-balance hover:bg-blue-500/20 
                                 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition'>{tech}
                                    </span>
                                ))}
                                <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2
                             border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]
                             cursor-pointer rounded-xl">

                                    <p className='text-gray-200 '>View Project</p>
                                    <a href="https://github.com/Babanadiaa" className='flex justify-between items-center font-bold
                                  text-blue-400 transition-colors hover:text-white'>

                                        <img src={project.image} alt={`${project.name} Image`} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    )
}
