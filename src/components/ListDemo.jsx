/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDatas } from 'actions/listDemo';
import { I18nContext } from 'context/i18n';

const List = (props) => {
  const { translate } = useContext(I18nContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDatas());
  }, [dispatch]);
  const { listDemoSlice } = useSelector((state) => state);
  return (
    <>
      {translate('reactjs')}
      <ul>
        {listDemoSlice.list.length > 0 &&
          listDemoSlice.list.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </>
  );
};

export default List;
