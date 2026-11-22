import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CitySearch } from './CitySearch';
import { searchForCity } from '../test/helpers/searchForCity.tsx';
import userEvent from '@testing-library/user-event';

function setup() {
  const onSearch = vi.fn();
  render(<CitySearch onSearch={onSearch} />);
  const user = userEvent.setup();

  return { user, onSearch };
}

describe('citySearch', () => {
  it('should render a labelled city input and search button', () => {
   render(<CitySearch onSearch={ vi.fn()} />);
    
   expect(screen.getByRole('textbox', { name: /city/i })).toBeInTheDocument();
   expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should call onSearch once with the entered city', async () => {
    const {user, onSearch} = setup();

    await searchForCity(user, 'Prague');

    expect(onSearch).toHaveBeenCalledOnce();
    expect(onSearch).toHaveBeenCalledWith('Prague');
  });

  it('should not call onSearch when the input is empty', async () => {
    const {user, onSearch} = setup();

    const button = screen.getByRole('button', { name: /search/i });

    await user.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('should not call onSearch when the input contains only whitespace', async () => {
    const {user, onSearch} = setup();
    
    await searchForCity(user, '   ');

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('should trim whitespace before calling onSearch', async () => {
    const {user, onSearch} = setup();
    
    await searchForCity(user, '  Prague  ');

    expect(onSearch).toHaveBeenCalledOnce();
    expect(onSearch).toHaveBeenCalledWith('Prague');
  });
});