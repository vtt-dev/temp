import { apiService } from '../apiService';
import { ILoginRequest, ILoginResponse } from './dtos';

export const login = (body: ILoginRequest) => {
  return apiService.post<ILoginResponse>('LOGIN_ENDPOINT', body);
};
