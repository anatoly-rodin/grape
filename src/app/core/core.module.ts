import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
