const PathFinder = (pathname) => {
  const filteredLink = pathname.replace("/", "");
  const capitalizedLink =
    filteredLink.charAt(0).toUpperCase() + filteredLink.slice(1);

  return capitalizedLink;
};

export { PathFinder };
