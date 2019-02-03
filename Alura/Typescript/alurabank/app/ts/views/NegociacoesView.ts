import { View } from "./View";
import { ListaNegociacoes } from "../models/ListaNegociacoes";

//namespace Views {
    export class NegociacoesView extends View<ListaNegociacoes> {

        template(model: ListaNegociacoes): string {
            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody id="result">
                    ${
                model.paraArray().map(n => `
                        <tr>
                            <td>${n.data.getDate()}/${n.data.getMonth() + 1}/${n.data.getFullYear()}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfoot>
                </tfoot>
            </table>      
            <script>alert('hahaha')</script>  
        `;
        }
    }
// }