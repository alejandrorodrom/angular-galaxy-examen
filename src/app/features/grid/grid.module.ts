import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { TableComponent } from './views/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, GridRoutingModule, ReactiveFormsModule],
})
export class GridModule {}
