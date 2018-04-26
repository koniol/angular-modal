import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuModalComponent} from './au-modal.component';
import {AuModalOpenOnClickDirective} from './au-modal-open-on-click.directive';
import {ModalService} from './modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuModalComponent, AuModalOpenOnClickDirective],
  exports: [AuModalComponent, AuModalOpenOnClickDirective]
})
export class AuModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuModalModule,
      providers: [ModalService]
    };
  }

}
