import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onFilterChange }) => (
  <div className={css.container}>
    <label className={css.filterLabel}>Find contacts by name </label>
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter name"
      value={filter}
      onChange={onFilterChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};