### Notes

 * The program will take any input file with a syntax like given `discography.txt`
 * It accepts an artist name which will be used to name the trello board
 * All the tasks are performed serially. I know they could be performed in parallel and this could be faster, but since the number of albums are unknown, I decided to implement it serially to avoid concurrent request limits in trello / spotify APIs. 

### Usage

To install project dependencies and run the exercise using example `discography.txt` data use:

```sh
npm install
npm start
```

### Configuration

Create `config.json` file with trello and spotify authentication information. Use `configTemplate.json` as a template:

```json
{
  "trello": {
    "key": "FILL_ME",
    "token": "FILL_ME"
  },
  "spotify": {
    "id": "FILL_ME",
    "secret": "FILL_ME"
  }
}
```

### Result

After execution a trello board like the following should be created: 

![Resulting trello board example](trello_screenshot.png)