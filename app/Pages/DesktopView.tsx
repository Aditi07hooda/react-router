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

interface DesktopViewProps {
  loaderData: {
    products: ProductItem[];
    selectedVariants: Record<string, Variant>;
    cartLength: number;
    sessionId: string;
  };
}
const DesktopView: React.FC<DesktopViewProps> = ({ loaderData }) => {
  const addToCartRef = useRef<HTMLDivElement | null>(null);

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
    <div className="h-full bg-[#FFFBEF] pt-8">
      <div className="flex justify-between">
        <div className="md:h-[100vh] md:border-r-2 border-[#80011F] px-14 gap-5 flex md:flex-col">
          <FaBars className="w-10 h-fit text-[#80011F]" />
          <FaSearch className="w-10 h-fit text-[#80011F]" />
        </div>
        <div className="flex flex-col mx-5">
          <div className="flex self-end my-3">
            <button
              onClick={handleAddToCart}
              className="flex cursor-pointer justify-between gap-2 align-middle items-center py-2 px-4 bg-[#80011F] text-white rounded-2xl shadow-2xl font-[NovaRound] font-[400] font-xl tracking-tight"
            >
              <img src={AddShoppingCart} className="h-10" />
              Add to Cart
            </button>
          </div>
          <div className="flex items-end">
            <p className="font-[chairdrobe-black] z-0 flex flex-wrap font-[900] text-[140px] uppercase text-[#80011F] leading-[1] tracking-wide">
              A Legacy of Strength
            </p>
            <p className="font-[AcherusFeral] z-10 font-[300] text-lg text-[#80011F] leading-[1] tracking-tight flex flex-wrap">
              Strength isn’t a one-day effort—it’s built through generations of
              mindful choices.
              <br /> Our millet-based atta delivers clean, sustainable nutrition
              that fuels your body today and protects your health tomorrow.
            </p>
          </div>
          <p className="font-[UltimaAlt] font-[600] text-lg uppercase tracking-tight flex flex-wrap">
            Your food shapes your family's future.
          </p>
          <img src={firstImage} className="flex self-end w-5xl h-full" />
        </div>
      </div>

      <p className="uppercase font-[900] border-y-8 border-[#80011F] text-[#80011F] flex justify-center items-center font-[chairdrobe-black] text-[128px] leading-32 tracking-wide">
        Strength for generations
      </p>
      <div className="h-[90.2vh] flex justify-between">
        <div className="bg-[#80011F] w-1/2 flex flex-col ">
          <p className="font-[ultimaAlt] w-[70%] overflow-visible font-medium text-3xl self-center tracking-tight text-white">
            What if your everyday flour is holding you back?
          </p>
          <div className="flex items-end">
            <img src={Child} className="w-full" />
          </div>
        </div>
        <div className="w-1/2 p-4 px-8 flex flex-col justify-around">
          <div className="flex flex-col gap-3">
            <p className="font-[chairdrobe-black] font-black leading-24 uppercase text-[115px] text-[#80011F]">
              The Hidden Health Crisis
            </p>
            <p className="font-[Ubuntu] font-normal text-lg/6 tracking-tight">
              Millions of families unknowingly consume refined flours that spike
              blood sugar, weaken digestion, and leave them sluggish. The grain
              you choose impacts your energy, longevity, and well-being. Are you
              settling for less?
            </p>
          </div>
          <div className="flex justify-between gap-10 align-middle items-center">
            <p className="font-[Ubuntu] font-normal tracking-wide text-xl w-[40%] text-[#80011F]">
              Your daily flour might be silently working against you - causing
              fatigue, sugar spikes, and poor digestion.
            </p>
            <div className="flex flex-col gap-3 w-fit">
              <img src={HealthCrisis} className="h-84 w-fit self-center"/>
              <p className="font-[Ubuntu] font-normal text-lg/6 tracking-tight">
                It’s time for a smarter choice, one that keeps you strong and
                energized without compromise
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] bg-[#80011F]/50 flex flex-col px-10">
        <img
          src={PageCurveRight}
          className="absolute top-0 right-0 h-[20rem]"
        />

        {/* Text Content */}
        <div className="z-5 max-w-2xl flex flex-col items-start align-top pt-2">
          <p className="font-[chairdrobe-black] text-white text-[96px] font-extrabold capitalize">
            DID YOU KNOW?
          </p>
          <p className="font-[Ultima] text-[60px] leading-[64px] text-white mt-2 ">
            More protein <br /> fewer worries
          </p>
          <p className="text-white mt-4 max-w-lg font-[Ubuntu]">
            Protein is the foundation of strength—yet typical flours lack it.
            With 20g of protein per 100g, your everyday meals can now fuel
            better metabolism, muscle health, and sustained energy. No
            artificial additives, no supplements—just nature at its best.
          </p>
        </div>

        {/* Cards */}
        <div className="z-10 flex flex-col space-y-6 self-end md:mr-60 -mt-5">
          <p className="text-white font-ultima-bold font-bold text-3xl flex self-center">
            Think before choosing!!!
          </p>
          <div className="flex flex-row gap-10 mt-4">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-64">
              <img
                src={ProductProteinPowerAtta}
                alt="Protein Power Atta"
                className="h-40 object-contain mb-4"
              />
              <h2 className="font-bold text-xl font-[Poetsen+One] text-[#80011F]">
                Protein Power Atta
              </h2>
              <p className="mt-2 text-[#80011F]">20g protein per 100g</p>
              <p className="mt-1 text-[#80011F] font-semibold border-y-2 w-full flex justify-center py-2">
                Diabetic friendly
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-64">
              <img
                src={ProductChakkiFreshAtta}
                alt="Regular Atta"
                className="h-40 object-contain mb-4"
              />
              <h2 className="font-bold text-xl font-['Poetsen One'] text-[#80011F]">
                Regular Atta
              </h2>
              <p className="mt-2 text-[#80011F]">10g protein per 100g</p>
              <p className="mt-1 text-[#80011F] font-semibold border-y-2 w-full flex justify-center py-2">
                Not diabetic friendly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[20rem] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#80011F]/50"></div>
        <img
          src={PageCurveLeft}
          className="absolute bottom-0 left-0 h-full object-cover"
        />
      </div>

      <div className="h-fit my-16 space-y-6">
        <div className="">
          <p className="font-[Russo+One] font-extrabold text-4xl flex justify-center text-[#80011F]">
            Health Without Sacrifice
          </p>
          <p className="font-[Righteous] font-medium leading-loose text-3xl flex justify-center text-[#80011F]">
            A better choice, backed by science.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full overflow-x-auto mx-20">
            <table className="w-full mt-6 border-collapse border-4 border-[#80011F]">
              <thead>
                <tr>
                  <th className="text-center py-3 px-6 text-[#80011F] font-semibold text-2xl border-4 font-[Righteous] tracking-wider border-[#80011F]">
                    Feature
                  </th>
                  <th className="text-center py-3 px-6 text-[#80011F] font-semibold text-2xl border-4 font-[Righteous] tracking-wider border-[#80011F]">
                    Protein Power Atta
                  </th>
                  <th className="text-center py-3 px-6 text-[#80011F] font-semibold text-2xl border-4 font-[Righteous] tracking-wider border-[#80011F]">
                    Regular Atta
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Protein Content
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    20/100g
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    10/100g
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    GI Level
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Low
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    High
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Dietary Fiber
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    High
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Low
                  </td>
                </tr>
                <tr>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Processing level
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Natural & Unprocessed
                  </td>
                  <td className="text-center py-3 px-6 text-[#80011F] text-xl border-3 font-[Righteous] tracking-wider border-[#80011F]">
                    Highly processed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="h-[100vh] bg-[url('/images/collection/bgRotiImage.png')] bg-no-repeat bg-cover flex items-center justify-center p-4">
        <div className="bg-[#80011F]/40 backdrop-blur-md rounded-2xl w-full max-w-[calc(100%-450px)] py-10 px-6 text-white">
          <div className="flex justify-between mb-6">
            <img src={Bulb} className="w-24 h-24" />
            <h2 className="text-4xl font-[chairdrobe-black] font-extrabold uppercase tracking-wide text-end text-[96px]">
              Did you know?
            </h2>
          </div>
          <div className="flex w-full justify-between items-center mb-8 border-y-4 border-white">
            <img
              src={P70KgPerson}
              alt="70kg person"
              className="w-[23rem] h-[23rem] object-contain"
            />
            <div className="w-full flex flex-col">
              <p className="text-2xl font-[Righteous] tracking-wider font-light leading-relaxed">
                A <span className="font-bold">70 kg</span> adult needs around{" "}
                <span className="font-bold">56–70g</span> of protein every day.
              </p>
              <div className="space-y-4">
                <p className="text-2xl font-[Righteous] tracking-wider font-light leading-relaxed">
                  To meet that with regular atta, you’d need to eat{" "}
                  <span className="font-bold">16-18 rotis</span> a day!
                </p>
                <p className="text-2xl font-[Righteous] tracking-wider font-light leading-relaxed">
                  But with our{" "}
                  <span className="font-bold">high-protein atta</span> you only
                  need <span className="font-bold">8-10 rotis</span>.
                </p>
                <p className="text-2xl font-[Righteous] tracking-wider font-light leading-relaxed ">
                  Half the rotis. Double the strength.
                </p>
                <p className="text-2xl font-[Righteous] tracking-wider font-light leading-relaxed ">
                  That’s the <span className="underline">power</span> of our
                  protein-packed flour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-h-[calc(100%-20rem)] h-fit bg-[#80011F] flex flex-col px-10">
        <img
          src={PageCurveRight}
          className="absolute top-0 right-0 h-[20rem]"
        />

        <div className="z-5 max-w-2xl flex flex-col items-start align-top pt-2">
          <p className="font-[Ultima] font-extrabold text-[5rem] leading-24 text-white mt-2 capitalize">
            Real Food, <br /> Real Results
          </p>
          <p className="text-white mt-4 max-w-xl text-2xl font-[Ubuntu]">
            No gimmicks, no hidden additives—just clean, wholesome grains.
            Instead of relying on expensive health supplements, you can make
            every meal rich in protein, fiber, and essential nutrients. Your
            diet shouldn’t need shortcuts.
          </p>
        </div>

        <div className="z-10 flex flex-col self-end -mt-28 w-fit mr-30">
          <img src={RealFood} className="h-[40rem] rotate-2 w-full" />
        </div>
      </div>
      <div className="relative h-[20rem] w-full overflow-hidden -mt-80">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#80011F]"></div>
        <img
          src={PageCurveLeft}
          className="absolute bottom-0 left-0 h-full object-cover"
        />
        {/* Your Text or Content here */}
      </div>

      <div className="">
        <div className="flex justify-between flex-col md:flex-row align-center py-5 px-5 items-center">
          <p className="font-['Ultima-bold'] md:text-[5rem] text-6xl leading-normal font-bold text-[#80011F]">
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

      <div className="h-[100vh] bg-[url(/images/collection/TastierImg.png)] bg-cover bg-no-repeat"></div>

      <div
        className="h-fit flex justify-evenly md:py-20 md:px-12"
        ref={addToCartRef}
      >
        {state.products.map((p) => (
          <div key={p.id}>
            <Product
              p={p}
              selectedVariants={state.selectedVariants}
              sessionId={loaderData.sessionId}
            />
          </div>
        ))}
      </div>
      {cartLength !== 0 && (
        <div className="w-fit float-end fixed right-12 bottom-10">
          <CartIconBtn cartLength={cartLength} />
        </div>
      )}
    </div>
  );
};

export default DesktopView;
