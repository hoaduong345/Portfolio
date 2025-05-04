import { Project } from '../types/Project';
import i18n from 'i18next';

// Helper function to safely get translation with fallback
function safeTranslate(key: string, defaultValue: string = ''): string {
  try {
    const result = i18n.t(key, { ns: 'projects' });
    // Check if translation was successful
    if (result === key || typeof result !== 'string') {
      return defaultValue;
    }
    return result;
  } catch (error) {
    console.warn(`Translation error for key: ${key}`, error);
    return defaultValue;
  }
}

// Helper function to safely get array translations with fallback
function safeTranslateArray(key: string, defaultValue: string[] = []): string[] {
  try {
    const result = i18n.t(key, { returnObjects: true, ns: 'projects' });
    // Check if translation was successful and is an array
    if (Array.isArray(result)) {
      return result.map(item => String(item));
    }
    return defaultValue;
  } catch (error) {
    console.warn(`Translation array error for key: ${key}`, error);
    return defaultValue;
  }
}

// Chuyển từ DOM manipulation sang helper function cho React
export function getProjectsData(): Project[] {
  // Fallback data in case translations fail
  const fallbackProjects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform with Booking Features',
      description: 'An e-commerce platform integrated with field/court booking capabilities using the Vendure framework. Implemented branch-based permissions allowing users to book fields, purchase products, and make online payments. This project was executed for a major client with details limited by NDA.',
      image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Angular', 'NestJS', 'GraphQL', 'MySQL', 'Vendure', 'E-commerce'],
      duration: '2024 - Present',
      role: 'Team Lead',
      responsibilities: [
        'Led development team and coordinated with stakeholders',
        'Discussed requirements with team members and provided solutions for client needs',
        'Consulted with clients about requirement feasibility, estimated completion times, and provided alternative solutions',
        'Designed scalable architecture for high-traffic periods',
        'Trained new team members on tools and processes',
        'Reviewed code and established coding quality standards',
        'Managed sprint planning and resource allocation'
      ]
    },
    {
      id: 2,
      title: 'Blockchain Process Automation',
      description: 'A process automation software that creates scenario blocks and automates these blocks, allowing users to create automated workflows without writing code. This project was completed for a major client with details restricted by NDA.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      tags: ['Node.js', 'React', 'TypeScript', 'Blockchain', 'Automation'],
      duration: '2024',
      role: 'Full Stack Developer',
      responsibilities: [
        'Developed software based on direct client requirements and guidance',
        'Discussed requirement feasibility with clients, estimated completion times, and suggested alternative solutions',
        'Developed both back-end and front-end components according to requirements',
        'Implemented automated testing for front-end and back-end components',
        'Collaborated with compliance officers on regulatory requirements'
      ]
    },
    {
      id: 3,
      title: 'Cosmetics E-commerce Platform',
      description: 'A project utilizing the Vendure e-commerce framework with branch-based permissions, allowing each branch to have its own products, inventory, and more. The project was under strict confidentiality due to proprietary business processes.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Vendure', 'E-commerce', 'API Integration'],
      duration: '2023 - 2024',
      role: 'Full Stack Developer',
      responsibilities: [
        'Contributed to building and optimizing the system for scalability',
        'Developed custom dashboard and reporting features',
        'Implemented e-wallet functionalities integrated with payment gateways like VNPAY',
        'Developed membership point system with automatic tier upgrades for customer groups',
        'Integrated with systems like inventory management (Inventree)',
        'Implemented role-based access control',
        'Optimized database queries for performance',
        'Received client feedback, assessed feasibility, and estimated completion times'
      ]
    }
  ];

  try {
    const projectKeys = ['ecommerce', 'fintech', 'management'];

    return projectKeys.map((key, index) => {
      const fallback = fallbackProjects[index];

      return {
        id: index + 1,
        title: safeTranslate(`projects.${key}.title`, fallback.title),
        description: safeTranslate(`projects.${key}.description`, fallback.description || ''),
        image: fallback.image,
        tags: fallback.tags,
        duration: fallback.duration,
        role: safeTranslate(`projects.${key}.role`, fallback.role || ''),
        responsibilities: safeTranslateArray(`projects.${key}.responsibilities`, fallback.responsibilities || [])
      };
    });
  } catch (error) {
    console.error('Error loading project data:', error);
    return fallbackProjects; // Return fallback data in case of any error
  }
}
