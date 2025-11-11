// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="buttonClasses"
      [type]="type"
      [disabled]="disabled"
      (click)="handleClick($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() className: string = '';
  @Output() onClick = new EventEmitter<Event>();

  // Base classes applied to all buttons
  private readonly baseClasses = [
    'font-semibold',
    'border',
    'rounded',
    'shadow-sm',
    'inline-flex',
    'items-center',
    'cursor-pointer',
    'gap-1.5',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'transition-colors',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ];

  // Variant classes
  private readonly variantClasses: Record<ButtonVariant, string[]> = {
    primary: [
      'bg-blue-600',
      'text-white',
      'border-transparent',
      'hover:bg-blue-500',
      'active:bg-blue-400',
      'dark:bg-blue-500',
      'dark:hover:bg-blue-400',
      'dark:active:bg-blue-300',
    ],
    secondary: [
      'bg-white',
      'text-slate-900',
      'border-slate-300',
      'hover:bg-slate-50',
      'active:bg-slate-100',
      'dark:bg-slate-800',
      'dark:text-slate-100',
      'dark:border-slate-700',
      'dark:hover:bg-slate-700',
      'dark:active:bg-slate-600',
    ],
    destructive: [
      'bg-red-600',
      'text-white',
      'border-transparent',
      'hover:bg-red-500',
      'active:bg-red-400',
      'dark:bg-red-500',
      'dark:hover:bg-red-400',
      'dark:active:bg-red-300',
    ],
  };

  // Size classes
  private readonly sizeClasses: Record<ButtonSize, string[]> = {
    small: ['text-sm', 'px-2', 'py-1'],
    medium: ['text-sm', 'px-2.5', 'py-1.5'],
    large: ['text-sm', 'px-3', 'py-2'],
  };

  get buttonClasses(): string {
    return [
      ...this.baseClasses,
      ...this.variantClasses[this.variant],
      ...this.sizeClasses[this.size],
      this.className,
    ]
      .filter(Boolean)
      .join(' ');
  }

  handleClick(event: Event): void {
    if (!this.disabled) {
      this.onClick.emit(event);
    }
  }
}