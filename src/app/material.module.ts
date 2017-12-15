import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
    imports:[MatButtonModule,MatSliderModule,MatProgressBarModule,MatCheckboxModule],
    exports:[MatButtonModule,MatSliderModule,MatProgressBarModule,MatCheckboxModule]
})

export class MaterialModule{



}