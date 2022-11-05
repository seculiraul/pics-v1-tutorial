import SearchBar from "./SearchBar";
import React from "react";

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term)
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>);
    }
};

export default App;