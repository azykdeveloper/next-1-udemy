"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { languages } from "@/constants";
import Image from "next/image";

export function LanguageDropdown() {
  const [lang, setLang] = React.useState("uz");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
          {languages.map(lang => (
            <React.Fragment key={lang.code}>
              <DropdownMenuRadioItem value={lang.code} className="cursor-pointer">
                <Image
                  src={`/img/flags/${lang.code}.png`}
                  alt={lang.label}
                  width={20}
                  height={20}
                  className="mr-2 inline-block"
                />
                {lang.label}
              </DropdownMenuRadioItem>
            </React.Fragment>
          ))}
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
