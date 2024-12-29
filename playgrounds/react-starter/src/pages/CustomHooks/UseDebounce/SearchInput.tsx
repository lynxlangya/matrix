import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500); // 500ms 防抖

  useEffect(() => {
    // 当 debouncedQuery 变化时（用户停止输入 500ms 后），发起搜索请求
    if (debouncedQuery) {
      console.log('Search for:', debouncedQuery);
      // do fetch...
    }
  }, [debouncedQuery]);

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Type to search..."
      />
    </>
  );
}

export default SearchInput;
