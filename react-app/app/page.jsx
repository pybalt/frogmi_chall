"use client";
import { Button } from "@/components/ui/button";
import useFeatures from "./hook";

import { useEffect, useState } from "react";
import { FilterBar } from "../components/ui/FilterBar";
import { Table } from "../components/ui/table";

export default function Home() {
  const [pagNumber, setPagNumber] = useState(1);
  const [pagSize, setPagSize] = useState(4);

  const [filter, setFilter] = useState([]);
  const {
    data,
    error,
    loading,
    pagination,
    incrementPageNumber,
    decrementPageNumber,
  } = useFeatures(pagNumber, pagSize, setPagNumber, filter);

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
          <FilterBar setFilter={setFilter} />
        </div>
        {!error && <Table loading={loading} data={data} />}
        <div className="flex items-end justify-center">
          <div className="flex items-center justify-between">
            {pagination && (
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">
                  {Math.min(
                    Math.max(1, pagSize * (pagNumber - 1) + 1),
                    pagination.total
                  )}
                  -{Math.min(pagSize * pagNumber, pagination.total)} of{" "}
                  {pagination.total}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decrementPageNumber}
                >
                  Previous
                </Button>
                <Button size="sm" onClick={incrementPageNumber}>
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
