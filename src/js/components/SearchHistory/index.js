import SearchHistory from './SearchHistory';
import { connect } from 'react-redux';

function mapStoreToProps(store){
    return{
        historyList: store.history.historyList
    }
}

export default connect(mapStoreToProps)(SearchHistory);