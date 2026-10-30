import type { Root } from "chat";

export interface LarkTextPart {
  text: string;
  literal: boolean;
}

type LarkRootData = NonNullable<Root["data"]> & {
  atlasDotsLarkParts?: LarkTextPart[];
};

export function setLarkTextParts(root: Root, parts: LarkTextPart[]): void {
  const data: LarkRootData = { ...root.data, atlasDotsLarkParts: parts };
  root.data = data;
}

export function getLarkTextParts(root: Root): LarkTextPart[] | undefined {
  const data = root.data as { atlasDotsLarkParts?: unknown } | undefined;
  const parts = data?.atlasDotsLarkParts;
  if (
    Array.isArray(parts) &&
    parts.every(
      (part): part is LarkTextPart =>
        part != null &&
        typeof part === "object" &&
        typeof part.text === "string" &&
        typeof part.literal === "boolean",
    )
  ) {
    return parts;
  }
  return undefined;
}
