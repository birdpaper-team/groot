import { v4 as uuidv4 } from "uuid";

export const getUuid = () => {
  return uuidv4();
};

export const isArray = (obj: unknown) => {
  return obj && typeof obj === "object" && obj.propertyIsEnumerable(length);
};
