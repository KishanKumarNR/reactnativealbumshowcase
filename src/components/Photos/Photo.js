import React, { Component } from 'react'

class Photo extends Component {
  render() {
    const { data } = this.props
    return (
        <div style={{
          width: '150px',
          height: '150px',
        }}>
            <div className="card">
                <img className="card-img-top" src={data.thumbnailUrl} alt="Album Thumbnail" />
                <div className="">
                <p className="card-title" style={{
                  width: "80px",
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  paddingLeft: '1.25rem',
                  paddingRight: '1.25rem',
                  marginTop: '1rem',
                  marginBottom: 'none'
                }}>{data.title}</p>
                <p style={{
                  textAlign: 'center'
                }}>id: {data.id}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Photo