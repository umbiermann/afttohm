import * as currencies from "@dinero.js/currencies";
import { dinero, toSnapshot } from "dinero.js";
import type { NextPage } from "next";
import { intlFormat } from "../utils/intlFormat";

const money = dinero({ amount: 100000000, currency: currencies["GBP"] });

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">{intlFormat(money, "en-GB")}</h1>
    </div>
  );
};

export default Home;
