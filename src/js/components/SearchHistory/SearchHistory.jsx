import React from 'react';

export default class SearchHistory extends React.Component {

render() {
const { historyList } = this.props;
return (  
<div className='panel panel-primary'>
 <div className='panel-heading text-white'>Search History</div>
  <div className='panel-body'>
 </div>
    <table className='table table-sm table-hover'>
    <tbody>
        {
        historyList.map((list,index) => (
            <tr key={index}>  
            <td style={{ width:100}}>{ list.name }</td>
            <td style={{ fontSize:12, textAlign:"right" }}>{ list.date } <br/> { list.time }</td>
            </tr>
        ))
        }
    </tbody> 
    </table>
    </div>
    );
  }
}