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
/* Not effective way   
    handleTitle = (event) => {
    this.setState( { title: event.target.value }, () => {console.log(this.state)} );
    }
    
    handleAuthor = (event) => {
        this.setState( { author: event.target.value }, () => {console.log(this.state)} );
        }
*/
    // Better way than previous 
    //
    // handleInput = event => {
    //     const name = event.target.name;
    //     const obj = {};
    //     obj[name] = event.target.value;
    //     this.setState(obj);
    //     console.log(this.state);
    // }

    //spread  
    handleSubmit = (event) => {    
        event.preventDefault();    
        const book = { title: this.state.title, author: this.state.author };    
        //this.setState( (prev) => { books: prev.books.push(book) }, () => { console.log(this.state.books) } );    
        //this.setState( (prev) => ({ books: [...prev.books, book] }), () => { console.log(this.state.books) } );    
        //this.setState( () => ({ books: [...this.state.books, book] }), () => { console.log(this.state.books) } );    
        this.setState( { books: [...this.state.books, book] }, () => { console.log(this.state.books) } );  }

    render() {
        return (
            <div>
                <h3>Scientific Library</h3>
                <p>Address: {this.props.address}</p>
                <p>Current number of books: {this.state.count}</p>
                <hr/>
                {/* Add new book: <button onClick={this.handlerClick}>Add book</button> */}
                <form onSubmit={this.handleSubmit}>
                    {/* <input type='text' name='title' placeholder='Title' onChange={this.handleInput}/> */}
                    {/* <input type='text' name='author' placeholder='Author' onChange={this.handleInput}/> */}
                    
                    <input type='text' name='title' placeholder='Title' onChange={ (e) => this.setState( { title: e.target.value } )}/>
                    <input type='text' name='author' placeholder='Author'onChange={ (e) => this.setState( { author: e.target.value } )}/>
                    <button type='submit'> Add Book</button>
                </form>
                <hr/>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map( (b, i) => <tr key={i}><td>{ b.title }</td><td>{ b.author }</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Library;