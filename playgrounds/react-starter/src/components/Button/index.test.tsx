// src/components/Button/index.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Button from './index';

describe('Button Component', () => {
  it('should render the button with the correct text', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('should call onClick handler when button is clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });

  it('should have the correct size classes', () => {
    render(<Button size="sm">Small Button</Button>);
    expect(screen.getByText('Small Button')).toHaveClass('px-3');
    render(<Button size="md">Medium Button</Button>);
    expect(screen.getByText('Medium Button')).toHaveClass('px-4');
    render(<Button size="lg">Large Button</Button>);
    expect(screen.getByText('Large Button')).toHaveClass('px-5');
  });
  it('should have the correct style classes', () => {
    render(<Button styleType="primary">Primary Button</Button>);
    expect(screen.getByText('Primary Button')).toHaveClass('bg-blue-500');
    render(<Button styleType="secondary">Secondary Button</Button>);
    expect(screen.getByText('Secondary Button')).toHaveClass('bg-gray-200');
    render(<Button styleType="success">Success Button</Button>);
    expect(screen.getByText('Success Button')).toHaveClass('bg-green-500');
    render(<Button styleType="danger">Danger Button</Button>);
    expect(screen.getByText('Danger Button')).toHaveClass('bg-red-500');
    render(<Button styleType="warning">Warning Button</Button>);
    expect(screen.getByText('Warning Button')).toHaveClass('bg-yellow-500');
  });

  it('should have extra class when className is passed', () => {
    render(<Button className="test-class">Test Button</Button>);
    expect(screen.getByText('Test Button')).toHaveClass('test-class');
  });

  it('should have submit type when type=submit is passed', () => {
    render(<Button type="submit">Submit Button</Button>);
    expect(screen.getByText('Submit Button')).toHaveAttribute('type', 'submit');
  });
});
