import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriachatComponent } from './criachat.component';

describe('CriachatComponent', () => {
  let component: CriachatComponent;
  let fixture: ComponentFixture<CriachatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriachatComponent]
    });
    fixture = TestBed.createComponent(CriachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
