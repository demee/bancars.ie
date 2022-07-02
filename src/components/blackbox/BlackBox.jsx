import PropTypes from 'prop-types';
import { React } from 'react';
import style from './BlackBox.module.css';

export default function BlackBox({ children }) {
  return (
    <div className={style.blackbox}>
      {children}
    </div>
  );
}

BlackBox.propTypes = {
  children: PropTypes.node.isRequired,
};
