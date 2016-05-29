//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>What what Hello {{name}}</h2>
    </div>
  `,
  directives: []
})
export class App {
  private name: string;
  constructor() {
    this.name = 'Test Angular2 (Release Candidate!)'
  }
}
