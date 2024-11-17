import { Component } from '@angular/core';

@Component({
  selector: 'app-central-process',
  templateUrl: './central-process.component.html',
  styleUrl: './central-process.component.css'
})
export class CentralProcessComponent {
  sectionDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.';

  steps = [
    {
      number: 1,
      title: 'Come In Contact',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!'
    },
    {
      number: 2,
      title: 'Choose A Car',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!'
    },
    {
      number: 3,
      title: 'Enjoy Driving',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!'
    }
  ];
}
