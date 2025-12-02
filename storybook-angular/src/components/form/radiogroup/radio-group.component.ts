// radio-group.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type RadioGroupSize = 'small' | 'medium' | 'large';
export type RadioGroupOrientation = 'vertical' | 'horizontal';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClasses" role="radiogroup" [attr.aria-label]="ariaLabel">
      <label 
        *ngFor="let option of options" 
        [class]="getLabelClasses(option)">
        <input 
          type="radio"
          [name]="name"
          [value]="option.value"
          [checked]="selectedValue === option.value"
          [disabled]="disabled || option.disabled"
          [class]="radioClasses"
          (change)="onSelectionChange(option.value)"
        />
        <span [class]="labelTextClasses">{{ option.label }}</span>
      </label>
    </div>
  `,
  styles: []
})
export class RadioGroupComponent {
  @Input() options: RadioOption[] = [];
  @Input() selectedValue: string = '';
  @Input() name: string = 'radio-group';
  @Input() disabled: boolean = false;
  @Input() size: RadioGroupSize = 'medium';
  @Input() orientation: RadioGroupOrientation = 'vertical';
  @Input() ariaLabel: string = 'Radio group';
  @Input() className: string = '';
  @Output() valueChange = new EventEmitter<string>();

  // Base classes for the container
  private readonly baseContainerClasses = [
    'flex',
  ];

  // Orientation classes for the container
  private readonly orientationClasses: Record<RadioGroupOrientation, string[]> = {
    vertical: ['flex-col', 'gap-2'],
    horizontal: ['flex-row', 'gap-4', 'flex-wrap'],
  };

  // Base classes for each label
  private readonly baseLabelClasses = [
    'flex',
    'items-center',
    'gap-2',
    'cursor-pointer',
  ];

  // Disabled label classes
  private readonly disabledLabelClasses = [
    'opacity-50',
    'cursor-not-allowed',
  ];

  // Base classes for the radio input
  private readonly baseRadioClasses = [
    'accent-blue-600',
    'dark:accent-blue-400',
    'cursor-pointer',
    'disabled:cursor-not-allowed',
  ];

  // Size classes for the radio input
  private readonly sizeClasses: Record<RadioGroupSize, string[]> = {
    small: ['w-3', 'h-3'],
    medium: ['w-4', 'h-4'],
    large: ['w-5', 'h-5'],
  };

  // Size classes for the label text
  private readonly labelTextSizeClasses: Record<RadioGroupSize, string[]> = {
    small: ['text-sm'],
    medium: ['text-base'],
    large: ['text-lg'],
  };

  get containerClasses(): string {
    return [
      ...this.baseContainerClasses,
      ...this.orientationClasses[this.orientation],
      this.className,
    ]
      .filter(Boolean)
      .join(' ');
  }

  getLabelClasses(option: RadioOption): string {
    const isDisabled = this.disabled || option.disabled;
    return [
      ...this.baseLabelClasses,
      ...(isDisabled ? this.disabledLabelClasses : []),
    ]
      .filter(Boolean)
      .join(' ');
  }

  get radioClasses(): string {
    return [
      ...this.baseRadioClasses,
      ...this.sizeClasses[this.size],
    ]
      .filter(Boolean)
      .join(' ');
  }

  get labelTextClasses(): string {
    return [
      ...this.labelTextSizeClasses[this.size],
      'text-slate-900',
      'dark:text-slate-100',
    ]
      .filter(Boolean)
      .join(' ');
  }

  onSelectionChange(value: string): void {
    if (!this.disabled) {
      this.selectedValue = value;
      this.valueChange.emit(value);
    }
  }
}
