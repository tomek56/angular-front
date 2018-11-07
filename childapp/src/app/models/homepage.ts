import { Course } from "./course";

export interface HomePage {
  id?: number;
  featured_course?: [Course];
}
