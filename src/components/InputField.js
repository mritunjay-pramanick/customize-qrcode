import * as React from 'react';


const InputField = (props) => {
	const { name, type, handleChange, min, max, step, defaultValue, hideLabel, value } = props;

	console.log(name,'type')
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}>
			{!hideLabel && <label>{name}</label>}
			<input
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				min={min}
				max={max}
				step={step || 1}
				defaultValue={defaultValue}
				value={value}
				className='form-range shadow-none'
			/>
		</div>
	);
}

export default InputField;