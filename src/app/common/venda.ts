import { Cliente } from './cliente';
import { Espetaculo } from './espetaculo';

export class Venda {
    id: number;
    cliente: Cliente;
    Espetaculo: Espetaculo;
    quantidade: number;
    valor: number;
    

}
