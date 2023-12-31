import React, { useContext, FC } from "react";
import { LanguageContextProps } from './types'; // adjust the path based on where you put your types.ts
import { LanguageContext } from './LanguageContext';

const BtnSetting: FC = () => {
    const { currentLanguage, setCurrentLanguage } = useContext<LanguageContextProps>(LanguageContext);

    const switchLanguage = (): void => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'TH' : 'EN');
    };

    return (
        <button
            className=" flex "
            onClick={switchLanguage}
        >
            {currentLanguage}
            <img className={currentLanguage === 'TH' ? 'sepia-0' : 'sepia'} width={30} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/d6b61f6d-92fb-4830-0dfd-aa3ef41ed900/100'} />
            <img className={currentLanguage === 'EN' ? 'sepia-0' : 'sepia'} width={30} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/b284a787-d18d-42be-6c9d-bc01cfd5d300/100'} />
        </button>
    );
};

export default BtnSetting;