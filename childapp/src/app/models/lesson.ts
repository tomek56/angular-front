import { LessonMovie } from './movie';

export interface Lesson {
  id?: number;
  name?: string;
  free?: boolean;
  movie: LessonMovie;
}
