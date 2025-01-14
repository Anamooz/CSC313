import './style.css';
import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point.js';
import sourceLayer from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {Circle, Fill, Stroke, Style} from 'ol/style.js';

const home = new Feature({ 
  geometry: new Point([-120.426636, 34.948991]),
});

const family = new Feature({ 
  geometry: new Point([-122.275085, 37.847748]),
});

const friends = new Feature({ 
  geometry: new Point([-120.657349, 35.277016]),
});

const vectorSourceHome = new sourceLayer({
  features: [home]
});

const vectorSourceFamily = new sourceLayer({
  features: [family]
});

const vectorSourceFriends = new sourceLayer({
  features: [friends]
});

const markedVectorLayerHome = new VectorLayer({
  source: vectorSourceHome,
  style: new Style({
    image: new Circle({
      radius: 5,
      fill: new Fill({color: 'red'}),
      stroke: new Stroke({color: 'black', width: 1}),
    }),
  }),
});

const markedVectorLayerFamily = new VectorLayer({
  source: vectorSourceFamily,
  style: new Style({
    image: new Circle({
      radius: 30,
      fill: new Fill({color: 'blue'}),
      stroke: new Stroke({color: 'black', width: 1}),
    }),
  }),
});

const markedVectorLayerFriends = new VectorLayer({
  source: vectorSourceFriends,
  style: new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({color: 'green'}),
      stroke: new Stroke({color: 'black', width: 1}),
    }),
  }),
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-121, 36],
    zoom: 8,
    projection: 'EPSG:4326'
  })
});

map.addLayer(markedVectorLayerHome);
map.addLayer(markedVectorLayerFamily);
map.addLayer(markedVectorLayerFriends);
 

