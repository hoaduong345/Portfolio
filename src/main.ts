import { Project } from './types/Project';
import { Skill } from './types/Skill';
import { renderProjects } from './components/projectsRenderer';
import { renderSkills } from './components/skillsRenderer';
import { setupContactForm } from './components/contactForm.ts';

// Sample data - in a real project, you might fetch this from an API
const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with product management and payment integration.',
    image: '/src/assets/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/ecommerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality.',
    image: '/src/assets/projects/taskapp.jpg',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/taskapp'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that shows forecasts using third-party API integration.',
    image: '/src/assets/projects/weather.jpg',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/weather'
  }
];

const skills: Skill[] = [
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'node' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Responsive Design', icon: 'mobile' }
];

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  renderSkills(skills);
  setupContactForm();

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();

      const targetId = this.getAttribute('href') as string;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // "View My Work" button scrolls to projects section
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
