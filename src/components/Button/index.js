import { ButtonContainer} from "./styles";

const Button = ({label, onClick, styleProps}) => {
    return (
      <ButtonContainer onClick={onClick} style={styleProps}>
        {label}
      </ButtonContainer>
    );
  }

export default Button