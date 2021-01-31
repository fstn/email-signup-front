import {Namespace, useTranslation, UseTranslationOptions} from "react-i18next";
// noinspection ES6UnusedImports
import i18next from 'i18next';


export const useSafeTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions,
): { t: (key: string) => string } => {
  const {t} = useTranslation(ns, options);
  return {t: (key) => t(key) || ""}
}
