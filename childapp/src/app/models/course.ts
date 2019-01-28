import { Category } from './category';
import { Tag } from './tag';
import { CourseDescription } from './courseDescription';
import { CourseSection } from './courseSection';
import { LessonProgress } from './lessonProgress';

export interface Course {
  id?: number;
  title?: string;
  category: Category;
  image_thumb?: string;
  image_285x437?: string;
  tags: Array<Tag>;
  slug?: string;
  description?: CourseDescription;
  sections: Array<CourseSection>;
  lesson_to_continiue: LessonProgress;
  progress: number;
  number_of_lessons: number;
  level?: string;
}


export class CourseModel {

  static getCourseLevel(course: Course): string {
    if (course.level === 'easy') {
      return 'Łatwy';
    }

    if (course.level === 'normal') {
      return 'Średniozaawansowany';
    }

    if (course.level === 'hard') {
      return 'Zaawansowany';
    }
    return '';
  }

}
