import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return Component();
}

function Component() {
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
          <div className="grid grid-cols-3 p-4 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            <div>Earthquake in the Last 30 Days</div>
            <div className="hidden sm:flex">San Francisco, CA</div>
            <div className="hidden sm:flex">4.5</div>
            <div className="hidden sm:flex">2024-03-01 08:00</div>
            <div className="hidden sm:flex">No</div>
            <div className="hidden sm:flex">Mw</div>
            <div className="hidden sm:flex">
              <Link className="underline" href="#">
                View on USGS
              </Link>
            </div>
            <div className="hidden sm:flex">37.7749° N</div>
            <div className="hidden sm:flex">122.4194° W</div>
            <Button
              className="rounded-full gap-0 ml-auto"
              size="sm"
              variant="outline"
            >
              View comments
            </Button>
          </div>
          <div className="grid grid-cols-3 p-4 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
            <div>Earthquake in the Last 30 Days</div>
            <div className="hidden sm:flex">Los Angeles, CA</div>
            <div className="hidden sm:flex">5.2</div>
            <div className="hidden sm:flex">2024-03-15 14:30</div>
            <div className="hidden sm:flex">Yes</div>
            <div className="hidden sm:flex">Mw</div>
            <div className="hidden sm:flex">
              <Link className="underline" href="#">
                View on USGS
              </Link>
            </div>
            <div className="hidden sm:flex">34.0522° N</div>
            <div className="hidden sm:flex">118.2437° W</div>
            <Button
              className="rounded-full gap-0 ml-auto"
              size="sm"
              variant="outline"
            >
              View comments
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
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
