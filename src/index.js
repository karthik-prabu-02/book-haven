import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
//import App from './project1/app';  //employment database



//book store




//Book
import App from './Book/App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle,faCartShopping, faSearch, faMailBulk,faAddressCard} from '@fortawesome/free-solid-svg-icons';

library.add(fab,faUserCircle, faSearch,faCartShopping,faMailBulk,faAddressCard)

//Book


//book store

const myroot = document.getElementById('root');
const reactRoot= ReactDOM.createRoot(myroot);
reactRoot.render(<App/>);

