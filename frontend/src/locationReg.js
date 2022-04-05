export const locationRegex = (location) => {
  switch (lcoation) {
    case "경북":
      return "경북|경상북도";
    case "경남":
      return "경남|경상남도";
    case "전북":
      return "전북|전라북도";
    case "전남":
      return "전남|전라남도";
    default:
      return location;
  }
};
