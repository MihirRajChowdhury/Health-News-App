import NewsItem from "./NewsItem";

//  A function used to bookmark the articles which will then be stored in the local storage for the articles to be fetched

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
  