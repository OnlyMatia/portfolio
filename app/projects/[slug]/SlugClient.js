"use client"

import { useParams } from 'next/navigation'
import { projects } from '@/app/utils/projects' 
import { useTheme } from '@/app/components/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'


export default function SlugClient() {
    const {bgColor, txtColor} = useTheme()
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)

    if (!project) return <div>Project not found</div>

    return (
        <section className="min-h-screen pt-14 " style={{background:bgColor, color:txtColor}}>
            <div className='flex flex-col lg:flex-row w-full px-2 h-full'>

                <div className="flex flex-col w-full lg:w-2/5 lg:pr-2 ">
                    <div className="border-b font-bold text-lg">
                        <Link href="/projects" >← Go Back</Link>
                    </div>

                    <div className="border-b grid grid-cols-6 py-2 font-bold items-start">
                        <h3 className="opacity-[0.7] col-span-2">Project</h3>
                        <h1 className="col-start-4 col-span-3">{project.title}</h1>
                    </div>

                    <div className="border-b grid grid-cols-6 py-2 font-bold items-start">
                        <h3 className="opacity-[0.7] col-span-2">Client</h3>
                        <h2 className="col-start-4 col-span-3">{project.client}</h2>
                    </div>

                    <div className="border-b grid grid-cols-6 py-2 font-bold items-start">
                        <h3 className="opacity-[0.7] col-span-2">Year</h3>
                        <h2 className="col-start-4 col-span-3">{project.year}</h2>
                    </div>

                    <div className="border-b grid grid-cols-6 py-2 font-bold items-start">
                        <h3 className="opacity-[0.7] col-span-2">Tech</h3>
                        <div className="col-start-4 col-span-3 flex flex-col">
                        {project.tech.map((el) => (
                            <p key={el}>{el}</p>
                        ))}
                        </div>
                    </div>

                    <div className="border-b grid grid-cols-6 py-2 font-bold items-start">
                        <h3 className="opacity-[0.7] col-span-2">Link</h3>
                        <Link href={project.link} className="col-start-4 col-span-3 hover:opacity-[0.7]">Website ↗︎</Link>
                    </div>
                    <div className='text-sm lg:text-xs py-2'>
                        <p>{project.desc}</p>
                    </div>
                </div>

                <div className=' w-full space-y-2 py-5'>
                    {project.gallery.map((el, i) => {
                        if ((i + 1) % 3 === 0) {
                        return (
                            <div key={i} className="w-full">
                            <Image
                                src={el}
                                width={1440}
                                height={1080}
                                alt="lab gallery, project images"
                                className="object-cover w-full h-auto"
                            />
                            </div>
                        );
                        }

                        if ((i + 1) % 3 === 1) {
                        const nextEl = project.gallery[i + 1];
                        return (
                            <div key={i} className="flex flex-col lg:flex-row lg:gap-2">
                            <div className="w-full lg:w-1/2">
                                <Image
                                src={el}
                                width={720}
                                height={540}
                                alt="lab gallery, project images"
                                className="object-cover w-full h-auto"
                                />
                            </div>
                            {nextEl && (
                                <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
                                <Image
                                    src={nextEl}
                                    width={720}
                                    height={540}
                                    alt="lab gallery, project images"
                                    className="object-cover w-full h-auto"
                                />
                                </div>
                            )}
                            </div>
                        );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}