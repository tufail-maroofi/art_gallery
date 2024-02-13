import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionHeaderComponent } from './exhibition-header.component';

describe('ExhibitionHeaderComponent', () => {
  let component: ExhibitionHeaderComponent;
  let fixture: ComponentFixture<ExhibitionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhibitionHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExhibitionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
