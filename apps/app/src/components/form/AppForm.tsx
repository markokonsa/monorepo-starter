import type { DefaultValues, FieldValues, Resolver } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import { ZodType } from 'zod';

export type AppFormProps<T extends FieldValues> = {
  onSubmit: (input: T) => void;
  shouldUnregister?: boolean;
  defaultValues?: DefaultValues<T>;
  children: ReactNode;
  schema: ZodType<T>;
};

export function AppForm<T extends FieldValues>({
  defaultValues,
  onSubmit,
  children,
  schema,
  shouldUnregister = true,
}: AppFormProps<T>) {
  const methods = useForm<T>({
    mode: 'onChange',
    shouldUseNativeValidation: false,
    defaultValues,
    resolver: zodResolver(schema as ZodType<T, FieldValues>) as Resolver<T>,
    shouldUnregister,
    delayError: 2000,
  });

  const handleSubmit = methods.handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <form className='h-full' onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}
