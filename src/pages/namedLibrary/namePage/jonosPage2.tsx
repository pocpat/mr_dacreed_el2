import React from "react";
import { Header } from "~/componentsRoot/Header";
import Input from "~/pages/components/jpComponents/Input";
import { useState } from "react";
import { api } from "~/utils/api";

const jonosPage2 = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#0f172a] p-2">
        <Input />
        <button className="ml-4 rounded-lg bg-[#064e3b] p-2 text-white hover:bg-[#059669]">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default jonosPage2;
