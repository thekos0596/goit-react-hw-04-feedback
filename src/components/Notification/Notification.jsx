import PropTypes from 'prop-types';
import { Notificat } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Notificat>{message}</Notificat>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
