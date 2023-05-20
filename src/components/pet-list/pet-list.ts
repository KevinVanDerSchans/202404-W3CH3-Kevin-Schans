import {Component} from "../component";
import {Pet} from "../../models/pet";
import {getPets} from "../../data/get-pets";

export class List extends Component {
  pets: Pet[];

  constructor(selector: string) {
    super(selector);
    this.pets = getPets();
    this.render();
  }
};
