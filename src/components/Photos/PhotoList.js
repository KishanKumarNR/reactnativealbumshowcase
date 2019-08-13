import React, { Component } from 'react'
import Photo                from './Photo'
import ApiService           from "../../services/ApiService";

class PhotoList extends Component {

  constructor(props) {
    super(props);
  }

  getPhotos() {
    let albumId = this.props.albumId;
    this.photoList = ApiService.getUserAlbum();
    this.photoList = JSON.parse(this.photoList);
    this.photoList = this.photoList.length && this.photoList.filter(photo => photo.albumId === albumId);
  }

  componentWillMount() {
    this.getPhotos();
  }

  render() {
   let data = this.photoList || [];
   let photoList = this.props.data;
    return (
        <div>
          <div class="container">
            <div style={{
              padding: '2%'
            }}>
              <h3>
              {photoList.title}
              </h3>
              <p style={{color: 'rgb(145, 135, 150)'}}>{`id: ${photoList.id}, userId: ${photoList.userId}`}</p>
              </div>
          </div>
      <div className="row" style={{
        width: 'max-content',
        height: '-webkit-fill-available'
      }}>
        {
          data && data.map(d => {
              return (
                  <Photo key={d.id} data={d} />
              )
          })
        }
      </div>
        </div>
    )
  }
}

export default PhotoList