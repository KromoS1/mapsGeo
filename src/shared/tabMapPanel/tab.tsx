import { FC } from 'react'
import { useTabMap } from '../../stores/tab/tab.store'
import { TabMapControlEnum } from '../../stores/tab/type'

type PropsType = {
	title: string
	tab: TabMapControlEnum
}

export const TabMap: FC<PropsType> = ({ title, tab }) => {
	const currentTab = useTabMap.use.state().currentTab
	const setTab = useTabMap.use.setTabMap()

	const clickTab = () => setTab(tab)

	return (
		<div
			onClick={clickTab}
			className={`col-span-1 flex justify-center items-center cursor-pointer ${
				currentTab === tab ? ' bg-blue-300' : ''
			}`}
		>
			{title}
		</div>
	)
}
