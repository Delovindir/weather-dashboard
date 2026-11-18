import { useState } from 'react';

type CitySearchProps = {
  onSearch: (inputValue: string) => void;
};

function CitySearch(props: CitySearchProps) {
  const [inputValue, setInputValue] = useState(''); 

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    props.onSearch(trimmedValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">City</label>
      <input 
        id="city" 
        name="city" 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
}

export { CitySearch };