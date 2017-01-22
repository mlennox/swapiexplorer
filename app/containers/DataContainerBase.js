import React, { Component } from 'react'
import { fetcher } from '../fetcher/index'


export default class DataContainerBase extends Component {

    componentDidMount() {
      fetcher(this.fetch_details.url,
        this.fetch_details.options || { method: 'get'},
        this.results_parser
      )
      .then(this.results_assigner)
    }
}