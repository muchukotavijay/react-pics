import React from 'react';

//API
import pixabay from '../api/pixabay';

// Components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        try {
            const response = await pixabay.get('/api/', {
                params: {
                    q: term,
                    key: '17802359-5fc269fbc34f84416ddd165c2'
                }
            });

            const results = response.data.hits;

            this.setState({ images: results});
        } catch(e) {
            console.log(e);
        }
        
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
};

export default App;
