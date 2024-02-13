import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingExhibitionComponent } from './upcoming-exhibition.component';

describe('UpcomingExhibitionComponent', () => {
  let component: UpcomingExhibitionComponent;
  let fixture: ComponentFixture<UpcomingExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingExhibitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
