import { render, screen } from '@testing-library/react';
import Section from './Section';
import { describe, it, expect } from 'vitest';

describe('Section Component', () => {
    it('renders children correctly', () => {
        render(
            <Section id="test-section">
                <p>Test Content</p>
            </Section>
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('assigns the correct id to the section element', () => {
        const { container } = render(
            <Section id="test-section">
                <p>Content</p>
            </Section>
        );
        // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
        const sectionElement = container.querySelector('section');
        expect(sectionElement).toHaveAttribute('id', 'test-section');
    });

    it('renders title when provided', () => {
        render(
            <Section id="test-section" title="Test Title">
                <p>Content</p>
            </Section>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Title');
    });

    it('applies custom className', () => {
        const { container } = render(
            <Section id="test-section" className="custom-class">
                <p>Content</p>
            </Section>
        );
        // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
        const sectionElement = container.querySelector('section');
        expect(sectionElement).toHaveClass('section');
        expect(sectionElement).toHaveClass('custom-class');
    });
});
