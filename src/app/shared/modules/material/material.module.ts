import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

const MATERIALS = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIALS],
  exports: MATERIALS
})
export class MaterialModule {}
