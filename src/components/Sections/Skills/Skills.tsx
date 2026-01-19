import React from 'react';
import Section from '../../Section/Section';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Java", icon: "devicon-java-plain colored" },
                { name: "Rust", icon: "devicon-rust-original" }, // Rust original is white/black, might need adjustment or allow default
                { name: "C", icon: "devicon-c-plain colored" },
                { name: "TypeScript", icon: "devicon-typescript-plain colored" },
                { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                { name: "Python", icon: "devicon-python-plain colored" },
                { name: "SQL", icon: "devicon-mysql-plain colored" }, // Using MySQL as generic SQL visual
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: "devicon-react-original colored" },
                { name: "HTML5", icon: "devicon-html5-plain colored" },
                { name: "CSS3", icon: "devicon-css3-plain colored" },
                { name: "Vite", icon: "devicon-vitejs-plain colored" },
                { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
                { name: "Django", icon: "devicon-django-plain colored" },
                { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                { name: "REST APIs", icon: "devicon-fastapi-plain colored" }, // Visual proxy
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { name: "Neovim", icon: "devicon-neovim-plain colored" },
                { name: "Git", icon: "devicon-git-plain colored" },
                { name: "VS Code", icon: "devicon-vscode-plain colored" },
                { name: "Postman", icon: "devicon-postman-plain colored" },
            ]
        }
    ];

    return (
        <Section id="skills" title="Technical Skills">
            <div className={styles.skillsGrid}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={`card ${styles.skillCard}`}>
                        <h3 className={styles.skillCategory}>{category.title}</h3>
                        <div className={styles.pillContainer}>
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={styles.skillPill}>
                                    <i className={`${skill.icon} ${styles.icon}`}></i>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
