'use client';
import React from 'react'
import { Input } from '../ui/input'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const SearchBlog = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('blogName', term);
        } else {
            params.delete('blogName');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <Input
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
        />
    )
}

export default SearchBlog