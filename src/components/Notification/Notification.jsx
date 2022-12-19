import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ alert }) => {
  return <p className={css.alert}>{alert}</p>;
};

Notification.propTypes = {
  alert: PropTypes.string.isRequired,
};
