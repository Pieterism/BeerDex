import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends Component {
  //adding a class level property
  //variable albums is an empty array
  state = { albums: [] };


  //anytime we tun the render method, we do this before it's rendered
  componentWillMount() {
    //make an hhtp request (GET - request)
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      //updating the state of this component when we have the data
  }

  renderAlbums() {
    return this.state.albums.map( album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }
  render() {

    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
    </ScrollView>);
  };
}

export default AlbumList;
