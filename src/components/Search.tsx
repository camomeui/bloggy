import Fuse from "fuse.js";
import { TextInput } from "@camome/core/TextInput";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import Card from "@components/Card";
import slugify from "@utils/slugify";
import type { BlogFrontmatter } from "@content/_schemas";
import { TextInputGroup } from "@camome/core/TextInputGroup";
import styles from "./Search.module.scss";
import clsx from "clsx";

export type SearchItem = {
  title: string;
  description: string;
  data: BlogFrontmatter;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["title", "description"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    // if URL has search query,
    // insert that search query in input field
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    // put focus cursor at the end of the string
    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    // Add search result only if
    // input value is more than one character
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    // Update search string in URL
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <div className={clsx(styles.container, "stack-6")}>
      <TextInputGroup
        startDecorator={<IconSearch />}
        input={
          <TextInput
            type="search"
            placeholder="Search"
            fill
            value={inputVal}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            ref={inputRef}
          />
        }
        className={styles["input-group"]}
      />

      {inputVal.length > 1 && (
        <div className="">
          Found {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " result"
            : " results"}{" "}
          for "{inputVal}"
        </div>
      )}

      <ul className="stack">
        {searchResults &&
          searchResults.map(({ item, refIndex }) => (
            <Card
              href={`/posts/${slugify(item.data)}`}
              frontmatter={item.data}
              key={`${refIndex}-${slugify(item.data)}`}
            />
          ))}
      </ul>
    </div>
  );
}
