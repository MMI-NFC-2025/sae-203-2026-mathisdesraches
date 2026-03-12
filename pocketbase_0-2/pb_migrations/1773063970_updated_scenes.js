/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1254289504")

  // remove field
  collection.fields.removeById("text2546593434")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select414761182",
    "maxSelect": 2,
    "name": "Scene",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Scène 1",
      "Scène 2",
      "Scène 3",
      "Scène 4"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1254289504")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2546593434",
    "max": 0,
    "min": 0,
    "name": "nom_de_la_scene",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select414761182")

  return app.save(collection)
})
