import React, { createContext, ReactNode, useContext, useState } from "react";

type FormData = {
    [key: string]: any;
};

type FormContextType = {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
};

const FormContext = createContext({} as FormContextType);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({});

    const updateFormData = (data: Partial<FormData>) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};
