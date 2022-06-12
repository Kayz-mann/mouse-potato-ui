

import storage from '../utils/storage';
import storageKeys from '../constants/storageKeys';
import { setUser, setIsLoggedIn, UserSignInResponse } from '../redux/login';
import { useAppDispatch } from '../redux/hooks';


const useAuth = () => {
  const dispatch = useAppDispatch();

  // data here is response from signin api endpoint
  const login = async (data: UserSignInResponse) => {
    await storage.storeData(storageKeys.USER, data);
    dispatch(setUser(data));
    dispatch(setIsLoggedIn(true));
  };

  const logout = async () => {
    await storage.removeData(storageKeys.USER);
    dispatch(
      setUser({
        auth: {},
        profile: {},
        refresh_token: '',
        access_token: '',
      })
    );
    dispatch(setIsLoggedIn(false));
  };

  return {
    login,
    logout,
  };
};

export default useAuth;
