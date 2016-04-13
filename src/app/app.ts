import { Component } from 'angular2/core';

@Component({
  selector: 'todos',
  template: `
    <div class="ui vertical masthead center aligned segment">
      <div class="ui container">
        <div class="ui text container">
          <h1 class="ui header">
            Hello QualityJam! 
          </h1>
          
          <br/><br/>
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
export class Todos { }
