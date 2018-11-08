import { Category } from './category';
import { Tag } from './tag';

export interface Course {
  id?: number;
  title?: string;
  category: Array<Category>;
  image_thumb?: string;
  image_285x437?: string;
  tags: Array<Tag>;
}

