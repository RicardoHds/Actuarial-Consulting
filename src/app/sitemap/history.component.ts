import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';


@Component({
  selector: 'app-actuary',
  template: `
        <div class="col-md-9">
        <div class="col-md-12 padding-without">
            <div class="box-gray-light-img">
                <blockquote class="blockquote-reverse margin-without">
                <p class="title-high">{{ title }}</p>
                </blockquote>
            </div>
        </div>
        <div class="col-md-12 padding-without padding-top-10">
            <img class="img-responsive" [src]=portrait>
        </div>
        <div class="col-md-12 padding-without">
            <div class="padding-top-10">
                <div class="box-gray-light-img text-justify">
                <blockquote class="blockquote-reverse">
                    <p class="title-normal">{{ globals.nameTemplate }}</p>
                    <footer>Founded on January 1st, 1980</footer>
                </blockquote>
                </div>
            </div>
        </div>
        <div class="col-md-12 padding-without">
            <div class="padding-top-10">
                <div class="box-gray-light-img text-center">
                <p>
                    <em><i class="fa fa-quote-left" aria-hidden="true"></i>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </em><i class="fa fa-quote-right" aria-hidden="true"></i>
                </p>
                </div>
            </div>
        </div>
        <div class="col-md-12 padding-without">
            <div class="padding-top-10">
                <div class="box-gray-light-img text-justify">
                <p class="title-normal">What is Lorem Ipsum?</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p class="title-normal">Where does it come from?</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </div>
        </div>
        <div class="col-md-12 padding-without padding-top-10">
            <div class="col-md-12 padding-without">
            <div class="col-md-6 padding-sm-0"
                *ngFor="let objetive of objetives; let last = last; let first = first;"
                [class.padding-sm10]="last"
                [class.padding-right-without]="last"
                [class.padding-left-5]="last"
                [class.padding-left-without]="first"
                [class.padding-right-5]="first">
                <div class="col-md-12 box-gray-light-img">
                    <div class="col-md-12 box-blue-title-up font-16">
                        <p class="margin-without text-center">{{ objetive.name }}</p>
                    </div>
                    <div class="col-md-12 box-blue-up text-center">
                        <p class="blue-color">{{ objetive.description }}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-md-12 padding-without">
            <div class="padding-top-10">
                <div class="box-gray-light-img box-list-accordion">
                <div class="panel-group">
                    <div class="panel panel-default title-panel-accordion">
                        <div class="panel-heading title-panel-back">
                            <h4 class="panel-title title-high-18-white text-center">
                                <span class="list-group-item">Attributes of the Company</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="panel-group" *ngFor="let attribute of attributes"  [id]=attribute.accordion>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title blue-color">
                                <a class="list-group-item"
                                    href="#{{attribute.id}}"
                                    data-toggle="collapse"
                                    [attr.data-parent]="'#'+attribute.accordion"
                                    [attr.aria-expanded]="true"
                                    (click)="direction(attribute.arial, attribute.attr)">
                                    {{ attribute.name }}
                                    <span class="pull-right">
                                        <i aria-hidden="true" class="fa"
                                            [class.fa-sort-up]="attribute.arial === true"
                                            [class.fa-sort-down]="attribute.arial === false">
                                        </i>
                                    </span>
                                </a>
                            </h4>
                        </div>
                        <div [id]=attribute.id class="panel-collapse collapse in">
                            <div class="panel-body text-justify">
                            <p>{{ attribute.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>`,
  providers: [ Globals ]
})
export class HisotryComponent implements OnInit {
  title: string = 'History';
  portrait: string = '../assets/images/history.jpg';


  objetives = [
    {
        name: 'MISSION',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        name: 'VISSION',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    }
  ];

  attributes = [
    {
        attr: 0,
        id: 'Collapse-1',
        arial: true,
        accordion: 'accordion-1',
        name: 'Reliability',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        attr: 1,
        id: 'Collapse-2',
        arial: true,
        accordion: 'accordion-2',
        name: 'Integrity',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        attr: 2,
        id: 'Collapse-3',
        arial: true,
        accordion: 'accordion-3',
        name: 'Professionalism',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        attr: 3,
        id: 'Collapse-4',
        arial: true,
        accordion: 'accordion-4',
        name: 'Social Commitment',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        attr: 4,
        id: 'Collapse-5',
        arial: true,
        accordion: 'accordion-5',
        name: 'Customer Focused',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        attr: 5,
        id: 'Collapse-6',
        arial: true,
        accordion: 'accordion-6',
        name: 'High Leve of Demand',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    },
    {
        attr: 6,
        id: 'Collapse-7',
        arial: true,
        accordion: 'accordion-7',
        name: 'Innovation',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
    }
  ];

  constructor(private globals: Globals) {  }

    ngOnInit() {

    }

    direction(aria, id) {
        if (aria === true) {
            this.attributes[id].arial = false;
        } else {
            this.attributes[id].arial = true;
        }
    }

}
