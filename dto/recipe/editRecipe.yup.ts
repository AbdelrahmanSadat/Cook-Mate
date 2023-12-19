import { number, object, string } from 'yup';

const editRecipeDto = object({
  title: string().optional(),
  description: string().optional(),
  steps: string().optional(),
  ingredients: string().optional(),
  creatorId: number().integer().optional(),
});

export default editRecipeDto;
