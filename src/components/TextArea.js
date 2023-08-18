import * as React from 'react';


const TextArea = (props) => {
	const { name, handleChange, role, rows, cols, defaultValue, hideLabel, value} = props;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '6px', whiteSpace:'pre-line' }}>
			{!hideLabel && <label>{name}</label>}
			<textarea
				id={name}
				name={name}
				onChange={handleChange}
                rows={rows}
                cols={cols}
                role={role}
				defaultValue={defaultValue}
				value={value}
				className='form-control shadow-none'
			/>
		</div>
	);
}

export default TextArea;