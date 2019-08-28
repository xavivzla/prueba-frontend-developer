class Peticiones {
  static URL_REGIONS = 'https://turismoi.pe/api/v1/regions.json'
	static URL_TOURS = 'https://turismoi.pe/api/v1/packages.json'
	static CONFIG = {
		headers: {
			"Authorization": "Token token=f2b15a0105d45",
			"Content-Type": 'application/json'
		},
		responseType: 'blob'
	}

	static listRegions() {
		return (
			async () =>{
				const getData = await fetch(Peticiones.URL_REGIONS, Peticiones.CONFIG)
				const data = await getData.json()
				return data.regions
			}
		)()
  }
  
  static listTours(params) {
		return (
			async () =>{
        const region = `${params.region && params.region.id ? 'region_id=' + params.region.id : ''}`
        const order = `${params.order && params.order.id ? 'order_by=' + params.order.id : ''}`
        const activity = `${params.activity && params.activity.id ? 'activity_id=' + params.activity.id : ''}`
        const day = `${params.days && params.days.id ? 'days=' + params.days.id : ''}`
        const q = `${region ? region + '&&': ''}${order ? order + '&&' : ''}${activity ? activity + '&&' : ''}${day ? day + '&&' : ''}`
				const getData = await fetch(`${Peticiones.URL_TOURS}?include_filters=1&&${q}`, Peticiones.CONFIG)
        const data = await getData.json()
				return data
			}
		)()
  }
  
}

export default Peticiones