import React, {FC, useCallback, useState} from 'react';

interface IProps {
    src: string;
    alt: string
    fallbackSrc?: string
}

const Image: FC<IProps> = (props: IProps) => {
    const {src, alt, fallbackSrc} = props;
    const [failed, setFailed] = useState<boolean>(false);

    const fallback = useCallback(() => setFailed(true), []);

    return (
        <>
            {!failed && <img src={src} onError={fallback} alt={alt}/>}
            {failed && <img src={fallbackSrc} alt={alt}/>}
        </>
    )
};

export default Image;
