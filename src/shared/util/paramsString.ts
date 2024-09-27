export const transformObjStrParams = <T extends Record<string, any>>(
	obj: T
) => {
	return Object.entries(obj)
		.map(([k, v]) => `${k}=${v}`)
		.join('&')
}

export const transformStrObjParams = (str: string) => {
	const resObj: any = {}

	str.split('&').map(strParam => {
		const param = strParam.split('=')
		resObj[param[0]] = param[1]
	})

	return resObj
}
