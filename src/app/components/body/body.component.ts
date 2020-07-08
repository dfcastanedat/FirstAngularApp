import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    phrase: any = {
        msg: "Luis Alejandro Higuarán Serrano",
        author: "1997-Presente"
    }

    iwiPhrases: string[] = [
        "Pscilagoom",
        "Relamidas",
        "Espados",
        "Dumble",
        "Limón Park",
        "Jugo de Mors",
        "Bibo Esperazn"
    ]

    showCard: boolean = true
}