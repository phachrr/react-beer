import React, { Component, Fragment } from "react";
import CardList from './CardList'
import Fave from './Fave'
export default class Home extends Component {
  state = {
    beers: [],
    textSearch: '',
    faves: []
  }

  getResultBeer() {
    const API_BEER = 'https://api.punkapi.com/v2/'
    const PAGE = 'beers?page=3'
    // const API_ALL_BEER = 'https://api.punkapi.com/v2/beers?page=1'
    fetch(API_BEER + PAGE)
      .then(res => res.json())
      .then(data => {
        // console.log('data', data)
        this.setState({ beers: data })
      })
  }
  faveConllection = faveData => {
    // console.log("isFave ", faveData)

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
    // console.log('get in didmount ', this.props)
    this.getResultBeer()

  }

  render() {
    const { beers } = this.state
    // console.log('this.props' , this.props)
    // console.log('this.state', beers)
    // console.log('------- Home')
    return (
      <Fragment>
        <div style={{ paddingTop: '3rem' }}>
          <div className="container ">
            <div className="row" >
              {beers ? beers.map((item, i) =>
                <div className="col-4 col-lg-4 G " style={{ maxHeight: "100%", paddingBottom: "3rem" }} >
                  <CardList data={item} key={i} onFaveToggle={this.handleFaveToggle} />
                </div>
              )
                : <p>Loading...</p>
              }
            </div>

          </div >

        </div >
      </Fragment >
    );

  }
}


