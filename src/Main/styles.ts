import {CSSProperties} from 'react';

export const rootContainer: CSSProperties = {
	backgroundColor: 'black',
	width: '100%',
	height: '100%',
};

export const fonts: CSSProperties = {
	color: 'yellow',
	fontSize: 100,
	position: 'absolute',
	top: 100,
	left: '50%',
	transform: 'translate(-50%, 0)',
	width: '100%',
	textAlign: 'center',
};

export const waveformContainer: CSSProperties = {
	height: '100%',
	width: '100%',
	marginTop: 1350,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	alignItems: 'center',
};

export const waveform: CSSProperties = {
	bottom: 20,
	width: 20,
	borderRadius: 5,
	backgroundColor: 'yellow',
};

export const fontBase: CSSProperties = {
	color: 'white',
	fontSize: 80,
	textAlign: 'center',
	position: 'absolute',
	width: '100%',
};

export const qrCode: CSSProperties = {
	width: 600,
	height: 600,
	backgroundColor: 'white',
	borderRadius: 10,
	padding: 5,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};
