import React from 'react';

export default class SearchHistory extends React.Component {

render() {
const { historyList } = this.props;
return (  

<div className='border-primary'>
 <div className='card-header bg-primary text-white'>Search History</div>
  <div className='card-body'>
  
    <div className='table-responsve'>
    <table className='table table-sm table-hover'>
    <tbody className='bg-white'>
        {
        historyList.map((list,index) => (
            <tr key={index}>  
            <td style={{ width:100}} placeholder='Name'>{ list.name }</td>
            <td style={{ fontSize:12, textAlign:"right" }} placeholder='time'>Date: { list.date } <br/> Time: { list.time }</td>
            </tr>
        ))
        }
    </tbody> 
    </table>
    </div>
    </div>
  </div>
    );
  }
}