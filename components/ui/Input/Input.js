import styled from 'styled-components'

const StyledInput = styled.div`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-align: center;
  margin-bottom: 4px;
  position: relative;
`

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  margin: 12px 0 10px 0;
  transition: color 0.2s;
  color: #666666;
`

const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 44px;
`

const InputWrapper = styled.div`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  height: 100%;
  flex: 1;
  user-select: none;
  border-radius: 6px;
  border: 1px solid var(--input-border-color);
  transition: border 0.2s ease 0s, color 0.2s ease 0s;

  :hover {
    border-color: var(--text-light-color);
  }
`

const InputComponent = styled.input`
  color: var(--text-primary-color);
  margin: 4px 10px;
  padding: 0;
  box-shadow: none;
  font-size: 15px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0;
  width: 100%;
  min-width: 0;
  line-height: 24px;
  -webkit-appearance: none;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};

  &::placeholder {
    color: var(--input-placeholder-color);
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:active,
  :-webkit-autofill:focus {
    box-shadow: 0 0 0 30px var(--background-secondary-color) inset !important;
    -webkit-box-shadow: 0 0 0 30px var(--background-secondary-color) inset !important;
  }
`
export const defaultProps = {
  className: '',
}

const Input = ({ className, children, label, onChange, ...props }) => {
  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <StyledInput>
      {label && <Label>{label}</Label>}

      <InputContainer className={className}>
        <InputWrapper>
          <InputComponent
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onChange={handleOnChange}
            {...props}
          />
        </InputWrapper>
      </InputContainer>
    </StyledInput>
  )
}

Input.defaultProps = defaultProps

export default Input
