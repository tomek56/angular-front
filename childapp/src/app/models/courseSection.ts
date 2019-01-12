import { Lesson } from './lesson';

export interface CourseSection {
  id?: number;
  name?: string;
  lessons: Array<Lesson>;
}

