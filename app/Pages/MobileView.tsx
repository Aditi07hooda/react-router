import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import firstImage from "/images/collection/firstPage.png";
import AddShoppingCart from "/images/collection/AddShoppingCart.png";
import Child from "/images/collection/child.png";
import HealthCrisis from "/images/collection/HealthCrisisMobile.png";
import PageCurveRight from "/images/collection/pageCurveRight.png";
import PageCurveLeft from "/images/collection/pageCurveLeft.png";
import RealFood from "/images/collection/RealFood.png";
import Prd1 from "/images/collection/prd1.png";
import Prd2 from "/images/collection/prd2.png";
import Prd3 from "/images/collection/prd3.png";
import ABoutYourHealth from "/images/collection/AboutYourHealth.png";
import ProductChakkiFreshAtta from "/images/collection/ProductChakkiFreshAtta.png";
import ProductProteinPowerAtta from "/images/collection/productProteinPowerPlant.png";
import P70KgPerson from "/images/collection/70kgPerson.png";
import Bulb from "/images/collection/bulb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CartIconBtn from "../components/CartIconBtn";
import Product from "~/components/Product";
import { useCartStore } from "~/store/cart";

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

interface StateType {
  products: ProductItem[];
  selectedVariants: Record<string, Variant>;
  highlight: boolean;
}

interface MobileViewProps {
  loaderData: {
    products: ProductItem[];
    selectedVariants: Record<string, Variant>;
    cartLength: number;
    sessionId: string;
  };
}

