import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLoginPage } from './plogin.page';

describe('PLoginPage', () => {
  let component: PLoginPage;
  let fixture: ComponentFixture<PLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
