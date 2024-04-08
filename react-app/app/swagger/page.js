"use client";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function Api() {
  return (
    <div className="Swagger">
      <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
    </div>
  );
}
