import React from "react";
import {useSafeTranslation} from "../hooks/use-safe-translation";

export function LocaleTitle(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.title.html`)}}/>
}

export function LocaleButton(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.button.html`)}}/>
}

export function LocaleHelp(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.help.html`)}}/>
}

export function LocaleContent(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.content.html`)}}/>
}

export function LocaleLabel(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.label.html`)}}/>
}

export function LocaleSuffix(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span style={{fontSize: 8, marginRight: "0.5em"}}>{t(`${props?.tkey}.suffix`)}</span>
}

export function LocalePlaceHolder(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return t(`${props?.tkey}.placeholder`)
}

export function LocaleStep(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.step.html`)}}/>
}

export function LocaleBreadcrumb(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.breadcrumb.html`)}}/>
}

export function CheckBox(props: { tkey: string }) {
    const {t} = useSafeTranslation()
    return <span dangerouslySetInnerHTML={{__html: t(`${props?.tkey}.label.checkbox.html`)}}/>
}

