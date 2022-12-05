import { useState } from 'react';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
interface mutationOption {
  url: string;
  isFile: boolean;
}

type UseMutationResult<T> = [(data?: unknown) => void, UseMutationState<T>];

export default function useMutation<T = unknown>({ url, isFile }: mutationOption): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const headers = isFile ? null : { headers: { 'Content-Type': 'application/json' } };

  const mutation = (data: unknown) => {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: 'POST',
      body: data as BodyInit,
      ...headers,
    })
      .then(async (response) => await response.json())
      .then((data) => {
        setState((prev) => ({ ...prev, data }));
      })
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  };
  return [mutation, { ...state }];
}
