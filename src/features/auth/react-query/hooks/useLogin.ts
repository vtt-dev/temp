import { useMutation } from '@tanstack/react-query';
import { login } from '../../api';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('XXX Login success:', data);
    },
    onError: (error: unknown) => {
      console.error('XXX Login error:', error);
    },
  });
};
