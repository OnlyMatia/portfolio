
import { projects } from '@/app/utils/projects' 
import SlugClient from './SlugClient'

export async function generateMetadata({ params }) {
    const project = projects.find(p => p.slug === params.slug)

    if (!project) {
        return {
        title: 'Project not found ',
        description: 'This project does not exist!',
        }
    }

    return {
        title: `${project.title} | Project Details`,
        description: `Detailed images, process and used techonology for ${project.title}, made ${project.year}.`,
        keywords: [project.title, ...project.tech, 'matija šajin', 'web development', 'portfolio'],
        alternates: {
        canonical: `https://matijasajin.com/projects/${project.slug}`,
        },
        openGraph: {
        title: `${project.title} | Project Details`,
        description: `Detailed images, process and used techonology for ${project.title}.`,
        url: `https://matijasajin.com/projects/${project.slug}`,
        type: 'article',
        images: [
            {
            url: project.mainImage || '/favico.ico',
            alt: project.title,
            },
        ],
        },
        twitter: {
        card: 'summary_large_image',
        title: `${project.title} | Project Details`,
        description: `Detailed images, process and used techonology for ${project.title}.`,
        images: [project.mainImage || '/favico.ico'],
        },
    }
}

export default function Page() {
    return (<SlugClient /> )
}