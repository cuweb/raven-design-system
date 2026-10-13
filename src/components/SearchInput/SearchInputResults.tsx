import { useLinkContext } from '../LinkProvider/useLinkContext';

export interface SearchResultItem {
    id: string | number;
    title: string;
    url: string;
    [key: string]: string | number;
}

export interface SearchResultSelectionItem {
    id: string | number;
    title: string;
    url?: string;
    [key: string]: string | number | undefined;
}

export type SearchInputResultsProps =
    | {
          resultsData: SearchResultSelectionItem[];
          onSelect: (result: SearchResultSelectionItem) => void;
      }
    | {
          resultsData: SearchResultItem[];
          onSelect?: undefined;
      };

export const SearchInputResults = ({ resultsData, onSelect }: SearchInputResultsProps) => {
    const LinkComponent = useLinkContext();

    if (!resultsData.length) return null;

    return (
        <div className="cu-search-input__results">
            <ul className="cu-search-input__results-list">
                {resultsData.map((record) => {
                    const result = onSelect ? (
                        <button
                            type="button"
                            className="cu-search-input__results-button"
                            onClick={() => onSelect(record)}
                        >
                            {record.title}
                        </button>
                    ) : (
                        <LinkComponent
                            href={String(record.url)}
                            className="cu-search-input__results-link"
                        >
                            {record.title}
                        </LinkComponent>
                    );

                    return (
                        <li key={record.id} className="cu-search-input__results-item">
                            {result}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

SearchInputResults.displayName = 'SearchInput.Results';
