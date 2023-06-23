import loadable from "@loadable/component";
import React from "react";

export const UploadFile  = loadable(()=>import("./UploadFile"));
export const UploadFiles = loadable(()=>import("./UploadFiles"));
