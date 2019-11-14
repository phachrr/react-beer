import React, { Component } from 'react'
import "./App.css";
import Fave from './Fave';
class CardList extends Component {

    state = {
        status: 'all'
    }


    // handleClick(faveitem) {
    //     let faveData = localStorage.getItem('faveData')
    //     console.log('faveData', faveData)
    //     if (faveitem === null) {
    //         console.log('1------------------- 1')
    //         let r = []
    //         r.push(faveitem)
    //         console.log('R ------ ', r)
    //         let obj = JSON.stringify(r)
    //         localStorage.setItem("faveData", obj)
    //     } else {

    //         console.log('2------------------- 2')
    //         let faveData = JSON.parse(faveData)
    //         faveData.push(faveitem)
    //         let obj = JSON.stringify(faveData)
    //         localStorage.setItem('faveData', obj)
    //     }

    //     localStorage.setItem('faveData', typeof faveitem)

    // }

    // handleClick = (categoryTitle) => {
    //     //This is correct, you're setting state BUT this is not sync

    //     let a = localStorage.getItem("data");
    //     if (a === null) {
    //         console.log("R---------------------------- 111111 ")

    //         let r = []
    //         r.push(categoryTitle)
    //         console.log("R----------------------------  ", r)
    //         let obj = JSON.stringify(r)
    //         localStorage.setItem("data", obj)

    //     } else {
    //         console.log("R---------------------------- 2222222222222 ")

    //         let Data = JSON.parse(a)
    //         Data.push(categoryTitle)
    //         let obj = JSON.stringify(Data)
    //         localStorage.setItem("data", obj)
    //     }

    //     console.log("A localStorage  ", typeof a)
    //     this.setState({
    //         categoryTitle: categoryTitle

    //     }, () => {
    //         /*
    //            Add state to the array
    //            This callback will be called once the async state update has succeeded
    //            So accessing state in this variable will be correct.
    //         */
    //         this.pushToCategoryArray()
    //     })
    // }
    handleClick(e, beers) {
        // console.log('------- get', beers)
        this.props.faves(beers)
    }


    render() {
        // console.log('props', this.props)
        let {
            data: { beers }
        } = this.props
        // console.log('props in card', this.props.data.image_url)
        return (
            <div className="card-deck" >
                <div className="card" >
                    <div className="card-img-top" style={{ width: "300px", height: "300px" }
                    }>
                        <img src={this.props.data.image_url} style={{ maxWidth: "100%", height: "100%", paddingTop: '1rem' }} />
                    </div >
                    <div className="card-body" style={{ width: "300px", height: "300px" }} >
                        <h1 className="card-title" > {this.props.data.name}</h1 >
                        <h3 className="card-text" > alc / vol : {this.props.data.abv} </h3 >
                        <h3 className="card-text" > IBU : {this.props.data.ibu} </h3 >
                    </div >
                    <button onClick={(e) => this.handleClick(e, this.props.data)}>
                        <div className="card-footer" >
                            <h4 className="text-muted"> add to fave</h4>
                        </div >
                    </button >
                </div >

            </div >


        )
    }
}
export default CardList

/*
 <button onClick={() => this.handleClick()}>
                        {/*
                    <button onClick={() => this.handleClick(this.props.data)}> */
            //         <div className="card-footer" >
            //         <h4 className="text-muted"> add to fave</h4>
            //     </div>
            // </button>
// * /