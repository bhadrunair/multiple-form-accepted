export type formDataType = {

    uname: string,
    pass: string,
    cpass: string,
    name: string,
    mobile: string,
    email: string,
    addr: string,
    city: string,
    stat: string

};

export type formSetUp = {
    formData: formDataType,
    setFormData: (value: formDataType) => void;
};