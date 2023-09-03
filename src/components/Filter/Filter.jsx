import { useDispatch, useSelector } from 'react-redux';
import css from './Fiter.module.css';
import { selectFilter, setFilter } from 'redux/rootReducer';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleByFilter = e => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.inputName}
        type="text"
        name="filter"
        value={filter}
        onChange={handleByFilter}
      />
    </>
  );
};

export default Filter;
