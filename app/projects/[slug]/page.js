"use client"

import { useParams } from 'next/navigation'
import { projects } from '@/app/utils/projects' 
import { useTheme } from '@/app/components/ThemeContext'

export default function Page() {
    const {bgColor, txtColor} = useTheme()
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)

    if (!project) return <div>Project not found</div>

    return (
        <section className="min-h-screen py-20 px-3 space-y-2 font-bold" style={{background:bgColor, color:txtColor}}>
            <h1 className="text-xl font-bold">{project.title}</h1>
            <p className='text-xs md:text-sm'>{project.desc}</p>
        </section>
    )
}