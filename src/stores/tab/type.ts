export type TabState = {
	currentTab: TabMapControlEnum
}

export type StateType = {
	state: TabState
}

export type ActionsType = {
	setTabMap: (value: TabMapControlEnum) => void
}

export enum TabMapControlEnum {
	layers = 'layers',
	json = 'json',
	other = 'other',
}
