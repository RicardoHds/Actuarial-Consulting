import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';


@Component({
  selector: 'app-actuary',
  template: `
        <div class="col-md-9">
            <div class="col-md-12 padding-without box-actuario">
                <div class="col-md-12  box-gray-light-img">
                    <div class="col-md-4 padding-without">
                        <img class="img-responsive" [src]="globals.logo">
                    </div>
                    <div class="col-md-8">
                        <blockquote class="blockquote-reverse">
                            <p class="title-normal">{{ title }} {{ globals.name }}</p>
                            <footer>Executive President of {{ globals.nameTemplate }}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div class="col-md-12 padding-without box-actuario-description">
                <div class="padding-top-10">
                    <div class="box-gray-light-img text-justify">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.</p>
                        <br><p>This consulting firm currently has several offices in:</p>
                        <ul class="list-city list-none">
                            <li *ngFor="let citi of locations">{{ citi.city }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-12 padding-without box-actuario-description">
                <div class="padding-top-10">
                    <div class="box-gray-light-img text-justify">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 padding-without box-actuario-description">
               <div class="padding-top-10">
                  <div class="col-md-6 padding-left-without padding-right-5 padding-sm0">
                     <div class="col-md-12 box-gray-light-img">
                        <div class="col-md-12 padding-without">
                           <div class="col-md-12 box-blue-title-up font-16">
                              <p class="margin-without text-center">Actuary Hernández is member of</p>
                           </div>
                           <div class="col-md-12 box-blue-up box-182">
                              <ul class="list-none">
                                 <li *ngFor="let uni of unversities">{{ uni.uni }}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 padding-right-without padding-left-5 padding-sm0 padding-sm10">
                     <div class="col-md-12 box-gray-light-img">
                        <div class="col-md-12 padding-without">
                           <div class="col-md-12 box-blue-title-up font-16">
                              <p class="margin-without text-center">Courses</p>
                           </div>
                           <div class="col-md-12 box-blue-up box-182">
                              <ul class="list-none">
                                 <li *ngFor="let course of courses">{{ course.course }}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-12 padding-without box-actuario-description">
               <div class="padding-top-10">
                  <div class="col-md-12 box-gray-light-img">
                     <div class="col-md-12 padding-without">
                        <div class="col-md-12 box-blue-title-up font-16">
                           <p class="margin-without text-center">Ricardo Hernández is currently advisor of</p>
                        </div>
                        <div class="col-md-12 box-blue-up">
                           <ul class="list-none">
                              <li *ngFor="let loc of advisor">{{ loc.name }}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>`,
  providers: [ Globals ]
})
export class ActuaryComponent implements OnInit {
  title: string = 'Actuary';

  locations = [
      { city: 'Saltillo, Coahuila' },
      { city: 'Ciudad de México' },
      { city: 'Guadalajara, Jalisco' },
      { city: 'San Luis Potosi' },
      { city: 'Puebla' }
  ];

  unversities = [
    { uni: 'Unversidad Castilla La Mancha' },
    { uni: 'Universidad Autonoma de Nuevo Leon' },
    { uni: 'Harvard University' }
  ];

  courses = [
      {course: 'Angular Js'},
      {couse: 'Node Js'},
      {course: 'NPM Best Practices'}
  ];

  advisor = [
    { name: 'Banco de México' },
    { name: 'Sindicato Nacional de Trabajadores del Seguro Social (SNTSS)' },
    { name: 'Sindicato Nacional de Trabajadores de la Educación (S.N.T.E.)' },
    { name: 'Secretaría de Educación Pública (SEP)' },
    { name: 'Cámara de Diputados' },
    { name: 'Twenty four State Governments' }
  ];

  constructor(private globals: Globals) {  }

  ngOnInit() {

  }

}
