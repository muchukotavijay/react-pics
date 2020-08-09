import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef.current)
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        
        // 10 is auto-grid-rows refer css file
        const spans = Math.ceil((height / 10) + 0.5);

        this.setState({spans});
    }

    render() {

        const {tags, webformatURL} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={tags} src={webformatURL} />
            </div>
            
        )
    }
}

export default ImageCard;