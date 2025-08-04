import React, {forwardRef} from 'react';
type prop= React.InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, prop>((props,ref) =>{
	return <input ref={ref} {...props} />
});
export default Input;
