export class parentMenu {
    constructor(
      public id: number,
      public title: string,
      public url: string,
      public child: boolean,
      public titleChild: any[]
    ) { }
  }
