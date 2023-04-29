import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FedbackOption.styled';

export const FedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map((option, index) => {
          return (
            <ButtonItem key={index}>
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
