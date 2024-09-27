import { FC, memo } from 'react'
import { LayersTab } from '../../features/tabs/layers/LayersTab'
import { TabMapPanel } from '../../shared'
import { useTabMap } from '../../stores/tab/tab.store'
import { TabMapControlEnum } from '../../stores/tab/type'

export const MapPanel: FC = memo(() => {
	const currentTab = useTabMap.use.state().currentTab
	return (
		<div className='col-span-3 size-full'>
			<TabMapPanel />
			{currentTab === TabMapControlEnum.layers && <LayersTab />}
		</div>
	)
})
