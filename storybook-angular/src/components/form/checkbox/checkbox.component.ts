import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  template: `
    <label
      class="flex items-center gap-2 cursor-pointer select-none"
      [class.opacity-50]="disabled"
    >
      <input
        type="checkbox"
        class="h-4 w-4 accent-blue-600 dark:accent-blue-400"
        [disabled]="disabled"
        [checked]="checked"
      />

      <span class="text-sm text-gray-800">{{ label }}</span>
    </label>
  `,
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
}
