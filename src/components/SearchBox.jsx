import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filters/slice';
import { selectFilters } from '../redux/selectors';

function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filters} onChange={onChangeFilter} />
    </div>
  );
}

export default SearchBox;
