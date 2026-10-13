import { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icon/Icon';
import { SearchInputResults } from './SearchInputResults';
import './styles.scss';

export interface SearchInputProps {
    value?: string;
    callback?: (value: string) => void;
    placeholder?: string;
    children?: React.ReactNode;
}

const SearchInputWrapper = ({
    value,
    callback,
    placeholder = 'Search',
    children,
}: SearchInputProps) => {
    const [internalValue, setInternalValue] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (value === undefined) {
            setInternalValue(newValue);
        }
        setOpen(newValue.length > 0);
        callback?.(newValue);
    };

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
                    value={value ?? internalValue}
                />
            </div>
            {open && children}
        </div>
    );
};

export const SearchInput = Object.assign(SearchInputWrapper, {
    Results: SearchInputResults,
});

SearchInputWrapper.displayName = 'SearchInput';
