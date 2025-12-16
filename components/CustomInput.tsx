"use client"
import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { athFormSchema } from "@/lib/utils";
import { z } from "zod";
import { Input } from "./ui/input";
const formSchema = athFormSchema("sign-up");
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}
const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex flex-col w-full">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class p-1"
                  type={name === "password" ? "password" : "text"}
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-4" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;
