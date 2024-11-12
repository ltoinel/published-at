# published-at
A simple JS script to show since how long ago a post has been published.
Usefull for Ghost CMS if you use a caching system like Cloudflare.

Exemple of use with Ghost CMS : 
```
	<time datetime="{{date format="YYYY-MM-DD"}}" class="published-at" data-published-at="{{date published_at format="YYYY-MM-DDTHH:mm:ss"}}"></time>
```
