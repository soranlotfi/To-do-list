import {Calendar} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker,{DateObject} from "react-multi-date-picker";
import {useState} from "react";
export default function Example(){
    const [value,setValue]=useState(new DateObject())
    return(
        <div style={{direction:"rtl"}}>
            <Calendar
                inputMode="none"
                value={value}
                onChange={setValue}
                calendar={persian}
                locale={persian_fa}
            />
        </div>
    )
}

