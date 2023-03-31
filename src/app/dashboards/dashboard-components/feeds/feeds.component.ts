import { Component } from '@angular/core';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent {
  constructor() {}

  feeds: Object[] = [
    {
      bg: 'bg-light-info',
      icon: 'far fa-bell text-info',
      msg: 'You have 4 pending tasks.',
      time: 'Just Now'
    },
    {
      bg: 'bg-light-success',
      icon: 'ti-server text-success',
      msg: 'New user registered.',
      time: '5 Hours ago'
    },
    {
      bg: 'bg-light-warning',
      icon: 'ti-shopping-cart text-warning',
      msg: 'Server #1 overloaded.',
      time: '2 Hours ago'
    },
    {
      bg: 'bg-light-danger',
      icon: 'ti-user text-danger',
      msg: 'New order received.',
      time: '31 May'
    },
    {
      bg: 'bg-light-inverse',
      icon: 'far fa-bell text-inverse',
      msg: 'New user registered.',
      time: '30 May'
    },
    {
      bg: 'bg-light-info',
      icon: 'far fa-bell text-info',
      msg: 'New Version just arrived.',
      time: 'Just Now'
    },
    {
      bg: 'bg-light-danger',
      icon: 'ti-user text-danger',
      msg: 'New user registered.',
      time: '30 May'
    },
    {
      bg: 'bg-light-inverse',
      icon: 'far fa-bell text-inverse',
      msg: 'New Version just arrived.',
      time: '27 May'
    },
    {
      bg: 'bg-light-primary',
      icon: 'ti-settings text-primary',
      msg: 'You have 4 pending tasks.',
      time: '27 May'
    }
  ];
}
