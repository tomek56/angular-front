import { Category } from './category';
import { Tag } from './tag';
import { CourseDescription } from './courseDescription';

export interface Course {
  id?: number;
  title?: string;
  category: Category;
  image_thumb?: string;
  image_285x437?: string;
  tags: Array<Tag>;
  slug?: string;
  description?: CourseDescription;
}

