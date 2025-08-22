import { ReactElement, createElement, useState, useEffect } from "react";
import { LinkedInEmbed } from "react-social-media-embed";
import { MendixLinkedInEmbedContainerProps } from "../typings/MendixLinkedInEmbedProps";

export function MendixLinkedInEmbed({ width, height, url }: MendixLinkedInEmbedContainerProps): ReactElement {
    const [urlState, setUrlState] = useState<string>((url && url.value) || "");

    useEffect(() => {
        if (url && url.status === "available" && url.value) {
            setUrlState(url.value);
        }
    }, [url]);

    if (!urlState) {
        return <div></div>;
    }

    return <LinkedInEmbed url={urlState} {...(width && { width })} {...(height && { height })} />;
}
