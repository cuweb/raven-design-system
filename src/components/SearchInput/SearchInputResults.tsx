import { useLinkContext } from '../LinkProvider/useLinkContext';

export interface SearchResultItem {
    id: string | number;
    title: string;
    url: string;
    [key: string]: string | number;
}

export interface SearchInputResultsProps {
    resultsData: SearchResultItem[];
}

export const SearchInputResults = ({ resultsData }: SearchInputResultsProps) => {
    const LinkComponent = useLinkContext();

    if (!resultsData.length) return null;

    return (
        <ul className="cu-search-input__results-list">
            {resultsData.map((record) => (
                <li key={record.id} className="cu-search-input__results-item">
                    <LinkComponent
                        href={String(record.url)}
                        className="cu-search-input__results-link"
                    >
                        {record.title}
                    </LinkComponent>
                </li>
            ))}
        </ul>
    );
};

SearchInputResults.displayName = 'SearchInput.Results';
