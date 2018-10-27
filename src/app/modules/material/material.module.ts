import { NgModule } from '@angular/core';
import { MatInputModule, MatGridListModule, MatToolbarModule, MatButtonModule,
         MatSidenavModule, MatIconModule, MatListModule
        } from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
})
export class MaterialModule { }
