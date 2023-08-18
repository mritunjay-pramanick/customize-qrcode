import * as React from 'react';


 const SelectField = (props) => {
	const { name, options, handleChange } = props;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px' }}>
			<label>{name}</label>
			<select name={name} onChange={handleChange} className='form-control shadow-none'>
				{options.map((option, index) => (
					<option key={index} value={option}>{option}</option>
				))}
			</select>
		</div>
	);
}

export default SelectField;