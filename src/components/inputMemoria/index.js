import { InputMemoriaContainer } from './styles'

const InputMemoria = ({valor, styleProps}) => {
    return (
      <InputMemoriaContainer style={styleProps}>
        <input value={valor} disabled="disabled"/>
      </InputMemoriaContainer>
    );
  }

export default InputMemoria;
