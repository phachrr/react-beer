import React, { Component } from 'react'
import Home from './Home'
export default class Index extends Component {
    state = {
        searchText: ''
    }
    handleOnChange = (e) => {
        this.setState({ searchText: e.target.value })
    }

    handleSubmit = e => {
        // console.log("this.state.searchText ", this.state.searchText)
        e.preventDefault();
        // console.log("this.props.history  ", this.props.history)
        this.props.history.push(`/search/${this.state.searchText}`);
    };

    render() {
        return (
            <div className="card text-center" >
                <div className="card-header" >
                    <nav className="navbar navbar-light bg-light justify-content-between" >
                        <h1 className="navbar-brand" style={{ fontSize: '5rem' }
                        } > BEER</h1 >
                        <form className="form-inline" onSubmit={this.handleSubmit} >
                            <input className="form-control mr-sm-2" placeholder="Search" type="text" onChange={this.handleOnChange} />
                        </form >
                        {/* <button className=="btn btn-danger my-2 my-sm-0" type="submit">SEE FAVE</button> */}
                    </nav >
                </div >
            </div >
        )
    }
}


