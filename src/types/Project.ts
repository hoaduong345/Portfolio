export interface Project {
  id: number;
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  duration?: string;
  role?: string;
  responsibilities?: string[];
  demoUrl?: string;
  repoUrl?: string;
}
