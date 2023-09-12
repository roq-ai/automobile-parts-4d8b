import * as yup from 'yup';

export const partValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  stock_level: yup.number().integer().required(),
  supplier_id: yup.string().nullable().required(),
});
