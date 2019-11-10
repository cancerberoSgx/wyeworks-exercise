curl "https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&key=4942fcdb6b647a8f69a3c5c181f99553&token=305cf22b8e7ca5619492e91770df79da426620d229b5c3f8d0d7471c4ab569a0"
 

### Configuration

Create `config.json` file with trello and spotify authentication information. Use configTemplate.json as a template:

```json
{
  "trello": {
    "key": "FILL_ME",
    "token": "FILL_ME"
  },
  "spotify": {
    "key": "FILL_ME",
    "token": "FILL_ME"
  }
}
```