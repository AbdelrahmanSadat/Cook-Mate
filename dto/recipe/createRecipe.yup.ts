import { object, string } from 'yup';

const createRecipeDto = object({
  title: string().required(),
  description: string().required(),
  steps: string().required(),
  ingredients: string().required(),
});

export default createRecipeDto;
