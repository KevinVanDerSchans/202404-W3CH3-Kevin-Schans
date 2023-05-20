/* eslint-disable no-new */
import './style.css';
import {Header} from './components/header/header';
import {Main} from './components/main/main';
import {List} from './components/pet-list/pet-list';
import {Footer} from './components/footer/footer';

new Header('#app');
new Main('#app');
new List('main');
new Footer('#app');
