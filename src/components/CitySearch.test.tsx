import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CitySearch } from './CitySearch';
import userEvent from '@testing-library/user-event';

describe('citySearch', () => {
  it('should render a labelled city input and search button', () => {
   render(<CitySearch onSearch={vi.fn()} />);
    
   expect(screen.getByRole('textbox', { name: /city/i })).toBeInTheDocument();
   expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should call onSearch once with the entered city', async () => {
    const onSearch = vi.fn();
    render(<CitySearch onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /city/i });
    const button = screen.getByRole('button', { name: /search/i });

    const user = userEvent.setup(); 

    await user.type(input, 'Prague');
    await user.click(button);

    expect(onSearch).toHaveBeenCalledOnce();
    expect(onSearch).toHaveBeenCalledWith('Prague');
  });

  it('should not call onSearch when the input is empty', async () => {
    const onSearch = vi.fn();
    render(<CitySearch onSearch={onSearch} />);

    const button = screen.getByRole('button', { name: /search/i });

    const user = userEvent.setup();

    await user.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('should not call onSearch when the input contains only whitespace', async () => {
    const onSearch = vi.fn();
    render(<CitySearch onSearch={onSearch} />);
    const input = screen.getByRole('textbox', { name: /city/i });
    const button = screen.getByRole('button', { name: /search/i });
    const user = userEvent.setup();

    await user.type(input, '   ');
    await user.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('should trim whitespace before calling onSearch', async () => {
    const onSearch = vi.fn();
    render(<CitySearch onSearch={onSearch} />);
    const input = screen.getByRole('textbox', { name: /city/i });
    const button = screen.getByRole('button', { name: /search/i });
    const user = userEvent.setup();

    await user.type(input, '  Prague  ');
    await user.click(button);

    expect(onSearch).toHaveBeenCalledOnce();
    expect(onSearch).toHaveBeenCalledWith('Prague');
  });
});