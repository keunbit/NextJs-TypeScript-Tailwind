import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
interface mutationOption {
  url: string;
  isFile: boolean;
}

type UseMutationResult<T> = [(data?: any) => void, UseMutationState<T>];

export default function useMutation<T = any>({
  url,
  isFile,
}: mutationOption): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const headers = isFile
    ? null
    : { headers: { "Content-Type": "application/json" } };

  const mutation = (data: any): void => {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      body: data,
      ...headers,
    })
      .then(async (response) => await response.json().catch(() => {}))
      .then((data) => {
        setState((prev) => ({ ...prev, data }));
      })
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  };
  return [mutation, { ...state }];
}
