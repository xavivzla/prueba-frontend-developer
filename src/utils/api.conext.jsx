import React, { Component } from 'react'

import ApiFetch from '../utils/api.fetch'

export const AppContext = React.createContext()

async function getRegions(params) {
  return await ApiFetch.listRegions()
}

export class AppContextProvider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      regionsList: []
    }

    // this.updateRegionList = this.updateRegionList.bind(this)
  }

  // updateRegionList = newRegions => {
  //   this.setState({
  //     regionsList: newRegions,
  //   })
  // }

  componentDidMount() {
    getRegions()
    .then((data) => {
      this.setState({
        regionsList: data
      })
    })
  }

  render() {

    const {
      children
    } = this.props

		const { regionsList } = this.state
    
    return (
      <AppContext.Provider
        value={{
          regionsList,
        }}>
        { children }
      </AppContext.Provider>
    )
  }
}

export const AppContextConsumer = AppContext.Consumer


// import React, { Component } from 'react'

// const { Provider, Consumer } = React.createContext()

// class StoreProvider extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			regionsList: [],
// 		}
// 	}

// 	updateRegionList = newRegions => {
// 		this.setState({
// 			regionsList: newRegions,
// 		})
// 	}

// 	render() {
// 		const { children } = this.props
// 		const { regionsList } = this.state
// 		return (
// 			<Provider
// 				value={{
// 					regionsList,
// 					updateRegionList: this.updateRegionList,
// 				}}>
// 				{children}
// 			</Provider>
// 		)
// 	}
// }

// export { StoreProvider, Consumer as StoreConsumer }