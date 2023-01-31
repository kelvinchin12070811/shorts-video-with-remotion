import {
	AbsoluteFill,
	Audio,
	Img,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {useAudioData, visualizeAudio} from '@remotion/media-utils';

import audio from '../../assets/microsoft_yunxi_tts_testing.mp3';
import qrCode from '../../assets/Community.png';

import * as styles from './styles';

export function Main() {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const audioData = useAudioData(audio as any);

	if (audioData == null) return <></>;

	const visuallizer = visualizeAudio({
		fps,
		frame,
		audioData,
		numberOfSamples: Math.pow(2, 5),
	});

	return (
		<AbsoluteFill style={styles.rootContainer}>
			<div style={styles.fonts}>微軟文字轉語音測試</div>
			<div style={{...styles.fonts, fontSize: 70, top: 214}}>
				MS Edge 朗讀功能 - 雲希
			</div>

			<div style={{...styles.fontBase, top: 531}}>掃碼加入</div>
			<img style={styles.qrCode} src={qrCode} alt="" />
			<div style={{...styles.fontBase, top: 1276}}>電腦討論與分享區 DC 群</div>

			<div style={{...styles.waveformContainer}}>
				{visuallizer.map((v) => {
					return <div style={{...styles.waveform, height: 750 * v}}></div>;
				})}
			</div>
			<Audio src={audio} />
		</AbsoluteFill>
	);
}
