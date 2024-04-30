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
      <h3>Find contacts by name</h3>
      <input type="text" value={filters} onChange={onChangeFilter} />
    </div>
  );
}

export default SearchBox;
