import { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icon/Icon';
import { SearchInputResults } from './SearchInputResults';
import './styles.scss';

export interface SearchInputProps {
  callback?: (value: string) => void;
  placeholder?: string;
  children?: React.ReactNode;
}

const SearchInputWrapper = ({
  callback = () => {},
  placeholder = 'Search',
  children,
}: SearchInputProps) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setOpen(newValue.length > 0);
  };

  useEffect(() => {
    callback(value);
  }, [value, callback]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="cu-search-input" ref={wrapperRef}>
      <div className="cu-search-input__wrapper">
        <Icon name="magnifying-glass" size={20} className="cu-search-input__icon" />
        <input
          className="cu-search-input__field"
          name="search"
          type="search"
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </div>
      {open && children && <div className="cu-search-input__results">{children}</div>}
    </div>
  );
};

export const SearchInput = Object.assign(SearchInputWrapper, {
  Results: SearchInputResults,
});

SearchInputWrapper.displayName = 'SearchInput';
