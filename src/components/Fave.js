import React, { Component } from 'react'

class Fave extends Component {

  // handleClick = () => {
  //   console.log('----- GET CLICK')
  //   his.props.faves()
  // }

  // handleClick = (e) => {
  //   console.log('----- GET CLICK')
  //   // localStorage.setItem('myData', data);
  // }

  // handleClick(e) {
  //   let faveData = localStorage.getItem('faveData')
  //   console.log('faveData', faveData)
  //   if (e === null) {
  //     console.log('1------------------- 1')
  //     let r = []
  //     r.push(e)
  //     console.log('R ------ ', r)
  //     let obj = JSON.stringify(r)
  //     localStorage.setItem("faveData", obj)
  //   } else {

  //     console.log('2------------------- 2')
  //     let faveData = JSON.parse(faveData)
  //     faveData.push(e)
  //     let obj = JSON.stringify(faveData)
  //     localStorage.setItem('faveData', obj)
  //   }

  //   localStorage.setItem('faveData', typeof e)

  // }

  componentDidMount() {
    let getdata = localStorage.getItem('faveData')
    // console.log('dataa !', getdata)
    // console.log('dataa type !', typeof getdata)
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        <div className="card-footer" >
          <h4 className="text-muted"> add to fave</h4>
        </div >
      </button >
    )
  }
}


export default Fave