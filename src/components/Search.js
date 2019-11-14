import React, { Component, Fragment } from "react";
import CardList from './CardList'
export default class Search extends Component {
    state = {
        beers: [],
        textSearch: '',
        faves: [],
        faveGroup: []
    }
    getSearchResultBeer(query) {
        // console.log('query l', query)
        const API_BEER = 'https://api.punkapi.com/v2/beers?beer_name='
        fetch(API_BEER + query)
            .then(res => res.json())
            .then(data => {
                // console.log('data', data)
                this.setState({ beers: data })
            })
    }
    // componentDidMount() {
    //   console.log('get in didmount ', this.props)
    //   this.getResultBeer()
    // }

    faveConllection = faveData => {
        console.log("isFave ", faveData)

        this.setState({ faveGroup: faveData })
        // console.log('this.state.faveGroup', this.state.faveGroup)
        const faves = [...this.state.faves];
        const filmIndex = faves.indexOf(faveData);
        if (filmIndex === -1) {
            faves.push(faveData);
        } else {
            faves.splice(filmIndex, 1);
        }
        this.setState({ faves });
        // console.log('---- favs', faves)
    };
    componentDidMount() {
        // console.log("componentDidMount ==> getFlickrResults")
        if (this.props && this.props.match.params.query) {
            this.setState({ textSearch: this.props.match.params.query })
            // console.log('text Seach', this.props.match.params.query)
            let beerNane = this.props.match.params.query
            this.getSearchResultBeer(beerNane)
        }
    }
    componentDidUpdate(oldProps, oldState) {
        // console.log("componentDidUpdate ==> getFlickrResults")
        // console.log('text textSearch', this.state.textSearch)

        // console.log("old ", oldState.match.params.query)
        // console.log("old ", oldProps.match.params.query)
        // console.log("new ", this.props.match.params.query)
        if (this.state.textSearch !== this.props.match.params.query) {

            this.getSearchResultBeer(this.props.match.params.query)
            this.setState({ textSearch: this.props.match.params.query })
        }
    }
    render() {
        const { beers } = this.state
        return (
            <Fragment>
                <div style={{ paddingTop: '3rem' }}>

                    <div className="container ">

                        <div className="row" >
                            {beers ? beers.map((item, i) =>
                                <div className="col-4 col-lg-4 G " style={{ maxHeight: "100%", paddingBottom: "3rem" }} >
                                    <CardList data={item} faves={this.faveConllection} key={i} />
                                </div>
                            )
                                : <p>Loading...</p>
                            }


                        </div>
                        {
                            this.state.faves ?
                                <div className="row" >

                                    {
                                        this.state.faves ? this.state.faves.map((item, i) =>
                                            <div className="col-4 col-lg-4 G " style={{ maxHeight: "100%", paddingBottom: "3rem" }} >
                                                <h1>FAV</h1>
                                                <CardList data={item} faves={this.faveConllection} key={i} />
                                            </div >
                                        )
                                            : <p>Loading...</p>
                                    }
                                </div >
                                : ''
                        }

                    </div>


                </div >
            </Fragment >
        );

    }
}


