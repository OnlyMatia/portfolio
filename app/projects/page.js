
import ProjectsClient from "./ProjectsClient";

export const metadata = {
    title: 'Project Overview | Matija Šajin Web Developer & Web Designer',
    description: 'Overview of all completed projects for clients and personal projects, detailed labs and images containing everything',
    keywords: [
        'web projekti',
        'portfolio',
        'matija šajin',
        'web development',
        'web dizajn',
        'nextjs projekti',
    ],
    robots: 'index, follow',
    alternates: {
        canonical: 'https://matijasajin.com/projects',
    },
    openGraph: {
        title: 'Project Overview | Matija Šajin Web Developer & Web Designer',
        description: 'Overview of all completed projects for clients and personal projects, detailed labs and images containing everything',
        url: 'https://matijasajin.com/projects',
        type: 'website',
        images: [
        {
            url: '/favico.ico',
            alt: 'Matija Šajin Logo',
        },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Project Overview | Matija Šajin Web Developer & Web Designer',
        description: 'Overview of all completed projects for clients and personal projects, detailed labs and images containing everything',
        images: ['/favico.ico'],
    },
};

export default function Page () {
    
    return (<ProjectsClient /> )
}
