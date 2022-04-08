// definicao da classe em ts
// export deixa a classe visivel para outras classes(semelhante ao public das classes Java)

import { Component } from "@angular/core";

//Anotações são metadados e servem para fazer configuração
//() chama o construtor do componente e passa como parametro o objeto JSON de configurações
@Component({
    selector: 'ola-angular', // nome que o componente vai ter para poder ser usado no template
    //template: '<p>Olá, {{framework}}</p>', // tudo que ira aparecer visualmente no componente
    templateUrl: './ola-angular.component.html', // caminho para um template externo
    styleUrls: ['./ola-angular.component.css']
})
export class OlaAngularComponent{
    framework = 'React'
}