const base = import.meta.env.BASE_URL || "/";

export const withBase = (path: string) => {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  if (base === "/") {
    return path;
  }

  return `${base.replace(/\/$/, "")}${path}`;
};
