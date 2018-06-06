import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-redeem-wizard',
  templateUrl: './redeem-wizard.component.html',
  styleUrls: ['./redeem-wizard.component.scss']
})
export class RedeemWizardComponent implements OnInit {
  step: number
  valid_card: boolean
  loading: boolean
  card_serial: string

  constructor() { }

  ngOnInit() {
    this.step = 0
    this.valid_card = false
    this.loading = false
    this.card_serial = ""
  }

  onClickRedeem(e) {
    this.loading = true;
  }


}
