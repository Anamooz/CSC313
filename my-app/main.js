import './style.css';
import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point.js';
import sourceLayer from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const home = new Feature({ 
  geometry: new Point([-120.426636, 34.948991])
});

const family = new Feature({ 
  geometry: new Point([-122.275085, 37.847748])
});

const friends = new Feature({ 
  geometry: new Point([-120.657349, 35.277016])
});

const vectorSource = new sourceLayer({
  features: [home, family, friends],
});

const markedVectorLayer = new VectorLayer({
  source: vectorSource,
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

map.addLayer(markedVectorLayer);

