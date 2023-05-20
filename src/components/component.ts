export abstract class Component {
	template!: string;
	element!: Element;

	constructor(public selector: string) {
	}

	render(position: InsertPosition = 'beforeend') {
		const parentElement = document.querySelector(this.selector);

		if (!parentElement) {
			throw new Error('Invalid selector');
		}

		parentElement.insertAdjacentHTML(position, this.template);
		this.element = parentElement.lastElementChild!;
		return this.element;
	}

	cleanHtml(selector: string) {
		this.element = document.querySelector(selector)!;
		this.element.innerHTML = '';
		return this.element;
	}
}