import React, {useContext, useEffect} from 'react';
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/message.hook";

export const AddCourseBtn = ({course}) => {

    const {request, error, clearError} = useHttp();
    const {token} = useContext(AuthContext);
    const message = useMessage();
    /**/

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);

    const fetchAddCourse = async ()  => {
        try {
            const data = await request(`/card/add`, 'POST', {id: course}, {
                Authorization: `Bearer ${token}`
            });
            message(data.message);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <input
                type="hidden"
                name="id"
                value={course}
            />
            <button type="submit" className="btn btn-primary" onClick={fetchAddCourse}>Купить</button>
        </div>
    );
}







