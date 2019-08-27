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
        const region = `${params.region_id ? 'region_id=' + params.region_id : ''}`
        const order = `${params.order_by ? 'order_by=' + params.order_by : ''}`
        const activity = `${params.activity_id ? 'activity_id=' + params.activity_id : ''}`
        const day = `${params.days_id ? 'days=' + params.days_id : ''}`
        const q = `${region ? region + '&&': ''}${order ? order + '&&' : ''}${activity ? activity + '&&' : ''}${day ? day + '&&' : ''}`
				const getData = await fetch(`${Peticiones.URL_TOURS}?include_filters=1&&${q}`, Peticiones.CONFIG)
        const data = await getData.json()
				return data
			}
		)()
  }
  
}

export default Peticiones