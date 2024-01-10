import React from 'react';
import '../app/globals.css'
import ProjectCard from './cards/project-card'
import { Project } from '@/types';

interface CarouselProps {
    projects: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    return (
        <div className='hide-scrollbar' style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        }}>
            {projects.map((project) => (
                <div key={project.title} className='snap-start md:w-[300px] w-28 mr-4 flex-grow-0 flex-shrink-0 basis-auto'>
                    <ProjectCard key={project.title} variant="web" project={project} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;