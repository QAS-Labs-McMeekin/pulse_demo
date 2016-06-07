import { Component } from 'angular2/core';

@Component({
  selector: 'todos',
  template: `
    <div class="ui vertical masthead center aligned segment">
      <div class="ui container">
        <div class="ui text container">
          <h1 class="ui header">
            {{ greeting }} QualityJam!
          </h1>
          <br/>
          <button class="ui inverted big blue button">Click Me!</button>
          <br/><br/><br/>
            <img class="ui centered big image" src="/img/Labs-Logo.jpg">
          <br/><br/>
          <h3>
            version 0.0.3
          </h3>
        </div>
      </div>
    </div>
  `
})
export class Todos {
  private greeting: string;
  private greetings: Arrays<string>;

  constructor() {
    this.greeting = "Hello";
    this.greetings = new Arrays<string>();

    let vals = [ this.greeting, "Hola", "Gutten Tag", "Bonjour", "Ciao", "Namaste", "Salaam" ];

    for (let v of vals) {
      this.greetings.push(v);
    }
  }

  randomGreeting() {
    this.greeting = this.greetings.randomElement();
  }
}

class Arrays<T> extends Array<T> {
  randomElement() {
    return this[Math.floor(Math.random() * this.length)];
  }
}
