import React, { Component } from 'react'
import { fetcher } from '../fetcher/index'

export default DataContainerHOC = (Wrapped) => {

  return class DataContainer extends Wrapped {
    constructor(props) {
      super(props)
      this.state = {
        data: {}
      }
    }

    componentWillReceiveProps(props) {
      console.log('HOC will receive props')
    }

    componentDidMount() {
      console.log('DCHOC component did mount')
      fetcher(this.fetch_details.url,
        this.fetch_details.options || { method: 'get'},
        this.results_parser
      )
        .then(this.results_assigner)
    }

    results_parser = response => {
      try {
        return JSON.parse(response._bodyText).results
      }
      catch (err) {
        console.log('results parser error - - - - - - - - - - -', err)
      }
    }

    results_assigner = results => this.setState({ data: results })
  }
}
