import { ChangeEvent, FC, memo } from 'react'

export const UploadFile: FC = memo(() => {
	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
	}

	return (
		<div className='flex items-center justify-between'>
			<span>Выберите изображение, что бы добавить слой</span>
			<label htmlFor={`upload-file`}>
				<span className='bg-blue-200 hover:bg-blue-100 text-primary-700 rounded-lg text-sm px-4 py-5 flex flex-row items-center justify-center h-12 cursor-pointer'>
					Загрузить
				</span>
				<input
					type='file'
					hidden
					id={`upload-file`}
					accept={'.jpg, .jpeg, .png'}
					onChange={uploadFile}
				/>
			</label>
		</div>
	)
})
