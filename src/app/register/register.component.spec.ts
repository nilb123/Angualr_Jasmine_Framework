import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should have a div element with class layout', () => {
    const el = fixture.debugElement.query(By.css('div.layout'));
    expect(el).toBeTruthy();
  });


  it('should have a h1 element with class page-title', () => {
    const el = fixture.debugElement.query(By.css('h1.page-title'));
    expect(el).toBeTruthy();
  });

  it('should display Sign Up on the page-title element', () => {
    const el = fixture.debugElement.query(By.css('.page-title'));
    expect(el.nativeElement.innerText).toEqual('Sign Up');
  });

  it('should have a form with class signup-form', () => {
    const el = fixture.debugElement.query(By.css('form.signup-form'));
    expect(el).toBeTruthy();
  });
  
  it('should call the submitForm method when the signup-form is submitted', () => {
    const el = fixture.debugElement.query(By.css('.signup-form'));
    const fnc = spyOn(component, 'submitForm');

    el.triggerEventHandler('ngSubmit', null);

    expect(fnc).toHaveBeenCalled();
  });
 
  
  it('should have a ctrl-row element with class --username', () => {
    const el = fixture.debugElement.query(By.css('.ctrl-row.--username'));
    expect(el).toBeTruthy();
  });
  
  it('should have a label with class ctrl-label for the username field', () => {
    const el = fixture.debugElement.query(By.css('.--username label.ctrl-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('username');
  });
  
  it('should display Username on the label for the username field', () => {
    const el = fixture.debugElement.query(By.css('.--username .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('Username');
  });
  
  it('should have an input element with class ctrl for the username field', () => {
    const el = fixture.debugElement.query(By.css('.--username input.ctrl'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
    expect(el.nativeElement.getAttribute('id')).toEqual('username');
    expect(el.nativeElement.getAttribute('name')).toEqual('username');
    expect(el.nativeElement.getAttribute('autocomplete')).toEqual('off');
  });
  
  it('should bind the username to its FormControl', () => {
    const el = fixture.debugElement.query(By.css('.--username .ctrl'));
    const ctrl = component.registerForm.get('username');

    const dummyValue = '123';
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    expect(el.nativeElement.value).toEqual(dummyValue);
    expect((el.nativeElement as HTMLInputElement).value).toEqual(dummyValue);
  });

  it('should have a ctrl-row element with class --password', () => {
    const el = fixture.debugElement.query(By.css('.ctrl-row.--password'));
    expect(el).toBeTruthy();
  });
  
  it('should have a label with class ctrl-label for the password field', () => {
    const el = fixture.debugElement.query(By.css('.--password label.ctrl-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('password');
  });
  
  it('should display Password on the label for the password field', () => {
    const el = fixture.debugElement.query(By.css('.--password .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('Password');
  });
  
  it('should have an input element with class ctrl for the password field', () => {
    const el = fixture.debugElement.query(By.css('.--password input.ctrl'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('password');
    expect(el.nativeElement.getAttribute('id')).toEqual('password');
    expect(el.nativeElement.getAttribute('name')).toEqual('password');
    expect(el.nativeElement.getAttribute('autocomplete')).toEqual('off');
  });
  
  it('should bind the password to its FormControl', () => {
    const el = fixture.debugElement.query(By.css('.--password .ctrl'));
    const ctrl = component.registerForm.get('password');

    const dummyValue = '123';
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    expect(el.nativeElement.value).toEqual(dummyValue);
  });

  it('should have a ctrl-row element with class --email', () => {
    const el = fixture.debugElement.query(By.css('.ctrl-row.--email'));
    expect(el).toBeTruthy();
  });
  
  it('should have a label with class ctrl-label for the email field', () => {
    const el = fixture.debugElement.query(By.css('.--email label.ctrl-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('email');
  });
  
  it('should display E-mail on the label for the email field', () => {
    const el = fixture.debugElement.query(By.css('.--email .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('E-mail');
  });
  
  it('should have an input element with class ctrl for the email field', () => {
    const el = fixture.debugElement.query(By.css('.--email input.ctrl'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('email');
    expect(el.nativeElement.getAttribute('id')).toEqual('email');
    expect(el.nativeElement.getAttribute('name')).toEqual('email');
    expect(el.nativeElement.getAttribute('autocomplete')).toEqual('off');
  });
  
  it('should bind the email to its FormControl', () => {
    const el = fixture.debugElement.query(By.css('.--email .ctrl'));
    const ctrl = component.registerForm.get('email');

    const dummyValue = 'test@example.com';
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    expect(el.nativeElement.value).toEqual(dummyValue);
  });



  
  it('should have a button with class submit-btn inside the signup-form', () => {
    const el = fixture.debugElement.query(By.css('.signup-form button.submit-btn'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('submit');
  });
 
  it('should display Submit on the submit button', () => {
    const el = fixture.debugElement.query(By.css('.signup-form .submit-btn'));
    expect(el.nativeElement.innerText).toEqual('Submit');
  });
 
  it('should submit the form when the submit button is clicked', () => {
    const btnEl = fixture.debugElement.query(By.css('.submit-btn'));
    const fnc = spyOn(component, 'submitForm');

    (btnEl.nativeElement as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(fnc).toHaveBeenCalled();
  });

  it('should mark username as invalid when it has no value', () => {
    const ctrl = component.registerForm.get('username');

    ctrl.setValue(null);
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });
  
  it('should mark username as valid when it has value', () => {
    const ctrl = component.registerForm.get('username');

    ctrl.setValue('test');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });
  
  it('should mark username as invalid when its value is longer than 10 characters', () => {
    const ctrl = component.registerForm.get('username');

    ctrl.setValue('12345678912345789');
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });
  
  it('should mark username as valid when its value is less than 10 character', () => {
    const ctrl = component.registerForm.get('username');

    ctrl.setValue('123456789');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });

  it('should mark password as invalid when it has no value', () => {
    const ctrl = component.registerForm.get('password');

    ctrl.setValue(null);
    fixture.detectChanges();

    expect(ctrl.invalid).toBeTruthy();
  });
 
  it('should mark password as valid when it has value', () => {
    const ctrl = component.registerForm.get('password');

    ctrl.setValue('test');
    fixture.detectChanges();

    expect(ctrl.valid).toBeTruthy();
  });



it('should mark email as invalid when it has an invalid value', () => {
  const ctrl = component.registerForm.get('email');

  ctrl.setValue('invalid-email');
  fixture.detectChanges();

  expect(ctrl.invalid).toBeTruthy();
});

it('should mark email as valid when it has a valid value', () => {
  const ctrl = component.registerForm.get('email');

  ctrl.setValue('valid@example.com');
  fixture.detectChanges();

  expect(ctrl.valid).toBeTruthy();
});
  
  it('should display alert message when submitForm is called but isFormValid returns false', () => {
    spyOn(component, 'isFormValid').and.returnValue(false);
    const fnc = spyOn(window, 'alert');

    component.submitForm();

    expect(fnc).toHaveBeenCalledWith('Please fill in all fields before submitting the form!');
  });
 
  it('should not display alert message when submitForm is called but isFormValid returns true', () => {
    const dummyData = {
      username: null,
      password: 'test',
      email: 'test@gmail.com',
    };
    component.registerForm.patchValue(dummyData);
    fixture.detectChanges();
    spyOn(component, 'isFormValid').and.returnValue(true);
    spyOn(window, 'confirm');
    const fnc = spyOn(window, 'alert');

    component.submitForm();

    expect(fnc).not.toHaveBeenCalled();
  });
 
  it('should not display registration information when submitForm is called but isFormValid returns false', () => {
    spyOn(component, 'isFormValid').and.returnValue(false);
    const fnc = spyOn(window, 'confirm');

    component.submitForm();

    expect(fnc).not.toHaveBeenCalled();
  });
 
  it('should show registration information when submitForm is called and isFormValid returns true', () => {
    const dummyData = {
      username: 'test',
      password: 'test',
      email: 'test@gmail.com',
    };
    spyOn(component, 'isFormValid').and.returnValue(true);
    const fnc = spyOn(window, 'confirm');
    component.registerForm.patchValue(dummyData);
    fixture.detectChanges();

    component.submitForm();

    const expectedMsg =
    `Your Registration Information:

    Username: ${dummyData.username}
    Password: ******
    E-mail: ${dummyData.email}`;
   
    expect(fnc).toHaveBeenCalledWith(expectedMsg);
  });
 
});
