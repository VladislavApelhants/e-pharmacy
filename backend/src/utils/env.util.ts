export const validateEnvVariable = (
  value: string | undefined,
  name: string
): string => {
  if (!value)
    throw new Error(`Missing or invalid ${name} environment variable`);
  console.log(value);
  return value;
};
