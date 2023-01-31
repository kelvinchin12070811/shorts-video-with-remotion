import {Composition} from 'remotion';
import {Main} from './Main';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="HelloWorld"
				component={Main}
				durationInFrames={Math.floor((60 + 1.36) * 30)}
				fps={30}
				width={1080}
				height={1920}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
			/>
		</>
	);
};
