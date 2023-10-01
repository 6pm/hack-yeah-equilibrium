// Function to generate a random irregular polygon
export const generateRandomPolygon = (
  center: number[],
  numVertices = 10,
  maxOffset = 0.1
) => {
  let coordinates = [];
  for (let i = 0; i < numVertices; i++) {
    let offsetLat = (Math.random() - 0.5) * maxOffset;
    let offsetLng = (Math.random() - 0.5) * maxOffset;
    coordinates.push([center[0] + offsetLng, center[1] + offsetLat]);
  }
  coordinates.push(coordinates[0]); // Close the polygon
  return coordinates;
};
