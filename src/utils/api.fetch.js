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
				const getData = await fetch(`${Peticiones.URL_TOURS}?region_id=${params.region_id}`, Peticiones.CONFIG)
        const data = await getData.json()
				return data
			}
		)()
  }
  
}

export default Peticiones