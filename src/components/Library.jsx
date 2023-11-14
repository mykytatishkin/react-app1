import React, { Component } from 'react';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, books: [], title: '', author: '' };
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        // this.state.count = this.state.count + 1; // wrong way to change state, never use it
        this.setState(
            (oldState) => { return { count: oldState.count + 1} },
            () => { console.log('count = ' + this.state.count) }
            );
        // console.log('count = ' + this.state.count)
    }
    
    handleTitle = (event) => {
    this.setState( { title: event.target.value }, () => {console.log(this.state)} );
    }
    
    handleAuthor = (event) => {
        this.setState( { author: event.target.value }, () => {console.log(this.state)} );
        }

    render() {
        return (
            <div>
                <h3>Scientific Library</h3>
                <p>Address: {this.props.address}</p>
                <p>Current number of books: {this.state.count}</p>
                <hr/>
                {/* Add new book: <button onClick={this.handlerClick}>Add book</button> */}
                <form>
                    <input type='text' name='title' placeholder='Title' onChange={this.handleTitle}/>
                    <input type='text' name='author' placeholder='Author' onChange={this.handleAuthor}/>
                    <button type='submit'> Add Book</button>
                </form>
            </div>
        );
    }
}

export default Library;