import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FuocoComponent } from './fuoco/fuoco.component';
import { AcquaComponent } from './acqua/acqua.component';
import { ErbaComponent } from './erba/erba.component';
import { BuioComponent } from './buio/buio.component';
import { AcciaioComponent } from './acciaio/acciaio.component';
import { PsicoComponent } from './psico/psico.component';
import { ColeotteroComponent } from './coleottero/coleottero.component';
import { LottaComponent } from './lotta/lotta.component';
import { VolanteComponent } from './volante/volante.component';
import { RocciaComponent } from './roccia/roccia.component';
import { VelenoComponent } from './veleno/veleno.component';
import { TerraComponent } from './terra/terra.component';
import { GhiaccioComponent } from './ghiaccio/ghiaccio.component';
import { ElettroComponent } from './elettro/elettro.component';
import { ProfiloComponent } from './profilo/profilo.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FuocoComponent,
    AcquaComponent,
    ErbaComponent,
    BuioComponent,
    AcciaioComponent,
    PsicoComponent,
    ColeotteroComponent,
    LottaComponent,
    VolanteComponent,
    RocciaComponent,
    VelenoComponent,
    TerraComponent,
    GhiaccioComponent,
    ElettroComponent,
    ProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
