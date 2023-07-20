/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, setDatas } from 'actions/listDemo';
import { I18nContext } from 'context/i18n';
import { authService } from 'service/AuthService';
import { logout } from 'actions/auth';
import { Link } from 'react-navi';

const ListDemo = (props) => {
  const currentUser = authService.getCurrentUser();
  const { translate } = useContext(I18nContext);
  const dispatch = useDispatch();
  const [isReFetch, setIsReFetch] = useState(false);
  useEffect(() => {
    dispatch(setDatas());
    setIsReFetch(false);
  }, [dispatch, isReFetch]);
  const { listDemoSlice } = useSelector((state) => state);

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
  };

  const handleDelete = (item) => {
    dispatch(deleteTask(item));
    setIsReFetch(true);
  };

  return (
    <>
      Hello <b>{currentUser} </b>
      {translate('reactjs')}
      <ul>
        {listDemoSlice?.list?.length > 0 &&
          listDemoSlice.list.map((item) => (
            <li key={item.id}>
              {item.title}
              <Link href={`/list/${item.id}`}>Detail</Link>
              <Link href="/" onClick={() => handleDelete(item)}>
                Delete
              </Link>
            </li>
          ))}
      </ul>
      <button onClick={() => (window.location.href = '/list/new')}>
        Add new task
      </button>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default ListDemo;
