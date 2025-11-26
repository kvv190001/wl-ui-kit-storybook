import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass],
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [ngClass]="classes"
    />
  `,
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() disabled = false;

  @Input() variant: 'default' | 'error' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'text' | 'password' | 'search' = 'text';

  get classes() {
    return {
      // base
      'border rounded outline-none w-full': true,

      // disabled
      'bg-gray-100 text-gray-500 cursor-not-allowed': this.disabled,

      // variant
      'border-gray-300': this.variant === 'default',
      'border-red-500': this.variant === 'error',

      // sizes
      'px-2 py-1 text-sm': this.size === 'small',
      'px-3 py-2': this.size === 'medium',
      'px-4 py-3 text-lg': this.size === 'large',
    };
  }
}
