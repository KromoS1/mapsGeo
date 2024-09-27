import { FC, memo } from 'react'
import { TabMapControlEnum } from '../../stores/tab/type'
import { TabMap } from './tab'

const tabs = [
	{ title: 'Слои', tab: TabMapControlEnum.layers },
	{ title: 'GeoJSON', tab: TabMapControlEnum.json },
	{ title: 'Другое', tab: TabMapControlEnum.other },
]

export const TabMapPanel: FC = memo(() => {
	const tabsMap = tabs.map(t => {
		return <TabMap key={t.tab} tab={t.tab} title={t.title} />
	})

	return (
		<div className='w-full h-[50px] grid grid-cols-4 border-b-[1px] border-black'>
			{tabsMap}
		</div>
	)
})
