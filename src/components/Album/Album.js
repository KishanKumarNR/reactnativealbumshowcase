import React, { Component } from 'react'
import PhotoList            from "../Photos/PhotoList";


class Album extends Component {

  componentWillMount() {
      console.log(this.props, "albummm");
  }

  render() {
    const { data } = this.props
    return (
        <li className="list-group-item">
            <PhotoList data={data} albumId={data.id}/>
        </li>
    )
  }
}

export default Album