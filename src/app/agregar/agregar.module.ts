import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';
import { AgregarPage } from './agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Ensure FormsModule is imported
    ReactiveFormsModule, // Import ReactiveFormsModule if needed
    IonicModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add CUSTOM_ELEMENTS_SCHEMA
})
export class AgregarPageModule {}
