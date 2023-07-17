/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDatas } from 'actions/listDemo';
import { I18nContext } from 'context/i18n';
import { authService } from 'service/AuthService';
import { logout } from 'actions/auth';

const List = (props) => {
  const currentUser = authService.getCurrentUser();
  const { translate } = useContext(I18nContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDatas());
  }, [dispatch]);
  const { listDemoSlice } = useSelector((state) => state);

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
  };

  return (
    <>
      Hello <b>{currentUser} </b>
      {translate('reactjs')}
      <ul>
        {listDemoSlice.list.length > 0 &&
          listDemoSlice.list.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default List;
