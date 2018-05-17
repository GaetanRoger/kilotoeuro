import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    poids = [
        {
            name: '1 cent',
            value: 0.01,
            poids: 0.00230
        },
        {
            name: '2 cents',
            value: 0.02,
            poids: 0.00306
        },
        {
            name: '5 cents',
            value: 0.05,
            poids: 0.00392
        },
        {
            name: '10 cents',
            value: 0.10,
            poids: 0.00410
        },
        {
            name: '20 cents',
            value: 0.20,
            poids: 0.00574
        },
        {
            name: '50 cents',
            value: 0.50,
            poids: 0.00780
        },
        {
            name: '1 euro',
            value: 1.00,
            poids: 0.00750
        },
        {
            name: '2 euros',
            value: 2.00,
            poids: 0.00850
        },
        {
            name: '5 euros',
            value: 5.00,
            poids: 0.00060
        },
        {
            name: '10 euros',
            value: 10.00,
            poids: 0.00070
        },
        {
            name: '20 euros',
            value: 20.00,
            poids: 0.00080
        },
        {
            name: '50 euros',
            value: 50.00,
            poids: 0.00090
        },
        {
            name: '100 euros',
            value: 100.00,
            poids: 0.00100
        },
        {
            name: '200 euros',
            value: 200.00,
            poids: 0.00110
        },
        {
            name: '500 euros',
            value: 500.00,
            poids: 0.00110
        },
    ];

    monnaieSelectionnee: string;
    poidsEntre = '';

    get monnaies() {
        return this.poids.map(p => p.name);
    }

    get montant() {
        const piece = this.poids.find(p => p.name === this.monnaieSelectionnee);
        if (piece) {
            return  (Number(this.poidsEntre) / piece.poids) * piece.value;
        } else {
            return 0;
        }
    }
}
