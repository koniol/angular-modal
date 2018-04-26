import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ModalService} from './modal.service';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit {

  constructor(private elementRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private modalService: ModalService) {
  }

  @Input() set auModalOpenOnClick(element: HTMLBaseElement[]) {
    element.forEach(ele => {
      ele.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.elementRef)
      });
    });
  }


  ngOnInit() {
    // console.log(this.auModalOpenOnClick);
  }

}
