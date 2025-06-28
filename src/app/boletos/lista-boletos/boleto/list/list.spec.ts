import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoListComponent } from './list';

describe('List', () => {
  let component: BoletoListComponent;
  let fixture: ComponentFixture<BoletoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
