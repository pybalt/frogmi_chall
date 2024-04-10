import RowComponent from "./RowComponent";

export const Table = ({ loading, data }) => {
  return (
    <div className="border rounded-lg overflow-hidden divide-y dark:divide-gray-850">
      <div className="grid grid-cols-3 p-4 items-center gap-4 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
        <div className="font-semibold">Title</div>
        <div className="hidden sm:flex">Location</div>
        <div className="hidden lg:flex">Magnitude</div>
        <div className="hidden sm:flex">Time</div>
        <div className="hidden lg:flex">Tsunami</div>
        <div className="hidden sm:flex">Type</div>
        <div className="hidden sm:flex">URL</div>
        <div className="hidden lg:flex">Latitude</div>
        <div className="hidden lg:flex">Longitude</div>
      </div>
      {!loading &&
        data &&
        data.map((row, index) => (
          <RowComponent
            key={index}
            title={row.attributes.title}
            location={row.attributes.place}
            magnitude={row.attributes.magnitude}
            time={new Date(row.attributes.time).toDateString()}
            tsunami={row.attributes.tsunami ? "Yes" : "No"}
            type={row.attributes.mag_type}
            url={row.links.external_url}
            latitude={row.attributes.coordinates.latitude}
            longitude={row.attributes.coordinates.longitude}
          />
        ))}
    </div>
  );
};
