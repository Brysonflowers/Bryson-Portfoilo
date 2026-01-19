import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About/About';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

describe('Section Components', () => {
    it('renders About section', () => {
        render(<About />);
        // Checking for hero text content which is the primary indicator of this section rendering
        expect(screen.getByText(/Building/i)).toBeInTheDocument();
        expect(screen.getByText(/Robust/i)).toBeInTheDocument();
    });

    it('renders Experience section', () => {
        render(<Experience />);
        expect(screen.getByText('Work Experience')).toBeInTheDocument();
        expect(screen.getByText('Milwaukee Tool')).toBeInTheDocument();
    });

    it('renders Education section', () => {
        render(<Education />);
        expect(screen.getByText('Education')).toBeInTheDocument();
        expect(screen.getByText('Northwest Mississippi Community College')).toBeInTheDocument();
    });

    it('renders Skills section', () => {
        render(<Skills />);
        expect(screen.getByText('Technical Skills')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('renders Projects section', () => {
        render(<Projects />);
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Professional Portfolio')).toBeInTheDocument();
    });

    it('renders Contact section', () => {
        render(<Contact />);
        expect(screen.getByText('Get In Touch')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });
});
