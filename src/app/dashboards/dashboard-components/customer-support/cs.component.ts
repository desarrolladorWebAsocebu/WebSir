import { Component } from '@angular/core';
@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html'
})
export class CustomerSupportComponent {
  constructor() {}

  recentcomments: Object[] = [
    {
      image: 'assets/images/users/user1.jpg',
      name: 'James Anderson',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. ',
      date: 'April 14, 2016',
      status: 'Pending',
      labelcolor: 'label-light-info'
    },
    {
      image: 'assets/images/users/user2.jpg',
      name: 'Michael Jorden',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. ',
      date: 'April 14, 2016',
      status: 'Approved',
      labelcolor: 'label-light-success'
    },
    {
      image: 'assets/images/users/user4.jpg',
      name: 'Johnathan Doeting',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry. ',
      date: 'April 14, 2016',
      status: 'Rejected',
      labelcolor: 'label-light-danger'
    }
  ];
}
