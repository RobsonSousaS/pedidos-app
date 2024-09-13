import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoUpdateComponent } from './pedido-update.component';

describe('PedidoUpdateComponent', () => {
  let component: PedidoUpdateComponent;
  let fixture: ComponentFixture<PedidoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoUpdateComponent]
    });
    fixture = TestBed.createComponent(PedidoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
