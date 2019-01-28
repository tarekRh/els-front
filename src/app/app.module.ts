import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SalariesComponent } from "./features/salaries/salaries.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, SalariesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
