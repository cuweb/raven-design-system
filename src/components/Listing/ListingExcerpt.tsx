export interface ListingExcerptProps {
  text?: string;
  hasMore?: boolean;
}

export const ListingExcerpt = ({ text, hasMore }: ListingExcerptProps) => {
  return (
    <p className="cu-listing__excerpt">
      {text && text.length > 170 ? `${text.substring(0, 150)}...` : text}
      {hasMore && <span className="cu-listing__excerpt-more"> More</span>}
    </p>
  );
};

ListingExcerpt.displayName = 'Listing.Excerpt';
