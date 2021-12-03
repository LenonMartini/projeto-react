import React, { useState, useEffect } from "react";
import { 
    CButton, 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol, 
    CRow,
    CDataTable, 
    CButtonGroup
} from '@coreui/react';
import CIcon from "@coreui/icons-react";

import useApi from '../../../services/api';





export default ({ id }) => {
    const api = useApi();
    const [loading, setLoading] = useState(true);

   
    alert(id);
    


    return (
       
        <CRow>
            <CCol>
                <h2>Editar Empresa</h2>
                <hr/>

              

            
            </CCol>
        </CRow>
    );
}