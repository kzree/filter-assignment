import { z } from 'zod';

const envSchema = z.object({
  API_URL: z.string().url('API_URL must be a valid URL'),
});

export type EnvConfig = z.infer<typeof envSchema>;

export function getEnvConfig(): EnvConfig {
  try {
    const env = {
      API_URL: import.meta.env.VITE_API_URL,
    };

    return envSchema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path.join('.')}: ${err.message}`);
      throw new Error(`Environment validation failed:\n${errorMessages.join('\n')}`);
    }
    throw error;
  }
}
