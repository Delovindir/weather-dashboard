import { screen } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';

export async function searchForCity(user: UserEvent, cityName: string) {
  const input = screen.getByRole('textbox', { name: /city/i });
  const button = screen.getByRole('button', { name: /search/i });

  await user.clear(input);
  await user.type(input, cityName);
  await user.click(button);
}