const MobileView: React.FC<MobileViewProps> = ({ loaderData }) => {
  const addToCartRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const setCartLength = useCartStore((state) => state.setCartLength);
  const cartLength = useCartStore((state) => state.cartLength);

  const [state, setState] = useState<StateType>({
    products: loaderData.products,
    selectedVariants: loaderData.selectedVariants,
    highlight: false,
  });

  const handleAddToCart = () => {
    addToCartRef.current?.scrollIntoView({ behavior: "smooth" });

    setState((prev) => ({
      ...prev,
      highlight: true,
    }));

    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        highlight: true,
      }));
    }, 1000);
  };

  useEffect(() => {
    setCartLength(loaderData.cartLength);
  }, []);

  return (
    <>
      <div className="h-full bg-[#FFFBEF] pt-3">
        <div className="flex flex-col justify-between px-3">
          <div className="flex justify-between items-center pb-3">
            <div className="flex gap-5">
              <FaBars className="w-5 h-fit text-[#80011F]" />
              <FaSearch className="w-5 h-fit text-[#80011F]" />
            </div>
            <button
              className="flex cursor-pointer justify-between gap-2 align-middle items-center py-2 px-4 bg-[#80011F] text-white rounded-2xl shadow-2xl font-[NovaRound] font-[400] font-xl tracking-tight"
              onClick={handleAddToCart}
            >
              <img src={AddShoppingCart} className="h-5" />
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col px-3">
            <div className="flex flex-col items-end">
              <p className="font-[chairdrobe-black] z-0 flex flex-wrap font-[900] text-7xl uppercase text-[#80011F] leading-[1] tracking-wide">
                A Legacy of Strength
              </p>
              <p className="font-[UltimaAlt] font-[600] text-lg uppercase tracking-tight flex flex-wrap">
                Your food shapes your family's future.
              </p>
            </div>
            <img src={firstImage} className="flex self-end w-5xl h-full" />
            <p className="font-[AcherusFeral] font-[300] text-lg text-[#80011F] my-5 leading-[1] tracking-tight flex flex-wrap">
              Strength isn’t a one-day effort—it’s built through generations of
              mindful choices.
              <br /> Our millet-based atta delivers clean, sustainable nutrition
              that fuels your body today and protects your health tomorrow.
            </p>
          </div>
        </div>

        <p className="uppercase font-[900] border-y-8 border-[#80011F] text-[#80011F] flex justify-center items-center font-[chairdrobe-black] text-4xl leading-12 tracking-wide">
          Strength for generations
        </p>
        <div className="flex flex-col justify-between py-4">
          <div className="bg-[#80011F] w-full flex flex-col ">
            <p className="font-[ultimaAlt] w-[80%] overflow-visible font-medium text-2xl self-center tracking-tight text-white">
              What if your everyday flour is holding you back?
            </p>
            <div className="flex items-end">
              <img src={Child} className="w-full" />
            </div>
          </div>
          <div className="w-full px-3 flex flex-col justify-around">
            <div className="flex flex-col gap-3">
              <p className="font-[chairdrobe-black] font-black uppercase text-7xl text-[#80011F]">
                The Hidden Health Crisis
              </p>
              <p className="font-[Ubuntu] font-normal text-lg/6 tracking-tight">
                Millions of families unknowingly consume refined flours that
                spike blood sugar, weaken digestion, and leave them sluggish.
                The grain you choose impacts your energy, longevity, and
                well-being. Are you settling for less?
              </p>
            </div>
            <div className="flex justify-between align-middle items-center py-4">
              <p className="font-[Ubuntu] flex font-normal tracking-wide text-xl text-[#80011F]">
                Your daily flour might be silently working against you - causing
                fatigue, sugar spikes, and poor digestion.
              </p>
              <img src={HealthCrisis} />
            </div>
            <p className="font-[Ubuntu] text-center font-normal text-xl/6 tracking-tight">
              It’s time for a smarter choice, one that keeps you strong and
              energized without compromise
            </p>
          </div>
        </div>

        <div className="bg-[#80011F]/50 flex flex-col">
          {/* Text Content */}
          <div
            style={{
              backgroundImage: `url(${PageCurveRight})`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "5em",
              backgroundBlendMode: "multiply",
              backgroundOrigin: "content-box",
              backgroundClip: "content-box",
            }}
            className="z-5 max-w-2xl flex flex-col items-start align-top"
          >
            <div className="p-2">
              <p className="font-[chairdrobe-black] text-white text-[3.5rem] font-extrabold capitalize leading-20">
                DID YOU KNOW?
              </p>
              <p className="font-[Ultima] text-[50px] leading-[44px] text-white mt-2 ">
                More protein <br /> fewer worries
              </p>
              <p className="text-white mt-4 max-w-lg font-[Ubuntu]">
                Protein is the foundation of strength—yet typical flours lack
                it. With 20g of protein per 100g, your everyday meals can now
                fuel better metabolism, muscle health, and sustained energy. No
                artificial additives, no supplements—just nature at its best.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div
            style={{
              backgroundImage: `url(${PageCurveLeft})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100vw",
              backgroundBlendMode: "multiply",
              backgroundOrigin: "content-box",
              backgroundClip: "content-box",
            }}
            className="flex flex-col mt-5"
          >
            <p className="text-white font-[Ubuntu] font-bold text-3xl flex self-center">
              Think before choosing!!!
            </p>
            <div className="flex flex-row mt-4 gap-2 mb-[17em] p-2">
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center px-2 py-4 w-1/2">
                <img
                  src={ProductProteinPowerAtta}
                  alt="Protein Power Atta"
                  className="h-36 object-contain mb-4"
                />
                <h2 className="font-bold text-[16px] font-[Poetsen+One] text-[#80011F]">
                  Protein Power Atta
                </h2>
                <p className="mt-2 text-[#80011F] text-sm">
                  20g protein per 100g
                </p>
                <p className="mt-1 text-[#80011F] font-semibold border-y-2 w-full flex justify-center py-2 text-sm">
                  Diabetic friendly
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg flex flex-col items-center px-2 py-4 w-1/2">
                <img
                  src={ProductChakkiFreshAtta}
                  alt="Protein Power Atta"
                  className="h-36 object-contain mb-4"
                />
                <h2 className="font-bold text-[16px] font-[Poetsen+One] text-[#80011F]">
                  Regular Atta
                </h2>
                <p className="mt-2 text-[#80011F] text-sm">
                  10g protein per 100g
                </p>
                <p className="mt-1 text-[#80011F] font-semibold border-y-2 w-full flex justify-center py-2 text-sm">
                  Not diabetic friendly
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit mb-16 mt-[-8em] space-y-6 px-3">
          <div className="">
            <p className="font-[Russo+One] font-extrabold text-[29px] flex justify-center text-[#80011F]">
              Health Without Sacrifice
            </p>
            <p className="font-[Righteous] font-medium leading-loose text-lg flex justify-center text-[#80011F]">
              A better choice, backed by science.
            </p>
          </div>
          <div className="flex justify-center">
            <table className="mt-6 border-collapse border-4 border-[#80011F]">
              <thead>
                <tr>
                  <th className="text-center py-2 px-4 text-[#80011F] font-semibold text-lg border-3 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Feature
                  </th>
                  <th className="text-center py-2 px-4 text-[#80011F] font-semibold text-lg border-3 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Protein Power Atta
                  </th>
                  <th className="text-center py-2 px-4 text-[#80011F] font-semibold text-lg border-3 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Regular Atta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Protein Content
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    20/100g
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    10/100g
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    GI Level
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Low
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    High
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Dietary Fiber
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    High
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Low
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Processing level
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Natural & Unprocessed
                  </td>
                  <td className="text-center py-2 px-4 text-[#80011F] text-sm border-2 font-[Righteous] tracking-wider w-fit border-[#80011F]">
                    Highly processed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[url('/images/collection/bgRotiImage.png')] bg-no-repeat bg-cover flex items-center justify-center p-2 py-10">
          <div className="bg-[#80011F]/40 backdrop-blur-md rounded-2xl w-full py-2 px-3 text-white">
            <div className="flex justify-between mb-1">
              <img src={Bulb} className="w-12 h-12" />
              <h2 className="text-[32px] font-[chairdrobe-black] font-extrabold uppercase tracking-wide text-end">
                Did you know?
              </h2>
            </div>
            <div className="flex w-full justify-between items-center gap-1 mb-8 border-y-4 border-white">
              <img
                src={P70KgPerson}
                alt="70kg person"
                className="w-[5.5rem] object-contain"
              />
              <div className="w-full flex flex-col">
                <p className="text-xs font-[Righteous] tracking-wider font-light leading-relaxed">
                  A <span className="font-bold">70 kg</span> adult needs around{" "}
                  <span className="font-bold">56–70g</span> of protein every
                  day.
                </p>
                <div className="space-y-4">
                  <p className="text-xs font-[Righteous] tracking-wider font-light leading-relaxed">
                    To meet that with regular atta, you’d need to eat{" "}
                    <span className="font-bold">16-18 rotis</span> a day!
                  </p>
                  <p className="text-xs font-[Righteous] tracking-wider font-light leading-relaxed">
                    But with our{" "}
                    <span className="font-bold">high-protein atta</span> you
                    only need <span className="font-bold">8-10 rotis</span>.
                  </p>
                  <p className="text-xs font-[Righteous] tracking-wider font-light leading-relaxed ">
                    Half the rotis. Double the strength.
                  </p>
                  <p className="text-xs font-[Righteous] tracking-wider font-light leading-relaxed ">
                    That’s the <span className="underline">power</span> of our
                    protein-packed flour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-screen bg-[#80011F] flex flex-col">
          <div
            className="z-5 max-w-2xl flex flex-col items-start align-top"
            style={{
              backgroundImage: `url(${PageCurveRight})`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "5em",
              backgroundBlendMode: "multiply",
              backgroundOrigin: "content-box",
              backgroundClip: "content-box",
            }}
          >
            <p className="font-[Ultima] font-extrabold text-[48px] leading-14 text-white mt-2 capitalize pl-3">
              Real Food, <br /> Real Results
            </p>
            <p className="text-white mt-4 max-w-xl text-xl font-[Ubuntu] pl-3">
              No gimmicks, no hidden additives—just clean, wholesome grains.
              Instead of relying on expensive health supplements, you can make
              every meal rich in protein, fiber, and essential nutrients. Your
              diet shouldn’t need shortcuts.
            </p>
          </div>

          <div
            className="flex flex-col self-end w-fit max-h-full h-full"
            style={{
              backgroundImage: `url(${PageCurveLeft})`,
              backgroundPosition: "bottom left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "4rem",
              backgroundBlendMode: "multiply",
              backgroundOrigin: "content-box",
              backgroundClip: "content-box",
            }}
          >
            <img
              src={RealFood}
              className="object-contain h-full max-h-[calc(100vh-5rem)] w-auto"
            />
          </div>
        </div>

        <div className="">
          <div className="flex justify-between flex-col md:flex-row align-center py-5 px-5 items-center">
            <p className="font-['Ultima-bold'] md:text-[5rem] text-[54px] leading-normal font-bold text-[#80011F]">
              We come in when it’s about your health!!!
            </p>
            <img src={ABoutYourHealth} />
          </div>
          <div className="bg-[#80011F] flex justify-between md:py-10 md:px-12 p-4">
            <img src={Prd1} alt="prd1" className="rounded-2xl w-24 md:w-auto" />
            <img src={Prd2} alt="Prd2" className="rounded-2xl w-24 md:w-auto" />
            <img src={Prd3} alt="Prd3" className="rounded-2xl w-24 md:w-auto" />
          </div>
        </div>

        <div className="h-[15rem] md:h-[100vh] bg-[url(/images/collection/TastierImg.png)] bg-cover bg-no-repeat"></div>

        <div className="h-fit py-5 px-1" ref={addToCartRef}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onBeforeInit={(swiper: SwiperCore) => {
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {state.products.map((p) => (
              <SwiperSlide key={p.id}>
                <Product
                  p={p}
                  selectedVariants={state.selectedVariants}
                  sessionId={loaderData.sessionId}
                />
              </SwiperSlide>
            ))}
            <div
              ref={prevRef}
              className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer bg-[#80011F] text-white p-2 rounded-full shadow hover:bg-[#80011F]/50 transition"
            >
              <FiChevronLeft size={24} />
            </div>
            <div
              ref={nextRef}
              className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer bg-[#80011F] text-white p-2 rounded-full shadow hover:bg-[#80011F]/50 transition"
            >
              <FiChevronRight size={24} />
            </div>
          </Swiper>
        </div>
        {cartLength !== 0 && (
          <div className="w-fit float-end fixed right-12 bottom-10 z-[100]">
            <CartIconBtn cartLength={cartLength} />
          </div>
        )}
      </div>
    </>
  );
};

export default MobileView;
