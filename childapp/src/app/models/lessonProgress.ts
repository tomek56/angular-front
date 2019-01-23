import { Lesson } from './lesson';

export interface LessonProgress {

  lesson: Lesson;
  time_to_continiue: number;
  last_time_updated: number;
}
