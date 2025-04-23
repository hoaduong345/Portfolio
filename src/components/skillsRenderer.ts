// filepath: d:\portfolio\src\components\skillsRenderer.ts
import { Skill } from '../types/Skill';

export function renderSkills(skills: Skill[]): void {
  const skillsContainer = document.getElementById('skills-container');
  
  if (!skillsContainer) {
    console.error('Skills container not found');
    return;
  }
  
  skillsContainer.innerHTML = skills.map(skill => `
    <div class="skill-item">
      <div class="skill-icon">
        <i class="fab fa-${skill.icon}"></i>
      </div>
      <div class="skill-name">${skill.name}</div>
    </div>
  `).join('');
}