import type { LoaderFunctionArgs } from "react-router";

export let triggerAddToCart : boolean = false;

export const changeTriggerAddToCart = (value: boolean) => {
  triggerAddToCart = value;
}

interface Variant {
  id: string;
  name: string;
  price: number;
  offerPrice: number;
  [key: string]: any;
}

interface ProductItem {
  id: string;
  name: string;
  variants: Variant[];
  oneImg: string;
  variantMatrix: {
    [key: string]: string[];
  };
  variantTypes: string[];
  [key: string]: any;
}

export async function mobileViewLoader({ request }: LoaderFunctionArgs) {
  const base_url = process.env.VITE_BASE_URL;
  const brand_id = process.env.VITE_BRAND_ID;

  const cookie = request.headers.get("cookie");
  const sessionPresent = cookie?.split("=")[1];
  let sessionId = sessionPresent;

  if (!sessionPresent) {
    const [sessionRes] = await Promise.all([
      fetch(`${base_url}/store/${brand_id}/init`, {
        method: "POST",
      })
    ])
    const sessionData = await sessionRes.json();
    sessionId = sessionData.session;
  }

  console.log("session id - ", sessionId);

  const [cartRes, productRes] = await Promise.all([
    fetch(`${base_url}/store/${brand_id}/cart/full`, {
      headers: { session: sessionId ?? "" },
    }),
    fetch(`${base_url}/store/${brand_id}/categories/61b122e4-6d41-44f1-9a15-f8c3988b1710/products`, {
      headers: { session: sessionId ?? "" },
    }),
  ]);

  const cart = await cartRes.json();
  const products: ProductItem[] = await productRes.json();
  console.log("cart length - ", cart.cart);

  const selectedVariants: Record<string, Variant> = {};
  products.forEach((product) => {
    if (product.variants && product.variants.length > 0) {
      selectedVariants[product.id] = product.variants[0];
    }
  });

  return {
    cartItems: cart.cart?.items || [],
    cartLength: cart.cart?.items?.length || 0,
    products,
    selectedVariants,
    sessionId,
  };
}

export const fetchCartAfterAddingItem = async (base_url: string, brand_id: string, sessionId: string) => {
  const res = await fetch(`${base_url}/store/${brand_id}/cart/full`, {
    headers: { session: sessionId },
  });
  const data = await res.json();
  return data;
}