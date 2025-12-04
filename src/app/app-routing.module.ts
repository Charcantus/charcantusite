import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FuocoComponent } from './fuoco/fuoco.component';
import {VolanteComponent} from "./volante/volante.component";
import {VelenoComponent} from "./veleno/veleno.component";
import {TerraComponent} from "./terra/terra.component";
import {RocciaComponent} from "./roccia/roccia.component";
import {PsicoComponent} from "./psico/psico.component";
import {LottaComponent} from "./lotta/lotta.component";
import {GhiaccioComponent} from "./ghiaccio/ghiaccio.component";
import {ErbaComponent} from "./erba/erba.component";
import {ElettroComponent} from "./elettro/elettro.component";
import {ColeotteroComponent} from "./coleottero/coleottero.component";
import {BuioComponent} from "./buio/buio.component";
import {AcquaComponent} from "./acqua/acqua.component";
import {AcciaioComponent} from "./acciaio/acciaio.component";
import {ProfiloComponent} from "./profilo/profilo.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'vulcano-lontano', component: FuocoComponent },
  { path: 'cielo-ovest', component: VolanteComponent},
  { path: 'palude-di-merda', component: VelenoComponent},
  { path: 'deserto-aperto', component: TerraComponent},
  { path: 'monte-immenso', component: RocciaComponent},
  { path: 'portale', component: PsicoComponent},
  { path: 'dojo-mojo', component: LottaComponent },
  { path: 'polo-est', component: GhiaccioComponent },
  { path: 'prateria-incolta', component: ErbaComponent},
  { path: 'bungalow', component: ElettroComponent},
  { path: 'bosco-opale', component: ColeotteroComponent},
  { path: 'cava-covo', component: BuioComponent},
  { path: 'oceano-guerrafondaio', component: AcquaComponent},
  { path: 'raffineria', component: AcciaioComponent},
  { path: 'profilo', component: ProfiloComponent},
  { path: '**', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
