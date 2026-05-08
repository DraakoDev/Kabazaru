import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export const VistaVendedor = () => {
  let navigate = useNavigate()
  useEffect(() => {
    const nose = async () => {
      try {
        const response = await fetch("http://localhost:3000/seller", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(Cookies.get("access_token")),
        });
        const data = await response.json();
        if ( data.session === 'non-active') navigate('/login')
        console.log(await response.json());
      } catch (error) {
        console.log("No fue posible solicitar acceso", error.message);
      }
    };
    nose()
  }, []);

  return <h1>Hola Esta es la vista de un vendedor</h1>;
};
