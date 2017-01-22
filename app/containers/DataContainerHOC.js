import React, { Component } from 'react'
import { fetcher } from '../fetcher/index'


export default DataContainerHOC = (WrappedComponent) => {

  class DataContainerHOC extends WrappedComponent {
    constructor() {
      super()
      // this.results_parser = results_parser.bind(this)
      // this.results_assign = results_assign.bind(this)
      // this.fetch_details = fetch_details
    }

    // render() {
    //   return <WrappedComponent {...this.props} />
    // }

    componentDidMount() {
      fetcher(this.fetch_details.url, this.fetch_details.options || { method: 'get'}, this.results_parser)
        .then(this.results_assign)
    }

  }

  return DataContainerHOC
}



// export default DataContainerHOC = (WrappedComponent, fetch_details, results_parser, results_assign) => {
//
//   class DataContainerHOC extends WrappedComponent {
//     constructor() {
//       super()
//       this.results_parser = results_parser.bind(this)
//       this.results_assign = results_assign.bind(this)
//       this.fetch_details = fetch_details
//     }
//
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//
//     componentDidMount() {
//       fetcher(fetch_details.url, fetch_details.options || { method: 'get'}, this.results_parser)
//         .then(this.results_assign)
//     }
//
//   }
//
//   return DataContainerHOC
// }


