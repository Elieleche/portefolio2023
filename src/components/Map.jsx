import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  const lyonCoordinates = [4.85, 45.75]; // Coordonnées de Lyon (longitude, latitude)

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      {/* Annotation pour Lyon */}
      <Annotation
        subject={lyonCoordinates} // Utilisation des coordonnées de Lyon
        dx={-0}
        dy={-0}
        connectorProps={{
          stroke: "black",
          strokeWidth: 1,
        }}
      >
        {/* Utilisation d'un groupe pour positionner le cercle et le texte ensemble */}
        <g>
          <circle cx={0} cy={0} r={3} fill="red" />
          <text x={-8} textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Lyon"}
          </text>
        </g>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
