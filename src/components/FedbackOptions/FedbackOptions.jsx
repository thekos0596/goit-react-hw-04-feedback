import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FedbackOption.styled';

export const FedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKey = Object.keys(options);

  return (
    <>
      <ButtonList>
        {optionsKey.map((option, index) => {
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
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
