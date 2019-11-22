import React from 'react';

class ImageCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {spans:0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render(props) {
    return (
      <div className='image-list' style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} key={this.props.image.id} src={this.props.image.download_url} className='ui grid container'/>
      </div>
    );
  }

}

export default ImageCard;