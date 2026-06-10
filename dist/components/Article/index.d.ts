import React from 'react';

interface ArticleProps {
    children?: React.ReactNode;
    content?: string;
}
declare const Article: ({ children, content }: ArticleProps) => React.JSX.Element;

export { Article };
