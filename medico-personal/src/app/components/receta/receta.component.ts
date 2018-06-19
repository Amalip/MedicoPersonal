import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { FarmaciaService } from '../../services/farmacia.service';
import { Medicina } from '../../models/medicina.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Orden } from '../../models/orden.models';
import { ordenResponse } from '../../models/ordenResponse.models';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  form: FormGroup;
  id: number; 
  medicinas: Medicina[] = [];  
  code = ''; 
  orden: Orden;

  constructor(private ordenService: OrdenService, 
  private farmaciaService: FarmaciaService,
  private fb: FormBuilder) {

   }

  ngOnInit() {
    this.form = this.fb.group({
      idProducto: new FormControl(1),
      cantidad: new FormControl(1)
    });
  }

  get idProducto(){
    return this.form.get('slctMedicina');
  }

  get cantidad(){
    return this.form.get('cantidad');
  }

  getMedicinas(){
    this.medicinas = this.farmaciaService.getMedicinas(); 
  }

  createPedido(){
    this.code = ''; 
    const pedido = new ordenResponse()
    pedido.id_Customer = 2; 
    pedido.id_Product = this.idProducto.value;
    pedido.quantity = this.cantidad.value; 
    console.log(pedido);  

    this.ordenService.createOrden(pedido).subscribe((orden:Orden)=>{
      this.orden = orden; 
      if(this.orden.httpStatusCode == 200)
        this.code = 'ok';
      else
      this.code = 'error';  
    });
  }
}
