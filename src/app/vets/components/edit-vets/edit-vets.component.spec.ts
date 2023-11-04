import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVetsComponent } from './edit-vets.component';

describe('EditVetsComponent', () => {
  let component: EditVetsComponent;
  let fixture: ComponentFixture<EditVetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditVetsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
////////////////////////////////////////

  it('testing fuction', () => {
    expect(component.update());
  })

  it('testing function', () => {
    expect(component.editForm);
  })
});
