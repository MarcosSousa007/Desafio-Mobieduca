import Cookies from 'js-cookie';

const ValidateSession = () => {
  const token = Cookies.get('authToken');
  
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default ValidateSession;
