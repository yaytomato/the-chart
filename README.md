# Objective

Create a website that displays Top 100 albums chart in a modern and sleek manner.

### Design references

* [Color theme reference](https://www.behance.net/gallery/110856055/Florensans-Typeface?tracking_source=search_projects_recommended%7Cmodern)
* Main colors: white(#fefcfe), gray(#beb9bc), mint(#739c8f)

# To-dos

 [x] Analyse JSON api structure
 [x] Draw out simple layout mockups
 [x] Pick a design concept
 [x] List out to-dos

 [x] Create next app
 [x] Enable TypeScript
 [x] Add tailwindcss for styling
 [x] Create basic page/component structure
 [x] Implement `<AlbumThumbnail>`
 [x] Add swr for caching/data-depulication of fetched data
 [x] Add axios
 [x] Create `useTop100Chart` swr hook and use it
 [x] Implement /albums/[rank] page
 [x] Create `useAlbum(rank)` swr hook and use it
 [x] Implement several sort options
 [ ] Implement searching
 [ ] Implement navbar

 [ ] Make container responsive

# Used libraries

* tailwindcss
* swr
* axios

# Notes

* Given API query returns only 99 top ranked albums
So I updated the url from https://itunes.apple.com/us/rss/topalbums/limit=100/json to https://itunes.apple.com/us/rss/topalbums/limit=101/json