import { useRunMap } from '../hooks/useMap'
import { MousePositionInfo } from '../shared/mousePosition/MousePosition'
import { MapPanel } from '../widgets/mapPanel/mapPanel'

function App() {
	useRunMap('map')

	return (
		<div className='w-[100vw] h-[100vh] grid grid-cols-12'>
			<div id='map' className='col-span-9 relative'>
				<MousePositionInfo />
			</div>
			<MapPanel />
		</div>
	)
}

export default App
