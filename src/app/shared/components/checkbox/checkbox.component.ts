import { Component, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  @ViewChild('input') inputRef: ElementRef;

  private onChange: any;
  private onTouched: any;

  writeValue(val: any): void {
    const input = this.inputRef.nativeElement as HTMLInputElement;
    input.checked = Boolean(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(): void {
    const input = this.inputRef.nativeElement as HTMLInputElement;
    this.onChange(input.checked);
  }

  onInputBlur(): void {
    this.onTouched();
  }
}
