import { InputContainer } from './styles'

const Input = ({valor, styleProps}) => {
    return (
      <InputContainer style={styleProps}>
        <input value={valor} disabled="disabled"/>
      </InputContainer>
    );
  }

export default Input;
