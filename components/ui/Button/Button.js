//Button.js
import styled from 'styled-components'

const defaultProps = {
  htmlType: 'button',
  disabled: false,
  className: '',
}

const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;

  height: 44px;
  width: auto;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;

  user-select: none;
  outline: none;
  text-transform: capitalize;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  color: var(--text-secondary-color);
  background: var(--button-primary-color);
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    opacity: 0.6;
  }
`

const Button = ({ ...btnProps }) => {
  const { children, disabled, onClick, htmlType, className, ...props } =
    btnProps

  return (
    <StyledButton
      type={!props.as && htmlType}
      disabled={disabled}
      {...props}
      className={className}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = defaultProps

export default Button
