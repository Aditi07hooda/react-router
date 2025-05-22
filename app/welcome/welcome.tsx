import { useEffect } from "react";
import MobileView from "../Pages/MobileView";
import Desktop from "../Pages/DesktopView";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { mobileViewLoader } from "~/routes/handleApi";

export async function loader({ request }: LoaderFunctionArgs) {
  const data = await mobileViewLoader({ request } as any);
  return data;
}
const Welcome = () => {
  const loaderData = useLoaderData();
  useEffect(() => {
    document.cookie = `sessionID=${loaderData.sessionId}; path=/; SameSite=Lax;`;
  }, []);
  return (
    <div>
      <div className="md:hidden">
        <MobileView loaderData={loaderData} />
      </div>
      <div className="hidden md:block">
        <Desktop loaderData={loaderData} />
      </div>
    </div>
  );
};

export default Welcome;
