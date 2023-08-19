import React, { useState } from 'react';
import InputField from './components/InputField';
import {QRCode} from 'react-qrcode-logo';
import SelectField from './components/SelectField';
import TextArea from './components/TextArea';
import ImageUploadField from './components/ImageUploadField';
import  CheckboxField from './components/CheckboxField';
import html2canvas from 'html2canvas';

const App = () =>{
	const [state, setState] = useState({});

	const handleChange = (e) => {
		setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
		console.log(state,'RAJA');
	}

	const handleDownload = () => {
		html2canvas(document.querySelector('#react-qrcode-logo'))
			.then(function (canvas) {
				const link = document.createElement('a');
				link.download = 'react-qrcode-logo.png';
				link.href = canvas.toDataURL();
				link.click();
			});
	}

	const buildEyeRadiusInput = (id) => {
		return <InputField
			name={id}
			type='range'
			handleChange={handleChange}
			min={0}
			max={50}
			hideLabel
			defaultValue={state[id]}
			value={state[id]}
		/>
	};

	const handleReset = () =>{
		setState({
			value : '',
			enableCORS : false,
			size : 100,
			quietZone : 20,
			bgColor : '#ffffff',
			fgColor : '#000000',
			logoImage : '',
			logoWidth : 20,
			logoHeight : 20,
			logoOpacity : 0,
			// qrStyle : 'Dots',
			removeQrCodeBehindLogo : false,
			logoPadding : 0,
			eyeradius_0_outer_0 : 0,
			eyeradius_0_outer_1 : 0,
			eyeradius_0_outer_2 : 0,
			eyeradius_0_outer_3 : 0,
			eyeradius_0_inner_0 : 0,
			eyeradius_0_inner_1 : 0,
			eyeradius_0_inner_2 : 0,
			eyeradius_0_inner_3 : 0,
			eyeradius_1_outer_0 : 0,
			eyeradius_1_outer_1 : 0,
			eyeradius_1_outer_2 : 0,
			eyeradius_1_outer_3 : 0,
			eyeradius_1_inner_0 : 0,
			eyeradius_1_inner_1 : 0,
			eyeradius_1_inner_2 : 0,
			eyeradius_1_inner_3 : 0,
			eyeradius_2_outer_0 : 0,
			eyeradius_2_outer_1 : 0,
			eyeradius_2_outer_2 : 0,
			eyeradius_2_outer_3 : 0,
			eyeradius_2_inner_0 : 0,
			eyeradius_2_inner_1 : 0,
			eyeradius_2_inner_2 : 0,
			eyeradius_2_inner_3 : 0,
			eyecolor_0_outer: '#000000',
			eyecolor_0_inner: '#000000',
			eyecolor_1_outer: '#000000',
			eyecolor_1_inner: '#000000',
			eyecolor_2_outer: '#000000',
			eyecolor_2_inner: '#000000',
		});
		console.log(state,'RAJA1');
	}


	return (
		<div className='app'>
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				<div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
					<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
						<div style={{ width: '240px', display: 'flex', flexDirection: 'column', padding: '15px' }}>
							<TextArea
								name='value'
								handleChange={handleChange}
								value={state.value}
							/>
							<SelectField
								name='ecLevel'
								options={['L', 'M', 'Q', 'H']}
								handleChange={handleChange}
							/>
							<CheckboxField
								name='enableCORS'
								checkedValue={state.enableCORS}
								handleChange={handleChange}
							/>
							<InputField
								name='size'
								type='range'
								handleChange={handleChange}
								min={100}
								max={500}
								value={state.size}
							/>
							<InputField
								name='quietZone'
								type='range'
								handleChange={handleChange}
								min={20}
								max={80}
								value={state.quietZone}
							/>
							<div style={{ display: 'flex', flexDirection: 'row', marginTop: '4px', justifyContent: 'space-around' }}>
								<InputField
									name='bgColor'
									type='color'
									defaultValue='#ffffff'
									value={state.bgColor}
									handleChange={handleChange}
								/>
								<InputField
									name='fgColor'
									type='color'
									defaultValue='#000000'
									handleChange={handleChange}
									value={state.fgColor}
								/>
							</div>
						</div>
						<div style={{ width: '240px', display: 'flex', flexDirection: 'column', padding: '15px' }}>
							<ImageUploadField
								name='logoImage'
								handleChange={handleChange}
							/>
							<InputField
								name='logoWidth'
								type='range'
								handleChange={handleChange}
								min={20}
								max={500}
								value={state.logoWidth}
							/>
							<InputField
								name='logoHeight'
								type='range'
								handleChange={handleChange}
								min={20}
								max={500}
								value={state.logoHeight}
							/>
							<InputField
								name='logoOpacity'
								type='range'
								handleChange={handleChange}
								min={0}
								max={1}
								step={0.1}
								defaultValue={1}
								value={state.logoOpacity}
							/>
							<SelectField
								name='qrStyle'
								options={['squares', 'dots']}
								handleChange={handleChange}
							/>
							<CheckboxField
								name='removeQrCodeBehindLogo'
								handleChange={handleChange}
								checkedValue={state.removeQrCodeBehindLogo}
							/>
							<InputField
								name='logoPadding'
								type='range'
								handleChange={handleChange}
								min={0}
								max={20}
								step={1}
								defaultValue={0}
								value={state.logoPadding}
							/>
							<SelectField
								name='logoPaddingStyle'
								options={['square', 'circle']}
								handleChange={handleChange}
							/>
						</div>
					</div>

					<div style={{ padding: '15px' }}>
						<p>eyeRadius</p>
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<div>
								<p style={{ fontSize: 14 }}>Top left eye</p>
								<p style={{ fontSize: 12 }}>Outer</p>
								{buildEyeRadiusInput('eyeradius_0_outer_0')}
								{buildEyeRadiusInput('eyeradius_0_outer_1')}
								{buildEyeRadiusInput('eyeradius_0_outer_2')}
								{buildEyeRadiusInput('eyeradius_0_outer_3')}
								<p style={{ fontSize: 12 }}>Inner</p>
								{buildEyeRadiusInput('eyeradius_0_inner_0')}
								{buildEyeRadiusInput('eyeradius_0_inner_1')}
								{buildEyeRadiusInput('eyeradius_0_inner_2')}
								{buildEyeRadiusInput('eyeradius_0_inner_3')}
							</div>
							<div>
								<p style={{ fontSize: 14 }}>Top right eye</p>
								<p style={{ fontSize: 12 }}>Outer</p>
								{buildEyeRadiusInput('eyeradius_1_outer_0')}
								{buildEyeRadiusInput('eyeradius_1_outer_1')}
								{buildEyeRadiusInput('eyeradius_1_outer_2')}
								{buildEyeRadiusInput('eyeradius_1_outer_3')}
								<p style={{ fontSize: 12 }}>Inner</p>
								{buildEyeRadiusInput('eyeradius_1_inner_0')}
								{buildEyeRadiusInput('eyeradius_1_inner_1')}
								{buildEyeRadiusInput('eyeradius_1_inner_2')}
								{buildEyeRadiusInput('eyeradius_1_inner_3')}
							</div>
							<div>
								<p style={{ fontSize: 14 }}>Bottom left eye</p>
								<p style={{ fontSize: 12 }}>Outer</p>
								{buildEyeRadiusInput('eyeradius_2_outer_0')}
								{buildEyeRadiusInput('eyeradius_2_outer_1')}
								{buildEyeRadiusInput('eyeradius_2_outer_2')}
								{buildEyeRadiusInput('eyeradius_2_outer_3')}
								<p style={{ fontSize: 12 }}>Inner</p>
								{buildEyeRadiusInput('eyeradius_2_inner_0')}
								{buildEyeRadiusInput('eyeradius_2_inner_1')}
								{buildEyeRadiusInput('eyeradius_2_inner_2')}
								{buildEyeRadiusInput('eyeradius_2_inner_3')}
							</div>
						</div>
					</div>
					<div style={{ padding: '15px' }}>
						<p>eyeColor</p>
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<div>
								<p style={{ fontSize: 14 }}>Top left eye</p>
								<p style={{ fontSize: 12 }}>Outer</p>
								<InputField
									name='eyecolor_0_outer'
									type='color'
									defaultValue={state.fgColor ?? '#000000'}
									handleChange={handleChange}
									hideLabel={true}
									value={state.eyecolor_0_outer}
								/>
								<p style={{ fontSize: 12 }}>Inner</p>
								<InputField
									name='eyecolor_0_inner'
									type='color'
									defaultValue={state.fgColor ?? '#000000'}
									handleChange={handleChange}
									hideLabel={true}
									value={state.eyecolor_0_inner}
								/>
							</div>
							<div>
								<p style={{ fontSize: 14 }}>Top right eye</p>
								<p style={{ fontSize: 12 }}>Outer</p>
								<InputField
									name='eyecolor_1_outer'
									type='color'
									defaultValue={state.fgColor ?? '#000000'}
									handleChange={handleChange}
									hideLabel={true}
									value={state.eyecolor_1_outer}
								/>
								<p style={{ fontSize: 12 }}>Inner</p>
								<InputField
									name='eyecolor_1_inner'
									type='color'
									defaultValue={state.fgColor ?? '#000000'}
									handleChange={handleChange}
									hideLabel={true}
									value={state.eyecolor_1_inner}
								/>
							</div>
							<div>
								<p style={{ fontSize: 14 }}>Bottom left eye</p>
								<p style={{ fontSize: 12 }}>Outer</p>
								<InputField
									name='eyecolor_2_outer'
									type='color'
									defaultValue={state.fgColor ?? '#000000'}
									handleChange={handleChange}
									hideLabel={true}
									value={state.eyecolor_2_outer}
								/>
								<p style={{ fontSize: 12 }}>Inner</p>
								<InputField
									name='eyecolor_2_inner'
									type='color'
									defaultValue={state.fgColor ?? '#000000'}
									handleChange={handleChange}
									hideLabel={true}
									value={state.eyecolor_2_inner}
								/>
							</div>
						</div>
					</div>
				</div>


				<div style={{
					width: 700,
					height: 700,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					border: '1px solid #d4fafc',
					borderRadius: '50px',
					backgroundColor: '#d4fafc'
				}}>
					<QRCode
						{...{
							...state,
							eyeRadius: [ // build eyeRadius manually
								{
									outer: [state.eyeradius_0_outer_0, state.eyeradius_0_outer_1, state.eyeradius_0_outer_2, state.eyeradius_0_outer_3],
									inner: [state.eyeradius_0_inner_0, state.eyeradius_0_inner_1, state.eyeradius_0_inner_2, state.eyeradius_0_inner_3],
								},
								{
									outer: [state.eyeradius_1_outer_0, state.eyeradius_1_outer_1, state.eyeradius_1_outer_2, state.eyeradius_1_outer_3],
									inner: [state.eyeradius_1_inner_0, state.eyeradius_1_inner_1, state.eyeradius_1_inner_2, state.eyeradius_1_inner_3],
								},
								{
									outer: [state.eyeradius_2_outer_0, state.eyeradius_2_outer_1, state.eyeradius_2_outer_2, state.eyeradius_2_outer_3],
									inner: [state.eyeradius_2_inner_0, state.eyeradius_2_inner_1, state.eyeradius_2_inner_2, state.eyeradius_2_inner_3],
								}
							],
							eyeColor: [ // build eyeColor manually
								{
									outer: state.eyecolor_0_outer ?? state.fgColor ?? '#000000',
									inner: state.eyecolor_0_inner ?? state.fgColor ?? '#000000'
								},
								{
									outer: state.eyecolor_1_outer ?? state.fgColor ?? '#000000',
									inner: state.eyecolor_1_inner ?? state.fgColor ?? '#000000'
								},
								{
									outer: state.eyecolor_2_outer ?? state.fgColor ?? '#000000',
									inner: state.eyecolor_2_inner ?? state.fgColor ?? '#000000'
								},
							]
						}}
					/>
				</div>
			</div>
			<button type='button' className='btn btn-primary shadow-none' onClick={handleDownload} style={{ margin: '20px' }}>Download QR Code</button>
			<button type='button' className='btn btn-danger shadow-none' onClick={handleReset} style={{ margin: '20px' }}>Reset</button>
			

		</div>
	);
}

export default App;
