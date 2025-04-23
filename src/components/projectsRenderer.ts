// filepath: d:\portfolio\src\components\projectsRenderer.ts
import { Project } from '../types/Project';

export function renderProjects(projects: Project[]): void {
  const projectsContainer = document.getElementById('projects-container');
  
  if (!projectsContainer) {
    console.error('Projects container not found');
    return;
  }
  
  projectsContainer.innerHTML = projects.map(project => `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags?.map(tag => `<span class="project-tag">${tag}</span>`).join('') || ''}
        </div>
        <div class="project-links">
          ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
          ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" class="project-link">GitHub</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}