/**
 * Created by Андрей on 25.05.2016.
 */
import 'todomvc-app-css/index.css';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/Header';

ReactDOM.render(<Provider store={store}><Header/></Provider>, document.getElementById('container'));

