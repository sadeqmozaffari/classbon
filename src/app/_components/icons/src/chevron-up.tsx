"use client"
import BaseIcon from "@/app/_components/icons/base-icon";
import { IconSVG } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:IconSVG) {
  return (
    <BaseIcon {...props}>
      <path d="M21 16.5L11.989 7.5L3 16.5"/>
    </BaseIcon>
  );
}