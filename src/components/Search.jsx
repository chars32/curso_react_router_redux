import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, setFilter }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleSearch = (event) => {
    setFilter(event.target.value);
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' onChange={handleSearch} />
    </section>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Search);
