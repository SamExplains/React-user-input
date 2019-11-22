import React from 'react';
import ImageCard from "./ImageCard";

class ImageList extends React.Component{

  render(props) {
    return (
      <div className='image-list'>

        {this.props.images.map( image => <ImageCard key={image.id} image={image}/> )}

      </div>
    );
  }

}

export default ImageList;