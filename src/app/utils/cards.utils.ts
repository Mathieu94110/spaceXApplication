import { cardStatus } from "interfaces";
import { STATUS_CLASS_MAP } from "@app/constants";

export function getStatusClass(status: cardStatus) {
  return STATUS_CLASS_MAP[status] || 'color-black';
}