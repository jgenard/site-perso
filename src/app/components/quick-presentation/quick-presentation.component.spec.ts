import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPresentationComponent } from './quick-presentation.component';

describe('QuickPresentationComponent', () => {
  let component: QuickPresentationComponent;
  let fixture: ComponentFixture<QuickPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
