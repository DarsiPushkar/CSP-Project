import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernmethodsComponent } from './modernmethods.component';

describe('ModernmethodsComponent', () => {
  let component: ModernmethodsComponent;
  let fixture: ComponentFixture<ModernmethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModernmethodsComponent]
    });
    fixture = TestBed.createComponent(ModernmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
