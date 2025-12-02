import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  template: `
    <input
      type="date"
      class="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      [disabled]="disabled"
    />
  `,
})
export class DatepickerComponent {
  @Input() disabled = false;
}
