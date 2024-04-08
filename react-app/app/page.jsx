"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFeatures from "./hook";
import RowComponent from "./components/RowComponent";

export default function Home() {
  const { data, loading, error } = useFeatures();
  console.log(data);
  return <Layout loading={loading} data={data}/>;
}

function Layout({loading, data}) {
  return (
    <div key="1" className="px-4 md:px-6 lg:px-8 pb-4 md:pb-8">
      <div className="grid gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight pt-4">
            Earthquakes in the Last 30 Days
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Data provided by the United States Geological Survey
          </p>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <SearchIcon className="w-4 h-4 fill-gray-500" />
            <Input
              className="w-full max-w-md"
              placeholder="Filter"
              type="search"
            />
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden divide-y dark:divide-gray-850">
          <div className="grid grid-cols-3 p-4 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            <div className="font-semibold">Title</div>
            <div className="hidden sm:flex">Location</div>
            <div className="hidden sm:flex">Magnitude</div>
            <div className="hidden sm:flex">Time</div>
            <div className="hidden sm:flex">Tsunami</div>
            <div className="hidden sm:flex">Type</div>
            <div className="hidden sm:flex">URL</div>
            <div className="hidden sm:flex">Latitude</div>
            <div className="hidden sm:flex">Longitude</div>
            <Button
              className="rounded-full gap-0 ml-auto"
              size="sm"
              variant="outline"
            >
              View comments
            </Button>
          </div>
          {console.log(data)}
          {data && data.map((row, index) => (
            <RowComponent
              key={index}
              title={row.attributes.title}
              location={row.attributes.place}
              magnitude={row.attributes.magnitude}
              time={new Date(row.attributes.time).toDateString()}
              tsunami={row.attributes.tsunami ? 'Yes' : 'No'}
              type={row.type}
              url={row.links.external_url}
              latitude={row.attributes.coordinates.latitude}
              longitude={row.attributes.coordinates.longitude}
            />
            ))}
        </div>
        <div className="flex items-end justify-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">1-10 of 1,000</span>
              <Button size="sm" variant="outline">
                Previous
              </Button>
              <Button size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
