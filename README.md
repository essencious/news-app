## Requirements
* Node >= 8

## Set up
* Include an `.env` file with the following:
```
NEWS_HOST={NEWS API HOST WITH VERSION}
NEWS_API_KEY={API KEY}
port={PORT}
```

## Future Improvements
To keep things simple, I didn't use any transpilers for the server side Node code. If I had more time, I could include Babel to use some of the ES6 features in Node. Error handling could also be improved as I didn't have time to look into the type of errors the API will return.

For the front end part, I kept it simple and selected Bootstrap for the styling and layout. If I had more time, I could look into lazy loading options for images. I could also include the ability for the user to see the search results as they typed. 