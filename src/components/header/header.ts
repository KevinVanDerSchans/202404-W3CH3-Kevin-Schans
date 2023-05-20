import {Component} from '../component';
import './header.css';

export class Header extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `
    <header>
      <h1 class="title">Our favourite Pet List</h1>
      <span class="sub-title" >Schans Edition</span>
    </header>
    `;
	}
}
