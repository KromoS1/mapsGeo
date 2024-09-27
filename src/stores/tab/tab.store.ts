import { create } from 'zustand'

import { createSelectors } from '../createSelectors'
import { ActionsType, StateType, TabMapControlEnum, TabState } from './type'

const init: TabState = {
	currentTab: TabMapControlEnum.layers,
}

const useTabBase = create<StateType & ActionsType>(set => ({
	state: init,
	setTabMap: (value: TabMapControlEnum) =>
		set(store => ({ state: { ...store.state, currentTab: value } })),
}))

export const useTabMap = createSelectors(useTabBase)
