import { LessonMovie } from './movie';

export interface Lesson {
  id?: number;
  name?: string;
  free?: boolean;
  movie: LessonMovie;
  description: string;
  progress: LessonSingleProgress;
}

export interface LessonSingleProgress {
  c_t?: number;
  l_d?: number;
}
