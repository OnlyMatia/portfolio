"use client"

import { useParams } from 'next/navigation'
import { projects } from '@/app/utils/projects' 

export default function Page() {
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)

    if (!project) return <div>Project not found</div>

    return (
        <section className="min-h-screen py-20 px-5">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-3">{project.desc}</p>
        </section>
    )
}