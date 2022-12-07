import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      handleFilterName,
      handleFilterRarity,
      handleFilterTrunfo,
      filterTrunfo,
    } = this.props;
    return (
      <div>
        <h2 className="text-3xl text-white mb-4">Filtros</h2>

        <div className="flex justify-center gap-8">
          <label
            className="
              flex flex-col
              text-white
              text-xl
            "
            htmlFor="filterName"
          >
            Nome
            <input
              className="text-black rounded pl-4"
              data-testid="name-filter"
              type="text"
              id="filterName"
              onChange={ handleFilterName }
              disabled={ filterTrunfo }
            />
          </label>

          <label className="flex flex-col text-white text-xl" htmlFor="filterRarity">
            Raridade
            <select
              className="
                text-black
                rounded
                disabled:bg-red-500
                disabled:cursor-not-allowed
                text-center
              "
              data-testid="rare-filter"
              id="filterRarity"
              onChange={ handleFilterRarity }
              disabled={ filterTrunfo }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label className="flex flex-col text-white text-xl" htmlFor="filterTrunfo">
            Super Trunfo
            <input
              className="
                text-black
                rounded
                disabled:bg-red-500
                disabled:cursor-not-allowed
              "
              data-testid="trunfo-filter"
              type="checkbox"
              id="filterTrunfo"
              onChange={ handleFilterTrunfo }
            />
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  handleFilterName: PropTypes.func,
  handleFilterRarity: PropTypes.func,
  handleFilterTrunfo: PropTypes.func,
  filterTrunfo: PropTypes.bool,
}.isRequired;

export default Filter;
