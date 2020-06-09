import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NotFound404Component } from './components/not-found404/not-found404.component'

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NotFound404Component
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
