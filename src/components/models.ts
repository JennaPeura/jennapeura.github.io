export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  status: 'Beta' | 'Open' | 'Launched' | 'In Development' | 'Completed' | 'On Hold' | 'Prototype';
  timeline: string;
  image?: string;
  link?: string;
}

export interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description?: string;
  color?: string;
  icon?: string;
}
