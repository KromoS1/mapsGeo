import { Map, View } from 'ol'
import ImageLayer from 'ol/layer/Image'
import TileLayer from 'ol/layer/Tile'
import { OSM } from 'ol/source'
import Static from 'ol/source/ImageStatic'

export class MapBuilder {
	centerRB = [53.902735, 27.555691]
	startZoom = 12

	map: Map | null = null
	view: View | null = null
	layers: any[] = []

	createMap(target: string) {
		if (this.view)
			this.map = new Map({
				target,
				view: this.view,
				layers: this.layers,
			})
		return this
	}

	createBaseLayer() {
		const tile = new TileLayer({
			source: new OSM(),
		})

		this.layers.push(tile)

		return this
	}

	createView(center?: number[], zoom?: number) {
		this.view = new View({
			center: center ?? this.centerRB,
			zoom: zoom ?? this.startZoom,
		})

		return this
	}

	createImageLayer(url: string, imageExtent: number[]) {
		const imageLayer = new ImageLayer({
			source: new Static({
				url,
				crossOrigin: '',
				imageExtent: imageExtent,
			}),
		})

		this.layers.push(imageLayer)

		return this
	}
}
