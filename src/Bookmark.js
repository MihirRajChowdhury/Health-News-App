import NewsItem from "./NewsItem";

function Bookmark() {
    const bookmarks = Object.keys(localStorage).map(key =>
      JSON.parse(localStorage.getItem(key))
    );
  
    return (
      <div>
        {bookmarks.map(bookmark => (
          <NewsItem key={bookmark.url} article={bookmark} />
        ))}
      </div>
    );
  }
  
  export default Bookmark;
  