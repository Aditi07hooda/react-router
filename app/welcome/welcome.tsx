import React, { useEffect, useState } from 'react'
import MobileView from '../Pages/MobileView'
import Desktop from '../Pages/DesktopView'

const welcome = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const brand_id = import.meta.env.VITE_BRAND_ID;

  const [session, setSession] = useState('')

  const fetchSession = async () => {
    const res = await fetch(`${base_url}/store/${brand_id}/init`,{
        method: 'post'
    });
    const data = await res.json();
    localStorage.setItem("sessionID", data.session);
    setSession(data.session);
    console.log("session set - ", session);
  };

  useEffect(() => {
    fetchSession();
  }, []);
  return (
    <div>
      <div className="md:hidden">
        <MobileView />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </div>
  )
}

export default welcome
