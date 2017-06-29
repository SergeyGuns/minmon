import React from 'react'

export default CashList extends React.Component {
  render(){
    let { lists } = this.props
    return(
      <div className='lists'>
        { lists.map((el, index)=> <div key={index} className='lists__list'> {el} </div>)      
      </div>
    )
  }  
}
