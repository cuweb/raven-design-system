import { Icon } from '../Icon/Icon';
import './styles.scss';

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    ariaLabel?: string;
}

const buildPageList = (currentPage: number, totalPages: number): (number | '…')[] => {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | '…')[] = [1];

    const windowStart = Math.max(2, currentPage - 1);
    const windowEnd = Math.min(totalPages - 1, currentPage + 1);

    if (windowStart > 2) pages.push('…');

    for (let p = windowStart; p <= windowEnd; p++) {
        pages.push(p);
    }

    if (windowEnd < totalPages - 1) pages.push('…');

    pages.push(totalPages);

    return pages;
};

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    ariaLabel = 'Pagination',
}: PaginationProps) => {
    const pageList = buildPageList(currentPage, totalPages);
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;

    return (
        <nav className="cu-pagination" aria-label={ariaLabel}>
            <ol className="cu-pagination__list">
                <li className="cu-pagination__item">
                    <button
                        className="cu-pagination__button cu-pagination__button--prev"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={isFirst}
                        aria-disabled={isFirst}
                        aria-label="Previous page"
                    >
                        <Icon name="chevron-left" size={16} aria-hidden="true" />
                    </button>
                </li>

                {pageList.map((page, index) =>
                    page === '…' ? (
                        <li key={`ellipsis-${index}`} className="cu-pagination__item">
                            <span className="cu-pagination__ellipsis" aria-hidden="true">
                                …
                            </span>
                        </li>
                    ) : (
                        <li key={page} className="cu-pagination__item">
                            <button
                                className={[
                                    'cu-pagination__button',
                                    page === currentPage
                                        ? 'cu-pagination__button--active'
                                        : undefined,
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() => onPageChange(page)}
                                aria-current={page === currentPage ? 'page' : undefined}
                                aria-label={`Page ${page}`}
                            >
                                {page}
                            </button>
                        </li>
                    ),
                )}

                <li className="cu-pagination__item">
                    <button
                        className="cu-pagination__button cu-pagination__button--next"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={isLast}
                        aria-disabled={isLast}
                        aria-label="Next page"
                    >
                        <Icon name="chevron-right" size={16} aria-hidden="true" />
                    </button>
                </li>
            </ol>
        </nav>
    );
};
