import * as yup from 'yup';

export const searchValidationSchema = yup.object().shape({
  query: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
