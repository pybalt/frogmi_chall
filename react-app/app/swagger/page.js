"use client";
import { useEffect, useState } from "react";
import "swagger-ui-react/swagger-ui.css";

export default function Api() {
  const [SwaggerUI, setSwaggerUI] = useState(null);

  useEffect(() => {
    import("swagger-ui-react")
      .then((module) => setSwaggerUI(() => module.default))
      .catch((error) =>
        console.error("Failed to load swagger-ui-react", error)
      );
  }, []);

  if (!SwaggerUI) {
    return null;
  }

  return (
    <div className="Swagger">
      <SwaggerUI url="http://localhost:3000/swagger.json" />
    </div>
  );
}
