'use client';
import { Container } from '@mui/material';
import Marquee from '@components/custom-marquee/CustomMarquee';
import FeatureCard from '@/app/[lang]/(authentication)/sign-in/components/FeatureCard';
import {
    CalendarIcon,
    FlagIcon,
    GlobeAmericasIcon,
    RectangleGroupIcon,
    RectangleStackIcon,
} from '@heroicons/react/24/outline';

const FeatureMarquee = () => {
    const values = [
        <FeatureCard {...textContent[0]} key={0} />,
        <FeatureCard {...textContent[1]} key={1} />,
        <FeatureCard {...textContent[2]} key={2} />,
        <FeatureCard {...textContent[3]} key={3} />,
        <FeatureCard {...textContent[4]} key={4} />,
    ];
    return (
        <Container
            sx={{
                position: 'absolute',
                bottom: '-70%',
                right: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                display: { xs: 'none', sm: 'block' },
            }}
        >
            <Marquee components={values} speed={70} />
        </Container>
    );
};

export default FeatureMarquee;

const textContent = [
    {
        title: 'Use Index Flow',
        description:
            'Visualize your tasks by moving them from "To Do" to "Done" for motivation.',
        Icon: RectangleGroupIcon,
    },
    {
        title: 'Set SMART Goals:',
        description:
            'Create tasks that are Specific, Measurable, Achievable, Relevant, and Time-bound.',
        Icon: FlagIcon,
    },
    {
        title: 'Integrate GitHub (Work in progress)',
        description:
            'Link your GitHub projects to track development tasks alongside your to-dos.',
        Icon: GlobeAmericasIcon,
    },
    {
        title: 'Prioritize Tasks',
        description:
            'Use color-coding or labels to highlight urgent and important tasks.',
        Icon: RectangleStackIcon,
    },
    {
        title: 'Weekly Review',
        description:
            'Reflect on completed tasks each week to identify successes and areas for improvement.',
        Icon: CalendarIcon,
    },
];
