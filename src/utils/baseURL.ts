export function getBaseURL() {
  const enviorment = import.meta.env.MODE;
  let BASE_URL;

  if (enviorment == "development") {
    BASE_URL = "http://localhost:3000";
  } else if (enviorment == "production") {
    BASE_URL = import.meta.env.SITE;
  } else {
    BASE_URL = "http://localhost:3000";
  }

  return BASE_URL;
}
