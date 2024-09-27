import { Collection, Map } from 'ol'
import BaseLayer from 'ol/layer/Base'
import LayerGroup from 'ol/layer/Group'
import { create } from 'zustand'
import { generateRandomString } from '../../shared/util/generateRandom'
import { createSelectors } from '../createSelectors'
import { ActionsType, MapState, StateType } from './type'

const init: MapState = {
	map: null,
	layers: {},
}

const useMapBase = create<StateType & ActionsType>(set => ({
	state: init,
	setMap: (map: Map) =>
		set(store => {
			return { state: { ...store.state, map } }
		}),
	setLayer: (
		layers: BaseLayer[] | Collection<BaseLayer> | LayerGroup | undefined
	) =>
		set(store => {
			return {
				state: {
					...store.state,
					layers: { ...store.state.layers, [generateRandomString(16)]: layers },
				},
			}
		}),
}))

export const useMap = createSelectors(useMapBase)
