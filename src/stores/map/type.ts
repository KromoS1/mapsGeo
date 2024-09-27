import { Collection, Map } from 'ol'
import BaseLayer from 'ol/layer/Base'
import LayerGroup from 'ol/layer/Group'

export type MapState = {
	map: Map | null
	layers: {
		[key: string]: BaseLayer[] | Collection<BaseLayer> | LayerGroup | undefined
	}
}

export type StateType = {
	state: MapState
}

export type ActionsType = {
	setMap: (map: Map) => void
	setLayer: (
		layer: BaseLayer[] | Collection<BaseLayer> | LayerGroup | undefined
	) => void
}
