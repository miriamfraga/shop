import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBonsaiComponent } from './detail-bonsai.component';

describe('DetailBonsaiComponent', () => {
  let component: DetailBonsaiComponent;
  let fixture: ComponentFixture<DetailBonsaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBonsaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBonsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
