import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'

import { defaults as defaultControls } from 'ol/control'
import MousePosition from 'ol/control/MousePosition'
import { createStringXY } from 'ol/coordinate'
import OSM from 'ol/source/OSM'
import { useEffect } from 'react'
import { useMap } from '../stores/map/map.store'

export const useRunMap = (target: string) => {
	const setMap = useMap.use.setMap()

	const createView = (center?: number[], zoom?: number) => {
		return new View({
			center: center ?? [0, 0],
			zoom: zoom ?? 4,
		})
	}

	const createBaseLayer = () => {
		return new TileLayer({
			source: new OSM(),
		})
	}

	const mousePositionControl = () => {
		return new MousePosition({
			coordinateFormat: createStringXY(6),
			projection: 'EPSG:4326',
			className: 'custom-mouse-position',
			target: document.getElementById('mouse-position') ?? undefined,
		})
	}

	useEffect(() => {
		const view = createView()
		const baseLayer = createBaseLayer()
		const mouseControl = mousePositionControl()

		const map = new Map({
			target,
			layers: [baseLayer],
			view,
			controls: defaultControls().extend([mouseControl]),
		})

		setMap(map)

		document
			.querySelectorAll('.ol-control')
			.forEach(el => el.classList.add('hidden'))

		// const source = new Static({
		// 	url: SS,
		// 	crossOrigin: '',
		// 	imageExtent: [0, 0, 100000, 100000],
		// })
		// imageLayer.setSource(source)
	}, [])
}
